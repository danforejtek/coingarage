"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import {
  LineChart,
  AreaChart,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { formatCurrency } from "@/lib/utils"

interface InvestmentData {
  date: string
  amountInBtc: number
  investmentSum: number
  sumInBtc: number
  investmentValueUsd: number
}

type InvestmentDataInputParams = {
  amount: string
  frequency: string
  monthsAmount: string
}

// const investment = 45.5

const data = [
  { date: "21.02.2019", dateLabel: "02/2019", value: 4016.48 },
  { date: "21.03.2019", dateLabel: "03/2019", value: 4069.32 },
  { date: "21.04.2019", dateLabel: "04/2019", value: 5314.35 },
  { date: "21.05.2019", dateLabel: "05/2019", value: 8042.32 },
  { date: "21.06.2019", dateLabel: "06/2019", value: 10174.99 },
  { date: "21.07.2019", dateLabel: "07/2019", value: 10817.9 },
  { date: "21.08.2019", dateLabel: "08/2019", value: 10804.13 },
  { date: "21.09.2019", dateLabel: "09/2019", value: 10176.7 },
  { date: "21.10.2019", dateLabel: "10/2019", value: 8333 },
  { date: "21.11.2019", dateLabel: "11/2019", value: 8134.73 },
  { date: "21.12.2019", dateLabel: "12/2019", value: 7190.58 },
  { date: "21.01.2020", dateLabel: "01/2020", value: 8789 },
  { date: "21.02.2020", dateLabel: "02/2020", value: 9755.51 },
  { date: "21.03.2020", dateLabel: "03/2020", value: 6456.98 },
  { date: "21.04.2020", dateLabel: "04/2020", value: 6940 },
  { date: "21.05.2020", dateLabel: "05/2020", value: 9578.47 },
  { date: "21.06.2020", dateLabel: "06/2020", value: 9422 },
  { date: "21.07.2020", dateLabel: "07/2020", value: 9437.73 },
  { date: "21.08.2020", dateLabel: "08/2020", value: 11878 },
  { date: "21.09.2020", dateLabel: "09/2020", value: 10988.86 },
  { date: "21.10.2020", dateLabel: "10/2020", value: 13217.68 },
  { date: "21.11.2020", dateLabel: "11/2020", value: 18965.9 },
  { date: "21.12.2020", dateLabel: "12/2020", value: 24102.77 },
  { date: "21.01.2021", dateLabel: "01/2021", value: 35600 },
  { date: "21.02.2021", dateLabel: "02/2021", value: 58352.8 },
  { date: "21.03.2021", dateLabel: "03/2021", value: 58589.1 },
  { date: "21.04.2021", dateLabel: "04/2021", value: 56757.91 },
  { date: "21.05.2021", dateLabel: "05/2021", value: 42200 },
  { date: "21.06.2021", dateLabel: "06/2021", value: 35750 },
  { date: "21.07.2021", dateLabel: "07/2021", value: 32858 },
  { date: "21.08.2021", dateLabel: "08/2021", value: 49757.04 },
  { date: "21.09.2021", dateLabel: "09/2021", value: 43639 },
  { date: "21.10.2021", dateLabel: "10/2021", value: 66639.74 },
  { date: "21.11.2021", dateLabel: "11/2021", value: 60029.76 },
  { date: "21.12.2021", dateLabel: "12/2021", value: 49328.96 },
  { date: "21.01.2022", dateLabel: "01/2022", value: 41100 },
  { date: "21.02.2022", dateLabel: "02/2022", value: 39494.35 },
  { date: "21.03.2022", dateLabel: "03/2022", value: 41544.22 },
  { date: "21.04.2022", dateLabel: "04/2022", value: 42976 },
  { date: "21.05.2022", dateLabel: "05/2022", value: 29656.18 },
  { date: "21.06.2022", dateLabel: "06/2022", value: 21723 },
  { date: "21.07.2022", dateLabel: "07/2022", value: 23442.77 },
  { date: "21.08.2022", dateLabel: "08/2022", value: 21800 },
  { date: "21.09.2022", dateLabel: "09/2022", value: 19956 },
  { date: "21.10.2022", dateLabel: "10/2022", value: 19250 },
  { date: "21.11.2022", dateLabel: "11/2022", value: 16319 },
  { date: "21.12.2022", dateLabel: "12/2022", value: 16925 },
  { date: "21.01.2023", dateLabel: "01/2023", value: 23371.8 },
  { date: "21.02.2023", dateLabel: "02/2023", value: 25250 },
  { date: "21.03.2023", dateLabel: "03/2023", value: 28438.55 },
  { date: "21.04.2023", dateLabel: "04/2023", value: 28374.02 },
  { date: "21.05.2023", dateLabel: "05/2023", value: 27277.55 },
  { date: "21.06.2023", dateLabel: "06/2023", value: 30800 },
  { date: "21.07.2023", dateLabel: "07/2023", value: 30061.7 },
  { date: "21.08.2023", dateLabel: "08/2023", value: 26258.42 },
  { date: "21.09.2023", dateLabel: "09/2023", value: 27159.6 },
  { date: "21.10.2023", dateLabel: "10/2023", value: 30379.99 },
  { date: "21.11.2023", dateLabel: "11/2023", value: 37649.44 },
  { date: "21.12.2023", dateLabel: "12/2023", value: 44242.35 },
  { date: "21.01.2024", dateLabel: "01/2024", value: 41881.39 },
]

