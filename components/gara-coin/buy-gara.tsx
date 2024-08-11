"use client"

import { useTranslations } from "next-intl"
import { useSDK, MetaMaskProvider } from "@metamask/sdk-react"
import Image from "next/image"
import { CoinInput } from "@/components/gara-coin/coin-input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import Arrow from "@/public/images/gara-coin/arrow.svg"
import Polygon from "@/public/icons/polygon.svg"
import { formatAddress } from "@/lib/utils"
import { useState } from "react"

export function BuyGara() {
  const t = useTranslations("GARA.main.buyGARA")
  // const { sdk, connected, connecting, account, chainId } = useSDK()

  // const connect = async () => {
  //   try {
  //     const address = await sdk?.connect()
  //     console.log(address)
  //   } catch (err) {
  //     console.warn("failed to connect..", err)
  //   }
  // }

  // const disconnect = () => {
  //   if (sdk) {
  //     sdk.terminate()
  //   }
  // }

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
      <div>
        <CoinInput coin="GARA" name="buy" type="number" placeholder="0" className="mt-4 w-full" />
        <CoinInput coin="USDC" name="buy" type="number" placeholder="0" className="mt-4 w-full" />
      </div>
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
