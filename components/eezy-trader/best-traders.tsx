"use client"

import { useTranslations } from "next-intl"
import React, { useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@mantine/hooks"
import BestTradersResult from "./best-trader-results"
import useSWR from "swr"
import { getTradersData } from "@/app/(main)/[locale]/(coingarage)/trading-bot/lib/data"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Skeleton } from "../ui/skeleton"

type BestTradersProps = {
  interval?: "D" | "W" | "M"
}

export type TraderData = {
  name: string
  pnl: Record<string, number>
  c_pnl: Record<string, number>
  roi: number
  total_pnl: number
  active_bots: number
  long: boolean
  short: boolean
  dca: boolean
  grid: boolean
}

const BestTraders = ({ interval = "M" }: BestTradersProps) => {
  const [selectedInterval, setSelectedInterval] = useState(interval)
  // fetched via server action, URL here is just cache key
  const { data, error, isLoading } = useSWR(`https://api.coingarage.io/grid/charts?interval=${selectedInterval}`, () =>
    getTradersData({ interval: selectedInterval })
  )
  // const isLoading = false
  // const data = generateMockTraderData(12)

  // convert data object to array
  const dataArray = data
    ? Object.entries(data).map((entry) => {
        return { id: entry[0], ...entry[1] }
      })
    : []

  const sortedData = dataArray.sort((a, b) => b.roi - a.roi)

  console.log('tbots')
  console.log(sortedData)

  console.log(sortedData)

  const traders = data ? Object.keys(data) : []
  const half = Math.ceil(traders.length / 2)
  const t = useTranslations("eezyTrader.results")
  const isTablet = useMediaQuery("(max-width: 1280px)")
  const isMobile = useMediaQuery("(max-width: 1024px)")
  const handleChangeInterval = (value: "D" | "W" | "M") => {
    setSelectedInterval(value)
  }

  const SkeletonLoader = ({ count }: { count: number }) => (
    <div className="flex flex-wrap">
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className="mb-16 h-[176px] w-full px-4 md:w-1/2 lg:mb-12 lg:w-1/3 lg:p-2">
          <Skeleton className="h-[140px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="mt-4 h-4 w-full" />
            <Skeleton className="h-4 w-[80%]" />
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="container flex flex-col justify-between xl:flex-row">
      <div className="mb-14 ml-4 lg:mx-24 xl:mx-8 xl:mt-14 xl:max-w-[400px]">
        <h4 className="text-left font-heading text-xl font-bold text-primary lg:text-start lg:text-2xl">
          {t("subheader")}
        </h4>
        <h3 className="mb-6 text-left font-heading text-4xl font-bold lg:text-start">{t("header")}</h3>
        <p className="mb-4 text-left font-heading font-normal lg:text-start">{t("text1")}</p>
        <p className="text-left font-heading lg:text-start">{t("text2")}</p>
        <Button className="mt-8 hidden w-32 xl:block">{t("startBtn")}</Button>
      </div>

      <div id="carousel-root-with-arrows" className="mx-auto xl:mx-0 xl:mr-10">
        <div id="carousel-body" className="w-[90vw] sm:w-[568px] md:w-[710px] lg:w-[768px]">
          <div className="mb-4 mr-4 flex flex-row-reverse sm:mr-6 md:mr-2 lg:mr-8">
            <Select defaultValue={selectedInterval} onValueChange={handleChangeInterval}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="D">Daily</SelectItem>
                  <SelectItem value="W">Weekly</SelectItem>
                  <SelectItem value="M">Monthly</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Carousel opts={{ align: "start", loop: false }} className="w-full" orientation="horizontal">
            <CarouselContent className="mx-auto flex h-[434px] w-[568px] md:-ml-8 md:w-full lg:-ml-4">
              {isLoading ? (
                <CarouselItem className="">
                  <SkeletonLoader count={isMobile ? 4 : 6} />
                </CarouselItem>
              ) : (
                Array(half)
                  .fill("")
                  .map((_, index) => {
                    const top = index * 2
                    const bottom = index * 2 + 1

                    return (
                      <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/3">
                        <div id="carousel-item" className="flex flex-col gap-8 sm:ml-4 lg:ml-0">
                          <BestTradersResult key={sortedData[top]?.name} index={top} data={sortedData[top]} />
                          <BestTradersResult
                            key={sortedData[bottom]?.name}
                            index={bottom}
                            data={sortedData[bottom]}
                          />
                        </div>
                      </CarouselItem>
                    )
                  })
              )}
            </CarouselContent>
            <CarouselPrevious className="!bg-transparent text-primary" />
            <CarouselNext className="!bg-transparent text-primary" />
          </Carousel>
        </div>
        <Button className="mx-auto mt-16 block w-32 xl:mt-8 xl:hidden">{t("startBtn")}</Button>
      </div>
    </div>
  )
}

export default BestTraders
