"use client"
import { CoinInput } from "@/components/gara-coin/coin-input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Arrow from "@/public/images/gara-coin/arrow.svg"

export function BuyGara() {
  const t = useTranslations("GARA.main.buyGARA")

  return (
    <section className="max-w-[400px] flex-1 rounded-2xl bg-background p-6 shadow-md">
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
          <div className="h-[2px] w-full bg-black"></div>
        </div>
        <p className="text-center font-heading font-semibold">1 GARA = $0.15</p>
        <div className="relative flex w-full flex-row items-center justify-center">
          <div className="h-[2px] w-full bg-black"></div>
        </div>
      </div>
      <div>
        <CoinInput coin="GARA" name="buy" type="number" placeholder="0" className="mt-4 w-full" />
        <CoinInput coin="MATIC" name="buy" type="number" placeholder="0" className="mt-4 w-full" />
      </div>
      <div className="mt-8 grid grid-cols-2 justify-between gap-4">
        <Button variant="default">{t("btnConnectWallet")}</Button>
        <Button variant="outlinePrimary">{t("btnBuyGARA")}</Button>
      </div>
      <div className="mt-6 flex flex-row justify-between gap-2 px-4">
        <p className="flex items-center">
          {t("buyWith")}
          <span className="mx-2 inline-flex">
            <Image src="/icons/coins/usdt.png" width="18" height="18" alt="USDT" />
          </span>
          USDT
        </p>
        <div className="flex items-center justify-center">
          <Arrow />
        </div>
        <Button variant="link" size="sm" className="p-0">
          {t("linkGoToLaunchapad")}
        </Button>
      </div>
      <p className="mt-4 flex flex-row items-center justify-center">
        <span className="leading-none">{t("poweredBy")}</span>
        <span className="ml-2 inline-flex items-center">
          <Image src="/icons/polygon.svg" width="84" height="16" alt="Polygon" />
        </span>
      </p>
    </section>
  )
}
