import Link from "next/link"
import Image from "next/image"
import ContactUs from "@/components/form/contact-us"
import { Facebook, Instagram, Linkedin, Twitter, X, Youtube } from "lucide-react"
import { useTranslations } from "next-intl"
import CoinListing from "@/components/form/coin-listing"

export default function FooterFinance() {
  const t = useTranslations("Footer")

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
              <span className="text-md font-heading text-white">Community</span>
              <div className="mt-4 grid grid-cols-3 grid-rows-2 gap-x-6 gap-y-6">
                <a
                  href="https://www.instagram.com/coingaragesro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                  aria-label="Instagram"
                >
                  <Instagram className="text-white" size={24} strokeWidth={2} />
                </a>
                <a
                  href="https://www.linkedin.com/company/coingarage-finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                  aria-label="Linkedin"
                >
                  <Linkedin className="text-white" size={24} strokeWidth={0} fill="white" />
                </a>
                <a
                  href="https://www.facebook.com/coingaragesro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                  aria-label="Facebook"
                >
                  <Facebook className="text-white" size={24} strokeWidth={0} fill="white" />
                </a>
                <a
                  href="https://twitter.com/Coingaragesro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                  aria-label="Twitter"
                >
                  <Twitter className="text-white" size={24} strokeWidth={0} fill="white" />
                </a>
                <a
                  href="https://t.me/+ccuBEw5S5M5jNTA0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                  aria-label="Youtube"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                    <path
                      d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337.403-.294.67-.767.795-1.307.374-1.63 2.853-13.427 3.276-15.38l-.012.046c.296-1.1.187-2.108-.496-2.705-.342-.297-.736-.427-1.13-.444zm-.118 1.874c.027.025.025.025.002.027-.007-.002.08.118-.09.755l-.007.024-.005.022c-.432 1.997-2.936 13.9-3.27 15.356-.046.196-.065.182-.054.17-.1-.015-.285-.094-.3-.1l-7.48-5.525c2.562-2.467 5.182-4.7 7.827-7.08.468-.235.39-.96-.17-.972-.594.14-1.095.567-1.64.84-3.132 1.858-6.332 3.492-9.43 5.406-1.59-.553-3.177-1.012-4.643-1.467 1.272-.51 2.283-.886 3.278-1.27 1.738-.67 3.996-1.54 6.256-2.415 4.522-1.748 9.07-3.51 9.465-3.662l.032-.013.03-.013c.11-.05.173-.055.202-.057 0 0-.01-.033-.002-.026zM10.02 16.016l1.234.912c-.532.52-1.035 1.01-1.398 1.36z"
                      color="#000"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@coingaragesro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                  aria-label="Youtube"
                >
                  <Youtube className="text-white" size={24} strokeWidth={2} />
                </a>
              </div>
            </div>
            <div>
              <ul className="flex flex-col gap-6 font-sans text-sm text-white">
                {/* <li>
                  <Link href="/about-us" className="hover:text-primary">
                    {t("aboutUs")}
                  </Link>
                </li> */}
                <li>
                  <ContactUs>
                    <span className="hover:text-primary" role="button">
                      {t("contactUs")}
                    </span>
                  </ContactUs>
                </li>
                <li>
                  <a
                    className="hover:text-primary"
                    href="https://trade.coingarage.io/exchange-fee/deposit-withdrawal-fee"
                  >
                    {t("fees")}
                  </a>
                </li>
                <li>
                  <Link href="/#hot-coins" className="hover:text-primary">
                    {t("hotCoins")}
                  </Link>
                </li>
                {/* <li>
                  <Link href="/blog" className="hover:text-primary">
                    {t("blog")}
                  </Link>
                </li> */}
                <li>
                  <Link href="/#faq" className="hover:text-primary">
                    {t("faqs")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-6 font-sans text-sm text-white">
                <li>
                  <CoinListing>
                    <span className="hover:text-primary" role="button">
                      {t("coinListing")}
                    </span>
                  </CoinListing>
                </li>
                <li>
                  <a className="hover:text-primary" href="https://trade.coingarage.io">
                    {t("markets")}
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="https://trade.coingarage.io">
                    {t("trade")}
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="https://trade.coingarage.io/buy-crypto/buy">
                    {t("buyCrypto")}
                  </a>
                </li>
                {/* <li>
                  <Link href="/earn/staking" className="hover:text-primary">
                    {t("staking")}
                  </Link>
                </li> */}
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-6 font-sans text-sm text-white">
                <li>
                  <a className="hover:text-primary" href="https://trade.coingarage.io/login">
                    {t("login")}
                  </a>
                </li>
                <li>
                  <a
                    href="/legal/general-terms-and-conditions"
                    className="hover:text-primary"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {t("legal.termsOfService")}
                  </a>
                </li>
                <li>
                  <Link href="/legal/privacy-policy" className="hover:text-primary">
                    {t("legal.privacyPolicy")}
                  </Link>
                </li>
                <li>
                  <Link href="/legal/cookie-policy" className="hover:text-primary">
                    {t("legal.cookiePolicy")}
                  </Link>
                </li>
                {/* <li>
                  <a
                    className="hover:text-primary"
                    href="https://drive.google.com/file/d/1MegR8rihLQDp_n6eQ1Ka8shPECgN_Zxe/view?usp=sharing"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {"EEZY Trader"} {t("legal.termsOfService")}
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-row flex-wrap justify-center gap-x-40 gap-y-12 md:mt-0 md:justify-between">
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
