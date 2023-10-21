import Heading from "@/components/Heading"
import Image from "next/image"

export default function AboutUs() {
  return (
    <main className="relative">
      <div
        className="absolute top-0 left-0 w-full h-[100vh] -z-10"
        style={{
          background: "linear-gradient(to top, rgba(217, 217, 217, 0.00) 60%, rgba(255, 31, 112, 0.22) 100%)",
        }}
      ></div>
      <div className="h-[84px]"></div>
      <section className="container mx-auto flex flex-col lg:flex-row flex-wrap items-center justify-center xl:justify-between mt-12 xl:mt-28">
        <div className="p-4 w-full max-w-[680px]">
          <h1 className="flex flex-col gap-3 font-heading text-5xl font-bold mb-16">
            <Heading tag="h1" size="2xl">
              About us
            </Heading>
          </h1>

          <p className="text-lg text-text-neutral-600 mb-4 text-justify lg:text-left">
            Not on distant islands in tax havens, but in the heart of Europe, the first crypto exchange was established
            in <b className="text-primary">Prague</b>, which has a full license to hold and trade cryptocurrencies.
          </p>
          <p className="text-lg text-text-neutral-600 mb-4 text-justify lg:text-left">
            All activity is fully subject to <b>EU laws</b> and the supervision of regulators and authorities. Here you
            can buy crypto for fiat, hold it and trade it on one of the most modern platforms with an emphasis on
            completeness and simplicity
          </p>
        </div>
        <div className="flex justify-end items-center max-w-[500px] mt-16 xl:mt-0">
          <Image
            src="/images/globe.png"
            className="animate-slow-bounce"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className="container mx-auto p-4 flex flex-row justify-between py-16 mt-24 max-w-[680px]">
        <ul className="checklist text-text-neutral-600">
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

      <section className="container mx-auto mt-24 max-w-[800px] mb-36">
        <Heading tag="h2" className="mb-16">
          We want cryptocurrencies to become a common and respected part of the financial world in Europe.
        </Heading>
        <div>
          <p className="text-lg text-text-neutral-600 mb-4 text-justify lg:text-left">
            We want to contribute to the adoption of cryptocurrencies in Europe and offer a completely transparent and
            safe environment that is in line with EU law and regulations.
          </p>
          <p className="text-lg text-text-neutral-600 mb-4 text-justify lg:text-left">
            So that people know what they can expect from the crypto world and are aware of the benefits, but also the
            risks of this industry. So that they know that investing in crypto is not just a short-term speculation, but
            a long-term and meaningful investment.
          </p>
          <p className="text-lg text-text-neutral-600 mb-4 text-justify lg:text-left">
            Our vision is based on four basic values: transparency, comprehensiveness, security and simplicity. If we
            achieve the fulfillment of these values in our vision, then we will be on the way to bring people long-term
            regular profit from the crypto world.
          </p>
        </div>
      </section>
    </main>
  )
}
