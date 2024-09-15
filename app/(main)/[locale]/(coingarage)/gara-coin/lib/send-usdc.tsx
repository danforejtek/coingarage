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
} from "viem"
// @ts-ignore
import { useAccount, useBalance, useWalletClient } from "wagmi"
// @ts-ignore
import { BigNumberish, HexAddress } from "@/types"
import { getUsdcOnChain } from "@/app/(main)/[locale]/(coingarage)/gara-coin/lib/utils"

type Address = `0x${string}`

const USDC_ABI = parseAbi([
  "function transfer(address to, uint256 value) external returns (bool)",
  // "function balanceOf(address account) public view returns (uint256)",
])

type SendUSDCProps = {
  chain: any
  senderAddress: Address
  recipientAddress: Address
  amount: BigNumberish
  walletClient: ReturnType<typeof createWalletClient>
  setTransactionStatus: (status: { process: string; status: string }) => void
  setOutcomingTransaction: (transaction: { txHash?: HexAddress; done?: boolean; receipt?: any; error?: any }) => void
  setIncomingTransaction: (transaction: { txHash?: HexAddress; done?: boolean; receipt?: any; error?: any }) => void
  resetState: () => void
}

type SendUSDCResponse = {
  txHash: HexAddress
  receipt: object
}

// Function to send USDC using viem
export const sendUsdc = async ({
  chain,
  senderAddress,
  recipientAddress,
  amount,
  walletClient,
  setTransactionStatus,
  setOutcomingTransaction,
  setIncomingTransaction,
  resetState,
}: SendUSDCProps): Promise<SendUSDCResponse | undefined> => {
  try {
    const checksummedRecipientAddress = getAddress(recipientAddress)
    // Initialize the public client for interacting with the Polygon network

    const client = createPublicClient({
      chain: chain,
      transport: http(),
    })

    // Convert the amount to the correct decimal (USDC has 6 decimals)
    const amountInWei =
      chain?.name !== "BNB Smart Chain" ? parseUnits(amount.toString(), 6) : parseUnits(amount.toString(), 18) // Converts amount to 6 decimals

    setTransactionStatus({ process: "sendPayment", status: "writingContract" })
    const hash = await walletClient.writeContract({
      address: getUsdcOnChain(chain.name), // USDC contract address
      abi: USDC_ABI,
      functionName: "transfer",
      args: [checksummedRecipientAddress, amountInWei],
      account: senderAddress,
      chain: chain,
    })
    console.log("Transaction sent:", hash)
    setTransactionStatus({ process: "sendPayment", status: "contractCreated" })
    setOutcomingTransaction({ txHash: hash })

    // Wait for the transaction to be mined (optional)
    setTransactionStatus({ process: "sendPayment", status: "waitingForReceipt" })
    const receipt = await client.waitForTransactionReceipt({ hash })
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
    console.error("Error sending USDC:", error)
  }
}
