"use client"

import { useEffect, useState } from "react"
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
import { useAccount, useBalance, useWalletClient } from "wagmi"
import { ConnectButton } from "@rainbow-me/rainbowkit"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { CoinInput } from "@/app/(main)/[locale]/(coingarage)/gara-coin/components/coin-input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import Arrow from "@/public/images/gara-coin/arrow.svg"
import Polygon from "@/public/icons/polygon.svg"
import { formatAddress } from "@/lib/utils"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, useForm, useWatch } from "react-hook-form"
import { ArrowDown } from "lucide-react"
import { polygon } from "viem/chains"
import { usdcToGara } from "@/lib/api/utils"
import { BigNumberish, HexAddress } from "@/types"

type Address = `0x${string}`
// const COINGARAGE_CONTRACT_ADDRESS = "0xA4AC096554f900d2F5AafcB9671FA84c55cA3bE1" as `0x${string}`
const COINGARAGE_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_USDC_POLYGON_CONTRACT_ADDRESS as `0x${string}`
// const USDC_ABI = [
//   {
//     name: "transfer",
//     type: "function",
//     stateMutability: "nonpayable",
//     inputs: [
//       { name: "to", type: "address" },
//       { name: "value", type: "uint256" },
//     ],
//     outputs: [{ name: "", type: "bool" }],
//   },
// ]

const USDC_ABI = parseAbi([
  "function transfer(address to, uint256 value) external returns (bool)",
  // "function balanceOf(address account) public view returns (uint256)",
])

type SendUSDCProps = {
  senderAddress: Address
  recipientAddress: Address
  amount: BigNumberish
  walletClient: ReturnType<typeof createWalletClient>
}

type SendUSDCResponse = {
  txHash: HexAddress
  receipt: object
}

// Function to send USDC using viem
const sendUSDC = async ({
  senderAddress,
  recipientAddress,
  amount,
  walletClient,
}: SendUSDCProps): Promise<SendUSDCResponse> => {
  try {
    const checksummedRecipientAddress = getAddress(recipientAddress)
    // Initialize the public client for interacting with the Polygon network
    const client = createPublicClient({
      chain: polygon,
      transport: http(),
    })

    // Convert the amount to the correct decimal (USDC has 6 decimals)
    const amountInWei = parseUnits(amount.toString(), 6) // Converts amount to 6 decimals

    const hash = await walletClient.writeContract({
      address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359", // USDC contract address
      abi: USDC_ABI,
      functionName: "transfer",
      args: [checksummedRecipientAddress, amountInWei],
      account: senderAddress,
      chain: polygon, // Add the chain property
    })

    console.log("Transaction sent:", hash)

    // Wait for the transaction to be mined (optional)
    const receipt = await client.waitForTransactionReceipt({ hash })
    console.log("Transaction confirmed:", receipt)
    return {
      txHash: hash,
      receipt,
    }
  } catch (error) {
    console.error("Error sending USDC:", error)
  }
}

const formSchema = z.object({
  to: z.string().refine((value) => isAddress(value), {
    message: "Invalid Address",
  }),
  from: z.string().refine((value) => isAddress(value), {
    message: "Invalid Address",
  }),
  garaEstimate: z.string(),
  amount: z.string(),
})

