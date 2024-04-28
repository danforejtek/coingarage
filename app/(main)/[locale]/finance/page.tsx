import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"
// import Figure from "@/components/Figure"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Heading from "@/components/Heading"
import TradingIcon from "@/public/images/finance/icons/trading.svg"
import AcademyIcon from "@/public/images/finance/icons/academy.svg"
import BitcoinSavingsIcon from "@/public/images/finance/icons/bitcoinSavings.svg"
import CoinListingIcon from "@/public/images/finance/icons/coinListing.svg"
import CryptoCardIcon from "@/public/images/finance/icons/cryptoCard.svg"
import GaraCoinIcon from "@/public/images/finance/icons/garaCoin.svg"
import MobileAppIcon from "@/public/images/finance/icons/mobileApp.svg"
import NftIcon from "@/public/images/finance/icons/nft.svg"
import ReferralIcon from "@/public/images/finance/icons/referral.svg"
import TradingBotIcon from "@/public/images/finance/icons/tradingBot.svg"
import StakingIcon from "@/public/images/finance/icons/staking.svg"
import ContractIcon from "@/public/images/finance/icons/contract.svg"
import KycIcon from "@/public/images/finance/icons/kyc.svg"
import PaymentIcon from "@/public/images/finance/icons/payment.svg"
import PersonalDataIcon from "@/public/images/finance/icons/personalData.svg"
import RegistrationIcon from "@/public/images/finance/icons/registration.svg"
import Link from "next/link"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FinanceProgress } from "./components/progress"
import { Input } from "@/components/ui/input"
import { Select } from "./components/select"
import { GetMoreInfoForm } from "@/app/(main)/[locale]/finance/components/get-more-info-form"
import { ChevronDown } from "lucide-react"
import { PartnerCarousel } from "@/app/(main)/[locale]/finance/components/partner-carousel"
import { FaqTabs } from "@/app/(main)/[locale]/finance/components/faq-tabs"

const exchanges = [
  {
    exchange: "Coingarage",
    users: "2.5 Million",
    value: "2.4 Billion Dollars",
  },
  {
    exchange: "Gemini",
    users: "2 Million",
    value: "7 Billion Dollars",
  },
  {
    exchange: "Kraken",
    users: "9 Million",
    value: "20 Billion Dollars",
  },
  {
    exchange: "BYBIT",
    users: "15 Million",
    value: "19 Billion Dollars",
  },
  {
    exchange: "KuCoin",
    users: "20 Million",
    value: "20 Billion Dollars",
  },
  {
    exchange: "Coinbase",
    users: "56 Million",
    value: "100 Billion Dollars",
  },
  {
    exchange: "Binance",
    users: "120 Million",
    value: "300 Billion Dollars",
  },
].reverse()

const IconFigure = ({
  status,
  caption,
  children,
  icon,
}: {
  status: string
  caption: string
  children: React.ReactNode
  icon?: React.ReactNode | string
}) => {
  const statusImage =
    status === "done"
      ? "/images/finance/icons/done.svg"
      : status === "inDevelopment"
        ? "/images/finance/icons/inDevelopment.svg"
        : "/images/finance/icons/planned.svg"
  return (
    <figure className="min-w-[144px] rounded-lg border bg-background px-2 pb-6 pt-2 transition-all hover:shadow-md hover:shadow-primary">
      <div className="ju flex flex-row-reverse">
        {icon ? icon : <Image src={statusImage} width={18} height={18} alt="" />}
      </div>
      <div className="flex flex-row items-center justify-center px-6 py-2">{children}</div>
      <figcaption className="text-center font-heading">{caption}</figcaption>
    </figure>
  )
}

const Claim = ({ claim, author }: { claim: string; author: string }) => {
  return (
    <div className="flex flex-col font-heading">
      <p className="text-base font-bold">{claim}</p>
      <div className="text-base">{author}</div>
    </div>
  )
}

