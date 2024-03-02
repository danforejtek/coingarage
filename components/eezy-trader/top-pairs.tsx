"use client"

import useSWR from "swr"
import { TableComp } from "@/components/eezy-trader/table"

const fetcher = (...args: any[]) =>
  fetch(...args, { headers: { referer: "https://coingarage.io/" } }).then((res) => res.json())

export function TopPairs() {
  const { data, error, isLoading } = useSWR("https://api.coingarage.io/grid/top-pairs", fetcher)
  return <>{/* <TableComp data={data} /> */}</>
}
