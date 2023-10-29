import Image from "next/image"

export default function Footer() {
  return (
    <div className="mt-24">
      <div className="h-2 bg-gradient-to-r from-primary to-tertiary"></div>
      <footer className="bg-secondary py-16">
        <div className="container mx-auto mb-20">
          <Image src="/logo/coingarage_icon_white_1.svg" alt="Logo" width={100} height={56} />
        </div>
        <div className="container mx-auto flex flex-row justify-between flex-wrap gap-x-40 gap-y-12">
          <div className="flex flex-row justify-start flex-wrap gap-x-40 gap-y-12">
            <div>
              <ul className="flex flex-col gap-6 text-white text-sm font-sans">
                <li>About us</li>
                <li>Contact us</li>
                <li>Fees</li>
                <li>Digita assets</li>
                <li>Blog</li>
                <li>FAQ&apos;s</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-6 text-white text-sm font-sans">
                <li>Coin Listing</li>
                <li>Markets</li>
                <li>Trade</li>
                <li>Buy Crypto</li>
                <li>Earn</li>
                <li>Staking</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-6 text-white text-sm font-sans">
                <li>Register</li>
                <li>Login</li>
                <li>Terms of use</li>
                <li>Privacy policy</li>
                <li>Cookie policy</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row justify-center md:justify-between flex-wrap  gap-x-40 gap-y-12 mt-12 md:mt-0">
            <address className="not-italic">
              <ul className="flex flex-col gap-6 text-white text-sm font-sans">
                <li className="grid grid-cols-[24px_1fr] gap-4">
                  <Image src="/icons/map.png" alt="Address" width={24} height={24} className="mt-1" />
                  <span>
                    Vlkova&nbsp;532/8,
                    <br />
                    130&nbsp;00&nbsp;Prague,&nbsp;Czech&nbsp;Republic
                  </span>
                </li>
                <li className="grid grid-cols-[24px_1fr] gap-4">
                  <Image src="/icons/phone.png" alt="Address" width={24} height={24} className="mt-0" />
                  <span>+420&nbsp;778&nbsp;116&nbsp;516</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] gap-4">
                  <Image src="/icons/email.png" alt="Address" width={24} height={24} className="mt-0" />
                  support@coingarage.io
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
