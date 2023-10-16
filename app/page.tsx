import Figure from "@/components/Figure"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Heading from "@/components/Heading"
import CryptoMarketTable from "@/components/CryptoMarketTable"
import Link from "next/link"

export default function Home() {
  return (
    <main
      style={{
        background: "linear-gradient(to top, rgba(217, 217, 217, 0.00) 56%, rgba(255, 31, 112, 0.22) 100%)",
      }}
    >
      <div className="h-[84px]"></div>
      <section className="container mx-auto flex flex-row flex-wrap justify-between mt-28">
        <div className="p-4 max-w-[500px]">
          <h1 className="flex flex-col gap-3 font-heading text-5xl font-bold mb-6">
            <div>Crypto</div>
            <div>Banking & Trading</div>
            <div className="text-primary">Exchange</div>
          </h1>
          <p className="text-md text-text-neutral-600 mb-4">
            Are you ready to embark on an exciting journey into the world of digital currencies? Look no further!
            Coingarage is your gateway to the future of finance, offering a seamless and secure way to buy, sell, and
            trade cryptocurrencies.
          </p>
          <div className="flex flex-row gap-4 mt-8">
            <Button variant="secondary" size="lg">
              Sign Up Now
            </Button>
            <Button variant="outlinePrimary" size="lg" className="font-bold">
              Become a Shareholder
            </Button>
          </div>
        </div>
        <div className="flex justify-end">
          <Image
            src="/images/phone-graph-main.svg"
            className="animate-slow-bounce"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </section>
      <section className="container mx-auto flex flex-row justify-between mt-28">
        <div className="flex flex-row justify-between flex-wrap gap-8 w-full">
          <Figure icon="/icons/exchange.svg" caption="150+ Currencies Listed" />
          <Figure icon="/icons/globe.svg" caption="100+ Participating Countries" />
          <Figure icon="/icons/currency.svg" caption="12 Assets for staking" />
          <Figure icon="/icons/phone.svg" caption="P2P Banktransfer Option" />
          <Figure icon="/icons/payment.svg" caption="Deposit EUR via Sepa or Card" />
        </div>
      </section>
      <section className="container mx-auto flex flex-col justify-between mt-28">
        <Heading tag="h2">Crypto market</Heading>
        <div className="mt-16">
          <CryptoMarketTable />
        </div>
      </section>
      <section className="relative mt-28">
        <div className="absolute -top-[68px] left-0 w-[1116px] h-[822px] -z-10">
          <Image src="/images/fin.svg" alt="" fill={true} style={{ objectFit: "contain" }} />
        </div>
        <div className="container mx-auto flex flex-row">
          <div className="flex flex-1 justify-start pt-36">
            <Image src="/images/laptop.svg" className="animate-slow-bounce" alt="" width={500} height={500} />
          </div>
          <div className="p-4 max-w-[500px]">
            <Heading tag="h2" className="mb-6">
              Trade Anywhere Anytime
            </Heading>
            <div className="pl-[50px]">
              <p className="text-md text-neutral-600 mb-4">
                Unlock the power of global financial markets right from the palm of your hand with the Coingarage Mobile
                Trading App. Experience the future of trading, where speed, convenience, and precision converge.
              </p>
              <div className="flex flex-row gap-4 mt-8">
                <Button variant="link" className="w-[168px] h-[58px] p-0" asChild>
                  <Link href="https://apps.apple.com/cz/app/coingarage/id1672974634">
                    <Image src="/images/AppStore.svg" alt="App Store" width={168} height={58} />
                  </Link>
                </Button>
                <Button variant="link" className="w-[168px] h-[58px] p-0" asChild>
                  <Link href="https://play.google.com/store/apps/details?id=io.coingarage.app">
                    <Image src="/images/GPlay.svg" alt="App Store" width={168} height={58} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
