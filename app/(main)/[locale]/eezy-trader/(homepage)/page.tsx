import { useTranslations } from "next-intl"
import Heading from "@/components/Heading"
import Faq from "@/components/Faq"
import Image from "next/image"
import { ClaimGaraModal } from "@/components/promo/ClaimGaraModal"
import { Button } from "@/components/ui/button"
import { TableComp } from "@/components/eezy-trader/table"
import Figure from "@/components/Figure"

export default function Home() {
  const t = useTranslations("CryptoLandingPage")
  return (
    <main>
      <section className="container mx-auto mt-8 flex flex-col flex-wrap items-center justify-center gap-12 pt-12">
        <Image src="/images/eezy-trader/logo/eezy.png" width={914} height={388} alt="logo" />
        <p className="font-bold">
          The best AI-powered crypto trading bots, crypto buying, portfolio management and a free trial - all in one
          place.
        </p>
        <div className="flex flex-col justify-center gap-2">
          <Button variant="violet" size="lg" className="mt-8">
            START 7-DAY FREE TRIAL
          </Button>
          <p className="text-center text-sm">*No credit card required</p>
        </div>
        <p className="max-w-[800px] text-center text-xl">
          Realize the complete potential of your trading strategy by leveraging the advanced capabilities of the{" "}
          <span className="text-violet">Coingarage DCA Crypto Bot</span>, empowering you to attain peak trading
          performance and maximize profits.
        </p>
      </section>
      <section className="container mx-auto my-32 grid max-w-[800px] grid-cols-2 gap-6 xl:mt-36">
        <TableComp />
        <TableComp />
      </section>
      <section className="container mx-auto my-32 max-w-[1000px] xl:mt-36">
        <p className="text-center text-lg font-bold">Trusted by thousands of traders, powered by</p>
        <p className="text-violet text-center text-2xl font-bold">Coingarage “Simply & safely Exchange”</p>
        <div className="bg-violet/15 mt-24 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 rounded-lg p-8">
          <div className="flex h-24 flex-1 items-center justify-center rounded-md bg-white/80 text-black">
            Long/Short
          </div>
          <div className="flex h-24 flex-1 items-center justify-center rounded-md bg-white/80 text-black">
            Trailing Profit
          </div>
          <div className="flex h-24 flex-1 items-center justify-center rounded-md bg-white/80 text-black">DCA/Grid</div>
          <div className="flex h-24 flex-1 items-center justify-center rounded-md bg-white/80 text-black">
            Save Strategy
          </div>
          <div className="flex h-24 flex-1 items-center justify-center rounded-md bg-white/80 text-black">
            Starting by AI
          </div>
          <div className="flex h-24 flex-1 items-center justify-center rounded-md bg-white/80 text-black">
            Copy Trading
          </div>
          <div className="flex h-24 flex-1 items-center justify-center rounded-md bg-white/80 text-black">
            100 Pairs to Trade
          </div>
          <div className="flex h-24 flex-1 items-center justify-center rounded-md bg-white/80 text-black">
            Technical Indicators
          </div>
          <div className="flex h-24 flex-1 items-center justify-center rounded-md bg-white/50 text-black">90 Bots</div>
        </div>
      </section>
      <section className="relative my-32 xl:mt-36">
        <Image
          src="/images/eezy-trader/images/safe-box.png"
          width={400}
          height={400}
          alt="phone"
          className="absolute -left-16 top-0 rotate-[20deg]"
        />
        <div className="container mx-auto grid max-w-[800px] ">
          <p className="pl-16 text-3xl font-bold">
            Sit back and watch your cryptocurrency investments grow, day and night, 24/7, wherever you are
          </p>
        </div>
        <div className="bg-violet absolute right-0 top-40 grid h-10 w-[504px] grid-cols-2 items-center gap-2 rounded-l-xl px-8 text-left font-bold text-white">
          Try for free for 7 days
          <span className="inline-flex w-full items-center gap-2 overflow-hidden">
            <div className="h-[6px] w-[6px] rounded-full bg-white"></div>
            <div className="h-[8px] w-[8px] rounded-full bg-white"></div>
            <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
            <div className="h-[8px] w-[8px] rounded-full bg-white"></div>
            <div className="h-[6px] w-[6px] rounded-full bg-white"></div>
            <div className="h-[6px] w-[6px] rounded-full bg-white"></div>
            <div className="h-[8px] w-[8px] rounded-full bg-white"></div>
            <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
            <div className="h-[8px] w-[8px] rounded-full bg-white"></div>
            <div className="h-[6px] w-[6px] rounded-full bg-white"></div>
            <div className="h-[6px] w-[6px] rounded-full bg-white"></div>
            <div className="h-[6px] w-[6px] rounded-full bg-white"></div>
            <div className="h-[8px] w-[8px] rounded-full bg-white"></div>
            <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
            {/* <div className="h-[8px] w-[8px] rounded-full bg-white"></div> */}
          </span>
        </div>
      </section>
      <section className="container mx-auto my-32 xl:mt-36">
        <div className="relative mx-auto h-[300px] w-[600px]">
          <div className="absolute -left-6 top-[44%] flex flex-row items-center text-2xl font-bold">
            <span className="text-violet mr-2 text-3xl font-bold">1</span> Sign Up
          </div>
          <div className="absolute -top-6 left-[44%] flex flex-col items-center text-2xl font-bold">
            <span className="text-violet mr-2 text-3xl font-bold">2</span> Connect
          </div>
          <div className="absolute -right-10 top-[44%] flex flex-row items-center text-2xl font-bold">
            <span className="text-violet mr-2 text-3xl font-bold">3</span> Start Trading
          </div>
          <Image
            src="/images/eezy-trader/images/ellipse.png"
            alt=""
            fill={true}
            style={{ objectFit: "contain", zIndex: -1 }}
          />
          <Image
            src="/images/eezy-trader/images/security.png"
            alt="phone"
            width={160}
            height={160}
            className="absolute left-[40%] top-[24%]"
          />
        </div>
        <div className="flex flex-row-reverse">
          <Button variant="violet" className="px-10">
            START FREE TRIAL
          </Button>
        </div>
      </section>
      <section className="container mx-auto mt-16 flex flex-row justify-between lg:mt-28">
        <div className="flex w-full flex-row flex-wrap justify-center gap-8 xl:justify-between">
          <Figure
            icon="/images/eezy-trader/images/presentation.gif"
            caption={t("Sign up on Coingarage")}
            iconSize={180}
          />
          <Figure icon="/images/eezy-trader/images/money-bag.gif" caption={t("Log in to an Exchange")} iconSize={180} />
          <Figure
            icon="/images/eezy-trader/images/computer.gif"
            caption={t("Go to Sub account and choose in menu EEZY Trader")}
            iconSize={180}
          />
          <Figure icon="/images/eezy-trader/images/target.gif" caption={t("Create an strategy")} iconSize={180} />
          <Figure
            icon="/images/eezy-trader/images/rocket.gif"
            caption={t("Run the bot and watch it profits!")}
            iconSize={180}
          />
        </div>
      </section>
      <div className="mt-12 flex flex-row justify-center">
        <Button variant="violet" className="px-10">
          START 7 DAY FREE TRIAL
        </Button>
      </div>
      <section id="faq" className="container mx-auto my-32 xl:mt-36">
        <Heading tag="h2" className="mb-12">
          FAQ
        </Heading>
        <Faq />
      </section>
    </main>
  )
}
