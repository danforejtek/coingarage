"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useSDK, MetaMaskProvider } from "@metamask/sdk-react"
import Image from "next/image"
import { CoinInput } from "@/app/(main)/[locale]/(coingarage)/gara-coin/components/coin-input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import Arrow from "@/public/images/gara-coin/arrow.svg"
import Polygon from "@/public/icons/polygon.svg"
import { formatAddress } from "@/lib/utils"
import { useAccount, useBalance, useSendTransaction, useWaitForTransactionReceipt } from "wagmi"
import { parseEther } from "viem"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, useForm, useWatch } from "react-hook-form"
import { watch } from "fs"
import { ArrowDown } from "lucide-react"

const usdcToGara = (usdc: number) => usdc / 0.15 // 1 USDC = 0.15 GARA

const formSchema = z.object({
  to: z.string().refine((value) => isAddress(value), {
    message: "Invalid Address",
  }),
  garaEstimate: z.string(),
  value: z.string(),
})

export function BuyGara() {
  const t = useTranslations("GARA.main.buyGARA")
  const { address } = useAccount()
  const { data: balance } = useBalance({ address })
  const { sendTransaction, data: hash } = useSendTransaction()
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onSubmit",
    // resolver: zodResolver(formSchema),
    defaultValues: {
      garaEstimate: usdcToGara(10).toString(),
      value: "10",
      to: "",
    },
  })

  const { register, control, handleSubmit, setValue, watch } = form

  const value = useWatch({
    control: form.control,
    name: "value",
  })

  console.log(watch())

  useEffect(() => {
    const garaEstimate = usdcToGara(Number(value))
    setValue("garaEstimate", garaEstimate.toString())
  }, [value])

  useEffect(() => {
    setValue("to", address)
  }, [address])

  // useEffect(() => {
  //   const isInsufficientBalance = balance && balance?.value < parseEther(value)

  //   if (isInsufficientBalance) {
  //     form.setError("value", { message: "Insufficient balance" })
  //   } else {
  //     form.clearErrors("value")
  //   }
  // }, [value, balance, form])

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
    // sendTransaction({ to: to as `0x${string}`, value: parseEther(value) })
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
          <CoinInput coin="USDC" type="number" placeholder="0" {...register("value")} />
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
      {/* <div className="mt-8 grid grid-cols-2 justify-between gap-4">
        {!connected ? (
          <Button variant="default" disabled={connecting} onClick={connect}>
            {t("btnConnectWallet")}
          </Button>
        ) : (
          <Button
            variant="default"
            disabled={connecting}
            onClick={disconnect}
            data-connected={connected}
            className="group"
          >
            <span data-connected={connected} className="hidden group-data-[connected]:group-hover:block">
              Disconnect
            </span>
            <span data-connected={connected} className="block group-data-[connected]:group-hover:hidden">
              {formatAddress(account)}
            </span>
          </Button>
        )}

        <Button variant="outlinePrimary">{t("btnBuyGARA")}</Button>
      </div> */}
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
