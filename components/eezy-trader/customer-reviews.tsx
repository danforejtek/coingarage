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
  rating: string
}

interface ReferencesData {
  [key: string]: Reference
}

export default function CustomerReviews() {
  const t = useTranslations("eezyTrader.references")
  const interimData = data.eezyTrader.references.referends as ReferencesData
  const referencesArray: Array<Reference> = Object.keys(interimData).map((key) => interimData[key])
  const halfOfReferences = Math.ceil(referencesArray.length / 2)
  const isTablet = useMediaQuery("(max-width: 1024px)")

  return (
    <div className="mt-28 md:mt-12">
      <div className="mb-12 text-center">
        <h3 className="font-heading text-3xl font-bold text-primary">{t("subheader")}</h3>
        <h3 className="font-heading text-4xl font-bold">{t("header")}</h3>
      </div>

      <div className="mt-0">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="h-full pb-8">
            {isTablet
              ? referencesArray.slice(0, halfOfReferences).map((src, index) => {
                  const secondIndex = index + halfOfReferences
                  const secondItem = referencesArray[secondIndex]

                  return (
                    <CarouselItem
                      key={index}
                      className="mb-3 pb-8 sm:basis-1/2 md:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
                    >
                      <Card className="mx-auto flex h-1/2 w-[90%] flex-col p-6 dark:bg-[#1D1E25] md:min-h-96 md:w-full">
                        <div className="flex justify-between">
                          <Image src="/images/eezy-trader/icons/quote.svg" width={40} height={40} alt="" />
                          <div className="flex w-14 items-center justify-center rounded-3xl bg-primary text-white">
                            <p>{src.rating}</p>
                            <Star fill="white" className="w-4" />
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="mb-4 min-h-14 text-xl font-bold leading-tight">{src.name}</p>
                          <p className="italic">{src.text}</p>
                        </div>
                      </Card>

                      {!!secondItem && (
                        <Card className="mx-auto mt-4 flex h-1/2 w-[90%] flex-col p-6 dark:bg-[#1D1E25] md:mt-10 md:min-h-96 md:w-full">
                          <div className="flex justify-between">
                            <Image src="/images/eezy-trader/icons/quote.svg" width={40} height={40} alt="" />
                            <div className="flex w-14 items-center justify-center rounded-3xl bg-primary text-white">
                              <p>{src.rating}</p>
                              <Star fill="white" className="w-4" />
                            </div>
                          </div>
                          <div className="mt-4">
                            <p className="mb-4 min-h-14 text-xl font-bold leading-tight">{secondItem.name}</p>
                            <p className="italic">{secondItem.text}</p>
                          </div>
                        </Card>
                      )}
                    </CarouselItem>
                  )
                })
              : referencesArray.map((src, index) => (
                  <CarouselItem key={index} className="mb-3 pb-8 sm:basis-1/2 md:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                    <Card className="mx-auto flex h-1/2 w-full flex-col p-6 dark:bg-[#1D1E25] md:min-h-96">
                      <div className="flex justify-between">
                        <Image src="/images/eezy-trader/icons/quote.svg" width={40} height={40} alt="" />
                        <div className="flex w-14 items-center justify-center rounded-3xl bg-primary text-white">
                          <p>{src.rating}</p>
                          <Star fill="white" className="w-4" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="mb-4 min-h-14 text-xl font-bold leading-tight">{t("referends.1.name")}</p>
                        <p className="italic">{t("referends.1.text")}</p>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
          </CarouselContent>
          <CarouselPrevious className="-mt-8 ml-8 sm:ml-2 !bg-transparent text-primary md:-mt-5" />
          <CarouselNext className="-mt-8 mr-8 sm:mr-2 !bg-transparent text-primary md:-mt-5" />
        </Carousel>
      </div>
    </div>
  )
}
