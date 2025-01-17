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

function formatInUSD(amount: number | null) {
  if (amount === null || Number.isNaN(amount)) return "$"
  return amount.toLocaleString("en-US", { style: "currency", currency: "USD" })
}

export default function BtcLossGraph({ amount, frequency, dateOpening, dateClosing }: Props) {
  const t = useTranslations("eezy-trader.BtcSaving")
  const [series, setSeries] = React.useState<LineSeriesType[]>([])
  const [dates, setDates] = React.useState<Date[]>([])
  const [nbSeries, setNbSeries] = React.useState(1)
  const amountNum: number = parseInt(amount)
  const dateClosingDate = new Date(dateClosing).getTime()
  const dateOpeningDate = new Date(dateOpening).getTime()
  const [btcPosY, setBtcPosY] = React.useState<number>(0)
  const [conPosY, setConPosY] = React.useState<number>(0)
  const [deposit, setDeposit] = React.useState<number>(0)
  const [btcReturn, setBtcReturn] = React.useState<number>(0)
  const [conReturn, setConReturn] = React.useState<number>(0)

  const [data, setData] = React.useState<any>([])

  // day interval 1440 , week interval 10080, month interval 43200
  const url = `https://api.coingarage.io/market/charts?base=BTC&quote=USDT&ts=${new Date().getTime()}&interval=43200`

  React.useEffect(() => {
    // fetch data once when the page loads and store them for future use
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        let data = await response.json()
        setData(data.reverse())
      } catch (error) {
        console.error("Error fetching chart data:", error)
      }
    }

    fetchData()
  }, [])

  React.useEffect(() => {
    // if amount is not a number, dont try to calculate the chart
    if (isNaN(amountNum) || data.length === 0) {
      setSeries([])
      setNbSeries(1)
      return
    }

    const savingAccountInterest = 0.03

    let indexOpen = data.findIndex((entry: any) => entry.time >= dateOpeningDate)
    let indexClose = data.findIndex((entry: any) => entry.time >= dateClosingDate)
    const dataFiltered = [...data.slice(indexOpen, indexClose)]

    const dataLength = dataFiltered.length
    let conservativeArray: number[] = []
    conservativeArray[0] = amountNum
    let btcArray: number[] = []
    btcArray[0] = amountNum / dataFiltered[0].close

    let btcUsdArary: number[] = []
    // count conservative sum during the time
    for (let i = 1; i < dataLength; i++) {
      let currentAmount: number = Math.round((conservativeArray[i - 1] + amountNum) * (1 + savingAccountInterest / 12))
      conservativeArray.push(currentAmount)
    }
    // count btc sum during the time
    for (let i = 1; i < dataLength; i++) {
      let currentBtcAmount: number = btcArray[i - 1] + amountNum / dataFiltered[i].close
      btcArray.push(currentBtcAmount)
    }
    // convert btc sum to usd
    for (let i = 0; i < dataLength; i++) {
      btcUsdArary[i] = Math.round(btcArray[i] * dataFiltered[i].close)
    }

    setDates(dataFiltered.map((entry: any) => new Date(entry.time)))
    setSeries([
      {
        id: "1",
        type: "line",
        data: conservativeArray,
        area: false,
        color: "#00abfe",
        label: t("dcaCalculator.normalSavings"),
        showMark: false,
        valueFormatter: formatInUSD,
      },
      {
        id: "2",
        type: "line",
        data: btcUsdArary,
        area: false,
        color: "#3FCC88",
        label: t("dcaCalculator.btcSavings"),
        showMark: false,
        valueFormatter: formatInUSD,
      },
    ])
    setTimeout(() => {
      setNbSeries(2)
    }, 2000)
    setDeposit(parseInt(amount) * dataFiltered.length)
    setBtcReturn(btcUsdArary[btcUsdArary.length - 1])
    setConReturn(conservativeArray[conservativeArray.length - 1])
  }, [amount, frequency, dateOpening, dateClosing])

  React.useEffect(() => {
    const conservative = document.querySelector(".MuiLineElement-series-1")
    const btc = document.querySelector(".MuiLineElement-series-2")

    setBtcPosY(btc?.getBoundingClientRect().height ?? 0)
    setConPosY(conservative?.getBoundingClientRect().height ?? 0)
    
  }, [amount, frequency, dateOpening, dateClosing])

  return (
    <div className="relative w-full">
      <div className="flex flex-wrap justify-evenly gap-2">
        <span className="label inline-block h-10 rounded-xlg border-2  border-primary bg-[color:hsla(338,100%,56%,0.1)] px-4 leading-9 !opacity-100">
          {t("dcaCalculator.yourDeposit")}
          <span className="font-bold text-primary">
            {"\u00a0"} {formatInUSD(deposit)}
          </span>
        </span>
        <span className="label inline-block h-10 rounded-xlg border-2 border-[#00ABFE] bg-[color:hsla(200,100%,50%,0.1)] px-4 leading-9 !opacity-100">
          {t("dcaCalculator.normalSavings")}
          <span className="font-bold text-[#00ABFE]">
            {"\u00a0"} {formatInUSD(conReturn ?? null)}
          </span>
        </span>
        <span className="label inline-block h-10 rounded-xlg border-2  border-[#3FCC88] bg-[color:hsla(151,58%,52%,0.1)]  px-4 leading-9 !opacity-100">
          {t("dcaCalculator.btcSavings")}
          <span className="font-bold  text-[#3FCC88]">
            {"\u00a0"} {formatInUSD(btcReturn ?? null)}
          </span>
        </span>
      </div>

      <div id="graphFrame">
        <div>
          {isNaN(amountNum) && (
            <p className="index absolute  left-[50%] top-[50%] z-20 translate-x-[-50%] translate-y-[-50%] bg-backgroundMuted p-4 text-center">
              {t("dcaCalculator.enterAmountCta")}
            </p>
          )}
        </div>
        <div>
          <span className="absolute right-5" style={{ bottom: conPosY + 30 + "px" }}>
            {Math.round(conReturn / deposit * 100)} %
          </span>
          <span className="absolute right-5" style={{ bottom: btcPosY + 30 + "px" }}>
            {Math.round(btcReturn / deposit * 100)} %
          </span>
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
            tooltip={{ trigger: "axis" }}
          />
        </div>
      </div>
    </div>
  )
}
