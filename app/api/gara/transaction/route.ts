import { getChainByName } from "@/lib/api/utils"
import { BigNumberish, HexAddress } from "@/types"
import { NextRequest, NextResponse } from "next/server"
import { createPublicClient, http, decodeFunctionData } from "viem"
import { privateKeyToAccount } from "viem/accounts"
import { polygon } from "viem/chains"

// Infura API key and URL
// const privateKey = process.env.INFURA_API_KEY
// const infuraUrl = process.env.INFURA_URL

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

export async function POST(req: NextRequest) {
  try {
    const { txHash, chain } = await req.json()

    // validate txHash is valid
    if (!/^(0x)?[0-9a-fA-F]{64}$/.test(txHash)) {
      return NextResponse.json({ success: false, message: "Invalid transaction hash" }, { status: 400 })
    }

    const _chain = getChainByName(chain)
    console.log({ chain: JSON.stringify(_chain) })
    const publicClient = createPublicClient({ chain: _chain, transport: http() })
    const receipt = await publicClient.getTransactionReceipt({ hash: txHash })
    const transaction = await publicClient.getTransaction({ hash: txHash })
    const decoded = decodeFunctionData({
      abi: erc20Abi,
      data: transaction.input,
    })
    const functionTo = (decoded?.args?.[0] || "") as HexAddress
    const functionValue = (decoded?.args?.[1] || "") as BigNumberish

    return NextResponse.json({
      success: true,
      transactionHash: txHash,
      from: functionTo,
      to: functionValue,
      status: receipt.status,
    })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ success: false, message: error?.message }, { status: 500 })
  }
}
