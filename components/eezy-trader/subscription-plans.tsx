// import Figure from "@/components/Figure"
import { unstable_setRequestLocale } from "next-intl/server"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { Check } from "lucide-react"

export function SubscriptionPlans() {
  const t = useTranslations("eezy-trader.subscription")

  return (
    <div className="flex flex-col items-center lg:block">
      <p className="text-center text-3xl font-bold">{t("plans.header")}</p>
      <div className="mx-auto max-w-[800px]">
        <p className="text-text-neutral-600 mt-6 text-center text-lg dark:text-neutral-300">{t("plans.subText")}</p>
      </div>
      <div className="mt-24 flex flex-col items-start justify-between gap-16 lg:flex-row lg:gap-4">
        <div className="flex min-h-[340px] flex-col items-center gap-6 rounded-lg bg-tertiary/10 p-8 dark:bg-tertiary/10 lg:mt-24 lg:w-[380px]">
          <span className="text-center text-xl font-bold">{t("plans.trial.header")}</span>
          <Image
            src="/images/eezy-trader/images/route.svg"
            alt=""
            width={100}
            height={100}
            className="fill-tertiary stroke-tertiary"
          />
          <p className="mt-5 text-center text-lg text-tertiary">{t("plans.trial.free")}</p>
          <Separator className="w-full" />
          <p className="text-center font-heading font-bold text-tertiary">{t("plans.trial.package.header")}</p>
          <ul>
            <li className="!my-4 flex flex-row items-center gap-3 !text-base">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-tertiary">
                <Check className="h-3 w-3 stroke-white" />
              </div>
              {t("plans.trial.package.1")}
            </li>
            <li className="!my-4 flex flex-row items-center gap-3 !text-base">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-tertiary">
                <Check className="h-3 w-3 stroke-white" />
              </div>
              {t("plans.trial.package.2")}
            </li>
            <li className="!my-4 flex flex-row items-center gap-3 !text-base">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-tertiary">
                <Check className="h-3 w-3 stroke-white" />
              </div>
              {t("plans.trial.package.3")}
            </li>
            <li className="!my-4 flex flex-row items-center gap-3 !text-base">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-tertiary">
                <Check className="h-3 w-3 stroke-white" />
              </div>
              {t("plans.trial.package.4")}
            </li>
          </ul>
          <div className="mt-12 flex flex-row items-center">
            <Button variant="tertiary" className="px-10" asChild>
              <a href="https://trade.coingarage.io/login">{t("btnBuy")}</a>
            </Button>
          </div>
          <p className="mt-8 text-center text-xs text-tertiary">{t("disclaimer")}</p>
        </div>
        <div className="relative flex min-h-[340px] flex-col items-center gap-6 rounded-lg bg-primary/10 p-8 dark:bg-primary/10 lg:w-[380px]">
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
          <ul>
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
            <Button variant="default" className="px-10" asChild>
              <a href="https://trade.coingarage.io/login">{t("btnBuy")}</a>
            </Button>
          </div>
          <p className="mt-8 text-center text-xs text-primary">{t("disclaimer")}</p>
        </div>
        <div className="dark:bg-tertiary-200/10 flex min-h-[340px] flex-col items-center gap-6 rounded-lg bg-tertiary/10 p-8 lg:mt-16 lg:w-[380px]">
          <span className="text-center text-xl font-bold">{t("plans.year.header")}</span>
          <Image
            src="/images/eezy-trader/images/rocket-launch.svg"
            alt=""
            width={100}
            height={100}
            className="fill-tertiary stroke-tertiary"
          />
          <div>
            <p className="text-center text-sm text-foreground line-through">{t("plans.year.competitionPrice")}</p>
            <p className="text-center text-lg text-tertiary">{t("plans.year.price")}</p>
          </div>
          <Separator className="w-full" />
          <p className="text-center font-heading font-bold text-tertiary">{t("plans.year.package.header")}</p>
          <ul>
            <li className="!my-4 flex flex-row items-center gap-3 !text-base">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-tertiary">
                <Check className="h-3 w-3 stroke-white" />
              </div>
              {t("plans.year.package.1")}
            </li>
            <li className="!my-4 flex flex-row items-center gap-3 !text-base">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-tertiary">
                <Check className="h-3 w-3 stroke-white" />
              </div>
              {t("plans.year.package.2")}
            </li>
            <li className="!my-4 flex flex-row items-center gap-3 !text-base">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-tertiary">
                <Check className="h-3 w-3 stroke-white" />
              </div>
              {t("plans.year.package.3")}
            </li>
            <li className="!my-4 flex flex-row items-center gap-3 !text-base">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-tertiary">
                <Check className="h-3 w-3 stroke-white" />
              </div>
              {t("plans.year.package.4")}
            </li>
            <li className="!my-4 flex flex-row items-center gap-3 !text-base">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-tertiary">
                <Check className="h-3 w-3 stroke-white" />
              </div>
              {t("plans.year.package.5")}
            </li>
          </ul>
          <div className="mt-12 flex flex-row items-center">
            <Button variant="tertiary" className="px-10" asChild>
              <a href="https://trade.coingarage.io/login">{t("btnBuy")}</a>
            </Button>
          </div>
          <p className="mt-8 text-center text-xs text-tertiary">{t("disclaimer")}</p>
        </div>
      </div>
      <p className="mt-12 text-center text-neutral-400">{t("plans.fee")}</p>
    </div>
  )
}
