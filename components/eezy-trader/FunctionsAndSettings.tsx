"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Card } from '../ui/card'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'

const FunctionsAndSettings = () => {
  const { resolvedTheme } = useTheme()
  const [theme, setTheme] = useState("")
  useEffect(() => {
    setTheme(resolvedTheme !== "dark" ? "" : "dark/")
  }, [resolvedTheme])
  const t = useTranslations("eezyTrader.functions")

  return (
    <div className='lg:flex lg:justify-between mt-28'>
      <div className='max-w-[507px] mt-8'>
        <h3 className='text-4xl font-bold mb-5 max-w-[396px]'>{t('header')}</h3>
        <p className='mb-10'>{t('text')}</p>
        <Button className='w-64'>{t('startBtn')}</Button>
      </div>

      <div className='lg:flex lg:gap-5 grid grid-cols-5 grid-rows-1 mt-24'>
        <div className='lg:mt-14 flex flex-col gap-6'>
          <Card className='w-32 h-32 flex flex-col items-center justify-between py-3'>
            <Image width={65} height={65} src="/images/eezy-trader/functions/dca.svg" alt="dca"/>
            <p className='text-lg'>{t('functionFields.1')}</p>
          </Card>

          <Card className='w-32 h-40 flex flex-col items-center justify-between py-3'>
            <Image width={65} height={65} src="/images/eezy-trader/functions/referral.svg" alt="referral"/>
            <p className='text-lg text-center mt-4'>{t('functionFields.6')}</p>
          </Card>
        </div>

        <div className='flex flex-col gap-6'>
          <Card className='w-32 h-32 flex flex-col items-center justify-between py-3'>
            <Image width={65} height={65} src="/images/eezy-trader/functions/grid.svg" alt="grid"/>
            <p className='text-lg'>{t('functionFields.2')}</p>
          </Card>

          <Card className='w-32 h-40 lg:h-32 flex flex-col items-center justify-between py-3'>
            <Image width={65} height={65} src="/images/eezy-trader/functions/pairs.svg" alt="pairs"/>
            <p className='text-lg text-center mt-4'>{t('functionFields.7')}</p>
          </Card>
        </div>

        <div className='lg:mt-14 flex flex-col gap-6'>
          <Card className='w-32 h-32 flex flex-col items-center justify-between py-3'>
            <Image width={65} height={65} src="/images/eezy-trader/functions/bot.svg" alt="bot"/>
            <p className='text-lg'>{t('functionFields.3')}</p>
          </Card>

          <Card className='w-32 h-40 flex flex-col items-center justify-between py-3'>
            <Image width={65} height={65} src="/images/eezy-trader/functions/file.svg" alt="file"/>
            <p className='text-lg text-center mt-4'>{t('functionFields.8')}</p>
          </Card>
        </div>

        <div className='lg:mt-28 flex flex-col gap-6'>
          <Card className='w-32 h-32 flex flex-col items-center justify-between py-3'>
            <Image width={65} height={65} src="/images/eezy-trader/functions/long.svg" alt="long" className='text-white'/>
            <p className='text-lg'>{t('functionFields.5')}</p>
          </Card>

          <Card className='w-32 flex flex-col items-center justify-between py-3'>
            <Image width={65} height={65} src="/images/eezy-trader/functions/saveStrategy.svg" alt="saveStrategy"/>
            <p className='text-lg text-center mt-4 px-1'>{t('functionFields.9')}</p>
          </Card>
        </div>

        <div className='lg:mt-14 flex flex-col gap-6'>
          <Card className='w-32 h-32 flex flex-col items-center justify-between py-3'>
            <Image width={65} height={65} src="/images/eezy-trader/functions/short.svg" alt="short"/>
            <p className='text-lg'>{t('functionFields.5')}</p>
          </Card>

          <Card className='w-32 h-40 lg:h-32 flex flex-col items-center justify-between py-3'>
            <Image width={65} height={65} src="/images/eezy-trader/functions/knowledgeBase.svg" alt="knowledgeBase"/>
            <p className='text-lg text-center mt-4'>{t('functionFields.10')}</p>
          </Card>
        </div>
        
        
      </div>
    </div>
  )
}

export default FunctionsAndSettings