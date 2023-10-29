import Figure from "@/components/Figure"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Heading from "@/components/Heading"
import CryptoMarketTable from "@/components/CryptoMarketTable"
import Link from "next/link"
import Faq from "@/components/Faq"

export default function Home() {
  return (
    <main>
      <section className="container mx-auto mt-12 flex flex-col flex-wrap items-center justify-center lg:flex-row xl:mt-36 xl:justify-between">
        <div className="w-full max-w-[500px] p-4">
          <h1 className="mb-6 flex flex-col gap-3 font-heading text-5xl font-bold">
            <div>Crypto</div>
            <div>Banking & Trading</div>
            <div className="text-primary">Exchange</div>
          </h1>
          <p className="text-md text-text-neutral-600 mb-4 text-justify lg:text-left">
            Are you ready to embark on an exciting journey into the world of digital currencies? Look no further!
            Coingarage is your gateway to the future of finance, offering a seamless and secure way to buy, sell, and
            trade cryptocurrencies.
          </p>
          <div className="mt-8 flex flex-row flex-wrap gap-4">
            <Button variant="secondary" size="lg" className="w-full sm:w-max">
              Sign Up Now
            </Button>
            <Button variant="outlinePrimary" size="lg" className="w-full font-bold sm:w-max">
              Become a Shareholder
            </Button>
          </div>
        </div>
        <div className="mt-16 flex max-w-[500px] items-center justify-end xl:mt-0">
          <Image
            src="/images/phone-graph-main.svg"
            className="animate-slow-bounce"
            alt="Picture of the author"
            width={500}
            height={364}
          />
        </div>
      </section>
      <section className="container mx-auto mt-16 flex flex-row justify-between lg:mt-28">
        <div className="flex w-full flex-row flex-wrap justify-center gap-8 xl:justify-between">
          <Figure icon="/icons/exchange.svg" caption="150+ Currencies Listed" />
          <Figure icon="/icons/globe.svg" caption="100+ Participating Countries" />
          <Figure icon="/icons/currency.svg" caption="12 Assets for staking" />
          <Figure icon="/icons/phone.svg" caption="P2P Banktransfer Option" />
          <Figure icon="/icons/payment.svg" caption="Deposit EUR via Sepa or Card" />
        </div>
      </section>
      <section className="container mx-auto mt-28">
        <Heading tag="h2">Crypto market</Heading>
        <div className="mt-16">
          <CryptoMarketTable />
        </div>
      </section>
      <section className="container mx-auto mt-28 flex flex-row justify-between p-4 md:p-8">
        <div className="flex w-full flex-row flex-wrap justify-center gap-4 2xl:justify-between">
          <Image src="/images/promo/guarantee.jpg" alt="" width={310} height={149} className="rounded-xl" />
          <Image src="/images/promo/dividends.jpg" alt="" width={310} height={149} className="rounded-xl" />
          <Image src="/images/promo/shareholder.jpg" alt="" width={310} height={149} className="rounded-xl" />
          <Image src="/images/promo/join.jpg" alt="" width={310} height={149} className="rounded-xl" />
        </div>
      </section>
      <section className="relative mt-28">
        <div className="absolute left-0 top-[180px] -z-10 h-[822px] w-[1116px] max-w-[96vw] xl:-top-[68px]">
          <Image src="/images/fin.svg" alt="" fill={true} style={{ objectFit: "contain" }} />
        </div>
        <div className="container mx-auto flex flex-col-reverse xl:flex-row">
          <div className="flex flex-1 justify-center pt-36 xl:justify-start">
            <Image src="/images/laptop.svg" className="animate-slow-bounce" alt="" width={500} height={311} />
          </div>
          <div className="max-w-[500px]">
            <Heading tag="h2" className="mb-12">
              Trade Anywhere Anytime
            </Heading>
            <div>
              <p className="text-md mb-4 text-justify text-neutral-600 lg:text-left">
                Unlock the power of global financial markets right from the palm of your hand with the Coingarage Mobile
                Trading App. Experience the future of trading, where speed, convenience, and precision converge.
              </p>
              <div className="mt-8 flex flex-row justify-between gap-4 md:justify-start">
                <Button variant="link" className="h-[58px] w-[168px] p-0" asChild>
                  <Link href="https://apps.apple.com/cz/app/coingarage/id1672974634">
                    <Image src="/images/AppStore.svg" alt="App Store" width={168} height={56} />
                  </Link>
                </Button>
                <Button variant="link" className="h-[58px] w-[168px] p-0" asChild>
                  <Link href="https://play.google.com/store/apps/details?id=io.coingarage.app">
                    <Image src="/images/GPlay.svg" alt="App Store" width={168} height={56} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto my-32 xl:mt-64">
        <Heading tag="h2" className="mb-12">
          FAQ
        </Heading>
        <Faq />
      </section>
    </main>
  )
}
