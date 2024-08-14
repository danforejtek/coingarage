"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { useTranslations } from 'next-intl'
import data from "../../public/locales/cs/common.json"

type IProps = {}

const EezyTrader = (props: IProps) => {
  const etMain = useTranslations("eezyTrader.main")
  //console.log("X", data.eezyTrader.references)

  return (
    <div className='container'>
      <div className='flex pl-12 xl:pl-2'>
        <div className='w-1/2 mt-6 flex flex-col gap-4 lg:mt-56'>
          <h3 className='text-left font-heading lg:text-5xl md:text-4xl text-3xl'> {etMain("header")} </h3>
          <p> {etMain("text")} </p>
          <Button className='w-64 md:mt-4 mt-12'>
            {etMain("startBtn")}
          </Button>
        </div>

        <div className='w-1/3 mt-40 xl:w-1/2'>
          <Image 
            width={612} height={574} src="/images/eezy-trader/images/robotcomputer.png" alt="robot"
            className='z-5'
          />
        </div>
      </div>

      <div className='relative'>
        <div className='flex flex-col lg:flex-row gap-7 mt-12 absolute -top-5 w-full xl:mt-0 px-40 lg:px-0'>
          <Card className='w-full lg:min-h-72 flex flex-col pt-8 pb-10 px-7 gap-4 text-center border-white'> 
            <Image
              width={50} height={50} src="/images/eezy-trader/icons/finance.svg" alt="finance"
              className='mx-auto'
            />
            <p className='text-primary'>{etMain("cards.1.header")}</p>
            <p>{etMain("cards.1.text")}</p>
          </Card>
          <Card className='w-full lg:min-h-72 flex flex-col pt-8 pb-10 px-7 gap-4 text-center border-white'> 
            <Image
              width={50} height={50} src="/images/eezy-trader/icons/efectivity.svg" alt="finance"
              className='mx-auto'
            />
            <p className='text-primary'>{etMain("cards.2.header")}</p>
            <p>{etMain("cards.2.text")}</p>
          </Card>
          <Card className='w-full lg:min-h-72 flex flex-col pt-8 pb-10 px-7 gap-4 text-center border-white'> 
            <Image
              width={50} height={50} src="/images/eezy-trader/icons/neverSleep.svg" alt="finance"
              className='mx-auto'
            />
            <p className='text-primary'>{etMain("cards.3.header")}</p>
            <p>{etMain("cards.3.text")}</p>
          </Card>
          <Card className='w-full lg:min-h-72 flex flex-col pt-8 pb-10 px-7 gap-4 text-center border-white'> 
            <Image
              width={50} height={50} src="/images/eezy-trader/icons/emotional.svg" alt="finance"
              className='mx-auto'
            />
            <p className='text-primary'>{etMain("cards.4.header")}</p>
            <p>{etMain("cards.4.text")}</p>
          </Card>
          <Card className='w-full lg:min-h-72 flex flex-col pt-8 pb-10 px-7 gap-4 text-center border-white'> 
            <Image
              width={50} height={50} src="/images/eezy-trader/icons/strategy.svg" alt="finance"
              className='mx-auto'
            />
            <p className='text-primary'>{etMain("cards.5.header")} </p>
            <p>{etMain("cards.5.text")}</p>
          </Card>

        </div>
      </div>
    </div>
  )
}

export default EezyTrader