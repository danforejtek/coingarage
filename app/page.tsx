import Figure from "@/components/Figure"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  const navigation = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
  ]

  return (
    <main
      style={{
        background: "linear-gradient(to top, rgba(217, 217, 217, 0.00) 10%, rgba(255, 31, 112, 0.22) 100%)",
      }}
    >
      <div className="h-[84px]"></div>
      <section className="container mx-auto flex flex-row justify-between mt-28">
        <div className="p-4 max-w-[500px]">
          <h1 className="flex flex-col gap-3 font-heading text-5xl font-bold mb-6">
            <div>Crypto</div>
            <div>Banking & Trading</div>
            <div className="text-primary">Exchange</div>
          </h1>
          <p className="text-md text-[--text-light] mb-4">
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
        <div className="flex-1 self-end">
          <div className="flex justify-end">
            <Image
              src="/images/phone-graph-main.svg"
              className="animate-slow-bounce"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto flex flex-row justify-between mt-28">
        <div className="flex flex-row justify-between gap-8 w-full">
          <Figure icon="/icons/exchange.svg" caption="150+ Currencies Listed" />
          <Figure icon="/icons/globe.svg" caption="100+ Participating Countries" />
          <Figure icon="/icons/currency.svg" caption="12 Assets for staking" />
          <Figure icon="/icons/phone.svg" caption="P2P Banktransfer Option" />
          <Figure icon="/icons/payment.svg" caption="Deposit EUR via Sepa or Card" />
        </div>
      </section>
    </main>
  )
}
