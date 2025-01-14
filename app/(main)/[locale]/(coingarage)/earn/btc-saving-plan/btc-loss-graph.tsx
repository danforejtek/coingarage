"use client"
import * as React from "react"
import { LineChart } from "@mui/x-charts/LineChart"
import { LineSeriesType } from "@mui/x-charts"
import { useTranslations } from "next-intl"

const yearFormatter = (date: Date) => date.toLocaleDateString()
const thousandsFormatter = (value: string) => {
  const valueNum = parseInt(value)
  if (valueNum > 1000000) {
    return `${valueNum / 1000000}M`
  } else if (valueNum > 1000) {
    return `${valueNum / 1000}k`
  } else {
    return valueNum.toString()
  }
}

type Props = {
  amount: string
  frequency: string
  dateOpening: string
  dateClosing: string
}

export default function BtcLossGraph({ amount, frequency, dateOpening, dateClosing }: Props) {
  const t = useTranslations("eezy-trader.BtcSaving")
  const [series, setSeries] = React.useState<LineSeriesType[]>([])
  const [dates, setDates] = React.useState([])
  const [nbSeries, setNbSeries] = React.useState(1)
  const amountNum: number = parseInt(amount)
  const dateOpeningDate = new Date(dateOpening).getTime()
  console.log(dateOpeningDate)
  console.log(amountNum)
  const url = `https://api.coingarage.io/market/charts?base=BTC&quote=USDT&ts=${dateOpeningDate}&interval=1440`
  console.log(url)

  React.useEffect(() => {
    const fetchData = async () => {
      // if amount is not a number, dont try to fetch data or render chart
      if (isNaN(amountNum)) {
        setSeries([])
        setNbSeries(1)
        return
      }
      try {
        const response = await fetch(url)
        let data = await response.json()

        data = data.reverse()
        const dataLength = data.length
        let conservativeArray: number[] = []
        conservativeArray[0] = amountNum
        let btcArray: number[] = []
        btcArray[0] = amountNum / data[0].close

        let btcUsdArary: number[] = []
        // count conservative sum during the time
        for (let i = 1; i < dataLength; i++) {
          let currentAmount: number = Math.round((conservativeArray[i - 1] + amountNum) * (1 + 0.03 / 12))
          conservativeArray.push(currentAmount)
        }
        // count btc sum during the time
        for (let i = 1; i < dataLength; i++) {
          let currentBtcAmount: number = btcArray[i - 1] + amountNum / data[i].close
          btcArray.push(currentBtcAmount)
        }
        // convert btc sum to usd
        for (let i = 0; i < dataLength; i++) {
          btcUsdArary[i] = btcArray[i] * data[i].close
        }

        setDates(data.map((entry: any) => new Date(entry.time)))
        setSeries([
          {
            id: "1",
            type: "line",
            data: conservativeArray,
            area: false,
            color: "#4c93dc",
            label: "Conservative 3% pa",
            showMark: false,
          },
          { id: "2", type: "line", data: btcUsdArary, area: false, color: "#e60040", label: "BTC", showMark: false },
        ])
        setTimeout(() => {
          setNbSeries(2)
        }, 2000)
      } catch (error) {
        console.error("Error fetching chart data:", error)
      }
    }

    fetchData()
  }, [amount, frequency, dateOpening, dateClosing])

  console.log(series)

  return (
    <div id="graphFrame" className="relative w-full">
      <div>
        {isNaN(amountNum) && (
          <p className="index absolute left-[50%] top-[50%] z-20 translate-x-[-50%] translate-y-[-50%] bg-card p-4 text-center">
            {t("dcaCalculator.enterAmountCta")}
          </p>
        )}
      </div>
      <div>
        <LineChart
          yAxis={[{ tickLabelStyle: { fill: "white", fontWeight: "lighter" }, valueFormatter: thousandsFormatter }]}
          xAxis={[
            {
              tickLabelStyle: { fill: "white", fontWeight: "lighter" },
              data: dates,
              scaleType: "time",
              valueFormatter: yearFormatter,
            },
          ]}
          series={[...series.slice(0, nbSeries)]}
          skipAnimation={false}
          height={500}
          sx={{
            "& .MuiChartsAxis-line": { stroke: "white !important" },
            "& .MuiChartsLegend-root": { display: "none" },
            "& *:not(circle):not(path)": { transitionDuration: "2s" },
          }}
        />
      </div>
    </div>
  )
}
