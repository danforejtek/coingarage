"use client"
import { useTranslations } from "next-intl"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import data from "../../public/locales/cs/common.json"
import Image from "next/image"
import { Card } from "../ui/card"


const Reviews = () => {
  const tx = useTranslations("eezyTrader.references")
  const interimData = data.eezyTrader.references.referends
  const referencesArray = Object.keys(interimData).map((key) => interimData[key])

  return (
    <div className="mt-4">
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent className="h-[344px] ">
          {referencesArray.map((src, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                <Card className="w-64 h-80 flex flex-col items-center justify-center p-1">
                  <div className="flex justify-between">
                    <p>""</p>
                    <p>4,7 *</p>
                  </div>
                  <div className="w-40">
                    <p> {src.name} </p>
                    <p> {src.text} </p>
                  </div>
                </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-4 !bg-transparent text-primary" />
        <CarouselNext className="mr-4 !bg-transparent text-primary" />
      </Carousel>
    </div>
  )
}

export default Reviews
