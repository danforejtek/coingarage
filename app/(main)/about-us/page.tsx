import Heading from "@/components/Heading"
import Image from "next/image"

export default function AboutUs() {
  return (
    <main className="relative">
      {/* <div className="h-[84px]"></div> */}
      <section className="container mx-auto mt-12 flex flex-col flex-wrap items-center justify-center lg:flex-row xl:mt-28 xl:justify-between">
        <div className="w-full max-w-[680px] p-4">
          <h1 className="mb-16 flex flex-col gap-3 font-heading text-5xl font-bold">
            <Heading tag="h1" size="2xl">
              About us
            </Heading>
          </h1>

          <p className="text-text-neutral-600 mb-4 text-justify text-lg lg:text-left">
            Not on distant islands in tax havens, but in the heart of Europe, the first crypto exchange was established
            in <b className="text-primary">Prague</b>, which has a full license to hold and trade cryptocurrencies.
          </p>
          <p className="text-text-neutral-600 mb-4 text-justify text-lg lg:text-left">
            All activity is fully subject to <b>EU laws</b> and the supervision of regulators and authorities. Here you
            can buy crypto for fiat, hold it and trade it on one of the most modern platforms with an emphasis on
            completeness and simplicity
          </p>
        </div>
        <div className="mt-16 flex max-w-[500px] items-center justify-end xl:mt-0">
          <Image
            src="/images/globe.png"
            className="animate-slow-bounce"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className="container mx-auto mt-24 flex max-w-[680px] flex-row justify-between p-4 py-16">
        <ul className="checklist text-text-neutral-600 px-8">
          <li className="text-lg">A key element of our platform is the comprehensiveness of services</li>
          <li className="text-lg">
            In one place you can buy crypto for fiat currency through your debit card or by transfer from your account,
            you can then hold it here and trade it.
          </li>
          <li className="text-lg">You can find spot trading here, but also Futures</li>
          <li className="text-lg">
            You will be able to use our professional trading DCA, GRID, Futures Boots with artificial intelligence for
            trades
          </li>
          <li className="text-lg">You can earn on the exchange by staking the most popular coins</li>
          <li className="text-lg">Our exchange will also offer its own NFT platform, including a market place</li>
          <li className="text-lg">You can also exchange coins on the exchange using the P2P principle</li>
          <li className="text-lg">All these functions will be supplemented with educational programs and videos</li>
          <li className="text-lg">Custom utilities and stable coins will be the icing on the cake</li>
        </ul>
      </section>

      <section className="container mx-auto mb-36 mt-24 max-w-[800px]">
        <Heading tag="h2" className="mb-16">
          We want cryptocurrencies to become a common and respected part of the financial world in Europe.
        </Heading>
        <div className="lg:pl-10">
          <p className="text-text-neutral-600 mb-4 text-justify text-lg lg:text-left">
            We want to contribute to the adoption of cryptocurrencies in Europe and offer a completely transparent and
            safe environment that is in line with EU law and regulations.
          </p>
          <p className="text-text-neutral-600 mb-4 text-justify text-lg lg:text-left">
            So that people know what they can expect from the crypto world and are aware of the benefits, but also the
            risks of this industry. So that they know that investing in crypto is not just a short-term speculation, but
            a long-term and meaningful investment.
          </p>
          <p className="text-text-neutral-600 mb-4 text-justify text-lg lg:text-left">
            Our vision is based on four basic values: transparency, comprehensiveness, security and simplicity. If we
            achieve the fulfillment of these values in our vision, then we will be on the way to bring people long-term
            regular profit from the crypto world.
          </p>
        </div>
      </section>
    </main>
  )
}
