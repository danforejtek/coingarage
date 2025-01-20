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

// api returns 250 weeks of data at once
// I calculate with 244 so the defaultDate date is bigger then minDate used in graph component
// there has to be big reserve, becasue defaultDate is stripped of days and begins at the start of the month
const defaultDate = new Date()
defaultDate.setDate(defaultDate.getDate() - 244 * 7)

export default function BtcLossSection() {
  const t = useTranslations("eezy-trader.BtcSaving")
  const [amount, setAmount] = useState("")
  const [frequency, setFrequency] = useState("4")

  const [dateOpening, setDateOpening] = useState(defaultDate.toISOString().slice(0, 7))
  const [dateClosing, setDateClosing] = useState(new Date().toISOString().slice(0, 7))
  

  return (
    <section
      id="extra-buy-strategy"
      className="container mx-auto mt-16 flex flex-col items-start justify-center sm:flex-row sm:justify-between sm:gap-[2%] lg:gap-[10%]"
    >
      {/* ----------- Control Panel */}
      <div id="control-panel" className="mb-10 w-full rounded-xlg bg-backgroundMuted p-8 sm:mb-0 sm:ml-4 sm:w-[25%]">
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
              <SelectItem value="4">{t("dcaCalculator.monthly")}</SelectItem>
              <SelectItem value="2">2 {t("dcaCalculator.weekly")}</SelectItem>
              <SelectItem value="1">{t("dcaCalculator.weekly")}</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <label className="input-label" htmlFor="amount">
          {t("dcaCalculator.dateOpening")}:
        </label>
        <Input
          name="amount"
          type="month"
          min={"2017-03"}
          max={dateClosing}
          value={dateOpening}
          onChange={(e) => setDateOpening(e.target.value)}
          className="mb-5 mt-1 block !rounded-circle border-none !text-base"
        ></Input>

        <label className="input-label" htmlFor="amount">
          {t("dcaCalculator.dateClosing")}:
        </label>
        <Input
          name="amount"
          type="month"
          min={dateOpening}
          max={new Date().toISOString().slice(0, 7)}
          value={dateClosing}
          onChange={(e) => setDateClosing(e.target.value)}
          className="mb-5 mt-1 block !rounded-circle  border-none !text-base"
        ></Input>

        <p className="mt-6 italic">{t("dcaCalculator.notice")}</p>
      </div>

      {/* ----------- interactive Graph */}
      <div className="relative flex w-full flex-col items-center justify-start rounded-xlg bg-backgroundMuted pt-5 sm:w-[75%]">
        <BtcLossGraph
          amount={amount}
          frequency={parseInt(frequency)}
          dateOpening={dateOpening}
          dateClosing={dateClosing}
        />
      </div>
    </section>
  )
}
