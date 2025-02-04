"use client"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartConfig = {
  pnl: {
    label: "PnL",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

type BestTradersResultProps = { data: Record<string, number>; roi: number }

export const BestTraderChart = ({ data, roi }: BestTradersResultProps) => {  
  if (!data) return null
  const chartData = Object.keys(data).map((key) => ({
    date: key,
    pnl: data[key as keyof typeof data],
  }))
  // recalculate absolute number (dolars) to percents
  // percentBase (100%) is the last element of the array (highest number)
  const percentBase: number = chartData[chartData.length - 1].pnl
  // convert percents to ROI
  for (let i = 0; i < chartData.length; i++) {
    chartData[i].pnl = (chartData[i].pnl / percentBase) * roi
  }

  return (
    <ChartContainer config={chartConfig} className="min-h-[64px] w-[86px]">
      <AreaChart
        accessibilityLayer
        data={chartData}
        width={86}
        height={64}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <defs>
          <linearGradient id="colorPnl" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3FCC88" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#3FCC88" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          dataKey="pnl"
          type="linear"
          // fill="#3FCC88"
          // fillOpacity={0.4}
          fillOpacity={1}
          fill="url(#colorPnl)"
          stroke="#3FCC88"
          strokeWidth={2}
          legendType="none"
        />
        <YAxis mirror width={0} domain={[0, 110]} />
      </AreaChart>
    </ChartContainer>
  )
}
