"use client"

import { useMemo } from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart, Sector } from "recharts"

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useTranslations } from "next-intl"
import Image from "next/image"

export function AlocationChart() {
  const t = useTranslations("GARA.alocation")
  const chartConfig = useMemo(() => {
    return {
      1: {
        label: t("IEO.text"),
        description: t("IEO.subText"),
        color: "hsl(var(--chart-1))",
        value: 450,
      },
      2: {
        label: t("baseTeam.text"),
        description: t("baseTeam.subText"),
        color: "hsl(var(--chart-2))",
        value: 180,
      },
      3: {
        label: t("burnedAt.text"),
        description: t("burnedAt.subText"),
        color: "hsl(var(--chart-3))",
        value: 135,
      },
      4: {
        label: t("angelInvestors.text"),
        description: t("angelInvestors.subText"),
        color: "hsl(var(--chart-4))",
        value: 90,
      },
      5: {
        label: t("marketing.text"),
        description: t("marketing.subText"),
        color: "hsl(var(--chart-5))",
        value: 45,
      },
    }
  }, []) satisfies ChartConfig

  const chartData = Object.entries(chartConfig).map(([key, { label, color, value, description }]) => ({
    label,
    value,
    fill: color,
    description,
  }))

  const total = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0)
  }, [])

  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[550px] w-full">
      <PieChart>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="label"
          innerRadius={120}
          strokeWidth={2}
          startAngle={160}
          endAngle={-200}
          label={({
            index,
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            startAngle,
            endAngle,
            fill,
            payload,
            percent,
            value,
          }) => {
            const RADIAN = Math.PI / 180
            const sin = Math.sin(-RADIAN * midAngle)
            const cos = Math.cos(-RADIAN * midAngle)
            const sx = cx + (outerRadius + 10) * cos
            const sy = cy + (outerRadius + 10) * sin
            const mx = cx + (outerRadius + 30) * cos
            const my = cy + (outerRadius + 30) * sin
            const ex = mx + (cos >= 0 ? 1 : -1) * 22
            const ey = my
            const textAnchor = cos >= 0 ? "start" : "end"
            const radius = 25 + innerRadius + (outerRadius - innerRadius)
            const x = cx + radius * Math.cos(-midAngle * RADIAN)

            return (
              <g>
                {/* <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                  {payload.name}
                </text> */}
                {/* <Sector
                  cx={cx}
                  cy={cy}
                  innerRadius={innerRadius}
                  outerRadius={outerRadius}
                  startAngle={startAngle}
                  endAngle={endAngle}
                  fill={fill}
                />
                <Sector
                  cx={cx}
                  cy={cy}
                  startAngle={startAngle}
                  endAngle={endAngle}
                  innerRadius={outerRadius + 6}
                  outerRadius={outerRadius + 10}
                  fill={fill}
                /> */}
                <path
                  d={`M${sx},${sy}L${mx},${my}L${x > cx ? ex + 350 : ex - 350},${ey}`}
                  stroke={fill}
                  fill="none"
                  strokeWidth={2}
                />
                {/* <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" /> */}
                <text
                  x={ex + (cos >= 0 ? 1 : -1) * 200}
                  y={ey - 10}
                  textAnchor={textAnchor}
                  fill={fill}
                  className="font-heading text-lg"
                >
                  {chartData[index].label}
                </text>
                <text
                  x={ex + (cos >= 0 ? 1 : -1) * 120}
                  y={ey}
                  dy={18}
                  textAnchor={textAnchor}
                  fill=""
                  className="text-base"
                >
                  {chartData[index].description}
                </text>
              </g>
            )
          }}
          // label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
          //   const RADIAN = Math.PI / 180
          //   // eslint-disable-next-line
          //   const radius = 25 + innerRadius + (outerRadius - innerRadius)
          //   // eslint-disable-next-line
          //   const x = cx + radius * Math.cos(-midAngle * RADIAN)
          //   // eslint-disable-next-line
          //   const y = cy + radius * Math.sin(-midAngle * RADIAN)

          //   return (
          //     <text
          //       x={x > cx ? x + 100 : x - 100}
          //       y={y}
          //       fill={chartData[index].fill}
          //       textAnchor={x > cx ? "start" : "end"}
          //       dominantBaseline="central"
          //       className="text-lg"
          //     >
          //       {chartData[index].label}
          //     </text>
          //   )
          // }}
          // labelLine={({
          //   cx,
          //   cy,
          //   midAngle,
          //   innerRadius,
          //   outerRadius,
          //   startAngle,
          //   endAngle,
          //   fill,
          //   payload,
          //   percent,
          //   value,
          // }) => {
          //   const RADIAN = Math.PI / 180
          //   const sin = Math.sin(-RADIAN * midAngle)
          //   const cos = Math.cos(-RADIAN * midAngle)
          //   const sx = cx + (outerRadius + 10) * cos
          //   const sy = cy + (outerRadius + 10) * sin
          //   const mx = cx + (outerRadius + 30) * cos
          //   const my = cy + (outerRadius + 30) * sin
          //   const ex = mx + (cos >= 0 ? 1 : -1) * 22
          //   const ey = my
          //   const textAnchor = cos >= 0 ? "start" : "end"

          //   return (
          //     <g>
          //       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          //         {payload.name}
          //       </text>
          //       <Sector
          //         cx={cx}
          //         cy={cy}
          //         innerRadius={innerRadius}
          //         outerRadius={outerRadius}
          //         startAngle={startAngle}
          //         endAngle={endAngle}
          //         fill={fill}
          //       />
          //       <Sector
          //         cx={cx}
          //         cy={cy}
          //         startAngle={startAngle}
          //         endAngle={endAngle}
          //         innerRadius={outerRadius + 6}
          //         outerRadius={outerRadius + 10}
          //         fill={fill}
          //       />
          //       <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
          //       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
          //       <text
          //         x={ex + (cos >= 0 ? 1 : -1) * 12}
          //         y={ey}
          //         textAnchor={textAnchor}
          //         fill="#333"
          //       >{`PV ${value}`}</text>
          //       <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          //         {`(Rate ${(percent * 100).toFixed(2)}%)`}
          //       </text>
          //     </g>
          //   )
          // }}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                    <tspan x={viewBox.cx} y={(viewBox.cy || 0) - 24} className="size-6">
                      Logo
                    </tspan>
                    <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-lg font-bold">
                      {total.toLocaleString()}
                    </tspan>
                    <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                      GARA
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}
