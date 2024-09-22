"use client"
import { useTheme } from "next-themes"
import { AlocationChart } from "@/app/(main)/[locale]/(coingarage)/gara-coin/components/alocation-chart"
import { BuyGara } from "@/app/(main)/[locale]/(coingarage)/gara-coin/components/buy-gara"
import Heading from "@/components/heading"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
// import { unstable_setRequestLocale } from "next-intl/server"
import Image from "next/image"
import Scalability from "@/public/images/gara-coin/scalability.svg"
import Fees from "@/public/images/gara-coin/fees.svg"
import Interoperability from "@/public/images/gara-coin/interoperability.svg"
import Security from "@/public/images/gara-coin/security.svg"
import Document from "@/public/images/gara-coin/document.svg"
import Polygon from "@/public/icons/polygon.svg"
import Present from "@/public/images/gara-coin/present.svg"
import { PolygonAddressCopyToClipboard } from "@/app/(main)/[locale]/(coingarage)/gara-coin/components/polygon-address-copy-to-clipboard"
import CountdownTimer from "@/app/(main)/[locale]/(coingarage)/gara-coin/components/countdown-timer"
import SecureIcon from "@/public/images/gara-coin/box/secure.svg"
import DayIcon from "@/public/images/gara-coin/box/day.svg"
import EasyIcon from "@/public/images/gara-coin/box/easy.svg"
import EarnIcon from "@/public/images/gara-coin/box/earn.svg"

const ArrowLeft = ({ width = 300 }) => {
  return (
    <svg
      className="text-primary"
      fill="none"
      stroke="currentColor"
      // viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height="20"
      viewBox={`0 0 ${width - 10} 20`}
    >
      <rect x="0" y="5" width="10" height="10" fill="#eb3f73" transform="rotate(45 5 10)" />
      <line x1="10" y1="10" x2={width} y2="10" stroke="#eb3f73" strokeWidth="3" />
    </svg>
  )
}
const ArrowRight = ({ width = 300 }) => {
  return (
    <svg
      className="text-primary"
      fill="none"
      stroke="currentColor"
      // viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height="20"
      viewBox={`0 0 ${width - 10} 20`}
    >
      <line x1="0" y1="10" x2={width - 20} y2="10" stroke="#eb3f73" strokeWidth="3" />
      <rect x={width - 20} y="5" width="10" height="10" fill="#eb3f73" transform={`rotate(45 ${width - 15} 10)`} />
    </svg>
  )
}
// const whitepaperLink = {
//   en: "https://graceful-hope-03323ffb1e.media.strapiapp.com/Whitepaper_4d17d687d2.pdf",
//   cs: "https://drive.google.com/file/d/1lOZVIrVbaX08d-j3V1iiMEC9O8u1s6SG/view",
//   de: "https://drive.google.com/file/d/1k1B95gX09dpDdquhW8DJC2eoqHpqzHaD/view",
// } as const

