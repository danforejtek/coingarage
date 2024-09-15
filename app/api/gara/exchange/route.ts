import { NextRequest, NextResponse } from "next/server"
import { privateKeyToAccount } from "viem/accounts"
import { createPublicClient, createWalletClient, http } from "viem"
import { polygon } from "viem/chains"
import { parseUnits } from "viem/utils"
import { HexAddress } from "@/types"
import { getChainByName, validateTransaction } from "@/lib/api/utils"
import { usdcToGara } from "@/lib/api/utils"

export const maxDuration = 300
export const dynamic = "force-dynamic"

// Infura API key and URL
const privateKey = process.env.INFURA_API_KEY
const infuraUrl = process.env.INFURA_URL

// GARA token contract address and ABI
const garaTokenContractAddress = (process.env.NEXT_PUBLIC_GARA_CONTRACT_ADDRESS || "") as HexAddress
const garaAbi = [
  {
    type: "function",
    name: "transfer",
    inputs: [
      { name: "to", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    outputs: [{ name: "", type: "bool" }],
  },
]

const allowedChains = ["Polygon", "Ethereum", "BNB Smart Chain"] // Add more chains if needed

export async function POST(req: NextRequest) {
  try {
    // amount in USDC
    const { txHash, from, to, amount, chain } = await req.json()

    if (!allowedChains.includes(chain)) {
      return NextResponse.json({ success: false, message: "Invalid chain" }, { status: 400 })
    }
    // Validate the transaction
    const validation = await validateTransaction({
      chain,
      txHash,
      from,
      to,
      amount,
    })

    if (!validation.success) {
      return NextResponse.json({ success: false, message: validation.message }, { status: 400 })
    }

    // Convert the amount to GARA by fixed rate
    let amountInGara = usdcToGara(amount)

    // security measure for test, if amount is greater than 1, set to 1
    if (amount > 1) amountInGara = 1

    // naming convention cahnge due to form on FE is customer -> coingarage
    // change from -> to logic
    const garaTo = from
    // const garaFrom = garaTokenContractAddress

    // Convert the amount to Wei (e.g. 6 decimal places for GARA token)
    const amountInWei = parseUnits(amountInGara.toString(), 6)

    // Create a wallet client for transactions
    const account = privateKeyToAccount(("0x" + privateKey) as HexAddress)

    const walletClient = createWalletClient({
      account,
      chain: polygon,
      transport: http(infuraUrl),
    })

    // Writing to a contract using writeContract
    const garaTxHash = await walletClient.writeContract({
      account,
      address: garaTokenContractAddress,
      abi: garaAbi,
      functionName: "transfer",
      args: [garaTo, amountInWei],
      chain: polygon,
    })
    console.log("Transaction hash:", garaTxHash)

    // Wait for the transaction to be mined (optional)
    const publicClient = createPublicClient({ chain: polygon, transport: http() })
    const receipt = await publicClient.waitForTransactionReceipt({ hash: garaTxHash })
    console.log("Transaction confirmed:", receipt)

    return NextResponse.json({ success: true, txHash: garaTxHash, status: receipt.status })
  } catch (error) {
    console.error("Error sending GARA token:", error)
    return NextResponse.json({ success: false, message: error?.message }, { status: 500 })
  }
}
