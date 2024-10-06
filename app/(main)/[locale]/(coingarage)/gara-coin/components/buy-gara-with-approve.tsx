import {
  isAddress,
  parseEther,
  parseUnits,
  createPublicClient,
  createWalletClient,
  http,
  encodeFunctionData,
  getAddress,
  parseAbi,
  Chain,
} from "viem"
import { BigNumberish, HexAddress, SupportedChains, SupportedTokens } from "@/types"
import { contractAddresses } from "@/app/(main)/[locale]/(coingarage)/gara-coin/lib/utils"
import { getRpcNode } from "@/app/api/gara/lib/utils"
import { writeClientTransactionLog } from "@/app/(main)/[locale]/(coingarage)/gara-coin/lib/actions"

type Address = `0x${string}`

const approveAbi = parseAbi(["function approve(address spender, uint256 amount) external returns (bool)"])
const transferFromAbi = parseAbi([
  "function transferFrom(address from, address to, uint256 amount) external returns (bool)",
])

type SendPaymentProps = {
  token: SupportedTokens
  chain: Chain
  senderAddress: Address
  recipientAddress: Address
  amount: BigNumberish
  walletClient: ReturnType<typeof createWalletClient>
  setTransactionStatus: (status: { process: string; status: string }) => void
  setOutcomingTransaction: (transaction: { txHash?: HexAddress; done?: boolean; receipt?: any; error?: any }) => void
  setIncomingTransaction: (transaction: { txHash?: HexAddress; done?: boolean; receipt?: any; error?: any }) => void
  resetState: () => void
}

type SendPaymentResponse = {
  txHash: HexAddress
  receipt: object
}

// Helper function for retrying with a delay
const retryWithDelay = async (fn: () => Promise<any>, retries: number, delay: number) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn()
    } catch (error) {
      if (i < retries - 1) {
        console.log(`Retry ${i + 1}/${retries} failed, retrying in ${delay / 1000} seconds...`)
        await new Promise((resolve) => setTimeout(resolve, delay))
      } else {
        throw error // If all retries fail, throw the error
      }
    }
  }
}

export const sendPaymentWithApprove = async ({
  token,
  chain,
  senderAddress,
  recipientAddress,
  amount,
  walletClient,
  setTransactionStatus,
  setOutcomingTransaction,
  setIncomingTransaction,
  resetState,
}: SendPaymentProps): Promise<SendPaymentResponse | undefined> => {
  try {
    if (!token || !chain || !senderAddress || !recipientAddress || !amount || !walletClient) return

    let receipt: any

    const client = createPublicClient({
      chain: chain,
      transport: getRpcNode(chain?.name),
    })

    const chainName = chain?.name as SupportedChains
    // Converts amount to 6 decimals for Polygon and Ethereum, and 18 decimals for BNB Smart Chain
    const amountInWei =
      chainName !== "BNB Smart Chain" ? parseUnits(amount.toString(), 6) : parseUnits(amount.toString(), 18)

    await writeClientTransactionLog({
      account_address: senderAddress,
      chain: chainName,
      token: token,
      log: {
        message: "Transaction initiated",
        amount: amount,
      },
    })

    setTransactionStatus({ process: "sendPayment", status: "writingApproval" })

    // First, approve the recipient to spend the specified amount
    const approvalHash = await walletClient.writeContract({
      address: contractAddresses[token][chainName] as HexAddress,
      abi: approveAbi,
      functionName: "approve",
      args: [recipientAddress, amountInWei],
      account: senderAddress,
      chain: chain,
    })

    await writeClientTransactionLog({
      account_address: senderAddress,
      transaction_tx_hash: approvalHash,
      chain: chainName,
      token: token,
      log: {
        message: "Approval transaction created",
        amount: amount,
      },
    })
    console.log("Approval sent:", approvalHash)
    // setTransactionStatus({ process: "sendPayment", status: "approvalCreated" })
    // setOutcomingTransaction({ txHash: approvalHash })

    // Wait for approval transaction receipt
    try {
      receipt = await retryWithDelay(() => client.waitForTransactionReceipt({ hash: approvalHash }), 3, 5000) // 3 retries, 5 seconds delay
    } catch (error) {
      console.error("Error waiting for approval transaction receipt:", error)
      setTransactionStatus({
        process: "sendPayment",
        status: "approvalReceiptError",
      })
      await writeClientTransactionLog({
        account_address: senderAddress,
        transaction_tx_hash: approvalHash,
        chain: chainName,
        token: token,
        log: {
          message: "Error waiting for approval receipt",
          metadata: {
            // @ts-ignore
            error: error?.message,
          },
        },
      })
      throw error
    }

    setTransactionStatus({
      process: "sendPayment",
      status: "approvalReceived",
    })
    setOutcomingTransaction({ receipt, done: true })
    console.log("Approval confirmed:", receipt)

    // Now, call transferFrom to move the tokens
    setTransactionStatus({ process: "sendPayment", status: "writingTransfer" })

    const transferHash = await walletClient.writeContract({
      address: contractAddresses[token][chainName] as HexAddress,
      abi: transferFromAbi,
      functionName: "transferFrom",
      args: [senderAddress, recipientAddress, amountInWei],
      account: senderAddress,
      chain: chain,
    })

    await writeClientTransactionLog({
      account_address: senderAddress,
      transaction_tx_hash: transferHash,
      chain: chainName,
      token: token,
      log: {
        message: "TransferFrom transaction created",
        amount: amount,
      },
    })
    console.log("TransferFrom sent:", transferHash)
    setTransactionStatus({ process: "sendPayment", status: "transferCreated" })
    setOutcomingTransaction({ txHash: transferHash })

    setTransactionStatus({
      process: "sendPayment",
      status: "waitingForReceipt",
    })

    // Wait for transferFrom transaction receipt
    try {
      receipt = await retryWithDelay(() => client.waitForTransactionReceipt({ hash: transferHash }), 3, 5000) // 3 retries, 5 seconds delay
    } catch (error) {
      console.error("Error waiting for transferFrom receipt:", error)
      setTransactionStatus({
        process: "sendPayment",
        status: "transferReceiptError",
      })
      await writeClientTransactionLog({
        account_address: senderAddress,
        transaction_tx_hash: transferHash,
        chain: chainName,
        token: token,
        log: {
          message: "Error waiting for transfer receipt",
          metadata: {
            // @ts-ignore
            error: error?.message,
          },
        },
      })
      throw error
    }

    setTransactionStatus({ process: "sendPayment", status: "receiptReceived" })
    setOutcomingTransaction({ receipt, done: true })
    console.log("Transfer confirmed:", receipt)

    return {
      txHash: transferHash,
      receipt,
    }
  } catch (error) {
    setTransactionStatus({
      process: "sendPayment",
      status: "transactionError",
    })
    setOutcomingTransaction({ error, done: true })
    setIncomingTransaction({ error, done: true })
    console.error("Error sending ", token, ":", error)
  }
}
