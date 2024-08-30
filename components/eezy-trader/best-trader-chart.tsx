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
        <Area dataKey="pnl" type="natural" fill="green" fillOpacity={0.4} stroke="green" legendType="none" />
      </AreaChart>
    </ChartContainer>
  )
}
