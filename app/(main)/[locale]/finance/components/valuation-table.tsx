"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select } from "./select"
import { FinanceDataResponse } from "@/app/(main)/[locale]/finance/lib/data"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"

type RoundCurrencies = "CZK" | "USD" | "EUR" | "BTC" | "ETH" | "LTC" | "USDT"

const unit = 0.000001

const shareOfProfit = ({ total_amount, price }: { total_amount: number; price: number }) => {
  const restult = (total_amount * unit) / price / 100
  return restult.toLocaleString(undefined, {
    minimumFractionDigits: 6,
    maximumFractionDigits: 6,
    style: "percent",
  })
}
const assesment = (value: number) => {
  const result = value / 100
  return result.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    style: "percent",
  })
}
const overallEvaluation = ({
  total_amount,
  value,
  decimals,
  currency = "USD",
}: {
  total_amount: number
  value: number
  decimals: number
  currency: string
}) => {
  const restult = (total_amount * value) / 100
  return `${restult.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })} ${currency}`
}
const totalPaid = ({
  total_amount,
  value,
  currency = "USD",
  decimals,
}: {
  total_amount: number
  value: number
  currency: string
  decimals: number
}) => {
  const restult = (total_amount * value) / 100 + total_amount
  return `${restult.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })} ${currency}`
}

export const ValuationTable = ({ locale, data }: { locale: string; data: FinanceDataResponse | null }) => {
  const t = useTranslations("finance")
  const { currencies, rounds } = data ? data : { currencies: [], rounds: [] }
  const [typing, setTyping] = useState(false)
  const [hasFocus, setHasFocus] = useState(false)
  const [currency, setCurrency] = useState(locale === "cs" ? "CZK" : "USD")
  const [amount, setAmount] = useState(currencies.find((c) => c.value === currency)?.minimum_input || 0)
  const activeCurrency = currencies.find((c) => c.value === currency) || currencies[0]

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTyping(true)
    const parsedValue = Number(e.target.value)
    setAmount(Number(parsedValue))
  }

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setTyping(false)
    }, 1000) // 1 second delay

    return () => {
      clearTimeout(typingTimeout)
    }
  }, [amount])

  useEffect(() => {
    if (!typing) {
      if (amount <= activeCurrency.minimum_input && amount <= activeCurrency.maximum_input) {
        setAmount(activeCurrency.minimum_input)
      }
      if (amount > activeCurrency.maximum_input) {
        setAmount(activeCurrency.maximum_input)
      }
    }
  }, [typing])

  useEffect(() => {
    setAmount(currencies.find((c) => c.value === currency)?.total_amount || 0)
  }, [currency])

  return (
    <div className="lg:w-2/3">
      <div className="mb-8 inline-flex w-full flex-wrap items-center justify-between">
        <p className="pb-4 font-heading text-2xl font-bold text-primary lg:pb-0">{t("yourValuation.investment")}</p>
        <div className="inline-flex w-full items-center gap-4 lg:w-fit">
          <Input
            onChange={handleChangeAmount}
            min={activeCurrency.minimum_input}
            max={activeCurrency.maximum_input}
            step={1000}
            value={hasFocus ? amount : amount.toLocaleString(undefined)}
            type={hasFocus ? "number" : "string"}
            placeholder="Amount"
            className="min-w-[200px] max-w-[300px] rounded-3xl shadow-md"
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
          />
          <Select
            value={currency}
            onChange={(e) => setCurrency(e)}
            className="max-w-[120px] rounded-3xl shadow-md"
            label="Currency"
            options={currencies.map((c) => ({ label: c.value, value: c.value }))}
          />
        </div>
      </div>
      <div className="w-full rounded-2xl bg-background p-8 shadow-md">
        <Table className="w-full font-heading text-base">
          <TableHeader>
            <TableRow className="border-none font-heading ">
              <TableHead className="font-bold text-foreground">{t("yourValuation.table.header.column1")}</TableHead>
              <TableHead className="text-center font-bold text-primary">
                {t("yourValuation.table.header.column2")}
              </TableHead>
              <TableHead className="text-center font-bold text-foreground">
                {t("yourValuation.table.header.column3")}
              </TableHead>
              <TableHead className="text-center font-bold text-foreground">
                {t("yourValuation.table.header.column4")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-none">
              <TableCell className="text-primary">{t("yourValuation.table.rows.row1")}</TableCell>
              <TableCell className="text-center" suppressHydrationWarning>
                {shareOfProfit({
                  total_amount: amount,
                  price: Number(rounds[0].price_per_unit[currency as RoundCurrencies]),
                })}
              </TableCell>
              <TableCell className="text-center" suppressHydrationWarning>
                {shareOfProfit({
                  total_amount: amount,
                  price: Number(rounds[1].price_per_unit[currency as RoundCurrencies]),
                })}
              </TableCell>
              <TableCell className="text-center" suppressHydrationWarning>
                {shareOfProfit({
                  total_amount: amount,
                  price: Number(rounds[2].price_per_unit[currency as RoundCurrencies]),
                })}
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="text-primary">{t("yourValuation.table.rows.row2")}</TableCell>
              <TableCell className="text-center" suppressHydrationWarning>
                {overallEvaluation({
                  total_amount: amount,
                  value: Number(rounds[0].value),
                  decimals: activeCurrency.decimals,
                  currency: currency,
                })}
              </TableCell>
              <TableCell className="text-center" suppressHydrationWarning>
                {overallEvaluation({
                  total_amount: amount,
                  value: Number(rounds[1].value),
                  decimals: activeCurrency.decimals,
                  currency: currency,
                })}
              </TableCell>
              <TableCell className="text-center" suppressHydrationWarning>
                {overallEvaluation({
                  total_amount: amount,
                  value: Number(rounds[2].value),
                  decimals: activeCurrency.decimals,
                  currency: currency,
                })}
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="text-primary">{t("yourValuation.table.rows.row3")}</TableCell>
              <TableCell className="text-center" suppressHydrationWarning>
                {assesment(Number(rounds[0].value))}
              </TableCell>
              <TableCell className="text-center" suppressHydrationWarning>
                {assesment(Number(rounds[1].value))}
              </TableCell>
              <TableCell className="text-center" suppressHydrationWarning>
                {assesment(Number(rounds[2].value))}
              </TableCell>
            </TableRow>
            <TableRow className="border-none font-bold">
              <TableCell className="text-primary">{t("yourValuation.table.rows.row4")}</TableCell>
              <TableCell className="text-center" suppressHydrationWarning>
                {totalPaid({
                  total_amount: amount,
                  value: Number(rounds[0].value),
                  decimals: activeCurrency.decimals,
                  currency: currency,
                })}
              </TableCell>
              <TableCell className="text-center" suppressHydrationWarning>
                {totalPaid({
                  total_amount: amount,
                  value: Number(rounds[1].value),
                  decimals: activeCurrency.decimals,
                  currency: currency,
                })}
              </TableCell>
              <TableCell className="text-center" suppressHydrationWarning>
                {totalPaid({
                  total_amount: amount,
                  value: Number(rounds[2].value),
                  decimals: activeCurrency.decimals,
                  currency: currency,
                })}
              </TableCell>
            </TableRow>
          </TableBody>
          <TableCaption className="border-t pt-4 text-left text-xs italic text-foreground">
            {t("yourValuation.table.concluision")}
          </TableCaption>
        </Table>
      </div>
      <div className="lg:h-[300px]"></div>
    </div>
  )
}
