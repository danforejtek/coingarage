import { cn } from "@/lib/utils"
import { Link } from "@/navigation"
import Image from "next/image"

export default function Motivation({ className }: { className?: string }) {
  return (
    <section className={cn("container mx-auto mt-14 flex flex-row justify-between p-4 md:p-8", className)}>
      <div className="flex w-full flex-row flex-wrap justify-center gap-4 2xl:justify-between">
        <Link
          href="/gara-coin"
          // target="_blank"
          rel="noopener noreferer"
          title="GARA Coin"
        >
          <Image src="/images/promo/Frame1.png" alt="" width={310} height={417} className="rounded-xl" />
        </Link>
        <Link
          href="/trading-bot"
          // target="_blank"
          rel="noopener noreferer"
          title="EezyTrader"
        >
          <Image src="/images/promo/Frame2.png" alt="" width={310} height={417} className="rounded-xl" />
        </Link>
        <a
          href="https://trade.coingarage.io/launchpad/projects"
          target="_blank"
          rel="noopener noreferer"
          title="Shareholder"
        >
          <Image src="/images/promo/Frame3.png" alt="" width={310} height={417} className="rounded-xl" />
        </a>
        <a
          href="https://trade.coingarage.io/launchpad/projects"
          target="_blank"
          rel="noopener noreferer"
          title="Join us"
        >
          <Image src="/images/promo/Frame4.png" alt="" width={310} height={417} className="rounded-xl" />
        </a>
      </div>
    </section>
  )
}
