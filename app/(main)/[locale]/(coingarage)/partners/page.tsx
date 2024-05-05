import Image from "next/image"
import type { Metadata } from "next"
import Heading from "@/components/Heading"
import { unstable_setRequestLocale } from "next-intl/server"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Partners | Coingarage",
}

const partners = [
  {
    src: "/images/finance/partners/blockchainLegalLightMode.png",
    srcDark: "/images/finance/partners/blockchainLegalDarkMode.png",
    heading: "partnersMain.partner1.header",
    text: "partnersMain.partner1.subtext",
  },
  {
    src: "/images/finance/partners/findrock.svg",
    heading: "partnersMain.partner2.header",
    text: "partnersMain.partner2.subtext",
  },
  {
    src: "/images/finance/partners/simplex.svg",
    heading: "partnersMain.partner3.header",
    text: "partnersMain.partner3.subtext",
  },
  {
    src: "/images/finance/partners/zen.svg",
    heading: "partnersMain.partner4.header",
    text: "partnersMain.partner4.subtext",
  },
  {
    src: "/images/finance/partners/effectiveSolutions.svg",
    heading: "partnersMain.partner5.header",
    text: "partnersMain.partner5.subtext",
  },
  {
    src: "/images/finance/partners/creativeHeroes.svg",
    heading: "partnersMain.partner6.header",
    text: "partnersMain.partner6.subtext",
  },
]

export default function Page({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("finance")

  return (
    <main>
      <section className="container mx-auto mt-6 flex flex-col flex-wrap items-center justify-center lg:flex-row xl:mt-14 xl:justify-between">
        <h1 className="mb-24 w-full text-center font-heading text-4xl font-bold text-primary">
          {t("partnersImages.header")}
        </h1>
        <article className="flex flex-col gap-12">
          {partners.map((partner, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "flex w-full flex-row gap-12",
                  index % 2 === 0 ? "flex-row justify-start" : "flex-row-reverse justify-end"
                )}
              >
                <div className={cn("flex w-1/3 flex-row justify-center")}>
                  <div className="relative mb-4 h-[200px] w-full max-w-[300px]">
                    <Image
                      src={partner.src}
                      alt=""
                      fill
                      className="object-contain dark:hidden"
                      suppressHydrationWarning
                    />
                    {partner?.srcDark ? (
                      <Image
                        src={partner.srcDark}
                        alt=""
                        fill
                        className="hidden object-contain dark:block"
                        suppressHydrationWarning
                      />
                    ) : null}
                  </div>
                </div>
                <div className="w-2/3">
                  <Heading tag="h3" size="2xl">
                    <span className="text-tertiary">{t(partner.heading)}</span>
                  </Heading>
                  <p className="pl-12 pt-8">{t(partner.text)}</p>
                </div>
              </div>
            )
          })}
        </article>
      </section>
    </main>
  )
}
