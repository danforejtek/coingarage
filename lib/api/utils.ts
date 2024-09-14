import { BigNumberish, HexAddress } from "@/types"
import { createPublicClient, decodeFunctionData, http, parseUnits } from "viem"
import { polygon } from "viem/chains"

export const usdcToGara = (usdc: number) => usdc / 0.15 // 1 USDC = 0.15 GARA

// The ABI of the ERC-20 contract (relevant parts for the `transfer` function)
const erc20Abi = [
  {
    type: "function",
    name: "transfer",
    inputs: [
      { name: "to", type: "address" },
      { name: "value", type: "uint256" },
    ],
    outputs: [{ name: "", type: "bool" }],
  },
]

export function validateTransactionHash(txHash: string) {
  return /^(0x)?[0-9a-fA-F]{64}$/.test(txHash)
}

function toLowerCase(address: string) {
  if (!address || typeof address !== "string") return ""
  return address.toLowerCase()
}

export async function validateTransaction({
  txHash,
  from,
  to,
  amount,
}: {
  txHash: HexAddress
  from: HexAddress
  to: HexAddress
  amount: string
}) {
  try {
    if (!validateTransactionHash(txHash)) {
      throw new Error("Invalid transaction hash")
    }
    const publicClient = createPublicClient({ chain: polygon, transport: http() })
    const receipt = await publicClient.getTransactionReceipt({ hash: txHash })
    const transaction = await publicClient.getTransaction({ hash: txHash })
    const decoded = decodeFunctionData({
      abi: erc20Abi,
      data: transaction.input,
    })
    const functionTo = (decoded?.args?.[0] || "") as HexAddress
    const functionValue = (decoded?.args?.[1] || "") as BigNumberish

    if (receipt.status !== "success") {
      throw new Error("Invalid transaction status")
    }
    if (toLowerCase(transaction.from) !== toLowerCase(from)) {
      throw new Error("Invalid sender address")
    }
    if (toLowerCase(functionTo) !== toLowerCase(to)) {
      throw new Error("Invalid recipient address")
    }
    if (functionValue !== parseUnits(amount.toString(), 6)) {
      throw new Error("Invalid amount")
    }
    return { success: true }
  } catch (error) {
    console.error("Error:", error)
    return { success: false, message: error?.message }
  }
}
