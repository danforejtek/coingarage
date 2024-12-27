"use client"

import { Suspense, useEffect, useState } from "react"
import { isAddress, parseEther, parseAbi } from "viem"
// @ts-ignore
import { useAccount, useBalance, useSendTransaction, useWalletClient, useWriteContract } from "wagmi"
// @ts-ignore
import { useAddRecentTransaction, useChainModal } from "@rainbow-me/rainbowkit"
import { ConnectButton } from "@/app/(main)/[locale]/(coingarage)/gara-coin/components/connect-button"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { CoinInput } from "@/app/(main)/[locale]/(coingarage)/gara-coin/components/coin-input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import Arrow from "@/public/images/gara-coin/arrow.svg"
import Polygon from "@/public/icons/polygon.svg"
import { cn } from "@/lib/utils"
import { z } from "zod"
import { useForm, useWatch } from "react-hook-form"
import { ArrowDown } from "lucide-react"
import { getGaraEstimate, usdcToGara } from "@/app/api/gara/lib/utils"
import { useGaraStore } from "@/lib/store/provider"
import TransactionStatusModal from "@/app/(main)/[locale]/(coingarage)/gara-coin/components/transaction-status-modal"
import { sendPayment } from "@/app/(main)/[locale]/(coingarage)/gara-coin/lib/send-payment"
import { CurrencySelect } from "@/app/(main)/[locale]/(coingarage)/gara-coin/components/currency-select"
import { getTokenBalance } from "@/app/(main)/[locale]/(coingarage)/gara-coin/lib/get-balance"
import { useQuery } from "@tanstack/react-query"
import { Rounds } from "@/app/(main)/[locale]/(coingarage)/gara-coin/components/rounds"
import CountdownTimer from "@/app/(main)/[locale]/(coingarage)/gara-coin/components/countdown-timer"

// const COINGARAGE_CONTRACT_ADDRESS = "0xA4AC096554f900d2F5AafcB9671FA84c55cA3bE1" as `0x${string}`
const COINGARAGE_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_COINGARAGE_ADDRESS as `0x${string}`

const formSchema = z.object({
  to: z.string().refine((value) => isAddress(value), {
    message: "Invalid Address",
  }),
  from: z.string().refine((value) => isAddress(value), {
    message: "Invalid Address",
  }),
  garaEstimate: z.string(),
  amount: z.string(),
  token: z.string(),
})

