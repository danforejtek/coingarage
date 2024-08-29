"use client"
import { useTranslations } from "next-intl"
import React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { Button } from "../ui/button"
import Image from "next/image"
import { useMediaQuery } from "@mantine/hooks"
import BestTradersResult from "../best-trader-results"

type Props = {}

const traders = [
  "/images/eezy-trader/images/graphLight.svg",
  "/images/eezy-trader/images/graphLight.svg",
  "/images/eezy-trader/images/graphLight.svg",
  "/images/eezy-trader/images/graphLight.svg",
  "/images/eezy-trader/images/graphLight.svg",
  "/images/eezy-trader/images/graphLight.svg",
  "/images/eezy-trader/images/graphLight.svg",
  "/images/eezy-trader/images/graphLight.svg",
]

const BestTraders = (props: Props) => {
  const t = useTranslations("eezyTrader.results")
  const isTablet = useMediaQuery("(max-width: 1280px)")

  return (
    <div className="container flex flex-col justify-between xl:flex-row">
      <div className="mx-24 mb-14 xl:mx-8 xl:w-[440px]">
        <h4 className="mb-2 text-[28px] text-primary">{t("subheader")}</h4>
        <h3 className="mb-6 text-4xl font-bold">{t("header")}</h3>
        <p className="mb-4 text-base font-normal">{t("text1")}</p>
        <p>{t("text2")}</p>
        <Button className="mt-8 hidden w-32 xl:block">{t("startBtn")}</Button>
      </div>

      <div className="lg:mx-24 xl:mx-0">
        <div className="w-[768px]">
          <Carousel opts={{ align: "start", loop: true }} className="w-full" orientation="horizontal">
            <CarouselContent className="flex h-[435px] w-[768px]">
              {traders.map((src, index) => (
                <div key={index} className="">
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <BestTradersResult />
                    <BestTradersResult />
                    {/* <div className="flex flex-row items-center justify-center w-[234px] h-[201px] border-2 border-rose-600">
                      <div className="relative h-[144px] w-[288px]"> {index}
                        <Image src={src} alt="" fill className="object-contain" />
                      </div>
                    </div>
                    <div className="mt-8 flex flex-row items-center justify-center w-[234px] h-[201px] border-2 border-rose-600">
                      <div className="relative h-[144px] w-[288px]"> {index}
                        <Image src={src} alt="" fill className="object-contain" />
                      </div>
                    </div> */}
                  </CarouselItem>
                </div>
              ))}
            </CarouselContent>
            <CarouselPrevious className="!bg-transparent text-primary lg:ml-4" />
            <CarouselNext className="!bg-transparent text-primary lg:mr-4" />
          </Carousel>
        </div>
        <Button className="mx-auto mt-16 block w-32 xl:mt-8 xl:hidden">{t("startBtn")}</Button>
      </div>
    </div>
  )
}

export default BestTraders
