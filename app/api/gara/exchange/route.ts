import { NextRequest, NextResponse } from "next/server"
import { privateKeyToAccount } from "viem/accounts"
import { createPublicClient, createWalletClient, http } from "viem"
import { polygon } from "viem/chains"
import { parseUnits } from "viem/utils"
import { HexAddress } from "@/types"
import { validateTransaction } from "@/lib/api/utils"
import { usdcToGara } from "@/lib/api/utils"

// Infura API key and URL
const privateKey = process.env.NEXT_PUBLIC_INFURA_API_KEY
const infuraUrl = process.env.NEXT_PUBLIC_INFURA_URL

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

export async function POST(req: NextRequest) {
  try {
    // amount in USDC
    const { txHash, from, to, amount } = await req.json()

    // Validate the transaction
    const validation = await validateTransaction({
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
    const publicClient = createPublicClient({ chain: polygon, transport: http() })

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
    const receipt = await publicClient.waitForTransactionReceipt({ hash: garaTxHash })
    console.log("Transaction confirmed:", receipt)

    return NextResponse.json({ success: true, transactionHash: garaTxHash, status: receipt.status })
  } catch (error) {
    console.error("Error sending GARA token:", error)
    return NextResponse.json({ success: false, message: error?.message }, { status: 500 })
  }
}