const investmentData = ({ monthsAmount, amount, frequency }: InvestmentDataInputParams) => {
  let sum = 0
  let investmentSum = 0
  let investment = parseInt(amount) * parseInt(frequency)
  let filteredData = data.slice(-parseInt(monthsAmount))
  return filteredData.map((item, index) => {
    sum += investment / item.value
    investmentSum += investment
    return {
      ...item,
      amountInBtc: investment / item.value,
      investmentSum: investmentSum,
      sumInBtc: sum,
      investmentValueUsd: sum * item.value,
    }
  })
}

const defaultValues = {
  amount: "45",
  frequency: "1",
  monthsAmount: "36",
}

const formatter = (value: number) => {
  return formatCurrency(value)
}

export default function Chart() {
  const { resolvedTheme } = useTheme()
  const [chartData, setChartData] = useState<Array<InvestmentData>>(investmentData(defaultValues))
  const [theme, setTheme] = useState("")

  useEffect(() => {
    setTheme(resolvedTheme !== "dark" ? "" : "dark/")
  }, [resolvedTheme])

  const form = useForm({
    defaultValues: defaultValues,
    mode: "onChange",
  })

  const amount = form.watch("amount")
  const frequency = form.watch("frequency")
  const monthsAmount = form.watch("monthsAmount")

  useEffect(() => {
    // console.log(amount, frequency, monthsAmount)
    setChartData(investmentData({ amount, frequency, monthsAmount }))
  }, [amount, frequency, monthsAmount])

  const onSubmit = () => {}

  return (
    <div className="container mx-auto mt-12">
      <h1 className="mb-6 flex flex-col gap-3 text-center font-heading text-5xl font-bold">Earn 21</h1>
      <div className="items-ce  grid grid-cols-1 items-center justify-between pt-12 md:grid-cols-[1fr_1fr]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-row items-center gap-2">
                <span className="whitespace-nowrap">By investing into Bitcoin every</span>
                <FormField
                  control={form.control}
                  name="frequency"
                  render={({ field }) => (
                    <FormItem className="w-[120px]">
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="30">day</SelectItem>
                          <SelectItem value="4">week</SelectItem>
                          <SelectItem value="1">month</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <span>for last</span>
                <FormField
                  control={form.control}
                  name="monthsAmount"
                  render={({ field }) => (
                    <FormItem className="w-[120px]">
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="12">1 year</SelectItem>
                          <SelectItem value="24">2 years</SelectItem>
                          <SelectItem value="36">3 years</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <span>amount</span>
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem className="w-[120px]">
                      <div className="flex flex-col gap-2">
                        <FormControl>
                          <Input {...field} type="number" step={10} />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <span>you would have</span>
                <span className="text-lg font-bold text-primary">
                  {formatCurrency(chartData?.[chartData?.length - 1]?.investmentValueUsd)}
                </span>
                <span>today.</span>
              </div>
              <div className="mt-8 flex flex-col items-center rounded-2xl bg-primary/10 p-8">
                <span>Investment appreciation</span>
                <span className="text-lg font-bold text-primary">
                  <span>+</span>
                  <span> </span>
                  {formatCurrency(chartData?.[chartData?.length - 1]?.investmentSum)}
                </span>
              </div>
            </div>
          </form>
        </Form>
        <div className="mt-12 h-[448px] md:mt-0">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              // width={600}
              // height={400}
              data={chartData}
              // margin={{
              //   top: 5,
              //   right: 30,
              //   left: 20,
              //   bottom: 5,
              // }}
            >
              <CartesianGrid />
              <XAxis dataKey="dateLabel" />
              <YAxis />
              <Tooltip formatter={formatter} />
              <Legend />
              {/* <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
              {/* <Line type="monotone" dataKey="earningsInPercent" stroke="#a89432" /> */}
              <Area
                name="Investment value (USD)"
                type="monotone"
                dataKey="investmentValueUsd"
                stroke="rgb(255, 31, 113)"
                strokeWidth={2}
                fill="rgb(255, 31, 113)"
                dot={false}
              />
              <Line
                name="Total deposit (USD)"
                type="monotone"
                dataKey="investmentSum"
                stroke="rgb(82, 195, 255)"
                strokeWidth={3}
                dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
