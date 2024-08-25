"use client"
import { useTranslations } from "next-intl"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import data from "../../public/locales/cs/common.json"
import Image from "next/image"
import { Card } from "../ui/card"
import { Star } from "lucide-react"
import { useMediaQuery } from "@mantine/hooks"

interface Reference {
  name: string
  text: string
}

interface ReferencesData {
  [key: string]: Reference
}

const Reviews = () => {
  const t = useTranslations("eezyTrader.references")
  const interimData = data.eezyTrader.references.referends as ReferencesData
  const referencesArray: Array<Reference> = Object.keys(interimData).map((key) => interimData[key])

  const isTablet = useMediaQuery("(max-width: 1024px)")

  return (
    <div className="mt-28 px-4">
      <div className="mb-12 text-center">
        <h3 className="text-2xl text-primary">{t("subheader")}</h3>
        <h3 className="text-4xl">{t("header")}</h3>
      </div>

      <div className="">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="h-full pb-8 mb-4">
            {referencesArray.map((src, index) => (
              <>
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                  <Card className="mx-auto flex flex-col h-1/2 md:min-h-96 w-full py-2 pl-6 pr-4 pt-5">
                    <div className="mt-5 flex justify-between">
                      <Image src="/images/eezy-trader/icons/quote.svg" width={40} height={40} alt="" />
                      <div className="flex w-14 items-center justify-center rounded-3xl bg-primary text-white">
                        <p>4,7</p>
                        <Star fill="white" className="w-4" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="mb-4 text-[24px]"> {src.name} </p>
                      <p className="italic"> {src.text} </p>
                    </div>
                  </Card>
                  { isTablet && 
                  <Card className="mx-auto mt-4 flex h-1/2 md:min-h-96 w-full flex-col py-2 pl-6 pr-4 pt-5">
                    <div className="mt-5 flex justify-between">
                      <Image src="/images/eezy-trader/icons/quote.svg" width={40} height={40} alt="" />
                      <div className="flex w-14 items-center justify-center rounded-3xl bg-primary text-white">
                        <p>4,7</p>
                        <Star fill="white" className="w-4" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="mb-4 text-[24px]"> {src.name} </p>
                      <p className="italic"> {src.text} </p>
                    </div>
                  </Card>
                  
                  }
                  
                </CarouselItem>
              </>
            ))}
          </CarouselContent>
          <CarouselPrevious className="!bg-transparent text-primary" />
          <CarouselNext className="!bg-transparent text-primary" />
        </Carousel>
      </div>
    </div>
  )
}

export default Reviews
