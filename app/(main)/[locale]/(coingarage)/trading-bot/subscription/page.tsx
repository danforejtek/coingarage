// import Figure from "@/components/Figure"
import { unstable_setRequestLocale } from "next-intl/server"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { Check } from "lucide-react"

export default function Affiliate({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("eezy-trader.subscription")

  return (
    <main className="relative">
      <section className="container mx-auto flex flex-col flex-wrap items-center justify-center lg:flex-row xl:justify-between">
        <div className="w-full max-w-[600px] p-4">
          <h1 className="mb-6 flex flex-col gap-3 font-heading text-5xl font-bold">{t("header")}</h1>

          <p className="text-text-neutral-600 mb-4 text-justify text-lg dark:text-neutral-300 lg:text-left">
            {t.rich("subText", { b: (text) => <span className="font-bold text-violet">{text}</span> })}
          </p>

          <div className="mt-12 flex flex-row-reverse">
            <Button variant="violet" className="px-10">
              {t("btnBuy")}
            </Button>
          </div>
        </div>
        <div className="flex max-w-[600px] items-center justify-end lg:mt-16 xl:mt-0">
          <Image src="/images/eezy-trader/images/subscription.svg" alt="" width={500} height={500} />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto">
          <p className="text-center text-3xl font-bold">{t("plans.header")}</p>
          <div className="mx-auto max-w-[800px]">
            <p className="text-text-neutral-600 mt-6 text-center text-lg dark:text-neutral-300">{t("plans.subText")}</p>
          </div>
          <div className="mt-24 flex flex-col items-start justify-between gap-4 lg:flex-row">
            <div className="mt-24 flex min-h-[340px] w-[380px] flex-col items-center gap-6 rounded-lg bg-violet-200/30 p-8 dark:bg-violet-200/10">
              <span className="text-center text-xl font-bold">{t("plans.trial.header")}</span>
              <Image
                src="/images/eezy-trader/images/route.svg"
                alt=""
                width={100}
                height={100}
                className="fill-violet stroke-violet"
              />
              <p className="text-center text-lg text-violet">{t("plans.trial.free")}</p>
              <Separator className="w-full" />
              <p className="text-center font-heading font-bold text-violet">{t("plans.trial.package.header")}</p>
              <ul className="mt-6">
                <li className="!my-4 flex flex-row items-center gap-3 !text-base">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet">
                    <Check className="h-3 w-3 stroke-white" />
                  </div>
                  {t("plans.trial.package.1")}
                </li>
                <li className="!my-4 flex flex-row items-center gap-3 !text-base">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet">
                    <Check className="h-3 w-3 stroke-white" />
                  </div>
                  {t("plans.trial.package.2")}
                </li>
                <li className="!my-4 flex flex-row items-center gap-3 !text-base">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet">
                    <Check className="h-3 w-3 stroke-white" />
                  </div>
                  {t("plans.trial.package.3")}
                </li>
                <li className="!my-4 flex flex-row items-center gap-3 !text-base">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet">
                    <Check className="h-3 w-3 stroke-white" />
                  </div>
                  {t("plans.trial.package.4")}
                </li>
              </ul>
              <div className="mt-12 flex flex-row items-center">
                <Button variant="violet" className="px-10">
                  {t("btnBuy")}
                </Button>
              </div>
            </div>
            <div className="relative flex min-h-[340px] w-[380px] flex-col items-center gap-6 rounded-lg bg-violet-200/30 p-8 dark:bg-violet-200/10">
              <div className="absolute -top-[20px] rounded-3xl bg-primary px-12 py-2 text-lg text-background">
                {t("plans.month.mostUsed")}
              </div>
              <span className="mt-6 text-center text-xl font-bold">{t("plans.month.header")}</span>
              <Image
                src="/images/eezy-trader/images/plane-alt.svg"
                alt=""
                width={100}
                height={100}
                className="fill-primary stroke-primary"
              />
              <div>
                <p className="text-center text-sm text-foreground line-through">{t("plans.month.competitionPrice")}</p>
                <p className="text-center text-lg text-primary">{t("plans.month.price")}</p>
              </div>
              <Separator className="w-full" />
              <p className="text-center font-bold text-primary">{t("plans.month.package.header")}</p>
              <ul className="mt-6">
                <li className="!my-4 flex flex-row items-center gap-3 !text-base">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 stroke-white" />
                  </div>
                  {t("plans.month.package.1")}
                </li>
                <li className="!my-4 flex flex-row items-center gap-3 !text-base">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 stroke-white" />
                  </div>
                  {t("plans.month.package.2")}
                </li>
                <li className="!my-4 flex flex-row items-center gap-3 !text-base">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 stroke-white" />
                  </div>
                  {t("plans.month.package.3")}
                </li>
                <li className="!my-4 flex flex-row items-center gap-3 !text-base">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 stroke-white" />
                  </div>
                  {t("plans.month.package.4")}
                </li>
                <li className="!my-4 flex flex-row items-center gap-3 !text-base">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 stroke-white" />
                  </div>
                  {t("plans.month.package.5")}
                </li>
              </ul>
              <div className="mt-12 flex flex-row items-center">
                <Button variant="default" className="px-10">
                  {t("btnBuy")}
                </Button>
              </div>
            </div>
            <div className="mt-16 flex min-h-[340px] w-[380px] flex-col items-center gap-6 rounded-lg bg-violet-200/30 p-8 dark:bg-violet-200/10">
              <span className="text-center text-xl font-bold">{t("plans.year.header")}</span>
              <Image
                src="/images/eezy-trader/images/rocket-launch.svg"
                alt=""
                width={100}
                height={100}
                className="fill-violet stroke-violet"
              />
              <div>
                <p className="text-center text-sm text-foreground line-through">{t("plans.year.competitionPrice")}</p>
                <p className="text-center text-lg text-violet">{t("plans.year.price")}</p>
              </div>
              <Separator className="w-full" />
              <p className="text-center font-heading font-bold text-violet">{t("plans.year.package.header")}</p>
              <ul className="mt-6">
                <li className="!my-4 flex flex-row items-center gap-3 !text-base">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet">
                    <Check className="h-3 w-3 stroke-white" />
                  </div>
                  {t("plans.year.package.1")}
                </li>
                <li className="!my-4 flex flex-row items-center gap-3 !text-base">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet">
                    <Check className="h-3 w-3 stroke-white" />
                  </div>
                  {t("plans.year.package.2")}
                </li>
                <li className="!my-4 flex flex-row items-center gap-3 !text-base">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet">
                    <Check className="h-3 w-3 stroke-white" />
                  </div>
                  {t("plans.year.package.3")}
                </li>
                <li className="!my-4 flex flex-row items-center gap-3 !text-base">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet">
                    <Check className="h-3 w-3 stroke-white" />
                  </div>
                  {t("plans.year.package.4")}
                </li>
                <li className="!my-4 flex flex-row items-center gap-3 !text-base">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet">
                    <Check className="h-3 w-3 stroke-white" />
                  </div>
                  {t("plans.year.package.5")}
                </li>
              </ul>
              <div className="mt-12 flex flex-row items-center">
                <Button variant="violet" className="px-10">
                  {t("btnBuy")}
                </Button>
              </div>
            </div>
          </div>
          <p className="mt-12 text-center text-neutral-400">{t("plans.fee")}</p>
        </div>
      </section>
    </main>
  )
}
