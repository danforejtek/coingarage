"use client"

import BtcLossGraph from "./btc-loss-graph"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
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
import { useEffect, useState, useRef } from "react"

// api returns 250 weeks of data at once
// I calculate with 244 so the defaultDate date is bigger then minDate used in graph component
// there has to be big reserve, becasue defaultDate is stripped of days and begins at the start of the month
const defaultDate = new Date()
defaultDate.setDate(defaultDate.getDate() - 244 * 7)

export default function BtcLossSection() {
  const t = useTranslations("eezy-trader.BtcSaving")
  const [amount, setAmount] = useState("")
  const [frequency, setFrequency] = useState("4")

  // deactivated: dateOpening is not calculated from defaultDate, but set to a fixed date
  // const [dateOpening, setDateOpening] = useState(defaultDate.toISOString().slice(0, 7))
  const [dateOpening, setDateOpening] = useState("2019-12")


  const [dateClosing, setDateClosing] = useState(new Date().toISOString().slice(0, 7))
  const graphRef = useRef(null)

  useEffect(() => {
    // intersection observer to check if the graph is in the viewport
    const callback = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0]
      if (entry?.isIntersecting) {
        // if the graph is in the viewport, set the default amount, which triggers the graph to render
        setAmount("100")
      }
    }
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold as needed
    })

    if (graphRef.current) {
      observer.observe(graphRef.current)
    }
  }, [])

  return (
    <section
      id="extra-buy-strategy"
      className="container mx-auto mt-16 flex flex-col-reverse items-start justify-center sm:items-stretch sm:flex-row sm:justify-between sm:gap-[2%] lg:gap-[10%]"
    >
      {/* ----------- Control Panel */}
      <div id="control-panel" className="mt-10 w-full rounded-xlg bg-backgroundMuted p-8 sm:mt-0 sm:mb-0 sm:ml-4 sm:w-[25%]">
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
              <SelectItem value="2">{t("dcaCalculator.biMonthly")}</SelectItem>
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

        <div className="text-center">
          <Button variant="default" size="lg" className="mt-8" asChild>
            <a href="https://trade.coingarage.io/auto-buy/create-plan">{t("whatIsSavingPlan.btn")}</a>
          </Button>
        </div>
      </div>

      {/* ----------- interactive Graph */}
      <div
        ref={graphRef}
        className="relative flex w-full flex-col items-center justify-start overflow-hidden rounded-xlg bg-backgroundMuted pt-5 sm:w-[75%]"
      >
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
