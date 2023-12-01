import Link from "next/link"
import Image from "next/image"
import ContactUs from "@/components/form/ContactUs"

export default function Footer() {
  return (
    <div className="mt-24">
      <div className="h-2 bg-gradient-to-r from-primary to-tertiary"></div>
      <footer className="bg-secondary py-16 dark:bg-backgroundMuted">
        <div className="container mx-auto mb-20">
          <Image src="/logo/coingarage_icon_white_1.svg" alt="Logo" width={100} height={56} />
        </div>
        <div className="container mx-auto flex flex-row flex-wrap justify-between gap-x-40 gap-y-12">
          <div className="flex flex-row flex-wrap justify-start gap-x-40 gap-y-12">
            <div>
              <ul className="flex flex-col gap-6 font-sans text-sm text-white">
                <li>
                  <Link href="/about-us" className="hover:text-primary">
                    About us
                  </Link>
                </li>
                <li>
                  <ContactUs>
                    <span className="hover:text-primary" role="button">
                      Contact Us
                    </span>
                  </ContactUs>
                </li>
                <li>
                  <a
                    className="hover:text-primary"
                    href="https://trade.coingarage.io/exchange-fee/deposit-withdrawal-fee"
                  >
                    Fees
                  </a>
                </li>
                <li>
                  <Link href="/#hot-coins" className="hover:text-primary">
                    Hot Coins
                  </Link>
                </li>
                <li>Blog</li>
                <li>
                  <Link href="/#faq" className="hover:text-primary">
                    FAQ&apos;s
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-6 font-sans text-sm text-white">
                <li>Coin Listing</li>
                <li>
                  <a className="hover:text-primary" href="https://trade.coingarage.io/login">
                    Markets
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="https://trade.coingarage.io/login">
                    Trade
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="https://trade.coingarage.io/login">
                    Buy Crypto
                  </a>
                </li>
                <li>
                  <Link href="/earn/staking" className="hover:text-primary">
                    Staking
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-6 font-sans text-sm text-white">
                <li>
                  <a className="hover:text-primary" href="https://trade.coingarage.io/signin">
                    Login
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="https://trade.coingarage.io/legal/terms">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="https://trade.coingarage.io/legal/privacy-policy">
                    Privacy policy
                  </a>
                </li>
                <li>Cookie policy</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-row flex-wrap justify-center  gap-x-40 gap-y-12 md:mt-0 md:justify-between">
            <address className="not-italic">
              <ul className="flex flex-col gap-6 font-sans text-sm text-white">
                <li className="grid grid-cols-[24px_1fr] gap-4">
                  <Image src="/icons/map.png" alt="Address" width={24} height={24} className="mt-1" />
                  <span>
                    Revoluční&nbsp;1082/8
                    <br />
                    Nové&nbsp;Město&nbsp;(Praha&nbsp;1)
                    <br />
                    110&nbsp;00&nbsp;Prague,&nbsp;Czech&nbsp;Republic
                  </span>
                </li>
                <li className="grid grid-cols-[24px_1fr] gap-4">
                  <Image src="/icons/phone.png" alt="Address" width={24} height={24} className="mt-0" />
                  <span>+420&nbsp;778&nbsp;116&nbsp;516</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] gap-4">
                  <Image src="/icons/email.png" alt="Address" width={24} height={24} className="mt-0" />
                  <a href="mailto:support@coingarage.io" target="_blank" className="hover:text-primary">
                    support@coingarage.io
                  </a>
                </li>
                <li className="grid grid-cols-[24px_1fr] gap-4">
                  <Image src="/icons/list.png" alt="Address" width={24} height={24} className="mt-0" />
                  IČ:&nbsp;11667974
                </li>
              </ul>
            </address>
          </div>
        </div>
      </footer>
    </div>
  )
}
