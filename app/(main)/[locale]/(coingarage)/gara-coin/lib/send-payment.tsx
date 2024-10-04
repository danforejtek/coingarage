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
// @ts-ignore
import { useAccount, useBalance, useWalletClient } from "wagmi"
// @ts-ignore
import { BigNumberish, HexAddress, SupportedChains, SupportedTokens } from "@/types"
import { contractAddresses } from "@/app/(main)/[locale]/(coingarage)/gara-coin/lib/utils"
import { getRpcNode } from "@/app/api/gara/lib/utils"
import { writeClientTransactionLog } from "@/app/(main)/[locale]/(coingarage)/gara-coin/lib/actions"

type Address = `0x${string}`

const AbiFunction = parseAbi([
  "function transfer(address to, uint256 value) external returns (bool)",
  // "function balanceOf(address account) public view returns (uint256)",
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

export const sendPayment = async ({
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
    const checksummedRecipientAddress = getAddress(recipientAddress)
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

    console.log({ chain, address: contractAddresses[token][chainName] })

    setTransactionStatus({ process: "sendPayment", status: "writingContract" })

    // Write contract
    const hash = await walletClient.writeContract({
      address: contractAddresses[token][chainName] as HexAddress,
      abi: AbiFunction,
      functionName: "transfer",
      args: [checksummedRecipientAddress, amountInWei],
      account: senderAddress,
      chain: chain,
    })

    await writeClientTransactionLog({
      account_address: senderAddress,
      transaction_tx_hash: hash,
      chain: chainName,
      token: token,
      log: {
        message: "Transaction created",
        amount: amount,
      },
    })
    console.log("Transaction sent:", hash)
    setTransactionStatus({ process: "sendPayment", status: "contractCreated" })
    setOutcomingTransaction({ txHash: hash })

    setTransactionStatus({ process: "sendPayment", status: "waitingForReceipt" })

    // Wait for transaction receipt with retry mechanism
    try {
      receipt = await retryWithDelay(() => client.waitForTransactionReceipt({ hash }), 3, 5000) // 3 retries, 5 seconds delay
    } catch (error) {
      console.error("Error waiting for transaction receipt after retries:", error)
      setTransactionStatus({ process: "sendPayment", status: "receiptError" })
      await writeClientTransactionLog({
        account_address: senderAddress,
        transaction_tx_hash: hash,
        chain: chainName,
        token: token,
        log: {
          message: "Error waiting for transaction receipt",
          metadata: {
            // @ts-ignore
            error: error?.message,
          },
        },
      })
      throw error // Re-throw the error to handle it in the outer catch block
    }

    setTransactionStatus({ process: "sendPayment", status: "receiptReceived" })
    setOutcomingTransaction({ receipt, done: true })
    console.log("Transaction confirmed:", receipt)

    return {
      txHash: hash,
      receipt,
    }
  } catch (error) {
    setTransactionStatus({ process: "sendPayment", status: "transactionError" })
    setOutcomingTransaction({ error, done: true })
    setIncomingTransaction({ error, done: true })
    console.error("Error sending ", token, ":", error)
  }
}
