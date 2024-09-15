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
// @ts-ignore
import { useAccount, useBalance, useWalletClient } from "wagmi"
// @ts-ignore
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit"
import { ConnectButton } from "@/app/(main)/[locale]/(coingarage)/gara-coin/components/connect-button"

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
import { useGaraStore } from "@/lib/store/provider"
import TransactionStatusModal from "@/app/(main)/[locale]/(coingarage)/gara-coin/components/transaction-status-model"
import { sendUsdc } from "@/app/(main)/[locale]/(coingarage)/gara-coin/lib/send-usdc"

type Address = `0x${string}`
// const COINGARAGE_CONTRACT_ADDRESS = "0xA4AC096554f900d2F5AafcB9671FA84c55cA3bE1" as `0x${string}`
const COINGARAGE_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_COINGARAGE_ADDRESS as `0x${string}`
const USDC_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_USDC_POLYGON_CONTRACT_ADDRESS as `0x${string}`

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
// const sendUSDC = async ({
//   chain,
//   senderAddress,
//   recipientAddress,
//   amount,
//   walletClient,
//   setTransactionStatus,
//   setOutcomingTransaction,
//   setIncomingTransaction,
//   resetState,
// }: SendUSDCProps): Promise<SendUSDCResponse | undefined> => {
//   try {
//     const checksummedRecipientAddress = getAddress(recipientAddress)
//     // Initialize the public client for interacting with the Polygon network

//     const client = createPublicClient({
//       chain: chain,
//       transport: http(),
//     })

//     // Convert the amount to the correct decimal (USDC has 6 decimals)
//     const amountInWei = parseUnits(amount.toString(), 6) // Converts amount to 6 decimals

//     setTransactionStatus({ process: "sendPayment", status: "writingContract" })
//     const hash = await walletClient.writeContract({
//       address: USDC_CONTRACT_ADDRESS, // USDC contract address
//       abi: USDC_ABI,
//       functionName: "transfer",
//       args: [checksummedRecipientAddress, amountInWei],
//       account: senderAddress,
//       chain: chain,
//     })
//     console.log("Transaction sent:", hash)
//     setTransactionStatus({ process: "sendPayment", status: "contractCreated" })
//     setOutcomingTransaction({ txHash: hash })

//     // Wait for the transaction to be mined (optional)
//     setTransactionStatus({ process: "sendPayment", status: "waitingForReceipt" })
//     const receipt = await client.waitForTransactionReceipt({ hash })
//     setTransactionStatus({ process: "sendPayment", status: "receiptReceived" })
//     setOutcomingTransaction({ receipt, done: true })
//     console.log("Transaction confirmed:", receipt)
//     return {
//       txHash: hash,
//       receipt,
//     }
//   } catch (error) {
//     setTransactionStatus({ process: "sendPayment", status: "transactionError" })
//     setOutcomingTransaction({ error, done: true })
//     setIncomingTransaction({ error, done: true })
//     console.error("Error sending USDC:", error)
//   }
// }

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
  const {
    transactionStatus,
    setTransactionStatus,
    setOutcomingTransaction,
    setIncomingTransaction,
    reset: resetState,
  } = useGaraStore((state) => state)
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!open)
  const handleOnOpenChange = () => {
    setOpen(!open)
    resetState()
  }
  const { address, chain } = useAccount()
  const { data: balance } = useBalance({ address })
  const { data: walletClient } = useWalletClient()
  const addRecentTransaction = useAddRecentTransaction()

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onSubmit",
    // resolver: zodResolver(formSchema),
    defaultValues: {
      garaEstimate: usdcToGara(10).toString(),
      amount: "10.000",
      to: COINGARAGE_CONTRACT_ADDRESS,
      from: address,
    },
  })

  const { register, control, handleSubmit, setValue, watch, reset } = form

  const amount = useWatch({
    control: form.control,
    name: "amount",
  })

  useEffect(() => {
    const garaEstimate = usdcToGara(Number(amount))
    setValue(
      "garaEstimate",
      garaEstimate.toLocaleString(undefined, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      })
    )
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
    const { amount } = data
    const to = COINGARAGE_CONTRACT_ADDRESS
    if (!address || !walletClient) {
      setTransactionStatus({ process: "sendPayment", status: "walletError" })
      return
      // handle state
    }
    handleOnOpenChange()
    setTransactionStatus({ process: "sendPayment", status: "submitting" })
    const response = await sendUsdc({
      chain,
      amount: amount,
      recipientAddress: to,
      senderAddress: address,
      walletClient,
      setTransactionStatus,
      setOutcomingTransaction,
      setIncomingTransaction,
      resetState,
    })
    if (!response?.txHash) {
      setTransactionStatus({ process: "sendPayment", status: "transactionError" })
      return
    }
    addRecentTransaction({
      hash: response.txHash,
      description: "Exchange USDC to GARA",
    })

    setTransactionStatus({ process: "receivePayment", status: "pending" })
    const garaTransactionResponse = await fetch("/api/gara/exchange", {
      method: "POST",
      body: JSON.stringify({
        txHash: response.txHash,
        from: address,
        to: to,
        amount,
        chain: chain?.name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const responseData = await garaTransactionResponse.json()
    console.log("GARA Transaction Response:", responseData)
    if (!garaTransactionResponse.ok) {
      setTransactionStatus({ process: "receivePayment", status: "transactionError" })
      setIncomingTransaction({ done: true, error: responseData.message })
      return
    }
    addRecentTransaction({
      hash: responseData?.txHash,
      description: "Incoming GARA",
    })
    setIncomingTransaction({
      done: true,
      txHash: responseData?.txHash,
      // receipt: responseData?.status,
    })
    setTransactionStatus({ process: "receivePayment", status: "paymentSent" })
    reset()
  }

  return (
    <section className="w-full max-w-full flex-1 overflow-x-hidden rounded-2xl bg-background p-6 shadow-md lg:max-w-[480px]">
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
            type="text"
            placeholder="0.000"
            className="cursor-disabled pointer-events-none text-neutral-700 dark:text-neutral-400"
            {...register("garaEstimate")}
            readOnly
          />
          <input type="hidden" {...register("from")} />
          <input type="hidden" {...register("to")} />
          <input type="hidden" name="chain" value={chain?.name} />
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <ConnectButton label={t("btnConnectWallet")} showBalance={false} />
          <Button type="submit" variant={address ? "default" : "outlinePrimary"} disabled={!address}>
            {t("btnBuyGARA")}
          </Button>
        </div>
        <TransactionStatusModal open={open} toggleOpen={handleOnOpenChange} setOpen={setOpen} />
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
