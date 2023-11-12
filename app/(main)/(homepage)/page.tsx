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
      <section className="container mx-auto mt-12 flex flex-col flex-wrap items-center justify-center gap-12 lg:flex-row lg:items-start xl:mt-36 xl:justify-between xl:gap-6">
        <div className="p-4">
          <div className="w-full max-w-[500px]">
            <h1 className="mb-6 flex flex-col gap-3 font-heading text-5xl font-bold">
              <div>Crypto</div>
              <div>Banking & Trading</div>
              <div className="text-primary">Exchange</div>
            </h1>
            <p className="text-md text-text-neutral-600 mb-4 text-justify lg:text-left">
              Not in&nbsp;a&nbsp;tax haven, but in the heart of&nbsp;Europe, in&nbsp;
              <b className="text-primary">Prague</b>, a&nbsp;crypto exchange has been established, which has
              a&nbsp;license to&nbsp;hold and&nbsp;trade cryptocurrencies. All activity will&nbsp;be fully subject
              to&nbsp;the&nbsp;
              <b className="text-tertiary">MiCA</b> directive and the oversight of&nbsp;regulators and&nbsp;authorities.
            </p>
          </div>
          <div>
            <GetGara className="mt-16" />
          </div>
          <div className="w-full max-w-[500px]">
            <div className="mt-8 flex flex-row flex-wrap gap-4">
              <Button variant="default" size="lg" className="w-full sm:w-max">
                Register
              </Button>
              <Button variant="outlinePrimary" size="lg" className="w-full font-bold sm:w-max">
                Become a Shareholder
              </Button>
            </div>
          </div>
        </div>
        <div>
          <GetApp />
          <NewsFeed className="mt-8" />
        </div>
      </section>
      <Motivation />
      <section className="container mx-auto mt-28">
        <Heading tag="h2">Crypto market - Hot list</Heading>
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
            <Image src="/images/promo/phone_3d.png" className="animate-slow-bounce" alt="" width={350} height={711} />
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
            <Heading tag="h2" className="mb-12">
              Trade Anywhere Anytime
            </Heading>
            <div>
              <p className="text-md mb-4 text-justify text-neutral-600 lg:text-left">
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
      <section className="container mx-auto my-32 xl:mt-36">
        <Heading tag="h2" className="mb-12">
          FAQ
        </Heading>
        <Faq />
      </section>
    </main>
  )
}
