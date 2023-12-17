// import Figure from "@/components/Figure"
import Heading from "@/components/Heading"
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function AboutUs() {
  const t = useTranslations("Affiliate")
  return (
    <main className="relative">
      <section className="container mx-auto mt-12 flex flex-col flex-wrap items-center justify-center lg:flex-row xl:mt-28 xl:justify-between">
        <div className="w-full max-w-[680px] p-4">
          <h1 className="mb-6 flex flex-col gap-3 font-heading text-5xl font-bold">
            <div className="text-3xl text-tertiary">{t("name")}:</div>
            <div>{t("claim")}</div>
          </h1>

          <p className="text-text-neutral-600 mb-4 text-justify text-lg dark:text-neutral-300 lg:text-left">
            {t("text1")}
          </p>
          <p className="text-text-neutral-600 mb-4 text-justify text-lg dark:text-neutral-300 lg:text-left">
            {t("text2")}
          </p>
        </div>
        <div className="mt-16 flex max-w-[500px] items-center justify-end xl:mt-0">
          <Image src="/images/profit.svg" className="animate-slow-bounce" alt="" width={500} height={336} />
        </div>
      </section>

      <section className="container mx-auto mb-36 mt-28 flex flex-row justify-between">
        <div className="flex-column flex w-full flex-wrap justify-center gap-10">
          <Heading tag="h2">{t("reward")}</Heading>
          <Image src="/images/affiliate-levels.png" alt="Affiliate Levels" width={725} height={385} />
          <p className="text-md text-text-neutral-600 mb-4 max-w-[725px] dark:text-neutral-300">{t("warning")}</p>
        </div>
      </section>
    </main>
  )
}
