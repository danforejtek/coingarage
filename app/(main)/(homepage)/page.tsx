import Figure from "@/components/Figure"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Heading from "@/components/Heading"
import CryptoMarketTable from "@/components/CryptoMarketTable"
import Link from "next/link"
import Faq from "@/components/Faq"
import GetGara from "@/components/promo/GetGara"
import GetApp from "@/components/promo/GetApp"
import Advantages from "@/components/promo/Advantages"
import Motivation from "@/components/promo/Motivation"
import NewsFeed from "@/components/NewsFeed"
import CryptoStats from "@/components/CryptoStats"
import GeniusTrader from "@/components/GeniusTrader"

export default function Home() {
  return (
    <main>
      <section className="container mx-auto mt-12 flex flex-wrap items-center justify-center gap-12 lg:grid lg:grid-cols-2 lg:flex-row lg:items-start xl:mt-36 xl:justify-between xl:gap-6">
        <div className="p-4">
          <div className="w-full max-w-[500px]">
            <h1 className="mb-6 flex flex-col gap-3 font-heading text-5xl font-bold">
              <div>Crypto</div>
              <div>Simply & Safe</div>
              <div className="text-primary">Exchange</div>
            </h1>
            <p className="text-md mb-4 text-justify text-neutral-600 dark:text-neutral-300 lg:text-left">
              <b>Discover a higher level of financial privacy and freedom</b> than traditional banking systems offer In
              the <b>simple and secure environment</b> of our exchange. We are an exchange based in the heart of{" "}
              <b>European union</b>. The first to introduce regulation That will make <b>crypto explode here!</b>
              {/* Not in&nbsp;a&nbsp;tax haven, but in the
              heart of&nbsp;Europe, in&nbsp;
              <b className="text-primary">Prague</b>, a&nbsp;crypto exchange has been established, which has
              a&nbsp;license to&nbsp;hold and&nbsp;trade cryptocurrencies. All activity will&nbsp;be fully subject
              to&nbsp;the&nbsp;
              <b className="text-tertiary">MiCA</b> directive and the oversight of&nbsp;regulators and&nbsp;authorities. */}
            </p>
          </div>
          <div>
            <GetGara className="mt-16" />
          </div>
          <div className="w-full max-w-[500px]">
            <div className="mt-8 flex flex-row flex-wrap gap-4">
              <Button variant="default" size="lg" className="w-full sm:w-max" asChild>
                <a href="https://trade.coingarage.io/signup">Sign up</a>
              </Button>
              <Button variant="outlinePrimary" size="lg" className="w-full font-bold sm:w-max" asChild>
                <a href="https://www.coingarage-finance.com">Become a Shareholder</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="grid-col-2 grid">
          <GetApp />
          <NewsFeed className="mt-8" />
        </div>
      </section>
      <Motivation />
      <section id="hot-coins" className="container mx-auto mt-28">
        <Heading tag="h2">Crypto market</Heading>
        <div className="mt-12">
          <CryptoMarketTable />
        </div>
        <div className="mt-12">
          <CryptoStats />
        </div>
      </section>
      <Advantages />
      <section className="container mx-auto mt-28">
        <GeniusTrader />
      </section>
      <section className="relative mt-28">
        <div className="absolute left-0 top-[180px] -z-10 h-[822px] w-[1000px] max-w-[96vw] xl:-top-[68px]">
          <Image src="/images/fin.svg" alt="" fill={true} style={{ objectFit: "contain" }} />
        </div>
        <div className="container mx-auto flex flex-col-reverse xl:flex-row">
          <div className="mt-12 flex flex-1 justify-center xl:mt-0 xl:justify-start">
            <Image src="/images/promo/phone_3d.png" className="animate-slow-bounce" alt="" width={350} height={712} />
            <div className="ml-12 hidden h-full flex-col justify-center md:flex">
              <Image
                src="/images/promo/QR.png"
                alt="Get App"
                width={224}
                height={224}
                className="rounded-xl bg-white p-1"
              />
              <div className="mt-4 text-center font-heading font-bold text-white ">
                Scan QR Code to
                <br />
                Download App
              </div>
            </div>
          </div>
          <div className="mt-20 max-w-[500px] md:mt-0">
            <Heading tag="h2" size="4xl" className="mb-12">
              Trade Anywhere Anytime
            </Heading>
            <div>
              <p className="text-md mb-4 text-justify text-neutral-600 dark:text-neutral-300 lg:text-left">
                Unlock the power of global financial markets right from the palm of your hand with the Coingarage Mobile
                Trading App. Experience the future of trading, where speed, convenience, and precision converge.
              </p>
              <div className="mt-8 flex flex-row justify-between gap-4 md:justify-start">
                <div className="flex flex-row gap-8">
                  <a
                    href="https://apps.apple.com/cz/app/coingarage/id1672974634"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-md p-2 hover:bg-primary/10"
                  >
                    <div className="flex flex-row items-center gap-4">
                      <Image src="/icons/appstore/app-store.png" alt="App Store" width={32} height={32} />
                      <div className="font-heading font-bold">App Store</div>
                    </div>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=io.coingarage.app"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-md p-2 hover:bg-primary/10"
                  >
                    <div className="flex flex-row items-center gap-4">
                      <Image src="/icons/appstore/google-play.png" alt="Play Store" width={32} height={32} />
                      <div className="font-heading font-bold">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="container mx-auto my-32 xl:mt-36">
        <Heading tag="h2" className="mb-12">
          FAQ
        </Heading>
        <Faq />
      </section>
    </main>
  )
}
