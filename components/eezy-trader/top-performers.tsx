"use client"

import useSWR from "swr"
import { TableComp } from "@/components/eezy-trader/table"

const fetcher = (...args: any[]) =>
  fetch(...args, { headers: { referer: "https://coingarage.io/" } }).then((res) => res.json())

type Data = {
  performer_login_name: string
  roi: number
}

export function TopPerformers({ heading }: { heading: string }) {
  const { data, error, isLoading } = useSWR("https://api.coingarage.io/grid/top-performers", fetcher)

  const transformedData = data
    ?.map((item: Data) => {
      return { name: item.performer_login_name, value: item.roi }
    })
    .slice(0, 6)

  return <>{<TableComp data={transformedData} isLoading={isLoading} heading={heading} />}</>
}
