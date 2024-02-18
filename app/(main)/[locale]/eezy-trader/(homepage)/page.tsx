import { useTranslations } from "next-intl"
import Heading from "@/components/Heading"
import Faq from "@/components/Faq"
import Image from "next/image"
import { ClaimGaraModal } from "@/components/promo/ClaimGaraModal"
import { Button } from "@/components/ui/button"

export default function Home() {
  const t = useTranslations("CryptoLandingPage")
  return (
    <main>
      <section className="container mx-auto mt-8 flex flex-col flex-wrap items-center justify-center gap-12 pt-12">
        <Image
          src="https://via.assets.so/img.jpg?w=914&h=388&tc=violet&bg=white&t=logo"
          width={914}
          height={388}
          alt="logo"
        />
        <p className="font-bold">
          The best AI-powered crypto trading bots, crypto buying, portfolio management and a free trial - all in one
          place.
        </p>
        <div className="flex flex-col justify-center gap-2">
          <Button variant="violet" size="lg" className="mt-8">
            START 7-DAY FREE TRIAL
          </Button>
          <p className="text-center text-sm">*No credit card required</p>
        </div>
        <p className="max-w-[800px] text-center text-xl font-semibold">
          Realize the complete potential of your trading strategy by leveraging the advanced capabilities of the{" "}
          <span className="text-violet">Coingarage DCA Crypto Bot</span>, empowering you to attain peak trading
          performance and maximize profits.
        </p>
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
