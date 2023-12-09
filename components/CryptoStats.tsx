"use client"
import useSWR from "swr"
import CryptoTable from "./CryptoTable"
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"

const parseData = (data) => {
  try {
    if (typeof data === "object") {
      const market = data?.crypto_market
      const trending = Object.keys(data?.trending).map((item) => {
        return { name: item.split("_")[0], ...market[item] }
      })
      const topGainers = Object.keys(data?.top_gainer).map((item) => {
        return { name: item.split("_")[0], ...market[item] }
      })
      const recentlyAdded = Object.keys(data?.recently_added).map((item) => {
        return { name: item.split("_")[0], ...market[item] }
      })
      return { trending, topGainers, recentlyAdded }
    }
    return { trending: [], topGainers: [], recentlyAdded: [] }
  } catch (error) {
    return { trending: [], topGainers: [], recentlyAdded: [] }
  }
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function CryptoStats() {
  const [parsedData, setParsedData] = useState({ trending: [], topGainers: [], recentlyAdded: [] })
  const { data, error, isLoading } = useSWR("https://api.coingarage.io/market/market-data/usdt", fetcher)
  // const { data, error, isLoading } = useSWR("/api/crypto-market", fetcher)

  useEffect(() => {
    if (data) {
      setParsedData(parseData(data))
    }
  }, [data, error, isLoading])

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-16">
      {!isLoading ? (
        <>
          <CryptoTable heading="Trending" data={parsedData?.trending} />
          <CryptoTable heading="Top Gainers" data={parsedData?.topGainers} />
          <CryptoTable heading="Recently Added" data={parsedData?.recentlyAdded} />
        </>
      ) : (
        <>
          <Skeleton className="h-[532px] w-full rounded-2xl" />
          <Skeleton className="h-[532px] w-full rounded-2xl" />
          <Skeleton className="h-[532px] w-full rounded-2xl" />
        </>
      )}
    </div>
  )
}
