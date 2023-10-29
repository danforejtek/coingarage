import Figure from "@/components/Figure"
import Heading from "@/components/Heading"
import Image from "next/image"

export default function AboutUs() {
  return (
    <main className="relative">
      <section className="container mx-auto mt-12 flex flex-col flex-wrap items-center justify-center lg:flex-row xl:mt-28 xl:justify-between">
        <div className="w-full max-w-[680px] p-4">
          <h1 className="mb-6 flex flex-col gap-3 font-heading text-5xl font-bold">
            <div className="text-3xl text-tertiary">Buy & Sell Crypto:</div>
            <div>
              Fund Your Account with <br />
              Traditional Currencies
            </div>
            <div></div>
          </h1>

          <p className="text-text-neutral-600 mb-4 text-justify text-lg lg:text-left">
            User can easily buy Bitcoin and other cryptocurrencies using a wide range of payment options, including bank
            transfer, credit card or debit card, and cash. There is a payment option for everyone on Coingarage.
          </p>
        </div>
        <div className="mt-16 flex max-w-[500px] items-center justify-end xl:mt-0">
          <Image
            src="/images/profit.svg"
            className="animate-slow-bounce"
            alt="Picture of the author"
            width={500}
            height={330}
          />
        </div>
      </section>

      <section className="container mx-auto mb-28 mt-28 flex flex-row justify-between">
        <div className="flex w-full flex-row flex-wrap justify-center gap-10">
          <div className="rounded-xl border border-tertiary p-8 shadow-lg shadow-tertiary/50">
            <Figure
              className="max-w-[220px]"
              textClassName="text-black"
              icon="/icons/shield.svg"
              caption="We work only with verified and trusted partners to give you a secure and seamless crypto buying experience."
            />
          </div>
          <div className="rounded-xl border border-tertiary p-8 shadow-lg shadow-tertiary/50">
            <Figure
              className="max-w-[220px]"
              textClassName="text-black"
              icon="/icons/currency.svg"
              caption="Coingarage accepts a wide range of currencies and makes it easy for you to buy crypto using EUR, USD and other fiat currencies."
            />
          </div>
          <div className="rounded-xl border border-tertiary p-8 shadow-lg shadow-tertiary/50">
            <Figure
              className="max-w-[220px]"
              textClassName="text-black"
              icon="/icons/wallet.svg"
              caption="Once you complete the purchase, we will deposit your new crypto directly to your Coingarage wallet: a safe and simple way to manage your crypto assets."
            />
          </div>
          <div className="rounded-xl border border-tertiary p-8 shadow-lg shadow-tertiary/50">
            <Figure
              className="max-w-[220px]"
              textClassName="text-black"
              icon="/icons/exchange.svg"
              caption="You can immediately trade your purchased crypto on the main products and services on the Coingarage Exchange."
            />
          </div>
        </div>
      </section>
    </main>
  )
}
