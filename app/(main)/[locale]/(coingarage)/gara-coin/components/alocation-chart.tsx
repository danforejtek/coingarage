"use client"

import { useMemo } from "react"
import { useViewportSize } from "@mantine/hooks"
import { Label, Pie, PieChart } from "recharts"

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"

export function AlocationChart() {
  const { theme } = useTheme()
  const { width } = useViewportSize()
  const t = useTranslations("GARA.alocation")
  const chartConfig = useMemo(() => {
    return {
      1: {
        label: t("rewards.text"),
        description: t("rewards.subText"),
        color: "hsl(var(--chart-1))",
        value: 99,
      },
      2: {
        label: t("company.text"),
        description: t("company.subText"),
        color: "hsl(var(--chart-2))",
        value: 198,
      },
      3: {
        label: t("baseTeam.text"),
        description: t("baseTeam.subText"),
        color: "hsl(var(--chart-3))",
        value: 99,
      },
      4: {
        label: t("burnedAt.text"),
        description: t("burnedAt.subText"),
        color: "hsl(var(--chart-4))",
        value: 135,
      },
      5: {
        label: t("marketing.text"),
        description: t("marketing.subText"),
        color: "hsl(var(--chart-5))",
        value: 90,
      },
      6: {
        label: t("angelInvestors.text"),
        description: t("angelInvestors.subText"),
        color: "hsl(var(--chart-6))",
        value: 90,
      },
      7: {
        label: t("reserved.text"),
        description: t("reserved.subText"),
        description2: t("reserved.subText1"),
        color: "hsl(var(--chart-7))",
        value: 99,
      },
      8: {
        label: t("nonExchange.text"),
        description: t("nonExchange.subText"),
        description2: t("nonExchange.subText1"),
        color: "hsl(var(--chart-8))",
        value: 90,
      },
    }
  }, []) satisfies ChartConfig

  const chartData = Object.entries(chartConfig).map(([key, { label, color, value, description, description2 }]) => ({
    label,
    value,
    fill: color,
    description,
    description2,
  }))

  const total = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0)
  }, [])

  return (
    <>
      <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[550px] w-full">
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="label"
            innerRadius={120}
            strokeWidth={width < 1250 ? 0 : 2}
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
              if (width < 1250) return null
              const RADIAN = Math.PI / 180
              const sin = Math.sin(-RADIAN * midAngle)
              const cos = Math.cos(-RADIAN * midAngle)
              const sx = cx + (outerRadius + 10) * cos
              const sy = cy + (outerRadius + 10) * sin
              const mx = cx + (outerRadius + 30) * cos
              const my = cy + (outerRadius + 30) * sin
              const ex = mx + (cos >= 0 ? 1 : -1) * 350
              const ey = my
              const radius = 25 + innerRadius + (outerRadius - innerRadius)
              const x = cx + radius * Math.cos(-midAngle * RADIAN)
              const textAnchor = x > cx ? "end" : "start"

              return (
                <g>
                  <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" strokeWidth={2} />
                  {/* <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" /> */}
                  <text x={ex} y={ey - 10} textAnchor={textAnchor} fill={fill} className="font-heading text-lg">
                    {chartData[index].label}
                  </text>
                  <text
                    x={ex}
                    y={ey}
                    dy={20}
                    textAnchor={textAnchor}
                    fill={theme === "dark" ? "white" : "black"}
                    className="font-heading text-base"
                  >
                    {chartData[index].description}
                  </text>
                  <text
                    x={ex}
                    y={ey}
                    dy={40}
                    textAnchor={textAnchor}
                    fill={theme === "dark" ? "white" : "black"}
                    className="font-heading text-base"
                  >
                    {chartData[index]?.description2}
                  </text>
                </g>
              )
            }}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <>
                      <svg
                        x={Number(viewBox.cx) - 38}
                        y={Number(viewBox.cy) - 50}
                        width="97"
                        height="53"
                        viewBox="0 0 97 53"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.0674 35.9644C15.4257 36.3334 10.7614 37.4211 6.96397 40.9951C4.63185 43.1706 0.669292 48.1431 2.44419 51.0568C3.16653 52.261 4.77631 52.9603 6.13843 52.9991C7.91332 53.0381 8.7595 51.9308 11.8965 49.9108C15.5701 47.5217 16.148 47.9295 17.2418 46.8223C18.3151 45.7347 20.1106 42.9959 18.0674 35.9837V35.9644Z"
                          fill="#FF1F70"
                        />
                        <path
                          d="M52.8294 35.3784C52.729 34.0816 52.8093 32.9615 52.9096 32.0575C51.9271 31.2126 50.7442 30.0532 49.5012 28.5795C46.1329 24.5315 44.4689 20.346 43.1055 16.8287C41.221 11.9553 41.7622 11.6409 40.3188 9.40081C37.8327 5.569 34.3442 3.62363 32.7402 2.73936C30.5147 1.54071 27.4272 -0.129573 23.5576 0.00797974C19.7083 0.145528 17.8236 1.99266 12.3703 5.09739C9.60352 6.66942 5.45335 8.8506 0 10.9728C1.48363 12.0929 3.92962 13.6256 7.19762 14.0972C11.3277 14.7064 12.9918 13.1147 15.1772 14.4903C18.0042 16.2587 17.4026 20.2871 20.3699 21.1517C20.6705 21.2302 21.5127 21.4857 22.3748 21.1517C24.2995 20.4049 23.8785 17.7521 25.5625 16.0623C27.2267 14.392 30.3343 14.274 32.3593 14.8832C35.8879 15.964 36.1685 19.3242 40.3389 24.669C44.6092 30.1122 45.6117 28.2847 47.9173 32.0968C51.6064 38.1688 49.4611 43.435 54.3129 48.5441C54.734 48.9961 56.0973 50.4306 56.6987 50.1161C57.5209 49.6838 56.5183 46.2647 55.3956 43.0814C53.1101 38.9352 52.8494 35.3784 52.8494 35.3784H52.8294Z"
                          fill="#FF1F70"
                        />
                        <path
                          d="M94.6126 36.2516C84.0799 23.6909 56.4738 31.9271 53.8456 32.7331C53.344 32.3202 52.7021 31.7896 52 31.1408C52.3008 31.416 52.5818 31.6715 52.8426 31.9074C52.7422 32.8116 52.6621 33.9321 52.7623 35.2294C52.7623 35.2294 53.0432 38.7873 55.3103 42.9349C55.7316 44.0945 56.1127 45.2936 56.4137 46.3748C56.0525 45.0577 55.531 43.5442 55.0294 42.1485C56.1127 41.6572 57.9184 40.8709 60.2255 40.1828C67.2874 38.0797 72.6843 38.6693 90.6001 39.7898C93.6094 39.9864 95.997 40.124 97 40.1828C96.3379 38.6497 95.5154 37.3524 94.6126 36.2713V36.2516Z"
                          fill="url(#paint0_linear_234_10)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_234_10"
                            x1="52.0199"
                            y1="37.8438"
                            x2="97.0201"
                            y2="37.8438"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FF1F70" />
                            <stop offset="1" stopColor="#52C3FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={Number(viewBox.cy) + 40} className="fill-foreground text-lg font-bold">
                          {total.toLocaleString()}
                          {"M"}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 58} className="fill-muted-foreground">
                          GARA
                        </tspan>
                      </text>
                    </>
                  )
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="block xl:hidden">
        <div className="mt-8 flex flex-col flex-wrap justify-center gap-6">
          {chartData.map(({ label, description, description2, fill }) => (
            <div key={label} className="flex justify-center">
              <div>
                <p className="text-center font-heading text-2xl font-bold" style={{ color: fill }}>
                  {label}
                </p>
                <p className="text-center font-heading text-xl text-neutral-700 dark:text-neutral-200">
                  {description} {description2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
