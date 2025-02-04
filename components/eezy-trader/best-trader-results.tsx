import Image from "next/image"
import React from "react"
import type { TraderData } from "@/components/eezy-trader/best-traders"
import { shortNumberFormatterCurrency, formatPercentage } from "@/lib/utils"
import { BestTraderChart } from "@/components/eezy-trader/best-trader-chart"

type BestTradersResultProps = {
  data: TraderData
  index: number
}

const BestTradersResult = ({ data, index }: BestTradersResultProps) => {
  console.log(data)
  if (!data) return null
  const { active_bots, short, dca, grid, long, name, pnl, c_pnl, roi, total_pnl } = data

  // text DCA GRID throws hydratation error

  return (
    <div
      data-index={index}
      id="best-trader-result"
      className="relative -left-2 flex h-[200px] w-[41vw] flex-col items-center justify-between overflow-hidden rounded-xl bg-background p-4 dark:bg-[#1D1E25] sm:left-0 sm:w-[234px]"
    >
      <div className="flex h-[34px] w-full justify-between">
        <div className="w-40">
          <h4>{name}</h4>
        </div>
        <div className="flex flex-wrap justify-end gap-1">
          {dca ? (
            <span className="w-[calc(50% - 4px)] h-[14px] rounded-sm bg-primary/[0.15] px-1 text-[0.6rem] text-primary">
              DCA
            </span>
          ) : null}
          {grid ? (
            <span className="w-[calc(50% - 4px)] h-[14px] rounded-sm bg-primary/[0.15] px-1 text-[0.6rem] text-primary">
              GRID
            </span>
          ) : null}
          {long ? (
            <span className="w-[calc(50% - 4px)] h-[14px] rounded-sm bg-primary/[0.15] px-1 text-[0.6rem] text-primary">
              LONG
            </span>
          ) : null}
          {short ? (
            <span className="w-[calc(50% - 4px)] h-[14px] rounded-sm bg-primary/[0.15] px-1 text-[0.6rem] text-primary">
              SHORT
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex h-[64x] w-full justify-between">
        <div>
          <p className="text-sm text-[#738795]">Total PnL</p>
          <p className="text-[20px] text-[#3FCC88] sm:text-[24px]">
            {shortNumberFormatterCurrency(total_pnl.toString(), "$")}
          </p>
        </div>
        <div className="relative h-full w-[86px]">
          <BestTraderChart data={c_pnl} roi={roi} />
          {/* <Image src={src} height={65} width={85} alt="" className="h-[65px] object-contain" /> */}
          <div className="absolute bottom-0 left-0 h-[1px] w-full border-b-2 border-dashed border-b-neutral-300"></div>
        </div>
      </div>

      <div className="flex h-[46px] w-full flex-col">
        <div className="flex flex-row items-center justify-between gap-2">
          <p className="text-sm text-[#738795]">Active bots</p>
          <p>{active_bots}</p>
        </div>
        <div className="flex flex-row items-center justify-between gap-2">
          <p className="text-sm text-[#738795]">ROI</p>
          <p className="text-[#3FCC88]">{formatPercentage(roi)}</p>
        </div>
      </div>
    </div>
  )
}

export default BestTradersResult
