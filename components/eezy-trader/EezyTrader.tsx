import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

type IProps = {}

const EezyTrader = (props: IProps) => {
  return (
    <div className='container'>
      <div className='flex pl-12 xl:pl-2'>
        <div className='w-1/2 mt-6 flex flex-col gap-4 lg:mt-56'>
          <h3 className='text-left font-heading text-5xl'> Vydělávejte snadno s naším automatickým crypto obchodním robotem EEZY Trader </h3>
          <p>
            Využíjte nové technologie naplno a nechte za sebe obchodovat automatického obchodní robota, který nikdy nespí a 
            neunikne mu žádná obchodní příležitost. Aktivujte si EEZY Trader zdarma na  7 dní a sami si vyzkoušejte, jak pracuje
            a o kolik dokáže zhodnotit vaše peníze.
          </p>
          <Button className='w-64 mt-4'>
            Začít na 7-Dní ZDarma
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
            <p className='text-primary'>Plná kontrola nad vašemi financemi</p>
            <p>Robot obchoduje na vašem účtu. Vklad i zisky můžete kdykoliv vybrat.</p>
          </Card>
          <Card className='w-full lg:min-h-72 flex flex-col pt-8 pb-10 px-7 gap-4 text-center border-white'> 
            <Image
              width={50} height={50} src="/images/eezy-trader/icons/efectivity.svg" alt="finance"
              className='mx-auto'
            />
            <p className='text-primary'>Maximalizuje efektivitu obchodování</p>
            <p>Nezmeškáte žádnou lukrativní příležitost, i když jste pryč od obrazovky.</p>
          </Card>
          <Card className='w-full lg:min-h-72 flex flex-col pt-8 pb-10 px-7 gap-4 text-center border-white'> 
            <Image
              width={50} height={50} src="/images/eezy-trader/icons/neverSleep.svg" alt="finance"
              className='mx-auto'
            />
            <p className='text-primary'>Peníze nikdy nespí, obchodujte 24/7</p>
            <p>Trh s kryptoměnami nikdy nespí a náš robot také ne, obchoduje neustále.</p>
          </Card>
          <Card className='w-full lg:min-h-72 flex flex-col pt-8 pb-10 px-7 gap-4 text-center border-white'> 
            <Image
              width={50} height={50} src="/images/eezy-trader/icons/emotional.svg" alt="finance"
              className='mx-auto'
            />
            <p className='text-primary'>Eliminuje emocionální obchodování</p>
            <p>Robot na emoce netrpí a proto nedělá chyby v důsledků strachu nebo chamtivosti.</p>
          </Card>
          <Card className='w-full lg:min-h-72 flex flex-col pt-8 pb-10 px-7 gap-4 text-center border-white'> 
            <Image
              width={50} height={50} src="/images/eezy-trader/icons/strategy.svg" alt="finance"
              className='mx-auto'
            />
            <p className='text-primary'>Přizpůsobíte vše na míru vaší strategii </p>
            <p>Nastavte obchodní strategie robota přesně podle svých cílů a  toleranci k riziku.</p>
          </Card>

        </div>
      </div>
    </div>
  )
}

export default EezyTrader