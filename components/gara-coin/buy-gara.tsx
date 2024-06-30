"use client"
import { CoinInput } from "@/components/gara-coin/coin-input"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { useTranslations } from "next-intl"

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
        <CoinInput coin="GARA" name="buy" type="number" coin="GARA" placeholder="0" className="mt-4 w-full" />
        <CoinInput coin="MATIC" name="buy" type="number" coin="MATIC" placeholder="0" className="mt-4 w-full" />
      </div>
    </section>
  )
}
