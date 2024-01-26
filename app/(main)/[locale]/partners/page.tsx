import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Partners | Coingarage",
}

export default function Page() {
  return (
    <main>
      <section className="container mx-auto mt-6 flex flex-col flex-wrap items-center justify-center lg:flex-row xl:mt-14 xl:justify-between">
        <h1 className="mb-12 font-heading text-4xl">Partners</h1>
        <article className="grid grid-cols-1 grid-rows-4 gap-x-12 gap-y-12 lg:grid-cols-2">
          <div>
            <div className="align-end flex h-36">
               <div className="h-[132px] w-[132px] py-4">
                  <Image src="/images/partners/law.png" alt="" width={144} height={144} />
               </div>
            </div>
            Lawyers providing legal services in the field of digital technologies, 
            blockchain and cryptocurrencies (bitcoin, litecoin, ethereum, monero and others). They provide us with all the compliance 
            agenda (compliance with legal standards). In cooperation with them, we have already initiated steps to obtain a MiCA license.
          </div>
          <div>
            <div className="align-end flex h-36">
              <div className="h-[60px] w-[300px]">
                <Image src="/images/partners/finrock.svg" alt="" width={300} height={60} />
              </div>
            </div>
            <span className="text-primary">FINROCK GLOBAL LTD</span> - Based in London, Finrock provides us feature-rich
            digital asset custody services, whilst offering military-grade encryption.
          </div>
          <div>
            <div className="align-end flex h-36">
              <Image src="/images/partners/effective_solutions.svg" alt="" width={130} height={130} />
            </div>
            <span className="text-primary">EFFECTIVE SOLUTIONS PRIVATE LIMITED</span> - Headquartered in Delhi (India)
            with sales offices in the UK & the UAE, Efficacious has over a decade of experience in providing IT and
            Blockchain services to businesses worldwide. Their services range from the provision of business consulting
            to the implementation of complex Blockchain solutions, including extensive technical support.
          </div>
          <div>
            <div className="align-end flex h-36">
              <Image src="/images/partners/zen.svg" alt="" width={104} height={104} />
            </div>
            <span className="text-primary">ZEN</span> - providesus services in the field of digital payments and
            financial transactions, including a payment gateway. It offers a number of features and products that are
            aimed at simplifying and speeding up online payments for individuals and businesses. Cooperation with
            ZEN.COM allowed us to create a EUR wallet and a EUR/BTC trading pair. At the same time, thanks to its
            services, you can transfer and withdraw EUR to Coingarage.
          </div>
          <div>
            <div className="align-end flex h-36">
              <Image src="/images/partners/simplex.svg" alt="" width={217} height={81} />
            </div>
            <span className="text-primary">Simplex by NUVEI</span> - Empowers the crypto industry with full fiat
            infrastructure. Thanks to the cooperation with this company, it is possible to directly buy cryptocurrencies
            for FIAT using credit cards on Coingarage.
          </div>
          <div>
            <div className="align-end flex h-36">
              <Image src="/images/partners/creative_heroes.svg" alt="" width={185} height={99} />
            </div>
            <span className="text-primary">Creative Heroes</span> - A creative agency with an unusual approach to
            marketing. We are here for everyone looking for good ideas, performance, innovation and originality!
            Creative Heroes is behind the Coingarage brand. Together we plan marketing campaigns focused on brand
            building, but also performance campaigns in the field of SM, SEO, PPC, email marketing. We also don’t forget
            about event marketing and the help of influencers. We want to jointly enter the field of sports and culture
            as an important partner of European organizations.
          </div>
          {/* <div>
            <div className="align-end flex h-36">
              <Image src="/images/partners/everstake.svg" alt="" width={292} height={48} />
            </div>
            <span className="text-primary">Everstake</span> - A company specializing in staking services within
            blockchain technology. We see a very promising future possible cooperation with Everstake, which will enable
            Coingarage users to easily stake and thus also an interesting profit on more than 70 blockchains.
          </div>
          <div>
            <div className="align-end flex h-36">
              <Image src="/images/partners/codego.svg" alt="" width={218} height={54} />
            </div>
            <span className="text-primary">CODEGO</span> - Operates in 12 countries with physical offices and associated
            licenses. Thanks to future possible cooperation, we will be able to take advantage of her 12 years of
            experience in the field of programming, finance, cryptocurrencies and authentication systems. At the same
            time as we reach our first milestone of 50,000 users, we will bring our own debit card to the world of
            Coingarage. This will allow you to use crypto for every day purchases in line with our motto: “Crypto as
            usual”
          </div> */}
        </article>
      </section>
    </main>
  )
}
