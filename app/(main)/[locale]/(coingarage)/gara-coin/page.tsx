import { AlocationChart } from "@/components/gara-coin/alocation-chart"
import { BuyGara } from "@/components/gara-coin/buy-gara"
import Heading from "@/components/Heading"
import { Button } from "@/components/ui/button"
import { ChevronDown, ClipboardCopy } from "lucide-react"
import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"
import Image from "next/image"

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

export default function Page({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("GARA")

  return (
    <>
      <section className="container mx-auto mt-8 flex flex-wrap items-center justify-center gap-12 lg:grid lg:grid-cols-2 lg:flex-row lg:items-start xl:mt-20 xl:justify-between xl:gap-6">
        {/* <div className="absolute right-[-100px] top-[540px] -z-50 h-[470px] w-[774px] max-w-[96vw] overflow-hidden lg:top-[24px]">
          <Image src="/images/fin.svg" alt="" className="scale-x-[-1] object-contain" fill={true} />
        </div> */}
        <div className="mt-16 max-w-[500px]">
          <hgroup className="mb-8 flex flex-row gap-3 font-heading text-5xl font-bold">
            <h1>GARAGE Coin</h1>
            <p className="ml-4 text-primary">GARA</p>
          </hgroup>
          <p className="text-md mb-6 text-justify text-neutral-800 dark:text-neutral-300 lg:text-left">
            {t("main.text1")}
          </p>
          <p className="text-md mb-4 text-justify text-neutral-800 dark:text-neutral-300 lg:text-left">
            {t("main.text2")}
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <BuyGara />
        </div>
      </section>
      <section className="container mx-auto mt-16 py-12">
        <h2 className="mb-12 text-center font-heading text-3xl font-bold">{t("usage.header")}</h2>
        <div className="grid grid-cols-3">
          <div className="-mr-10 flex flex-col justify-center gap-4">
            <ul className="flex flex-col gap-10 font-heading font-bold">
              <li className="flex flex-row justify-end gap-4">
                {t("usage.usage5")}
                <span className="flex items-center">
                  <ArrowLeft width={120} />
                </span>
              </li>
              <li className="flex flex-row justify-end gap-4">
                {t("usage.usage5")}
                <span className="flex items-center">
                  <ArrowLeft width={160} />
                </span>
              </li>
              <li className="flex flex-row justify-end gap-4">
                {t("usage.usage7")}
                <span className="flex items-center">
                  <ArrowLeft width={140} />
                </span>
              </li>
              <li className="flex flex-row justify-end gap-4">
                {t("usage.usage8")}
                <span className="flex items-center">
                  <ArrowLeft width={120} />
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-row items-center justify-center">
            <Image src="/icons/gara-pink-big.svg" alt="" width="425" height="425" />
          </div>
          <div className="-ml-14 flex flex-col justify-center gap-4">
            <ul className="flex flex-col gap-10 text-start font-heading font-bold">
              <li className="flex flex-row justify-start gap-4">
                <span className="flex items-center">
                  <ArrowRight width={130} />
                </span>
                {t("usage.usage1")}
              </li>
              <li className="flex flex-row justify-start gap-4">
                <span className="flex items-center">
                  <ArrowRight width={170} />
                </span>
                {t("usage.usage2")}
              </li>
              <li className="flex flex-row justify-start gap-4">
                <span className="flex items-center">
                  <ArrowRight width={150} />
                </span>
                {t("usage.usage3")}
              </li>
              <li className="flex flex-row justify-start gap-4">
                <span className="flex items-center">
                  <ArrowRight width={130} />
                </span>
                {t("usage.usage4")}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="mt-12 bg-tertiary/10 py-16 dark:bg-tertiary/20 xl:mt-28">
        <section className="container mx-auto">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold">{t("roadmap.header")}</h2>
          <div className="relative mt-8 flex items-center justify-center pb-[194px]">
            <Image src="/images/gara-coin/roadmap.svg" alt="" width="1232" height="487" />
            <div className="absolute inset-0">
              <div className="grid h-full w-full grid-cols-4 grid-rows-3 justify-center pl-[14.5%] pr-[15%] pt-[26px]">
                {/* <div className="px-4 pb-6 pt-8 text-center font-heading">{t("roadmap.q1")}</div>
                <div className="px-4 pb-6 pt-8 text-center font-heading">{t("roadmap.q1")}</div>
                <div className="px-4 pb-6 pt-8 text-center font-heading">{t("roadmap.q1")}</div>
                <div className="px-4 pb-6 pt-8 text-center font-heading">{t("roadmap.q1")}</div>
                <div className="px-4 pb-6 pt-8 text-center font-heading">{t("roadmap.q1")}</div>
                <div className="px-4 pb-6 pt-8 text-center font-heading">{t("roadmap.q1")}</div>
                <div className="px-4 pb-6 pt-8 text-center font-heading">{t("roadmap.q1")}</div>
                <div className="px-4 pb-6 pt-8 text-center font-heading">{t("roadmap.q1")}</div>
                <div className="px-4 pb-6 pt-8 text-center font-heading">{t("roadmap.q1")}</div>
                <div className="px-4 pb-6 pt-8 text-center font-heading">{t("roadmap.q1")}</div>
                <div className="px-4 pb-6 pt-8 text-center font-heading">{t("roadmap.q1")}</div>
                <div className="px-4 pb-6 pt-8 text-center font-heading">{t("roadmap.q1")}</div> */}
              </div>
            </div>
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
        <div className="mt-20 bg-tertiary/10 p-12 dark:bg-tertiary/20">
          <div className="flex flex-row justify-between gap-12">
            <div>
              <h2 className="mb-6 font-heading text-3xl font-bold">
                {t("release.header")} <span className="ml-4 text-xl text-primary">{t("release.subHeader")}</span>
              </h2>
              <p className="mb-6 text-justify text-sm lg:text-left">{t("release.text")}</p>
            </div>
            <div className="mr-6">
              <Image src="/images/gara-coin/present.svg" alt="" width="100" height="104" />
            </div>
          </div>
          <div className="relative mt-12 flex grid-cols-5 grid-rows-1 flex-col flex-wrap gap-5 lg:flex-row lg:pl-8 xl:grid">
            <div className="absolute left-1/2 top-1/2 -z-10 h-[calc(100%+24px)] w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-xl bg-primary/25 lg:h-2 lg:w-[calc(100%+24px)] lg:-translate-x-1/2 lg:-translate-y-1/2"></div>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <div className="flex w-[170px] flex-col justify-between gap-4 rounded-lg border bg-background p-4 shadow transition-all hover:shadow-md hover:shadow-primary dark:border-none dark:bg-[#282930]">
                <div className="text-center font-heading text-sm leading-none">{t("release.box1.text")}</div>
                <div className="text-center text-primary">{t("release.box1.subText")}</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <div className="flex w-[170px] flex-col justify-between gap-4 rounded-lg border bg-background p-4 shadow transition-all hover:shadow-md hover:shadow-primary dark:border-none dark:bg-[#282930]">
                <div className="text-center font-heading text-sm leading-none">{t("release.box2.text")}</div>
                <div className="text-center text-primary">{t("release.box2.subText")}</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <div className="flex w-[170px] flex-col justify-between gap-4 rounded-lg border bg-background p-4 shadow transition-all hover:shadow-md hover:shadow-primary dark:border-none dark:bg-[#282930]">
                <div className="text-center font-heading text-sm leading-none">{t("release.box3.text")}</div>
                <div className="text-center text-primary">{t("release.box3.subText")}</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <div className="flex w-[170px] flex-col justify-between gap-4 rounded-lg border bg-background p-4 shadow transition-all hover:shadow-md hover:shadow-primary dark:border-none dark:bg-[#282930]">
                <div className="text-center font-heading text-sm leading-none">{t("release.box4.text")}</div>
                <div className="text-center text-primary">{t("release.box4.subText")}</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <div className="flex w-[170px] flex-col justify-between gap-4 rounded-lg border bg-background p-4 shadow transition-all hover:shadow-md hover:shadow-primary dark:border-none dark:bg-[#282930]">
                <div className="text-center font-heading text-sm leading-none">{t("release.box5.text")}</div>
                <div className="text-center text-primary">{t("release.box5.subText")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-12 bg-tertiary/10 py-16 dark:bg-tertiary/20 xl:mt-28">
        <section className="container mx-auto flex flex-wrap items-center justify-between gap-12 lg:grid lg:grid-cols-2 lg:flex-row lg:items-start xl:justify-between xl:gap-6">
          <div className="max-w-[500px]">
            <Heading tag="h2">{t("IEO.header")}</Heading>
            <div className="mt-16">
              <p className="text-md mb-6 text-justify text-neutral-800 dark:text-neutral-300 lg:text-left">
                {t("IEO.text1")}
              </p>
              <p className="text-md mb-4 text-justify text-neutral-800 dark:text-neutral-300 lg:text-left">
                {t("IEO.text2")}
              </p>
              <p className="text-md mb-4 text-justify text-neutral-800 dark:text-neutral-300 lg:text-left">
                {t("IEO.text3")}
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex max-w-[480px] flex-col items-center gap-8 rounded-2xl bg-background p-8 shadow-md">
              <Image src="/images/gara-coin/3DGARA.png" alt="" width="110" height="121" quality="100" />
              <h2 className="text-center font-heading text-2xl font-bold">{t("IEO.box.address")}</h2>
              <span className="inline-flex items-center gap-2 font-heading text-sm">
                <Button variant="ghost" size="icon" className="!size-6">
                  <ClipboardCopy className="size-4 stroke-primary" />
                </Button>
                0x0B258A4ECC4Ac7a15fEdb882DB5d13F6EF23B02F
              </span>
              <div className="flex flex-row justify-between gap-8">
                <Button variant="default" className="min-w-[200px]">
                  {t("IEO.box.btnBuyWithUSDT")}
                </Button>
                <Button variant="default" className="min-w-[200px]">
                  {t("IEO.box.btnBuyWithMatic")}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