export function BuyGara() {
  const t = useTranslations("GARA.main.buyGARA")
  const { address } = useAccount()
  const { data: balance } = useBalance({ address })
  const { data: walletClient } = useWalletClient()
  // const { writeContractAsync } = useWriteContract()

  // const { sendTransaction, data: hash, isPending, error } = useSendTransaction()
  // const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
  //   hash,
  // })
  console.log({ balance })

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onSubmit",
    // resolver: zodResolver(formSchema),
    defaultValues: {
      garaEstimate: usdcToGara(10).toString(),
      amount: "10",
      to: COINGARAGE_CONTRACT_ADDRESS,
      from: address,
    },
  })

  const { register, control, handleSubmit, setValue, watch } = form

  const amount = useWatch({
    control: form.control,
    name: "amount",
  })

  useEffect(() => {
    const garaEstimate = usdcToGara(Number(amount))
    setValue("garaEstimate", garaEstimate.toString())
  }, [amount, form])

  useEffect(() => {
    setValue("from", address as `0x${string}`)
  }, [address, form])

  useEffect(() => {
    const isInsufficientBalance = balance && balance?.value < parseEther(amount)

    if (isInsufficientBalance) {
      form.setError("amount", { message: "Insufficient balance" })
    } else {
      form.clearErrors("amount")
    }
  }, [amount, balance, form])

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data)
    const { to, amount } = data
    const response = await sendUSDC({
      amount: amount,
      recipientAddress: to,
      senderAddress: address,
      walletClient,
    })
    if (!response.txHash) return

    const garaTransactionResponse = await fetch("/api/gara/exchange", {
      method: "POST",
      body: JSON.stringify({
        txHash: response.txHash,
        from: address,
        to: to,
        amount,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    console.log("GARA Transaction Response:", garaTransactionResponse)
  }

  return (
    <section className="max-w-[480px] flex-1 rounded-2xl bg-background p-6 shadow-md">
      <h3 className="mb-6 text-center font-heading text-3xl font-bold">{t("header")}</h3>
      <Table className="text-sm">
        <TableBody className="text-sm">
          <TableRow className="!border-none">
            <TableCell className="!p-1 font-heading font-semibold">{t("totalTokens")}</TableCell>
            <TableCell className="!p-1 text-end font-heading font-bold text-primary">450M GARA</TableCell>
          </TableRow>
          <TableRow className="!border-none">
            <TableCell className="!p-1 font-heading font-semibold">{t("distributedTokens")}</TableCell>
            <TableCell className="!p-1 text-end font-heading font-bold text-primary">100M GARA</TableCell>
          </TableRow>
          <TableRow className="!border-none">
            <TableCell className="!p-1 font-heading font-semibold">{t("soldTokens")}</TableCell>
            <TableCell className="!p-1 text-end font-heading font-bold text-primary">30M GARA</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="mt-4 grid grid-cols-[1fr_140px_1fr] gap-2">
        <div className="relative flex w-full flex-row items-center justify-center">
          <div className="h-[2px] w-full bg-black dark:bg-neutral-700"></div>
        </div>
        <p className="text-center font-heading font-semibold">1 GARA = $0.15</p>
        <div className="relative flex w-full flex-row items-center justify-center">
          <div className="h-[2px] w-full bg-black dark:bg-neutral-700"></div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <CoinInput coin="USDC" type="number" placeholder="0.000" {...register("amount")} />
          <div className="my-4 flex flex-row justify-center">
            <ArrowDown className="stroke-black dark:stroke-white" />
          </div>
          <CoinInput
            coin="GARA"
            type="number"
            placeholder="0"
            className="cursor-disabled pointer-events-none text-neutral-700 dark:text-neutral-400"
            {...register("garaEstimate")}
            readOnly
          />
          <input type="hidden" {...register("from")} />
          <input type="hidden" {...register("to")} />
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <ConnectButton label={t("btnConnectWallet")} />
          <Button type="submit" variant="outlinePrimary">
            {t("btnBuyGARA")}
          </Button>
        </div>
        {/* <div>{address}</div> */}
      </form>
      <div className="mt-6 flex flex-row justify-between gap-2 px-4">
        <Button variant="link" size="sm" className="p-0 text-foreground" asChild>
          <a
            href="https://trade.coingarage.io/launchpad/project-details?project=GARA"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center"
          >
            {t("buyWith")}
            <span className="mx-2 inline-flex">
              <Image src="/icons/coins/usdt.png" width="18" height="18" alt="USDT" />
            </span>
            USDT
          </a>
        </Button>
        <div className="flex items-center justify-center">
          <Arrow className="stroke-black dark:stroke-white" />
        </div>
        <Button variant="link" size="sm" className="p-0">
          <a
            href="https://trade.coingarage.io/launchpad/project-details?project=GARA"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("linkGoToLaunchapad")}
          </a>
        </Button>
      </div>
      <p className="mt-4 flex flex-row items-center justify-center">
        <span className="leading-none">{t("poweredBy")}</span>
        <span className="ml-2 inline-flex items-center">
          <Polygon className="fill-black dark:fill-white" width="84" height="16" />
          {/* <Image src="/icons/polygon.svg" width="84" height="16" alt="Polygon" /> */}
        </span>
      </p>
    </section>
  )
}
