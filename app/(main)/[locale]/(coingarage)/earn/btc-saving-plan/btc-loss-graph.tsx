"use client"
import * as React from "react"
import { LineChart } from "@mui/x-charts/LineChart"
import { LineSeriesType } from "@mui/x-charts"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { btc1, btc2 } from "./data"

const yearFormatter = (date: Date) => date.toLocaleDateString()
const monthFormatter = (date: Date) => date.toLocaleDateString("default", { month: "short" }) + " " + date.getFullYear()
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

// convert weekly data to monthly data
const convertToMonthly = (data: any) => {
  let savedMonth = 0
  let monthlyData = []
  for (let i = 0; i < data.length; i++) {
    let actualMonth: number = new Date(data[i].time).getMonth()
    if (actualMonth !== savedMonth) {
      monthlyData.push(data[i])
      savedMonth = actualMonth
    }
  }
  return monthlyData
}

type Props = {
  amount: string
  frequency: number
  dateOpening: string
  dateClosing: string
}

function formatInUSD(amount: number | null) {
  if (amount === null || Number.isNaN(amount)) return "$"
  return amount.toLocaleString("en-US", { style: "currency", currency: "USD" })
}

// api returns 250 weeks of data at once
// calculate the date 249 weeks ago from today (to have some overlap with the data)
const minDate = new Date()
minDate.setDate(minDate.getDate() - 249 * 7)

// how this component works:
// fetch intial btc data from the api -  from actual date to 250 weeks ago (api limit)
// if user sets dateOpening earlier than minDate, fetch the rest of the data
// there will be no more fetching, at this moment all BTC data is stored in mainData
// if a user sets different time span, slice the mainData
// calculate the the savings time lines and display them on the graph

