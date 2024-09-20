import { polygon, mainnet, bsc, type Chain } from "viem/chains"
import { BigNumberish, HexAddress } from "@/types"
import { createPublicClient, decodeFunctionData, http, parseUnits } from "viem"
import { sendMail } from "@/lib/mailer"

export const usdcToGara = (usdc: number) => usdc / 0.15 // 1 USDC = 0.15 GARA

export const getChainByName = (chain: string): Chain => {
  switch (chain) {
    case "Polygon":
      return polygon
    case "Ethereum":
      return mainnet
    case "BNB Smart Chain":
      return bsc
    default:
      return polygon
  }
}

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

const ethereumRpcUrl = process.env.ETHEREUM_RPC_URL || "https://ethereum-rpc.publicnode.com"
const polygonRpcUrl = process.env.POLYGON_RPC_URL || "https://polygon-bor-rpc.publicnode.com"

const getRpcNode = (chain: string) => {
  switch (chain) {
    case "Ethereum":
      return http(ethereumRpcUrl)
    case "Polygon":
      return http(polygonRpcUrl)
    default:
      return http()
  }
}

export async function validateTransaction({
  chain,
  txHash,
  from,
  to,
  amount,
}: {
  chain: string
  txHash: HexAddress
  from: HexAddress
  to: HexAddress
  amount: string
}) {
  try {
    if (!validateTransactionHash(txHash)) {
      throw new Error("Invalid transaction hash")
    }
    const _chain = getChainByName(chain)
    const transport = getRpcNode(chain)
    const publicClient = createPublicClient({ chain: _chain, transport: transport })
    const receipt = await publicClient.getTransactionReceipt({ hash: txHash })
    const transaction = await publicClient.getTransaction({ hash: txHash })

    const decoded = decodeFunctionData({
      abi: erc20Abi,
      data: transaction.input,
    })
    const functionTo = (decoded?.args?.[0] || "") as HexAddress
    const functionValue = (decoded?.args?.[1] || "") as BigNumberish

    const amountInWei =
      chain !== "BNB Smart Chain" ? parseUnits(amount.toString(), 6) : parseUnits(amount.toString(), 18)

    if (receipt.status !== "success") {
      throw new Error("Invalid transaction status")
    }
    if (toLowerCase(transaction.from) !== toLowerCase(from)) {
      throw new Error("Invalid sender address")
    }
    if (toLowerCase(functionTo) !== toLowerCase(to)) {
      throw new Error("Invalid recipient address")
    }
    if (functionValue !== amountInWei) {
      throw new Error("Invalid amount")
    }
    return { success: true }
  } catch (error) {
    await sendMail({
      recipients: ["d.forejtek@gmail.com", "office@coingarage.io"],
      subject: `GARA Coin - Error in transaction validation`,
      content: JSON.stringify({ inputData: { chain, txHash, from, to, amount }, error }, undefined, 2),
    })
    console.error("Error:", error)
    return { success: false, message: error?.message || "Unknown error" }
  }
}
