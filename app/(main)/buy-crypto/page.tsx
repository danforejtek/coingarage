import Figure from "@/components/Figure"
import Heading from "@/components/Heading"
import MegaInput from "@/components/form/MegaInput"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutUs() {
  return (
    <main className="relative">
      <section className="container mx-auto mt-12 flex flex-col flex-wrap items-start justify-center lg:flex-row xl:mt-28 xl:justify-between">
        <div className="w-full max-w-[540px] p-4">
          <h1 className="mb-6 flex flex-col gap-3 font-heading text-5xl font-bold">
            <div className="text-3xl text-tertiary">Buy & Sell Crypto:</div>
            <div>
              Fund&nbsp;Your&nbsp;Account&nbsp;with <br />
              Traditional&nbsp;Currencies
            </div>
            <div></div>
          </h1>

          <p className="text-text-neutral-600 mb-4 text-justify text-lg lg:text-left">
            User can easily buy Bitcoin and other cryptocurrencies using a wide range of payment options, including bank
            transfer, credit card or debit card, and cash. There is a payment option for everyone on Coingarage.
          </p>
          <div>
            <span className="font-heading text-2xl font-bold text-neutral-500">Supported Payment Methods</span>
            <div className="mt-4 flex flex-row items-center gap-4">
              <div>
                <Image src="/icons/payment/visa.png" alt="VISA" width={83} height={27} />
              </div>
              <div>
                <Image src="/icons/payment/master-card.png" alt="Master Card" width={60} height={38} />
              </div>
              <div>
                <Image src="/icons/payment/g-pay.png" alt="Google Pay" width={83} height={40} />
              </div>
              <div>
                <Image src="/icons/payment/apple-pay.png" alt="Apple Pay" width={83} height={34} />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:mt10 mt-16 flex max-w-[500px] flex-col items-center justify-end gap-4">
          <MegaInput label={"Spend"} subLabel={"Available"} />
          <MegaInput label={"Receive"} subLabel={"Balance"} />
          <Button className="mt-4 px-16 py-6 text-lg">Buy crypto</Button>
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
