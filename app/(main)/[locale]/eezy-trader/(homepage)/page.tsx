import { useTranslations } from "next-intl"
// import Heading from "@/components/Heading"
// import Faq from "@/components/Faq"
import Image from "next/image"
// import { ClaimGaraModal } from "@/components/promo/ClaimGaraModal"
import { Button } from "@/components/ui/button"
import { TableComp } from "@/components/eezy-trader/table"
import Figure from "@/components/Figure"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TopPerformers } from "@/components/eezy-trader/top-performers"
import { TopPairs } from "@/components/eezy-trader/top-pairs"

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
        <TopPerformers />
        {/* <TopPairs /> */}
      </section>
      <section className="container relative mx-auto my-32 max-w-[1000px] xl:mt-36">
        <p className="text-center text-lg font-bold">Trusted by thousands of traders, powered by</p>
        <p className="text-center text-2xl font-bold text-violet">Coingarage “Simply & safely Exchange”</p>
        <div className="z-10 mt-24 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 rounded-lg bg-violet-50 p-8 dark:bg-violet-200/40">
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
          <div className="flex h-24 flex-1 items-center justify-center rounded-md bg-white/80 text-black">90 Bots</div>
        </div>
        <Image
          src="/images/eezy-trader/images/slingshot.png"
          alt=""
          width={380}
          height={380}
          className="absolute -right-[0%] top-[18%] -z-10 -translate-y-1/2 transform select-none"
        />
      </section>
      <section className="relative my-32 xl:mt-36">
        <Image
          src="/images/eezy-trader/images/safe-box.png"
          width={400}
          height={400}
          alt="phone"
          className="absolute -left-16 top-0 hidden rotate-[20deg] select-none lg:block"
        />
        <div className="container mx-auto grid max-w-[800px] ">
          <p className="text-3xl font-bold">
            Sit back and watch your cryptocurrency investments grow, day and night, 24/7, wherever you are
          </p>
        </div>
        <div className="absolute right-0 top-40 hidden h-10 w-[504px] grid-cols-2 items-center gap-2 rounded-l-xl bg-violet px-8 text-left font-bold text-white lg:grid">
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
        <div className="relative mx-auto h-[180px] w-full lg:h-[300px] lg:w-[600px]">
          <div className="absolute left-0 top-[44%] flex flex-row items-center font-bold lg:-left-6 lg:text-2xl">
            <span className="mr-2 text-3xl font-bold text-violet">1</span> Sign Up
          </div>
          <div className="absolute -top-6 left-[44%] flex flex-col items-center font-bold lg:text-2xl">
            <span className="mr-2 text-3xl font-bold text-violet">2</span> Connect
          </div>
          <div className="absolute right-0 top-[44%] flex flex-row items-center font-bold lg:-right-10 lg:text-2xl">
            <span className="mr-2 text-3xl font-bold text-violet">3</span> Start Trading
          </div>
          <Image
            src="/images/eezy-trader/images/ellipse.png"
            alt=""
            fill={true}
            style={{ objectFit: "contain", zIndex: -1 }}
            className="select-none"
          />
          <Image
            src="/images/eezy-trader/images/security.png"
            alt="phone"
            width={160}
            height={160}
            className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 select-none"
          />
        </div>
        <div className="flex flex-row-reverse">
          <Button variant="violet" className="px-10">
            START FREE TRIAL
          </Button>
        </div>
      </section>
      <section className="bg-violet-200/30 py-24 dark:bg-violet-200/10">
        <div className="container relative mx-auto">
          <div className="lg:w-1/2">
            <div>
              <Image src={`/logo/coingarage_icon_gradient.png`} alt="Logo" width={130} height={74} />
            </div>
            <h3 className="mt-8 flex flex-col gap-2 text-4xl font-bold">
              <span>Start Earning with</span>
              <span className="text-violet">Coingarage’s Trader</span>
              <span>
                <span className="text-violet">Bot</span> Today
              </span>
            </h3>
            <p className="mt-12 max-w-[410px]">
              Sign up to Coingarage and get fully functional{" "}
              <span className="text-violet">7&#8209;day&nbsp;PRO&nbsp;trial</span> period to test all the advanced bot’s
              features.
            </p>
          </div>
          <div className="lg:w-1/2"></div>
          <Image
            src="/images/eezy-trader/images/startup.png"
            alt=""
            width={400}
            height={400}
            className="absolute right-0 top-[50%] -z-10 -translate-y-1/2 transform select-none lg:-right-[2%] lg:left-[50%] lg:top-[50%] lg:-translate-x-1/2"
          />
        </div>
      </section>
      <section className="container mx-auto mt-16 lg:mt-28">
        <div className="container mx-auto grid max-w-[800px] ">
          <p className="pl-16 text-center text-3xl font-bold">Start GRID BOT in 5 Easy Steps</p>
          <p className="mt-8 text-center text-xl">
            Launch your GRID trading bot effortlessly in five simple steps: initiate trading and optimize your profits
            today with Coingarage.
          </p>
        </div>
        <div className="mt-12 flex w-full flex-row flex-wrap justify-center gap-8 xl:justify-between">
          <Figure icon="/images/eezy-trader/images/presentation.gif" caption={"Sign up on Coingarage"} iconSize={180} />
          <Figure icon="/images/eezy-trader/images/money-bag.gif" caption={"Log in to an Exchange"} iconSize={180} />
          <Figure
            icon="/images/eezy-trader/images/computer.gif"
            caption={"Go to Sub account and choose in menu EEZY Trader"}
            iconSize={180}
          />
          <Figure icon="/images/eezy-trader/images/target.gif" caption={"Create an strategy"} iconSize={180} />
          <Figure
            icon="/images/eezy-trader/images/rocket.gif"
            caption={"Run the bot and watch it profits!"}
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
        <p className="text-center text-3xl font-bold">FAQ</p>
        <Accordion type="multiple" className="mt-12 w-full">
          <AccordionItem value={`item-1`} className="mb-8 rounded border-b-0 px-8 shadow-md dark:bg-backgroundMuted">
            <AccordionTrigger className="text-left text-lg">
              <span className="mr-6">{`How can I get started with this platform?`}</span>
            </AccordionTrigger>
            <AccordionContent className="text-md">{`Getting started is easy! Simply sign up for an account, complete the verification process, deposit funds into your account, and start trading using our intuitive platform and powerful trading tools.`}</AccordionContent>
          </AccordionItem>
          <AccordionItem value={`item-2`} className="mb-8 rounded border-b-0 px-8 shadow-md dark:bg-backgroundMuted">
            <AccordionTrigger className="text-left text-lg">
              <span className="mr-6">{`How do you ensure security of my funds and personal information?`}</span>
            </AccordionTrigger>
            <AccordionContent className="text-md">{`We deploy industry-standard security measures, including encryption, two-factor authentication (2FA), and regular security audits, to safeguard your funds and personal data. Additionally, our platform adheres to strict compliance standards to protect against unauthorized access and fraudulent activities.`}</AccordionContent>
          </AccordionItem>
          <AccordionItem value={`item-3`} className="mb-8 rounded border-b-0 px-8 shadow-md dark:bg-backgroundMuted">
            <AccordionTrigger className="text-left text-lg">
              <span className="mr-6">{`What are the benefits of using DCA?`}</span>
            </AccordionTrigger>
            <AccordionContent className="text-md">{`Getting started is easy! Simply sign up for an account, complete the verification process, deposit funds into your account, and start trading using our intuitive platform and powerful trading tools.`}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}