export default function Page({ params: { locale } }: { params: { locale: string } }) {
  // unstable_setRequestLocale(locale)
  // const { theme } = useTheme()
  const t = useTranslations("GARA")

  return (
    <>
      <section className="container mx-auto mt-8 flex flex-wrap items-center justify-center gap-12 px-8 lg:grid lg:grid-cols-2 lg:flex-row lg:items-start xl:mt-20 xl:justify-between xl:gap-6">
        {/* <div className="absolute right-[-100px] top-[540px] -z-50 h-[470px] w-[774px] max-w-[96vw] overflow-hidden lg:top-[24px]">
          <Image src="/images/fin.svg" alt="" className="scale-x-[-1] object-contain" fill={true} />
        </div> */}
        <div className="mt-16 max-w-[500px]">
          <hgroup className="mb-8 flex flex-col gap-3 font-heading text-5xl font-bold lg:flex-row">
            <h1>GARAGE Coin</h1>
            <p className="text-primary lg:ml-4">GARA</p>
          </hgroup>
          <p className="text-md mb-6 text-justify text-neutral-800 dark:text-neutral-300 lg:text-left">
            {t("main.text1")}
          </p>
          <p className="text-md mb-4 text-justify text-neutral-800 dark:text-neutral-300 lg:text-left">
            {t("main.text2")}
          </p>
          <Button variant="link" className="!px-0 font-heading text-xl text-primary" asChild>
            <a
              // @ts-ignore
              href="https://graceful-hope-03323ffb1e.media.strapiapp.com/Whitepaper_4d17d687d2.pdf"
              target="_blank"
              rel="noopener"
            >
              <Document />
              <span className="ml-3">Whitepaper</span>
            </a>
          </Button>
        </div>
        <div className="flex flex-row justify-end">
          <BuyGara />
        </div>
      </section>
      <section className="container mx-auto mt-16 px-8 py-12">
        <h2 className="mb-12 text-center font-heading text-3xl font-bold">{t("usage.header")}</h2>
        <div className="hidden grid-cols-3 lg:grid">
          <div className="-mr-10 flex flex-col justify-center gap-4">
            <ul className="flex flex-col gap-10 font-heading font-bold">
              <li className="flex flex-row justify-end gap-4">
                {t("usage.usage1")}
                <span className="flex items-center">
                  <ArrowLeft width={120} />
                </span>
              </li>
              <li className="flex flex-row justify-end gap-4">
                {t("usage.usage2")}
                <span className="flex items-center">
                  <ArrowLeft width={160} />
                </span>
              </li>
              <li className="flex flex-row justify-end gap-4">
                {t("usage.usage3")}
                <span className="flex items-center">
                  <ArrowLeft width={140} />
                </span>
              </li>
              <li className="flex flex-row justify-end gap-4">
                {t("usage.usage4")}
                <span className="flex items-center">
                  <ArrowLeft width={120} />
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-row items-center justify-center">
            <Image src="/icons/gara-pink-big.svg" alt="" width="425" height="425" />
          </div>
          <div className="-ml-10 flex flex-col justify-center gap-4">
            <ul className="flex flex-col gap-10 text-start font-heading font-bold">
              <li className="flex flex-row justify-start gap-4">
                <span className="flex items-center">
                  <ArrowRight width={130} />
                </span>
                {t("usage.usage5")}
              </li>
              <li className="flex flex-row justify-start gap-4">
                <span className="flex items-center">
                  <ArrowRight width={170} />
                </span>
                {t("usage.usage6")}
              </li>
              <li className="flex flex-row justify-start gap-4">
                <span className="flex items-center">
                  <ArrowRight width={150} />
                </span>
                {t("usage.usage7")}
              </li>
              <li className="flex flex-row justify-start gap-4">
                <span className="flex items-center">
                  <ArrowRight width={130} />
                </span>
                {t("usage.usage8")}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center gap-12">
          <div className="relative w-5">
            <Image src="/images/gara-coin/usage_gara.svg" alt="" fill={true} style={{ objectFit: "contain" }} />
          </div>
          <ul className="flex w-[300px] flex-col gap-8 py-8 text-start font-heading font-bold lg:hidden">
            <li>{t("usage.usage5")}</li>
            <li>{t("usage.usage5")}</li>
            <li>{t("usage.usage7")}</li>
            <li>{t("usage.usage8")}</li>
            <li>{t("usage.usage1")}</li>
            <li>{t("usage.usage2")}</li>
            <li>{t("usage.usage3")}</li>
            <li>{t("usage.usage4")}</li>
          </ul>
        </div>
      </section>
      <section className="container mx-auto mt-16 max-w-[1200px] lg:py-6">
        <div className="flex flex-col-reverse md:flex-row md:gap-12 lg:gap-20">
          <div className="flex max-w-[500px] flex-1 flex-col">
            <p className="font-heading text-4xl font-bold">{t("garaDepo.header")}</p>
            <p className="font-heading text-2xl text-green-500">
              {t("garaDepo.subHeader")}
              {/* <span className="ml-2 text-3xl">30% p.a.</span> */}
            </p>
            <p className="mt-4">{t("garaDepo.text1")}</p>
            <hr className="my-4" />
            <p className="mt-4">
              {t.rich("garaDepo.text2", { span: (text) => <span className="font-bold text-primary">{text}</span> })}
            </p>
            <div>
              <p className="mt-4 font-heading text-xl font-bold">{t("garaDepo.timer.header")}</p>
              <CountdownTimer className="mt-4" />
              <p className="mt-4 text-sm italic">{t("garaDepo.timer.disclaimer")}</p>
            </div>
          </div>
          <div className="mb-6 flex flex-1 flex-col items-center md:mb-0">
            <Image src="/images/gara-coin/garaDepo.svg" className="" alt="" width={500} height={479} />
            <div className="my-6 flex flex-col justify-center gap-4 md:gap-4 lg:flex-row">
              <div className="flex w-full flex-col items-center justify-between rounded-lg border border-neutral-100 bg-background px-2 py-4 text-center leading-tight shadow-md dark:border-neutral-800 dark:shadow-neutral-800 md:px-6 lg:w-[130px]">
                <p className="font-heading text-lg font-bold">
                  <EasyIcon className="size-8 stroke-primary stroke-2" />
                </p>
                <p className="mt-2 font-heading font-bold">{t("garaDepo.boxes.1")}</p>
              </div>
              <div className="flex w-full flex-col items-center justify-between rounded-lg border border-neutral-100 bg-background px-2 py-4 text-center leading-tight shadow-md dark:border-neutral-800 dark:shadow-neutral-800 md:px-6 lg:w-[130px]">
                <p className="font-heading text-lg font-bold">
                  <SecureIcon className="size-8 stroke-primary stroke-2" />
                </p>
                <p className="mt-2 font-heading font-bold">{t("garaDepo.boxes.2")}</p>
              </div>
              <div className="flex w-full flex-col items-center justify-between rounded-lg border border-neutral-100 bg-background px-2 py-4 text-center leading-tight shadow-md dark:border-neutral-800 dark:shadow-neutral-800 md:px-6 lg:w-[130px]">
                <p className="font-heading text-lg font-bold">
                  <EarnIcon className="size-8 stroke-primary stroke-2" />
                </p>
                <p className="mt-2 font-heading font-bold">{t("garaDepo.boxes.3")}</p>
              </div>
              <div className="flex w-full flex-col items-center justify-between rounded-lg border border-neutral-100 bg-background px-2 py-4 text-center leading-tight shadow-md dark:border-neutral-800 dark:shadow-neutral-800 md:px-6 lg:w-[130px]">
                <p className="font-heading text-lg font-bold">
                  <DayIcon className="size-8 stroke-primary stroke-2" />
                </p>
                <p className="mt-2 font-heading font-bold">{t("garaDepo.boxes.4")}</p>
              </div>
            </div>
            <div className="flex w-full flex-row justify-center">
              <Button variant="default" className="mt-12 min-w-[200px]" asChild>
                <a href="https://trade.coingarage.io/stake" target="_blank" rel="noreferrer noopener">
                  {t("garaDepo.garaStakebtn")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-16 max-w-[1200px] lg:py-6">
        <div className="flex flex-col md:mx-12 md:flex-row md:gap-12 lg:gap-32">
          <div className="mb-8 flex flex-1 justify-center md:mb-0">
            <Image
              src="/images/gara-coin/fire.svg"
              className="h-auto w-[300px] md:w-[460px]"
              alt=""
              width={460}
              height={507}
            />
          </div>
          <div className="flex max-w-[500px] flex-1 flex-col items-center justify-center">
            <div>
              <p className="font-heading text-4xl font-bold">{t("burnMechanism.header")}</p>
              <p className="mt-4">{t("burnMechanism.text1")}</p>
              <div className="my-6 flex flex-row justify-center gap-4 md:gap-8">
                <div className="flex w-full flex-col items-center justify-center rounded-lg border border-neutral-100 bg-background p-4 text-center shadow-md dark:border-neutral-800 dark:shadow-neutral-800 lg:w-[220px]">
                  <p className="font-heading text-lg font-bold">{t("burnMechanism.boxes.1.header")}</p>
                  <p className="mt-2 font-heading  text-primary">{t("burnMechanism.boxes.1.text")}</p>
                </div>
                <div className="flex w-full flex-col items-center justify-center rounded-lg border border-neutral-100 bg-background p-4 text-center shadow-md dark:border-neutral-800 dark:shadow-neutral-800 lg:w-[220px]">
                  <p className="font-heading text-lg font-bold">{t("burnMechanism.boxes.2.header")}</p>
                  <p className="mt-2 font-heading  text-primary">{t("burnMechanism.boxes.2.text")}</p>
                </div>
              </div>
              <p className="mt-4 text-sm italic">{t("burnMechanism.disclaimer")}</p>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-12 bg-tertiary/10 py-16 dark:bg-tertiary/20 xl:mt-28">
        <section className="container mx-auto">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold">{t("roadmap.header")}</h2>
          <div className="relative mt-8 hidden items-center justify-center pb-[194px] lg:flex">
            <Image src="/images/gara-coin/roadmap.svg" alt="" width="1232" height="487" />
            <div className="absolute inset-0">
              <div className="grid h-full w-full grid-cols-4 grid-rows-3 justify-center pl-[14.5%] pr-[15%] pt-[26px]">
                <div className="px-4 pb-6 pt-2 text-center font-heading lg:pt-10">{t("roadmap.text1")}</div>
                <div className="px-4 pb-6 pt-2 text-center font-heading lg:pt-10">{t("roadmap.text2")}</div>
                <div className="px-4 pb-6 pt-2 text-center font-heading lg:pt-10">{t("roadmap.text3")}</div>
                <div className="px-4 pb-6 pt-2 text-center font-heading lg:pt-10">{t("roadmap.text4")}</div>
                <div className="px-4 pb-6 pt-2 text-center font-heading lg:pt-10">{t("roadmap.text5")}</div>
                <div className="px-4 pb-6 pt-2 text-center font-heading lg:pt-10">{t("roadmap.text6")}</div>
                <div className="px-4 pb-6 pt-2 text-center font-heading lg:pt-10">{t("roadmap.text7")}</div>
                <div className="px-4 pb-6 pt-2 text-center font-heading lg:pt-10">{t("roadmap.text8")}</div>
                <div className="px-4 pb-6 pt-2 text-center font-heading lg:pt-10">{t("roadmap.text9")}</div>
                <div className="px-4 pb-6 pt-2 text-center font-heading lg:pt-10">{t("roadmap.text10")}</div>
                <div className="px-4 pb-6 pt-2 text-center font-heading lg:pt-10">{t("roadmap.text11")}</div>
                <div className="px-4 pb-6 pt-2 text-center font-heading lg:pt-10">{t("roadmap.text12")}</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-12">
            <div className="relative w-12">
              <Image src="/images/gara-coin/gradient_roadmap.svg" alt="" fill={true} style={{ objectFit: "contain" }} />
            </div>
            <ul className="flex w-[300px] flex-col gap-6 pb-12 pt-10 text-start font-heading text-sm font-bold lg:hidden">
              <li className="">{t("roadmap.text1")}</li>
              <li className="">{t("roadmap.text2")}</li>
              <li className="">{t("roadmap.text3")}</li>
              <li className="">{t("roadmap.text4")}</li>
              <li className="">{t("roadmap.text5")}</li>
              <li className="">{t("roadmap.text6")}</li>
              <li className="">{t("roadmap.text7")}</li>
              <li className="">{t("roadmap.text8")}</li>
              <li className="">{t("roadmap.text9")}</li>
              <li className="">{t("roadmap.text10")}</li>
              <li className="">{t("roadmap.text11")}</li>
              <li className="">{t("roadmap.text12")}</li>
            </ul>
          </div>
          <div className="flex w-full justify-center">
            <Button variant="default" className="min-w-[200px]">
              {t("roadmap.btnBuyGARA")}
            </Button>
          </div>
        </section>
      </div>
      <section className="container mx-auto mt-16 py-12">
        <h2 className="mb-12 text-center font-heading text-3xl font-bold">{t("alocation.header")}</h2>
        <AlocationChart />
        <p className="mt-12 w-full text-center font-heading text-sm font-bold">{t("alocation.limit")}</p>
        <div className="mx-4 mt-20 bg-tertiary/10 p-6 dark:bg-tertiary/20 md:p-12 lg:mx-10">
          <div className="flex flex-row justify-between gap-6">
            <div>
              <h2 className="mb-6 hidden font-heading text-3xl font-bold lg:block">
                {t("release.header")} <span className="ml-4 text-xl text-primary">{t("release.subHeader")}</span>
              </h2>
              <h2 className="mb-6 flex flex-col font-heading text-3xl font-bold lg:hidden">
                <span className="text-xl text-primary">{t("release.subHeader")}</span>
                {t("release.header")}
              </h2>
            </div>
            <div className="mr-6 hidden lg:flex">
              {/* <Image src="/images/gara-coin/present.svg" alt="" width="100" height="104" /> */}
              <Present className="fill-black dark:fill-white" width="100" height="104" />
            </div>
            {/* <div className="relative flex min-w-[100px] lg:hidden">
              <Present className="fill-black dark:fill-white" width="100" height="104" />
            </div> */}
          </div>
          <p className="mb-6 pt-6 text-justify text-sm lg:pt-0 lg:text-left">{t("release.text")}</p>
          <div className="relative mt-12 flex grid-cols-5 grid-rows-1 flex-col flex-wrap gap-5 lg:flex-row xl:grid">
            <div className="absolute left-1/2 top-1/2 -z-10 h-[calc(100%+24px)] w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-xl bg-primary/25 lg:h-2 lg:w-[calc(100%-68px)] lg:-translate-x-1/2 lg:-translate-y-1/2"></div>
            <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
              <div className="flex w-[170px] flex-col justify-center gap-4 rounded-lg border bg-background p-4 shadow transition-all hover:shadow-md hover:shadow-primary dark:border-none dark:bg-[#282930] dark:shadow-neutral-900">
                <div className="text-center font-heading text-sm leading-none">{t("release.box1.text")}</div>
                <div className="text-center font-heading text-primary">{t("release.box1.subText")}</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
              <div className="flex w-[170px] flex-col justify-center gap-4 rounded-lg border bg-background p-4 shadow transition-all hover:shadow-md hover:shadow-primary dark:border-none dark:bg-[#282930] dark:shadow-neutral-900">
                <div className="text-center font-heading text-sm leading-none">{t("release.box2.text")}</div>
                <div className="text-center font-heading text-primary">{t("release.box2.subText")}</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
              <div className="flex w-[170px] flex-col justify-center gap-4 rounded-lg border bg-background p-4 shadow transition-all hover:shadow-md hover:shadow-primary dark:border-none dark:bg-[#282930] dark:shadow-neutral-900">
                <div className="text-center font-heading text-sm leading-none">{t("release.box3.text")}</div>
                <div className="text-center font-heading text-primary">{t("release.box3.subText")}</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
              <div className="flex w-[170px] flex-col justify-center gap-4 rounded-lg border bg-background p-4 shadow transition-all hover:shadow-md hover:shadow-primary dark:border-none dark:bg-[#282930] dark:shadow-neutral-900">
                <div className="text-center font-heading text-sm leading-none">{t("release.box4.text")}</div>
                <div className="text-center font-heading text-primary">{t("release.box4.subText")}</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
              <div className="flex w-[170px] flex-col justify-center gap-4 rounded-lg border bg-background p-4 shadow transition-all hover:shadow-md hover:shadow-primary dark:border-none dark:bg-[#282930] dark:shadow-neutral-900">
                <div className="text-center font-heading text-sm leading-none">{t("release.box5.text")}</div>
                <div className="text-center font-heading text-primary">{t("release.box5.subText")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-12 bg-tertiary/10 py-16 dark:bg-tertiary/20 xl:mt-28">
        <section className="container mx-auto flex flex-wrap items-center justify-center gap-12 px-10 md:flex-row lg:items-start xl:justify-between xl:gap-6">
          <div className="max-w-[500px]">
            <Heading tag="h2">{t("IEO.header")}</Heading>
            <div className="mt-16">
              <p className="text-md mb-6 text-justify text-neutral-800 dark:text-neutral-300 lg:pl-12 lg:text-left">
                {t("IEO.text1")}
              </p>
              <p className="text-md mb-4 text-justify text-neutral-800 dark:text-neutral-300 lg:pl-12 lg:text-left">
                {t("IEO.text2")}
              </p>
              <p className="text-md mb-4 text-justify text-neutral-800 dark:text-neutral-300 lg:pl-12 lg:text-left">
                {t("IEO.text3")}
              </p>
            </div>
          </div>
          <div className="mx-4 md:flex md:justify-end">
            <div className="flex w-full max-w-full flex-col items-center gap-8 rounded-2xl border border-neutral-100 bg-background p-8 shadow-md dark:border-transparent dark:shadow-neutral-900 lg:w-[480px]">
              <Image src="/images/gara-coin/3DGARA.png" alt="" width="110" height="121" quality="100" />
              <h2 className="text-center font-heading text-2xl font-bold">{t("IEO.box.address")}</h2>
              <PolygonAddressCopyToClipboard />
              <div className="flex flex-row flex-wrap justify-center gap-4 lg:flex-nowrap lg:justify-between lg:gap-8">
                <Button variant="default" className="min-w-[200px]" onClick={() => window?.scrollTo(0, 60)}>
                  {t("IEO.box.btnBuyWithUSDT")}
                </Button>
                <Button variant="default" className="min-w-[200px]" asChild>
                  <a href="https://trade.coingarage.io/exchange/GARA-EUR" target="_blank" rel="noreferrer noopener">
                    {t("main.buyGARA.buyWith")} EUR
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="container mx-auto mt-24 flex flex-wrap items-center justify-between gap-12 px-10 lg:flex-row lg:items-start xl:justify-between xl:gap-6">
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col justify-between md:flex-row">
            <Heading tag="h2">{t("GARArunning.header")}</Heading>
            <div className="flex w-[100px] md:w-auto lg:max-w-[480px]">
              {/* <Image src="/images/gara-coin/polygon.svg" alt="" width="302" height="57" /> */}
              <Polygon className="fill-black dark:fill-white" width="auto" height="57" />
            </div>
          </div>
          <p className="text-md mb-6 max-w-[600px] pt-6 text-center text-justify text-neutral-800 dark:text-neutral-300 lg:pl-12 lg:text-left">
            {t("GARArunning.text")}
          </p>
        </div>
        <div className="grid w-full grid-flow-row gap-8 px-2 md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:px-0">
          <div className="flex min-h-[236px] flex-col gap-4 rounded-xl border border-neutral-300/30 px-8 py-10 shadow-md transition-all hover:shadow-primary dark:shadow-neutral-900 md:min-h-[280px]">
            <div className="flex items-start justify-between gap-4">
              <h5 className="font-heading text-2xl font-bold">{t("GARArunning.box1.header")}</h5>
              <Scalability width="37px" height="37px" />
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{t("GARArunning.box1.text")}</p>
          </div>
          <div className="flex min-h-[236px] flex-col gap-4 rounded-xl border border-neutral-300/30 px-8 py-10 shadow-md transition-all hover:shadow-primary dark:shadow-neutral-900 md:min-h-[280px]">
            <div className="flex items-start justify-between gap-4">
              <h5 className="font-heading text-2xl font-bold">{t("GARArunning.box2.header")}</h5>
              <Fees width="37px" height="37px" />
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{t("GARArunning.box2.text")}</p>
          </div>
          <div className="flex min-h-[236px] flex-col gap-4 rounded-xl border border-neutral-300/30 px-8 py-10 shadow-md transition-all hover:shadow-primary dark:shadow-neutral-900 md:min-h-[280px]">
            <div className="flex items-start justify-between gap-4">
              <h5 className="font-heading text-2xl font-bold">{t("GARArunning.box3.header")}</h5>
              <Interoperability width="37px" height="37px" />
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{t("GARArunning.box3.text")}</p>
          </div>
          <div className="flex min-h-[236px] flex-col gap-4 rounded-xl border border-neutral-300/30 px-8 py-10 shadow-md transition-all hover:shadow-primary dark:shadow-neutral-900 md:min-h-[280px]">
            <div className="flex items-start justify-between gap-4">
              <h5 className="font-heading text-2xl font-bold">{t("GARArunning.box4.header")}</h5>
              <Security width="37px" height="37px" />
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{t("GARArunning.box4.text")}</p>
          </div>
        </div>
        <div className="flex w-full flex-row justify-center">
          <Button variant="default" className="mt-12 min-w-[200px]" asChild>
            <a
              href="https://polygonscan.com/token/0x0b258a4ecc4ac7a15fedb882db5d13f6ef23b02f"
              target="_blank"
              rel="noreferrer noopener"
            >
              {t("GARArunning.btnGARAOnPolygon")}
            </a>
          </Button>
        </div>
      </section>
    </>
  )
}
