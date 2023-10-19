import Figure from "@/components/Figure"
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
      <section className="container mx-auto flex flex-col lg:flex-row flex-wrap items-center justify-center xl:justify-between mt-16 xl:mt-28">
        <div className="p-4 w-full max-w-[680px]">
          <h1 className="flex flex-col gap-3 font-heading text-5xl font-bold mb-6">
            <div className="text-tertiary text-3xl">Buy & Sell Crypto:</div>
            <div>Fund Your Account with</div>
            <div>Traditional Currencies</div>
          </h1>

          <p className="text-lg text-text-neutral-600 mb-4">
            User can easily buy Bitcoin and other cryptocurrencies using a wide range of payment options, including bank
            transfer, credit card or debit card, and cash. There is a payment option for everyone on Coingarage.
          </p>
        </div>
        <div className="flex justify-end items-center max-w-[500px] mt-16 xl:mt-0">
          <Image
            src="/images/profit.svg"
            className="animate-slow-bounce"
            alt="Picture of the author"
            width={500}
            height={330}
          />
        </div>
      </section>

      <section className="container mx-auto flex flex-row justify-between mt-28 mb-28">
        <div className="flex flex-row justify-center flex-wrap gap-10 w-full">
          <div className="border border-tertiary p-8 rounded-xl shadow-lg shadow-tertiary/50">
            <Figure
              className="max-w-[220px]"
              textClassName="text-black"
              icon="/icons/shield.svg"
              caption="We work only with verified and trusted partners to give you a secure and seamless crypto buying experience."
            />
          </div>
          <div className="border border-tertiary p-8 rounded-xl shadow-lg shadow-tertiary/50">
            <Figure
              className="max-w-[220px]"
              textClassName="text-black"
              icon="/icons/currency.svg"
              caption="Coingarage accepts a wide range of currencies and makes it easy for you to buy crypto using EUR, USD and other fiat currencies."
            />
          </div>
          <div className="border border-tertiary p-8 rounded-xl shadow-lg shadow-tertiary/50">
            <Figure
              className="max-w-[220px]"
              textClassName="text-black"
              icon="/icons/wallet.svg"
              caption="Once you complete the purchase, we will deposit your new crypto directly to your Coingarage wallet: a safe and simple way to manage your crypto assets."
            />
          </div>
          <div className="border border-tertiary p-8 rounded-xl shadow-lg shadow-tertiary/50">
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