export default function BtcLossGraph({ amount, frequency, dateOpening, dateClosing }: Props) {
  const t = useTranslations("eezy-trader.BtcSaving")
  const [series, setSeries] = useState<LineSeriesType[]>([])
  const [dates, setDates] = useState<Date[]>([])
  const [nbSeries, setNbSeries] = useState(1)
  const amountNum: number = parseInt(amount)
  const dateOpeningDate = new Date(dateOpening).getTime()
  const dateClosingDate = new Date(dateClosing).getTime() + 14 * 24 * 60 * 60 * 1000
  const [btcPosY, setBtcPosY] = useState<number>(0)
  const [conPosY, setConPosY] = useState<number>(0)
  const [deposit, setDeposit] = useState<number>(0)
  const [btcReturn, setBtcReturn] = useState<number>(0)
  const [conReturn, setConReturn] = useState<number>(0)
  const [refreshChart, setRefreshChart] = useState<boolean>(false)
  const [noMoreFetching, setNoMoreFetching] = useState<boolean>(false)
  // store the fetched graph data
  const [mainData, setMainData] = useState<any>([])

  // day interval 1440 , week interval 10080, month interval 43200
  const url = `https://api.coingarage.io/market/charts?base=BTC&quote=USDT&ts=${new Date().getTime()}&interval=10080`

  React.useEffect(() => {
    // fetch data once when the page loads and store them for future use
    const fetchData = async () => {
      try {
        // const response = await fetch(url)
        // let data = await response.json()
        // delete btc1
        let data = btc1;
        setMainData(data)
        //setMainData(data.reverse())
      } catch (error) {
        console.error("Error fetching chart data:", error)
      }
    }

    fetchData()
  }, [])

  React.useEffect(() => {
    // if user sets dateOpening earlier than minDate, fetch more data
    // but do it only once, noMoreFetching prevents another data fetch

    if (new Date(dateOpening).getTime() < minDate.getTime() && !noMoreFetching) {
      const fetchData = async () => {
        try {
          // const response = await fetch(
          //   `https://api.coingarage.io/market/charts?base=BTC&quote=USDT&ts=${minDate.getTime()}&interval=10080`
          // )
          // let data = await response.json()
          // delete btc2
          let data = btc2;
          
          // uncomment to reverse the data
          //data = data.reverse()
          // find the index where the new data should be merged
          const mergeIndex = data.findIndex((entry: any) => entry.time == mainData[0].time)
          // merge the new data with the old data
          setMainData([...data.slice(0, mergeIndex), ...mainData])
          setNoMoreFetching(true)
        } catch (error) {
          console.error("Error fetching chart data:", error)
        }
      }

      fetchData()
    }
  }, [dateOpening])

  React.useEffect(() => {
    // if amount is not a number, dont try to calculate the chart
    if (isNaN(amountNum) || mainData.length === 0) {
      setSeries([])
      setNbSeries(1)
      return
    }

    const savingAccountInterest = 1 + 0.03 / 12
    let freq = frequency

    let indexOpen = mainData.findIndex((entry: any) => entry.time >= dateOpeningDate)
    let indexClose = mainData.findIndex((entry: any) => entry.time >= dateClosingDate)
    let slicedData = [...mainData.slice(indexOpen, indexClose)]
    if (frequency === 4) {
      slicedData = convertToMonthly(slicedData)
      freq = 1
    }

    const dataLength = slicedData.length
    let conservativeArray: number[] = []
    let btcArray: number[] = []
    let datesArray: Date[] = []
    let btcUsdArary: number[] = []

    // if monthly frequency, we add interest once a month
    // if weekly or double weekly frequency, we add interest every 4 weeks
    const everyFourWeeks = frequency === 4 ? 1 : 4

    // count conservative sum during the time
    for (let i = 0; i < dataLength; i += freq) {
      if (i === 0) {
        conservativeArray[0] = amountNum * savingAccountInterest
      } else {
        let currentAmount: number = 0
        if (i % everyFourWeeks === 0) {
          // once a month we add interest
          currentAmount = (conservativeArray[i / freq - 1] + amountNum) * savingAccountInterest
        } else {
          currentAmount = conservativeArray[i / freq - 1] + amountNum
        }
        conservativeArray.push(currentAmount)
      }
    }

    // count btc sum during the time
    for (let i = 0; i < dataLength; i += freq) {
      // if frequency is 4 and i=8 then we are at the second iteration (8/4 = 2)
      if (i === 0) {
        btcArray[0] = amountNum / slicedData[0].close
        datesArray[0] = new Date(slicedData[0].time)
      } else {
        let currentBtcAmount: number = btcArray[i / freq - 1] + amountNum / slicedData[i].close
        btcArray.push(currentBtcAmount)
        // also dates has to be pushed in the right frequency
        datesArray.push(new Date(slicedData[i].time))
      }
    }
    // convert btc sum to usd
    for (let i = 0; i < btcArray.length; i++) {
      btcUsdArary[i] = Math.round(btcArray[i] * slicedData[i * freq].close)
    }

    setDates(datesArray)
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
      setTimeout(() => {
        setRefreshChart((prev) => !prev)
      }, 222)
    }, 2000)

    // conservative array and btc array has the right length - number of records in the chart
    setDeposit(parseInt(amount) * conservativeArray.length)
    setBtcReturn(btcUsdArary[btcUsdArary.length - 1])
    setConReturn(conservativeArray[conservativeArray.length - 1])
  }, [amount, frequency, dateOpening, dateClosing, mainData.length])

  // calculate the position of the labels
  React.useLayoutEffect(() => {
    const conservative = document.querySelector(".MuiLineElement-series-1")
    const btc = document.querySelector(".MuiLineElement-series-2")

    setBtcPosY(btc?.getBoundingClientRect().height ?? -333)
    setConPosY(conservative?.getBoundingClientRect().height ?? -333)
  }, [amount, frequency, dateOpening, dateClosing, refreshChart])

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
          <span className="absolute right-5 text-[#00ABFE]" style={{ bottom: conPosY + 50 + "px" }}>
            {isNaN(conReturn) ? "" : Math.round((conReturn / deposit - 1) * 1000) / 10 + " %"}
          </span>
          <span className="absolute right-5 text-[#3FCC88]" style={{ bottom: btcPosY + 50 + "px" }}>
            {isNaN(btcReturn) ? "" : Math.round((btcReturn / deposit - 1) * 1000) / 10 + " %"}
          </span>
          <LineChart
            yAxis={[{ tickLabelStyle: { fill: "white", fontWeight: "lighter" }, valueFormatter: thousandsFormatter }]}
            xAxis={[
              {
                tickLabelStyle: { fill: "white", fontWeight: "lighter" },
                data: dates,
                scaleType: "time",
                valueFormatter: frequency === 4 ? monthFormatter : yearFormatter,
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
