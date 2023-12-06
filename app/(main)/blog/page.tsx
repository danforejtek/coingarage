import { Blog } from "@/components/blog"
import Image from "next/image"

export default function Page() {
  return (
    <main>
      <section className="container mx-auto mt-6 flex flex-col flex-wrap items-center justify-center lg:flex-row xl:mt-14 xl:justify-between">
        <h1 className="mb-12 font-heading text-4xl">Blog</h1>
        <article className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          <Blog.Item>
            <Blog.Image>
              <Image src="/images/blog/1.png" alt="" fill={true} />
            </Blog.Image>
            <Blog.Content>
              <Blog.Author>Ota Janda</Blog.Author>
              <Blog.Heading>Decryption of Blockchain: The Technology Behind Cryptocurrencies</Blog.Heading>
              <Blog.Perex>
                Blockchain stands out as one of the most intriguing technological breakthroughs of the 21st century.
                This technology forms the foundation for cryptocurrencies such as Bitcoin, Ethereum, and other digital
                currencies that have gained tremendous popularity in recent years. But what exactly is blockchain, and
                how does it work? Let&apos;s together uncover the mysteries of this fascinating technology.
              </Blog.Perex>
              <Blog.Footer>
                <Blog.Date>2021-09-16</Blog.Date>
                <Blog.Link href="/blog/decryption-of-blockchain">Read more...</Blog.Link>
              </Blog.Footer>
            </Blog.Content>
          </Blog.Item>
          <Blog.Item>
            <Blog.Image>
              <Image src="/images/blog/2.png" alt="" fill={true} />
            </Blog.Image>
            <Blog.Content>
              <Blog.Author>Ota Janda</Blog.Author>
              <Blog.Heading>How to Start Investing in Cryptocurrencies: A Beginner&apos;s Guide</Blog.Heading>
              <Blog.Perex>
                Investing in cryptocurrencies may seem like a path to quick wealth, but it is also an area filled with
                risks and uncertainties. While cryptocurrencies like Bitcoin and Ethereum attract with their volatility
                and potential high returns, it&apos;s important to realize that every investment should be made
                thoughtfully and after thorough research.
              </Blog.Perex>
              <Blog.Footer>
                <Blog.Date>2021-09-16</Blog.Date>
                <Blog.Link href="/blog/how-to-start-investing">Read more...</Blog.Link>
              </Blog.Footer>
            </Blog.Content>
          </Blog.Item>
          <Blog.Item>
            <Blog.Image>
              <Image src="/images/blog/3.png" alt="" fill={true} />
            </Blog.Image>
            <Blog.Content>
              <Blog.Author>Ota Janda</Blog.Author>
              <Blog.Heading>
                Bitcoin vs. Altcoins: What are the main differences and how to choose the right asset?
              </Blog.Heading>
              <Blog.Perex>
                Cryptocurrencies have changed the way we perceive money, investments, and the entire financial system.
                Bitcoin, the first and most well-known cryptocurrency, opened the doors to a new digital world, but it
                was followed by thousands of other digital currencies known as altcoins.
              </Blog.Perex>
              <Blog.Footer>
                <Blog.Date>2021-09-16</Blog.Date>
                <Blog.Link href="/blog/bitcoin-vs-altcoin">Read more...</Blog.Link>
              </Blog.Footer>
            </Blog.Content>
          </Blog.Item>
          <Blog.Item>
            <Blog.Image>
              <Image src="/images/blog/4.png" alt="" fill={true} />
            </Blog.Image>
            <Blog.Content>
              <Blog.Author>Ota Janda</Blog.Author>
              <Blog.Heading>Cryptocurrency Wallets: How to Securely Store Your Digital Wealth</Blog.Heading>
              <Blog.Perex>
                Cryptocurrencies, such as Bitcoin, Ethereum, and other altcoins, have become a popular form of
                investment and speculation. With the increasing value of digital currencies, it is essential to protect
                your investments from hacks and loss. Cryptocurrency wallets are a fundamental tool for securely storing
                and managing your digital assets.
              </Blog.Perex>
              <Blog.Footer>
                <Blog.Date>2021-09-16</Blog.Date>
                <Blog.Link href="/blog/crypto-wallers">Read more...</Blog.Link>
              </Blog.Footer>
            </Blog.Content>
          </Blog.Item>
          <Blog.Item>
            <Blog.Image>
              <Image src="/images/blog/5.png" alt="" fill={true} />
            </Blog.Image>
            <Blog.Content>
              <Blog.Author>Ota Janda</Blog.Author>
              <Blog.Heading>Cryptocurrency Mining: Is It Still a Profitable Venture?</Blog.Heading>
              <Blog.Perex>
                Cryptocurrency mining was once considered a lucrative way to enter the world of digital currencies and
                earn passive income. With the growing popularity of cryptocurrencies like Bitcoin, Ethereum, and others,
                mining has become a focal point of interest for many individuals and companies.
              </Blog.Perex>
              <Blog.Footer>
                <Blog.Date>2021-09-16</Blog.Date>
                <Blog.Link href="/blog/crypto-mining">Read more...</Blog.Link>
              </Blog.Footer>
            </Blog.Content>
          </Blog.Item>
          <Blog.Item>
            <Blog.Image>
              <Image src="/images/blog/6.png" alt="" fill={true} />
            </Blog.Image>
            <Blog.Content>
              <Blog.Author>Ota Janda</Blog.Author>
              <Blog.Heading>
                The future of banking without banks: The potential of crypto as a new financial system
              </Blog.Heading>
              <Blog.Perex>
                The world of finance is constantly evolving, and with the advent of cryptocurrencies, the idea of
                banking without traditional banks is emerging. Cryptocurrencies and blockchain technologies bring the
                promise of decentralizing the financial system, where each individual can take control of their finances
                without relying on banks.
              </Blog.Perex>
              <Blog.Footer>
                <Blog.Date>2021-09-16</Blog.Date>
                <Blog.Link href="/future-of-banking-without-banks">Read more...</Blog.Link>
              </Blog.Footer>
            </Blog.Content>
          </Blog.Item>
        </article>
      </section>
    </main>
  )
}
