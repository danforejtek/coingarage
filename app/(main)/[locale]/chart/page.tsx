"use client"
import React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

interface InvestmentData {
  date: string
  value: number
  id: number
  investment: number
  investmentSum: number
}

const investment = 45.5

const data = [
  { date: "21.02.2019", value: 4016.48 },
  { date: "21.03.2019", value: 4069.32 },
  { date: "21.04.2019", value: 5314.35 },
  { date: "21.05.2019", value: 8042.32 },
  { date: "21.06.2019", value: 10174.99 },
  { date: "21.07.2019", value: 10817.9 },
  { date: "21.08.2019", value: 10804.13 },
  { date: "21.09.2019", value: 10176.7 },
  { date: "21.10.2019", value: 8333 },
  { date: "21.11.2019", value: 8134.73 },
  { date: "21.12.2019", value: 7190.58 },
  { date: "21.01.2020", value: 8789 },
  { date: "21.02.2020", value: 9755.51 },
  { date: "21.03.2020", value: 6456.98 },
  { date: "21.04.2020", value: 6940 },
  { date: "21.05.2020", value: 9578.47 },
  { date: "21.06.2020", value: 9422 },
  { date: "21.07.2020", value: 9437.73 },
  { date: "21.08.2020", value: 11878 },
  { date: "21.09.2020", value: 10988.86 },
  { date: "21.10.2020", value: 13217.68 },
  { date: "21.11.2020", value: 18965.9 },
  { date: "21.12.2020", value: 24102.77 },
  { date: "21.01.2021", value: 35600 },
  { date: "21.02.2021", value: 58352.8 },
  { date: "21.03.2021", value: 58589.1 },
  { date: "21.04.2021", value: 56757.91 },
  { date: "21.05.2021", value: 42200 },
  { date: "21.06.2021", value: 35750 },
  { date: "21.07.2021", value: 32858 },
  { date: "21.08.2021", value: 49757.04 },
  { date: "21.09.2021", value: 43639 },
  { date: "21.10.2021", value: 66639.74 },
  { date: "21.11.2021", value: 60029.76 },
  { date: "21.12.2021", value: 49328.96 },
  { date: "21.01.2022", value: 41100 },
  { date: "21.02.2022", value: 39494.35 },
  { date: "21.03.2022", value: 41544.22 },
  { date: "21.04.2022", value: 42976 },
  { date: "21.05.2022", value: 29656.18 },
  { date: "21.06.2022", value: 21723 },
  { date: "21.07.2022", value: 23442.77 },
  { date: "21.08.2022", value: 21800 },
  { date: "21.09.2022", value: 19956 },
  { date: "21.10.2022", value: 19250 },
  { date: "21.11.2022", value: 16319 },
  { date: "21.12.2022", value: 16925 },
  { date: "21.01.2023", value: 23371.8 },
  { date: "21.02.2023", value: 25250 },
  { date: "21.03.2023", value: 28438.55 },
  { date: "21.04.2023", value: 28374.02 },
  { date: "21.05.2023", value: 27277.55 },
  { date: "21.06.2023", value: 30800 },
  { date: "21.07.2023", value: 30061.7 },
  { date: "21.08.2023", value: 26258.42 },
  { date: "21.09.2023", value: 27159.6 },
  { date: "21.10.2023", value: 30379.99 },
  { date: "21.11.2023", value: 37649.44 },
  { date: "21.12.2023", value: 44242.35 },
  { date: "21.01.2024", value: 41881.39 },
].map((item, index) => ({
  ...item,
  id: index,
  amountInBtc: investment / item.value,
}))

const investmentData = () => {
  let sum = 0
  let investmentSum = 0
  return data.map((item) => {
    sum += investment / item.value
    investmentSum += investment
    return {
      ...item,
      amountInBtc: investment / item.value,
      investmentSum: investmentSum,
      sumInBtc: sum,
      sumInUsd: sum * item.value,
    }
  })
}

export default function Chart() {
  const graphData = investmentData()
  return (
    <div className="container mx-auto h-[400px] pt-12">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="earningsInPercent" stroke="#a89432" /> */}
          <Line type="monotone" dataKey="sumInUsd" stroke="#c930ba" />
          <Line type="monotone" dataKey="investmentSum" stroke="#329da8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
