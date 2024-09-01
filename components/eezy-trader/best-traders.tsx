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
  interval: "D" | "W" | "M"
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
      <div className="mx-24 mb-14 xl:mx-8 xl:mt-14 xl:w-[440px]">
        <h4 className="mb-2 font-heading text-[28px] text-primary">{t("subheader")}</h4>
        <h3 className="mb-6 font-heading text-4xl font-bold">{t("header")}</h3>
        <p className="mb-4 font-heading text-base font-normal">{t("text1")}</p>
        <p>{t("text2")}</p>
        <Button className="mt-8 hidden w-32 xl:block">{t("startBtn")}</Button>
      </div>

      <div className="mx-auto xl:mx-0">
        <div className="w-[468px] md:w-[768px]">
          <div className="mb-4 mr-4 flex flex-row-reverse">
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
                delay: 4000000,
                // stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
            orientation="horizontal"
          >
            <CarouselContent className="mx-auto flex h-[434px] w-[768px]">
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
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="flex flex-col gap-8 sm:ml-24 lg:ml-0">
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
