import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

type IProps = {}

const EezyTrader = (props: IProps) => {
  return (
    <div className='container'>
      <div className='flex'>
        <div className='w-1/2 mt-56 flex flex-col gap-4'>
          <h3 className='text-left font-heading text-5xl'> Vydělávejte snadno s naším automatickým crypto obchodním robotem EEZY Trader </h3>
          <p>
            Využíjte nové technologie naplno a nechte za sebe obchodovat automatického obchodní robota, který nikdy nespí a 
            neunikne mu žádná obchodní příležitost. Aktivujte si EEZY Trader zdarma na  7 dní a sami si vyzkoušejte, jak pracuje
            a o kolik dokáže zhodnotit vaše peníze.
          </p>
          <Button className='w-64'>
            Začít na 7-Dní ZDarma
          </Button>
        </div>

        <div className='w-1/2 mt-40'>
          <Image 
            width={612} height={574} src="/images/eezy-trader/images/robotcomputer.png" alt="robot"
            className='z-5'
          />
        </div>
      </div>

      <div>
        <div>
          obrazky
        </div>
      </div>
    </div>
  )
}

export default EezyTrader