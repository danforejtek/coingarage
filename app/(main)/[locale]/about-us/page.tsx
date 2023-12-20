import Figure from "@/components/Figure"
import Heading from "@/components/Heading"
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function AboutUs() {
  const t = useTranslations("AboutUs")
  return (
    <main className="relative">
      {/* <div className="h-[84px]"></div> */}
      <section className="container mx-auto mt-12 flex flex-col flex-wrap items-center justify-center lg:flex-row xl:mt-28 xl:justify-between">
        <div className="w-full max-w-[680px] p-4">
          {/* <h1 className="mb-16 flex flex-col gap-3 font-heading text-5xl font-bold"> */}
          <Heading tag="h1" size="4xl">
            {t("weAreCoingarage")}
          </Heading>
          {/* </h1> */}
          <p className="text-text-neutral-600 mb-4 text-justify text-lg dark:text-neutral-300 lg:text-left">
            {t.rich("text1", { b: (text) => <b className="text-primary">{text}</b> })}
          </p>
          <p className="text-text-neutral-600 mb-4 text-justify text-lg dark:text-neutral-300 lg:text-left">
            {t.rich("text2", { b: (text) => <b className="text-primary">{text}</b> })}
          </p>
        </div>
        <div className="mt-16 flex max-w-[500px] items-center justify-end xl:mt-0">
          <Image src="/images/globe.png" className="animate-slow-bounce" alt="" width={500} height={328} />
        </div>
      </section>

      <section className="container mx-auto mb-28 mt-28 flex flex-row justify-between">
        <div className="flex w-full flex-row flex-wrap justify-center gap-10">
          <div className="rounded-xl border border-tertiary p-8 shadow-lg shadow-tertiary/50">
            <Figure
              className="min-h-[180px] max-w-[220px] justify-center"
              textClassName="text-black dark:text-gray-100"
              // icon="/icons/shield.svg"
              caption={t("elements.text1")}
            />
          </div>
          <div className="rounded-xl border border-tertiary p-8 shadow-lg shadow-tertiary/50">
            <Figure
              className="min-h-[180px] max-w-[220px] justify-center"
              textClassName="text-black dark:text-gray-100"
              // icon="/icons/currency.svg"
              caption={t("elements.text2")}
            />
          </div>
          <div className="rounded-xl border border-tertiary p-8 shadow-lg shadow-tertiary/50">
            <Figure
              className="min-h-[180px] max-w-[220px] justify-center"
              textClassName="text-black dark:text-gray-100"
              // icon="/icons/wallet.svg"
              caption={t("elements.text3")}
            />
          </div>
          <div className="rounded-xl border border-tertiary p-8 shadow-lg shadow-tertiary/50">
            <Figure
              className="min-h-[180px] max-w-[220px] justify-center"
              textClassName="text-black dark:text-gray-100"
              // icon="/icons/exchange.svg"
              caption={t("elements.text4")}
            />
          </div>
          <div className="rounded-xl border border-tertiary p-8 shadow-lg shadow-tertiary/50">
            <Figure
              className="min-h-[180px] max-w-[220px] justify-center"
              textClassName="text-black dark:text-gray-100"
              // icon="/icons/exchange.svg"
              caption={t("elements.text5")}
            />
          </div>
          <div className="rounded-xl border border-tertiary p-8 shadow-lg shadow-tertiary/50">
            <Figure
              className="min-h-[180px] max-w-[220px] justify-center"
              textClassName="text-black dark:text-gray-100"
              // icon="/icons/exchange.svg"
              caption={t("elements.text6")}
            />
          </div>
          <div className="rounded-xl border border-tertiary p-8 shadow-lg shadow-tertiary/50">
            <Figure
              className="min-h-[180px] max-w-[220px] justify-center"
              textClassName="text-black dark:text-gray-100"
              // icon="/icons/exchange.svg"
              caption={t("elements.text7")}
            />
          </div>
          <div className="rounded-xl border border-tertiary p-8 shadow-lg shadow-tertiary/50">
            <Figure
              className="min-h-[180px] max-w-[220px] justify-center"
              textClassName="text-black dark:text-gray-100"
              // icon="/icons/exchange.svg"
              caption={t("elements.text8")}
            />
          </div>
          {/* <div className="rounded-xl border border-tertiary p-8 shadow-lg shadow-tertiary/50">
            <Figure
             className="min-h-[180px] max-w-[220px] justify-center"
              textClassName="text-black dark:text-gray-100"
              // icon="/icons/exchange.svg"
              caption="Custom utilities and stable coins will be the icing on the cake"
            />
          </div> */}
        </div>
      </section>

      <section className="container mx-auto mb-36 mt-24 max-w-[800px]">
        <Heading tag="h2" className="mb-16">
          {t("financialWorld.text1")}
        </Heading>
        <div className="lg:pl-10">
          <p className="text-text-neutral-600 mb-4 text-justify text-lg dark:text-neutral-300 lg:text-left">
            {t("financialWorld.text2")}
          </p>
          <p className="text-text-neutral-600 mb-4 text-justify text-lg dark:text-neutral-300 lg:text-left">
            {t("financialWorld.text3")}
          </p>
          <p className="text-text-neutral-600 mb-4 text-justify text-lg dark:text-neutral-300 lg:text-left">
            {t("financialWorld.text3")}
          </p>
        </div>
      </section>
    </main>
  )
}
