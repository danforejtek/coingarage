import Figure from "@/components/Figure"
import Heading from "@/components/Heading"
import Image from "next/image"

export default function AboutUs() {
  return (
    <main className="relative">
      <section className="container mx-auto mt-12 flex flex-col flex-wrap items-center justify-center lg:flex-row xl:mt-28 xl:justify-between">
        <div className="w-full max-w-[680px] p-4">
          <h1 className="mb-6 flex flex-col gap-3 font-heading text-5xl font-bold">
            <div className="text-3xl text-tertiary">Affiliate Program:</div>
            <div>Join the Coingarage</div>
          </h1>

          <p className="text-text-neutral-600 mb-4 text-justify text-lg dark:text-neutral-300 lg:text-left">
            Do you believe that cryptocurrencies and blockchain technology can change the world for better?
          </p>
          <p className="text-text-neutral-600 mb-4 text-justify text-lg dark:text-neutral-300 lg:text-left">
            If yes, than join the Coingarage Affiliate program and earn special rewards. Introduce your friends
            Coingarage, a full licensed Crypto Exchange in the heart of Europe.
          </p>
        </div>
        <div className="mt-16 flex max-w-[500px] items-center justify-end xl:mt-0">
          <Image src="/images/profit.svg" className="animate-slow-bounce" alt="" width={500} height={336} />
        </div>
      </section>

      <section className="container mx-auto mb-36 mt-28 flex flex-row justify-between">
        <div className="flex-column flex w-full flex-wrap justify-center gap-10">
          <Heading tag="h2">YOU CAN GET REWARDS ON 3 LEVELS</Heading>
          <Image src="/images/affiliate-levels.png" alt="Affiliate Levels" width={725} height={385} />
          <p className="text-md text-text-neutral-600 mb-4 max-w-[725px] dark:text-neutral-300">
            *Very important: Please note that your Affiliate does not end only with your direct referrals if your direct
            referrals start to work and referrals from your direct referrals will receive the next rewards.
          </p>
        </div>
      </section>
    </main>
  )
}
