"use client"

import { useTranslations } from "next-intl"
import React, { useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@mantine/hooks"
import BestTradersResult from "./best-trader-results"
import Autoplay from "embla-carousel-autoplay"
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
  roi: number
  total_pnl: number
  active_bots: number
  long: boolean
  short: boolean
  dca: boolean
  grid: boolean
}

const BestTraders = ({ interval = "D" }: BestTradersProps) => {
  const [selectedInterval, setSelectedInterval] = useState(interval)
  // fetched via server action, URL here is just cache key
  const { data, error, isLoading } = useSWR(`https://api.coingarage.io/grid/charts?interval=${selectedInterval}`, () =>
    getTradersData({ interval: selectedInterval })
  )
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

      <div className="mx-auto xl:mx-0 xl:mr-10">
        <div className="w-[268px] sm:w-[568px] md:w-[748px]">
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
          <Carousel
            opts={{ align: "start", loop: false }}
            plugins={[
              Autoplay({
                delay: 4000,
                // stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
            orientation="horizontal"
          >
            <CarouselContent className="mx-auto flex h-[434px] w-[568px] md:-ml-4 md:w-full">
              {isLoading ? (
                <CarouselItem className="">
                  <SkeletonLoader count={isMobile ? 4 : 6} />
                </CarouselItem>
              ) : (
                Array(half)
                  .fill("")
                  .map((_, index) => {
                    const item1 = traders[index]
                    const item2 = traders[index + half]
                    const itemData1 = data?.[item1 as keyof typeof data]
                    const itemData2 = data?.[item2 as keyof typeof data]

                    return (
                      <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/3">
                        <div className="flex flex-col gap-8 sm:ml-2 lg:ml-0">
                          <BestTradersResult key={itemData1?.name} index={index} data={itemData1} />
                          <BestTradersResult key={itemData2?.name} index={index + half} data={itemData2} />
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