export function BuyGara({ className }: { className?: string }) {
  const t = useTranslations("GARA.main.buyGARA")
  const {
    transactionStatus,
    setTransactionStatus,
    setOutcomingTransaction,
    setIncomingTransaction,
    reset: resetState,
  } = useGaraStore((state) => state)
  const { data, isLoading, error } = useQuery({
    queryKey: ["ethereumPrice"],
    queryFn: async () => {
      const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd")
      const data = await response.json()
      return data
    },
  })
  const eth_usd = data?.ethereum?.usd

  const [open, setOpen] = useState(false)
  const [hasUnsufficientBalance, setHasUnsufficientBalance] = useState(false)
  const toggleOpen = () => setOpen(!open)
  const handleOnOpenChange = () => {
    setOpen(!open)
    resetState()
  }
  const { address, chain } = useAccount()
  const { data: balance } = useBalance({ address })
  const { data: walletClient } = useWalletClient()
  const addRecentTransaction = useAddRecentTransaction()
  const { writeContract } = useWriteContract()
  const { openChainModal } = useChainModal()
  const { sendTransaction } = useSendTransaction()
  const chainTxUrl = `${chain?.blockExplorers?.default?.url}/tx/`

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onSubmit",
    // resolver: zodResolver(formSchema),
    defaultValues: {
      garaEstimate: usdcToGara(10).toString(),
      amount: "10.000",
      to: COINGARAGE_CONTRACT_ADDRESS,
      from: address,
      token: "USDT",
    },
  })

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = form

  const amount = useWatch({
    control: form.control,
    name: "amount",
  })

  const token = useWatch({
    control: form.control,
    name: "token",
  })

  useEffect(() => {
    if (!address || !token || !chain) return
    if (token === "ETH") {
      const isInsufficientBalance = Number(balance?.formatted) < Number(amount)

      if (isInsufficientBalance) {
        form.setError("amount", { message: "Insufficient balance" })
      } else {
        form.clearErrors("amount")
      }
      setHasUnsufficientBalance(isInsufficientBalance)
    } else {
      try {
        const fetchBalance = async () => {
          const balance = await getTokenBalance({
            walletAddress: address as string,
            token: token,
            chainName: chain?.name as string,
          })
          // console.log(balance)
          const isInsufficientBalance = balance?.humanReadableBalance < Number(amount)
          if (isInsufficientBalance) {
            form.setError("amount", { message: "Insufficient balance" })
          } else {
            form.clearErrors("amount")
          }
          setHasUnsufficientBalance(isInsufficientBalance)
        }

        fetchBalance()
      } catch (error) {
        console.error(error)
      }
    }
  }, [amount, address, balance, token, chain])

  useEffect(() => {
    const garaEstimate = getGaraEstimate(
      token,
      Number(amount),
      !["USDT", "USDC"].includes(eth_usd) ? eth_usd : undefined
    )
    setValue(
      "garaEstimate",
      garaEstimate.toLocaleString(undefined, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      })
    )
  }, [amount, token, form])

  useEffect(() => {
    setValue("from", address as `0x${string}`)
  }, [address, form])

  useEffect(() => {
    if (chain?.name !== "Ethereum") {
      setValue("token", "USDT")
    }
    if (chain?.name === "Ethereum") {
      setValue("token", "ETH")
    }
  }, [chain])

  useEffect(() => {
    if (token === "ETH" && chain?.name !== "Ethereum") {
      if (typeof openChainModal === "function") {
        openChainModal()
      }
    }
  }, [token, chain, openChainModal])

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const { amount, token } = data
    const to = COINGARAGE_CONTRACT_ADDRESS
    if (!address || !walletClient) {
      setTransactionStatus({ process: "sendPayment", status: "walletError" })
      return
      // handle state
    }
    handleOnOpenChange()
    setTransactionStatus({ process: "sendPayment", status: "submitting" })
    const response = await sendPayment({
      token,
      chain,
      amount: amount,
      recipientAddress: to,
      senderAddress: address,
      walletClient,
      setTransactionStatus,
      setOutcomingTransaction,
      setIncomingTransaction,
      resetState,
      writeContract,
      sendTransaction,
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
        token,
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
    <section
      className={cn(
        "w-full max-w-full flex-1 overflow-x-hidden rounded-2xl border border-neutral-300 bg-background p-6 shadow-lg dark:border-neutral-900 lg:max-w-[480px]",
        className
      )}
    >
      <h3 className="mb-6 text-center font-heading text-3xl font-bold">{t("header")}</h3>
      <Table className="text-sm">
        <TableBody className="text-sm">
          <TableRow className="!border-none">
            <TableCell className="!p-1 font-heading font-semibold">{t("totalTokens")}</TableCell>
            <TableCell className="!p-1 text-end font-heading font-bold text-primary">900M GARA</TableCell>
          </TableRow>
          <TableRow className="!border-none">
            <TableCell className="!p-1 font-heading font-semibold">{t("distributedTokens")}</TableCell>
            <TableCell className="!p-1 text-end font-heading font-bold text-primary">99M GARA</TableCell>
          </TableRow>
          <TableRow className="!border-none">
            <TableCell className="!p-1 font-heading font-semibold">{t("soldTokens")}</TableCell>
            <TableCell className="!p-1 text-end font-heading font-bold text-primary">652,989</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="mt-4 grid grid-cols-[1fr_200px_1fr] gap-2">
        <div className="relative flex w-full flex-row items-center justify-center">
          <div className="h-[2px] w-full bg-black dark:bg-neutral-700"></div>
        </div>
        <p className="text-center font-heading font-semibold">
          Time Left - 1<sup>st</sup> round
        </p>
        <div className="relative flex w-full flex-row items-center justify-center">
          <div className="h-[2px] w-full bg-black dark:bg-neutral-700"></div>
        </div>
      </div>
      <div className="my-4 flex flex-row justify-center">
        <CountdownTimer />
      </div>
      <Rounds />
      <div className="m-auto mt-8 flex flex-col items-center">
        <a href="https://helpgary.com" target="_blank" className="m-auto w-full text-center">
          <Button type="button" variant={address ? "default" : "outlinePrimary"} className="m-auto w-[90%] text-center">
            {t("btnHelpGarry")}
          </Button>
        </a>
        <a href="https://trade.coingarage.io/exchange/GARA-EUR" target="_blank" className="m-auto w-full text-center">
          <Button type="button" variant={"default"} className="m-auto mt-2 w-[90%] text-center">
            {t("buyWithEurOnCoingarage")}
          </Button>
        </a>
      </div>
    </section>
  )
}
