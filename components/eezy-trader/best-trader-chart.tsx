"use client"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartConfig = {
  pnl: {
    label: "PnL",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

type BestTradersResultProps = Record<string, number>

export const BestTraderChart = ({ data }: BestTradersResultProps) => {
  console.log(data)
  if (!data) return null
  const chartData = Object.keys(data).map((key) => ({
    date: key,
    pnl: data[key as keyof typeof data],
  }))

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
      </AreaChart>
    </ChartContainer>
  )
}
