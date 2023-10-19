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
            <div className="text-tertiary text-3xl">Affiliate Program:</div>
            <div>Join the Coingarage</div>
          </h1>

          <p className="text-lg text-text-neutral-600 mb-4">
            Do you believe that cryptocurrencies and blockchain technology can change the world for better?
          </p>
          <p className="text-lg text-text-neutral-600 mb-4">
            If yes, than join the Coingarage Affiliate program and earn special rewards. Introduce your friends
            Coingarage, a full licensed Crypto Exchange in the heart of Europe.
          </p>
        </div>
        <div className="flex justify-end items-center max-w-[500px] mt-16 xl:mt-0">
          <Image
            src="/images/profit.svg"
            className="animate-slow-bounce"
            alt="Picture of the author"
            width={500}
            height={336}
          />
        </div>
      </section>

      <section className="container mx-auto flex flex-row justify-between mt-28 mb-36">
        <div className="flex flex-column justify-center flex-wrap gap-10 w-full">
          <Heading tag="h2">YOU CAN GET REWARDS ON 3 LEVELS</Heading>
          <Image src="/images/affiliate-levels.png" alt="Affiliate Levels" width={725} height={385} />
          <p className="text-md text-text-neutral-600 mb-4 max-w-[725px]">
            *Very important: Please note that your Affiliate does not end only with your direct referrals if your direct
            referrals start to work and referrals from your direct referrals will receive the next rewards.
          </p>
        </div>
      </section>
    </main>
  )
}
