import Image from "next/image"
import React from "react"
import type { TraderData } from "@/components/eezy-trader/BestTraders"
import { formatCurrency, formatPercentage } from "@/lib/utils"
import { BestTraderChart } from "@/components/eezy-trader/best-trader-chart"

type BestTradersResultProps = {
  data: TraderData
}

const BestTradersResult = ({ data }: BestTradersResultProps) => {
  const { active_bots, short, dca, grid, long, name, pnl, roi, total_pnl } = data

  return (
    <div className="flex h-[201px] w-[234px] flex-col items-center justify-between rounded-xl bg-background p-4">
      <div className="flex h-[35px] w-full justify-between">
        <div className="w-40">
          <h4>{name}</h4>
          <p className="text-[8px] text-primary">expert</p>
        </div>
        <div className="flex flex-wrap justify-end">
          {dca ? (
            <span className="w-[calc(50% - 4px)] mx-1 mb-2 h-[15px] rounded-sm bg-primary/[0.15] px-1 text-[10px] text-primary">
              DCA
            </span>
          ) : null}
          {grid ? (
            <span className="w-[calc(50% - 4px)] mx-1 mb-2 h-[15px] rounded-sm bg-primary/[0.15] px-1 text-[10px] text-primary">
              GRID
            </span>
          ) : null}
          {long ? (
            <span className="w-[calc(50% - 4px)] mx-1 mb-2 h-[15px] rounded-sm bg-primary/[0.15] px-1 text-[10px] text-primary">
              LONG
            </span>
          ) : null}
          {short ? (
            <span className="w-[calc(50% - 4px)] mx-1 mb-2 h-[15px] rounded-sm bg-primary/[0.15] px-1 text-[10px] text-primary">
              SHORT
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex h-[65x] w-full justify-between">
        <div>
          <p>Total PnL</p>
          <p className="text-[24px] text-[#3FCC88]">{formatCurrency(total_pnl, 2)}</p>
        </div>
        <div className="h-full w-[86px]">
          <BestTraderChart data={pnl} />
          {/* <Image src={src} height={65} width={85} alt="" className="h-[65px] object-contain" /> */}
        </div>
      </div>

      <div className="flex h-[47px] w-full justify-between">
        <div className="text-[#738795]">
          <p>Active bots</p>
          <p>ROI</p>
        </div>
        <div>
          <p>{active_bots}</p>
          <p className="text-[#3FCC88]">{formatPercentage(roi)}</p>
        </div>
      </div>
    </div>
  )
}

export default BestTradersResult
