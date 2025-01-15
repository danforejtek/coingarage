"use client"

import BtcLossGraph from "./btc-loss-graph"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select"
import { useTranslations } from "next-intl"
import { useState } from "react"

export default function BtcLossSection() {
  const t = useTranslations("eezy-trader.BtcSaving")
  const [amount, setAmount] = useState("")
  const [frequency, setFrequency] = useState("monthly")
  const [dateOpening, setDateOpening] = useState("2024-01-01")
  const [dateClosing, setDateClosing] = useState(new Date().toISOString().split("T")[0])

  return (
    <section
      id="extra-buy-strategy"
      className="container mx-auto mt-16 flex flex-col items-start justify-center sm:flex-row sm:justify-between sm:gap-[2%] lg:gap-[10%]"
    >
      {/* ----------- Control Panel */}
      <div id="control-panel" className="mb-10 w-full rounded-xlg bg-card p-4 sm:mb-0 sm:ml-4 sm:w-[25%] lg:p-8">
        <label className="input-label" htmlFor="amount">
          {t("dcaCalculator.invested")}:
        </label>

        <div className="relative">
          <span className="label absolute right-5 top-[10px]">USD</span>
          <Input
            value={amount}
            name="amount"
            onChange={(e) => setAmount(e.target.value)}
            className="mb-5 mt-1 !block !rounded-circle border-none !text-base"
            placeholder={t("dcaCalculator.enterAmount")}
          ></Input>
        </div>

        <label className="input-label" htmlFor="frequency">
          {t("dcaCalculator.frequency")}:
        </label>
        <Select value={frequency} name="frequency" onValueChange={(value) => setFrequency(value)}>
          <SelectTrigger
            className=" mb-5 mt-1 items-center rounded-full  border-none bg-background !text-base"
            hideIcon={false}
          >
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="weekly">{t("dcaCalculator.monthly")}</SelectItem>
              <SelectItem value="monthly">{t("dcaCalculator.weekly")}</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <label className="input-label" htmlFor="amount">
          {t("dcaCalculator.dateOpening")}:
        </label>
        <Input
          name="amount"
          type="date"
          value={dateOpening}
          onChange={(e) => setDateOpening(e.target.value)}
          className="mb-5 mt-1 block !rounded-circle border-none !text-base"
        ></Input>

        <label className="input-label" htmlFor="amount">
          {t("dcaCalculator.dateClosing")}:
        </label>
        <Input
          name="amount"
          type="date"
          value={dateClosing}
          onChange={(e) => setDateClosing(e.target.value)}
          className="mb-5 mt-1 block !rounded-circle  border-none !text-base"
        ></Input>

        <p className="mt-6 italic">{t("dcaCalculator.notice")}</p>
      </div>

      {/* ----------- interactive Graph */}
      <div className="relative flex w-full flex-col items-center justify-start sm:w-[75%]">
        <BtcLossGraph amount={amount} frequency={frequency} dateOpening={dateOpening} dateClosing={dateClosing} />
      </div>
    </section>
  )
}