export default function Page({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("finance")

  return (
    <main className="relative overflow-hidden">
      <section className="container mx-auto mt-8 flex flex-wrap items-center justify-center gap-12 lg:grid lg:grid-cols-2 lg:flex-row lg:items-start xl:mt-20 xl:justify-between xl:gap-6">
        <div>
          <div className="w-full max-w-[600px]">
            <h1 className="mb-6 flex flex-col gap-3 font-heading text-5xl font-bold">
              <div>{t("main.text1")}</div>
              <div className="text-primary">{t("main.text2")}</div>
              <div>{t("main.text3")}</div>
            </h1>
            <p className="text-md mb-4 text-justify text-neutral-600 dark:text-neutral-300 lg:text-left">
              {t.rich("main.subText", { b: (chunks) => <b>{chunks}</b> })}
            </p>
          </div>
          <div className="w-full max-w-[500px]">
            <div className="mt-8 flex flex-row flex-wrap gap-4">
              <Button variant="outlinePrimary" size="lg" className="text-md w-full font-bold sm:w-max" asChild>
                <a href="https://www.coingarage-finance.com/en">{t("main.exchangeBtn")}</a>
              </Button>
              <Button variant="default" size="lg" className="text-md w-full sm:w-max" asChild>
                <a href="https://trade.coingarage.io/signup">{t("main.shareholderBtn")}</a>
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="absolute right-[-100px] top-[540px] -z-50 h-[470px] w-[774px] max-w-[96vw] overflow-hidden lg:top-[24px]">
            <Image src="/images/fin.svg" alt="" className="scale-x-[-1] object-contain" fill={true} />
          </div>
          <div className="container mx-auto flex flex-col-reverse xl:flex-row">
            <div className="mt-12 flex flex-1 justify-center xl:mt-0 xl:justify-start">
              <Image src="/images/finance/laptop.png" className="animate-slow-bounce" alt="" width={924} height={503} />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-12 flex max-w-[1200px] flex-col items-center px-8">
        <p className="mb-6 mt-20 text-center font-heading text-4xl font-bold">{t("developement.header")}</p>
        <p className="text-center">{t("developement.subtext")}</p>
        <ul className="xs:flex-col mt-12 flex flex-row flex-wrap gap-4 font-heading lg:gap-16">
          <li className="inline-flex items-center gap-4">
            {t("developement.done")}
            <Image src="/images/finance/icons/done.svg" width={18} height={18} alt="" />
          </li>
          <li className="inline-flex items-center gap-4">
            {t("developement.developement")}
            <Image src="/images/finance/icons/inDevelopment.svg" width={18} height={18} alt="" />
          </li>
          <li className="inline-flex items-center gap-4">
            {t("developement.planned")}
            <Image src="/images/finance/icons/planned.svg" width={18} height={18} alt="" />
          </li>
        </ul>
        <div className="mt-12 flex grid-cols-6 grid-rows-2 flex-row flex-wrap justify-center gap-5 xl:grid">
          <IconFigure status="done" caption={t("developement.list.box1")}>
            <TradingIcon width="67px" height="64px" className="dark:!fill-white" />
          </IconFigure>
          <IconFigure status="done" caption={t("developement.list.box2")}>
            <TradingBotIcon width="67px" height="64px" className="dark:fill-white" />
          </IconFigure>
          <IconFigure status="done" caption={t("developement.list.box3")}>
            <MobileAppIcon width="67px" height="64px" className="dark:fill-white" />
          </IconFigure>
          <IconFigure status="done" caption={t("developement.list.box4")}>
            <GaraCoinIcon width="67px" height="64px" className="dark:fill-white" />
          </IconFigure>
          <IconFigure status="done" caption={t("developement.list.box5")}>
            <CoinListingIcon width="67px" height="64px" className="dark:fill-white" />
          </IconFigure>
          <IconFigure status="done" caption={t("developement.list.box6")}>
            <ReferralIcon width="67px" height="64px" className="dark:fill-white" />
          </IconFigure>
          <IconFigure status="inDevelopment" caption={t("developement.list.box7")}>
            <BitcoinSavingsIcon width="67px" height="64px" className="dark:fill-white" />
          </IconFigure>
          <IconFigure status="inDevelopment" caption={t("developement.list.box8")}>
            <TradingIcon width="67px" height="64px" className="dark:fill-white" />
          </IconFigure>
          <IconFigure status="inDevelopment" caption={t("developement.list.box9")}>
            <AcademyIcon width="67px" height="64px" className="dark:!fill-white" />
          </IconFigure>
          <IconFigure status="planned" caption={t("developement.list.box10")}>
            <StakingIcon width="67px" height="64px" className="dark:!fill-white" />
          </IconFigure>
          <IconFigure status="planned" caption={t("developement.list.box11")}>
            <NftIcon width="70px" height="68px" className="dark:!fill-white" />
          </IconFigure>
          <IconFigure status="planned" caption={t("developement.list.box12")}>
            <CryptoCardIcon width="67px" height="64px" className="dark:!fill-white" />
          </IconFigure>
        </div>
      </section>
      <section className="container mx-auto mt-12 flex flex-col flex-wrap items-center justify-center lg:flex-row xl:mt-28 xl:justify-between">
        <div className="max-w-[540px] p-4 lg:w-1/2">
          <Heading tag="h1" size="4xl">
            {t("taxHeavens.header")}
          </Heading>
          <div className="pt-8 md:pl-12">
            <p className="mb-4 text-justify text-base text-neutral-600 dark:text-neutral-300 lg:text-left">
              {t.rich("taxHeavens.subtext1", { b: (text) => <b className="text-primary">{text}</b> })}
            </p>
            <p className="mb-4 mt-12 text-justify text-base text-neutral-600 dark:text-neutral-300 lg:text-left">
              {t.rich("taxHeavens.subtext2", { b: (text) => <b className="text-primary">{text}</b> })}
            </p>
            <div className="mt-12 flex flex-row justify-between">
              <div>
                <Image
                  src="/images/finance/icons/images/euLightMode.svg"
                  alt=""
                  width={176}
                  height={51}
                  className="dark:hidden"
                />
                <Image
                  src="/images/finance/icons/images/euDarkMode.svg"
                  alt=""
                  width={176}
                  height={51}
                  className="hidden dark:block"
                />
              </div>
              <div className="flex items-end">
                <Image src="/images/finance/icons/images/esma.png" alt="" width={160} height={51} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex max-w-[790px] items-center justify-end lg:w-1/2 xl:mt-0">
          <Image src="/images/finance/icons/images/mapLightMode.svg" alt="" width={790} height={790} />
        </div>
      </section>
      <div className="mt-12 bg-tertiary/25 py-16 dark:bg-tertiary/10 xl:mt-28">
        <section className="container mx-auto flex flex-col flex-wrap items-center justify-center lg:flex-row xl:justify-between">
          <div className="w-full max-w-[540px] p-4">
            <Heading tag="h1" size="4xl">
              {t("estimatedValuation.header")}
            </Heading>
            <p className="text-text-neutral-600 mb-4 pl-12 text-justify text-sm dark:text-neutral-300 lg:text-left">
              {t.rich("estimatedValuation.subText", {
                b: (text) => <span className="font-bold text-primary">{text}</span>,
              })}
            </p>
            <div className="mt-8 flex w-full flex-col justify-center gap-4 rounded-2xl bg-background p-8 text-center">
              <span className="font-heading text-4xl font-bold text-primary">
                {t("estimatedValuation.estimated.text1")}
              </span>
              <span className="font-heading text-sm text-primary">{t("estimatedValuation.estimated.text2")}</span>
              <div className="mt-4">
                <Button variant="default" size="lg" asChild>
                  <a
                    href=" https://app.coingarage-finance.com/accounts/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("estimatedValuation.estimated.investBtn")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-16 flex w-full flex-col items-center justify-start lg:w-1/2 xl:mt-0">
            <div className="w-full rounded-2xl bg-background p-8 xl:max-w-[662px]">
              <Table className="w-full font-heading text-base">
                <TableHeader>
                  <TableRow className="border-none font-heading">
                    <TableHead className="text-neutral-400">Exchange</TableHead>
                    <TableHead className="text-neutral-400">Number of Users</TableHead>
                    <TableHead className="text-neutral-400">
                      <div className="w-full text-right">Company Value</div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {exchanges.map((exchange) => {
                    if (exchange.exchange === "Coingarage") {
                      return (
                        <TableRow key={exchange.exchange} className="border-none">
                          <TableCell className="font-bold text-primary">{exchange.exchange}</TableCell>
                          <TableCell className="font-bold">{exchange.users}</TableCell>
                          <TableCell className="text-right font-bold">{exchange.value}</TableCell>
                        </TableRow>
                      )
                    }
                    return (
                      <TableRow key={exchange.exchange} className="border-none">
                        <TableCell className="font-medium text-primary">{exchange.exchange}</TableCell>
                        <TableCell>{exchange.users}</TableCell>
                        <TableCell className="text-right">{exchange.value}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="mt-16 w-full rounded-2xl bg-background p-12">
            <h3 className="text-center font-heading text-4xl font-bold lg:text-start">{t("oppurtunities.header")}</h3>
            <div className="mt-12 flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-start">
              <div className="lg:w-1/2">
                <p className="text-base">{t("oppurtunities.subtext")}</p>
                <h4 className="mt-10 font-heading text-xl font-bold text-primary">{t("oppurtunities.bonuses")}</h4>
                <ul className="mt-6 text-base">
                  <li>{t("oppurtunities.investment1")}</li>
                  <li>{t("oppurtunities.investment2")}</li>
                </ul>
                <div className="mt-12 flex flex-row justify-center lg:justify-start">
                  <Button variant="default" size="lg" asChild>
                    <a
                      href=" https://app.coingarage-finance.com/accounts/signup/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("oppurtunities.shareholderBtn")}
                    </a>
                  </Button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:px-12">
                <h4 className="mb-4 mt-4 text-center font-heading text-xl text-primary">{t("oppurtunities.round1")}</h4>
                <FinanceProgress value={25} />
                <h4 className="mt-4 text-center font-heading text-base text-primary">{t("oppurtunities.money")}</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="mx-auto mt-12 flex flex-col items-center px-8">
        <p className="mb-6 mt-20 max-w-[650px] text-center font-heading text-4xl font-bold">{t("revolution.header")}</p>
        <div className="flex w-full flex-row flex-wrap justify-center">
          <div className="flex w-1/2 max-w-[600px] flex-col justify-between gap-4 p-4 lg:border-r-[8px] lg:border-neutral-200 xl:gap-8 xl:p-8">
            <Claim
              claim={
                t.rich("revolution.negativeClaims.claim1.text", {
                  grey: (chunks) => <span className="text-neutral-400">{chunks}</span>,
                }) as string
              }
              author={t("revolution.negativeClaims.claim1.name")}
            />
            <Claim
              claim={
                t.rich("revolution.negativeClaims.claim2.text", {
                  grey: (chunks) => <span className="text-neutral-400">{chunks}</span>,
                }) as string
              }
              author={t("revolution.negativeClaims.claim2.name")}
            />
            <Claim
              claim={
                t.rich("revolution.negativeClaims.claim3.text", {
                  grey: (chunks) => <span className="text-neutral-400">{chunks}</span>,
                }) as string
              }
              author={t("revolution.negativeClaims.claim3.name")}
            />
            <Claim
              claim={
                t.rich("revolution.negativeClaims.claim4.text", {
                  grey: (chunks) => <span className="text-neutral-400">{chunks}</span>,
                }) as string
              }
              author={t("revolution.negativeClaims.claim4.name")}
            />
            <Claim
              claim={
                t.rich("revolution.negativeClaims.claim5.text", {
                  grey: (chunks) => <span className="text-neutral-400">{chunks}</span>,
                }) as string
              }
              author={t("revolution.negativeClaims.claim5.name")}
            />
            <Claim
              claim={
                t.rich("revolution.negativeClaims.claim6.text", {
                  grey: (chunks) => <span className="text-neutral-400">{chunks}</span>,
                }) as string
              }
              author={t("revolution.negativeClaims.claim6.name")}
            />
            <Claim
              claim={
                t.rich("revolution.negativeClaims.claim7.text", {
                  grey: (chunks) => <span className="text-neutral-400">{chunks}</span>,
                }) as string
              }
              author={t("revolution.negativeClaims.claim7.name")}
            />
          </div>
          <div className="flex w-1/2 max-w-[600px] flex-col justify-between gap-4 p-4 xl:gap-8 xl:p-8">
            <Claim
              claim={
                t.rich("revolution.positiveClaims.claim1.text", {
                  primary: (chunks) => <span className="text-primary">{chunks}</span>,
                }) as string
              }
              author={t("revolution.positiveClaims.claim1.name")}
            />
            <Claim
              claim={
                t.rich("revolution.positiveClaims.claim2.text", {
                  primary: (chunks) => <span className="text-primary">{chunks}</span>,
                }) as string
              }
              author={t("revolution.positiveClaims.claim2.name")}
            />
            <Claim
              claim={
                t.rich("revolution.positiveClaims.claim3.text", {
                  primary: (chunks) => <span className="text-primary">{chunks}</span>,
                }) as string
              }
              author={t("revolution.positiveClaims.claim3.name")}
            />
            <Claim
              claim={
                t.rich("revolution.positiveClaims.claim4.text", {
                  primary: (chunks) => <span className="text-primary">{chunks}</span>,
                }) as string
              }
              author={t("revolution.negativeClaims.claim4.name")}
            />
            <Claim
              claim={
                t.rich("revolution.positiveClaims.claim5.text", {
                  primary: (chunks) => <span className="text-primary">{chunks}</span>,
                }) as string
              }
              author={t("revolution.positiveClaims.claim5.name")}
            />
            <Claim
              claim={
                t.rich("revolution.positiveClaims.claim6.text", {
                  primary: (chunks) => <span className="text-primary">{chunks}</span>,
                }) as string
              }
              author={t("revolution.positiveClaims.claim6.name")}
            />
          </div>
        </div>
        <p className="mt-16 max-w-[650px] text-center font-heading">
          {t.rich("revolution.ps", { bold: (chunk) => <strong>{chunk}</strong> })}
        </p>
      </section>
      <div className="mt-12 w-full bg-tertiary/25 py-16 dark:bg-tertiary/10 xl:mt-28">
        <section className="container mx-auto flex flex-col flex-wrap items-center justify-center lg:flex-row xl:justify-between">
          <div className="mx-auto">
            <p className="text-center font-heading text-4xl font-bold">{t("yourValuation.header")}</p>
          </div>
          <div className="mt-12 flex w-full flex-col gap-4 lg:flex-row lg:gap-8">
            <div className="lg:w-2/3">
              <div className="mb-8 inline-flex w-full flex-wrap items-center justify-between">
                <p className="pb-4 font-heading text-2xl font-bold text-primary lg:pb-0">
                  {t("yourValuation.investment")}
                </p>
                <div className="inline-flex w-full items-center gap-4 lg:w-fit">
                  <Input type="number" placeholder="Amount" className="max-w-[300px] rounded-3xl shadow-md" />
                  <Select
                    className="max-w-[120px] rounded-3xl shadow-md"
                    label="Currency"
                    options={[
                      { value: "USD", label: "USD" },
                      { value: "EUR", label: "EUR" },
                      { value: "CZK", label: "CZK" },
                    ]}
                  />
                </div>
              </div>
              <div className="w-full rounded-2xl bg-background p-8 shadow-md">
                <Table className="w-full font-heading text-base">
                  <TableHeader>
                    <TableRow className="border-none font-heading ">
                      <TableHead className="font-bold text-foreground">
                        {t("yourValuation.table.header.column1")}
                      </TableHead>
                      <TableHead className="text-center font-bold text-primary">
                        {t("yourValuation.table.header.column2")}
                      </TableHead>
                      <TableHead className="text-center font-bold text-foreground">
                        {t("yourValuation.table.header.column3")}
                      </TableHead>
                      <TableHead className="text-center font-bold text-foreground">
                        {t("yourValuation.table.header.column4")}
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-none">
                      <TableCell className="text-primary">{t("yourValuation.table.rows.row1")}</TableCell>
                      <TableCell className="text-center">{0}</TableCell>
                      <TableCell className="text-center">{0}</TableCell>
                      <TableCell className="text-center">{0}</TableCell>
                    </TableRow>
                    <TableRow className="border-none">
                      <TableCell className="text-primary">{t("yourValuation.table.rows.row2")}</TableCell>
                      <TableCell className="text-center">{0}</TableCell>
                      <TableCell className="text-center">{0}</TableCell>
                      <TableCell className="text-center">{0}</TableCell>
                    </TableRow>
                    <TableRow className="border-none">
                      <TableCell className="text-primary">{t("yourValuation.table.rows.row3")}</TableCell>
                      <TableCell className="text-center">{0}</TableCell>
                      <TableCell className="text-center">{0}</TableCell>
                      <TableCell className="text-center">{0}</TableCell>
                    </TableRow>
                    <TableRow className="border-none font-bold">
                      <TableCell className="text-primary">{t("yourValuation.table.rows.row4")}</TableCell>
                      <TableCell className="text-center">{0}</TableCell>
                      <TableCell className="text-center">{0}</TableCell>
                      <TableCell className="text-center">{0}</TableCell>
                    </TableRow>
                  </TableBody>
                  <TableCaption className="border-t pt-4 text-left text-xs italic text-foreground">
                    {t("yourValuation.table.concluision")}
                  </TableCaption>
                </Table>
              </div>
              <div className="lg:h-[300px]"></div>
            </div>
            <div className="flex flex-row gap-4 lg:w-1/3 lg:gap-8">
              <div className="mt-12 lg:mt-0">
                <Heading tag="h3" size="2xl">
                  {t("yourValuation.subheader")}
                </Heading>
                <div className="pl-12">
                  <p className="mt-8 text-justify text-base lg:text-left">{t("yourValuation.subtext1")}</p>
                  <p className="mt-6 text-justify text-base lg:text-left">{t("yourValuation.subtext2")}</p>
                  <div className="mt-12 flex flex-row justify-center lg:justify-start">
                    <Button variant="default" size="lg" asChild>
                      <a
                        href="https://app.coingarage-finance.com/accounts/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("yourValuation.investBtn")}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container z-10 mx-auto">
        <div className="flex flex-row lg:gap-8">
          <div className="-mt-[40px] rounded-2xl bg-background p-8 shadow-md lg:-mt-[300px] lg:w-2/3">
            <div className="p-4">
              <p className="text-center font-heading text-4xl font-bold text-primary">
                {t("yourValuation.table2.header")}
              </p>
              <div className="pt-8 lg:px-8">
                <p className="text-center font-heading text-lg">{t("yourValuation.table2.subtext")}</p>
                <GetMoreInfoForm />
              </div>
            </div>
          </div>
          <div className="lg:w-1/3"></div>
        </div>
      </div>
      <section className="mx-auto mt-12 flex max-w-[1200px] flex-col items-center px-8 pb-4">
        <p className="mb-6 mt-20 text-center font-heading text-4xl font-bold">{t("simpleSteps.header")}</p>
        <p className="text-justify text-base lg:text-center">{t("simpleSteps.subtext")}</p>
        <div className="relative mt-12 flex grid-cols-5 grid-rows-1 flex-col flex-wrap gap-5 lg:flex-row lg:pl-8 xl:grid">
          <div className="absolute left-1/2 top-1/2 -z-10 h-[calc(100%+24px)] w-6 -translate-x-1/2 -translate-y-1/2 transform rounded-xl bg-primary/25 lg:h-6 lg:w-[calc(100%+24px)] lg:-translate-x-1/2 lg:-translate-y-1/2"></div>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <IconFigure
              status="done"
              caption={t("simpleSteps.box1")}
              icon={<span className="font-bold text-primary">1</span>}
            >
              <RegistrationIcon width="64px" height="64px" />
            </IconFigure>
            <ChevronDown className="h-6 w-6 text-primary/80 lg:-rotate-90" />
          </div>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <IconFigure
              status="done"
              caption={t("simpleSteps.box2")}
              icon={<span className="font-bold text-primary">2</span>}
            >
              <PersonalDataIcon width="64px" height="64px" />
            </IconFigure>
            <ChevronDown className="h-6 w-6 text-primary/80 lg:-rotate-90" />
          </div>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <IconFigure
              status="done"
              caption={t("simpleSteps.box3")}
              icon={<span className="font-bold text-primary">3</span>}
            >
              <KycIcon width="54px" height="64px" />
            </IconFigure>
            <ChevronDown className="h-6 w-6 text-primary/80 lg:-rotate-90" />
          </div>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <IconFigure
              status="done"
              caption={t("simpleSteps.box4")}
              icon={<span className="font-bold text-primary">4</span>}
            >
              <PaymentIcon width="64px" height="64px" />
            </IconFigure>
            <ChevronDown className="h-6 w-6 text-primary/80 lg:-rotate-90" />
          </div>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <IconFigure
              status="done"
              caption={t("simpleSteps.box5")}
              icon={<span className="font-bold text-primary">5</span>}
            >
              <ContractIcon width="50px" height="64px" />
            </IconFigure>
          </div>
        </div>
        <div className="mt-12">
          <a
            href="https://coingarage-finance.s3.eu-west-1.amazonaws.com/docs/contract_content_en.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="text-tertiary underline underline-offset-4 transition-all hover:text-cyan-600 hover:underline-offset-2"
          >
            {t("simpleSteps.download")}
          </a>
        </div>
      </section>
      <div className="mt-12 w-full bg-tertiary/25 py-16 dark:bg-tertiary/10 xl:mt-28">
        <section className="container mx-auto">
          <p className="mb-12 text-center font-heading text-4xl font-bold">{t("partnersImages.header")}</p>
          <PartnerCarousel />
          <div className="mt-16 flex w-full flex-row justify-center">
            <Button variant="default" size="lg" asChild>
              <a href="https://app.coingarage-finance.com/accounts/signup/" target="_blank" rel="noopener noreferrer">
                {t("partnersImages.infoBtn")}
              </a>
            </Button>
          </div>
        </section>
      </div>
      <section className="container mx-auto mt-12 w-full xl:mt-28">
        <p className="mb-12 text-center font-heading text-4xl font-bold">{t("investorPlatform.header")}</p>
        {/* <PartnerCarousel /> */}
        <div className="mt-16 flex w-full flex-row justify-center">
          <Button variant="default" size="lg" asChild>
            <a href="https://app.coingarage-finance.com/accounts/signup/" target="_blank" rel="noopener noreferrer">
              {t("investorPlatform.createAccountBtn")}
            </a>
          </Button>
        </div>
      </section>
      <section className="container mx-auto mt-12 w-full xl:mt-28">
        <Heading tag="h1" size="3xl">
          {t("faq.header")}
        </Heading>
        <FaqTabs locale={locale} />
      </section>
    </main>
  )
}
