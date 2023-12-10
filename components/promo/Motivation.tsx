import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Motivation({ className }: { className?: string }) {
  return (
    <section className={cn("container mx-auto mt-14 flex flex-row justify-between p-4 md:p-8", className)}>
      <div className="flex w-full flex-row flex-wrap justify-center gap-4 2xl:justify-between">
        <Image src="/images/promo/guarantee.png" alt="" width={310} height={149} className="rounded-xl" />
        <Image src="/images/promo/dividends.jpg" alt="" width={310} height={149} className="rounded-xl" />
        <Image src="/images/promo/shareholder.jpg" alt="" width={310} height={149} className="rounded-xl" />
        <Image src="/images/promo/join.png" alt="" width={310} height={149} className="rounded-xl" />
      </div>
    </section>
  )
}
