import Image from "next/image"
import Heading from "./Heading"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

const up = "text-green-500"
const down = "text-red-500"

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

const percents = new Intl.NumberFormat("en-US", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const TraderCard = () => {
  return (
    <div className="w-56 rounded-xl bg-white p-4 dark:bg-gray-800">
      <div className="grid grid-cols-[44px_1fr] gap-4">
        <div>
          <Image src="/images/avatars/batman.png" alt="avatar" width={44} height={44} />
        </div>
        <div>
          <div className="flex flex-col gap-2 text-lg font-medium">John Moon</div>
          <div className="text-xs text-neutral-500">246 followers</div>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="font-heading font-bold">7D ROI</div>
        <span className={cn("text-sm text-neutral-400", 0.54 > 0 ? up : down)}>{percents.format(0.54)}</span>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="font-heading font-bold">7D Follorwrs’ PnL</div>
        <span className={cn("text-sm text-neutral-400", 0.54 > 0 ? up : down)}>{percents.format(0.54)}</span>
      </div>
      <div>
        <Button variant="ghost" className="mt-8 w-full p-0 font-bold text-primary hover:bg-transparent">
          <div className="flex w-full flex-row justify-between font-heading text-base">
            <span>Copy</span>
            <span>
              <ChevronRight width="16px" />
            </span>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default function GeniusTrader() {
  return (
    <div className="dark:bg-backgroundMuted rounded-2xl bg-neutral-100 p-10">
      <div className="flex flex-row flex-wrap justify-center gap-8 lg:justify-between">
        <div>
          <Heading tag="h3" size="3xl">
            {"GEnius Trader -"}
          </Heading>
          <div className="mt-8 font-heading text-lg text-primary">Let AI Bot work for you</div>
          <div className="flex flex-row gap-8">
            <div className="mt-4 flex flex-col">
              <div className="font-heading text-2xl font-bold">32,200</div>
              <div className="text-sm text-neutral-500">Master Traders</div>
            </div>
            <div className="mt-4 flex flex-col ">
              <div className="font-heading text-2xl font-bold">320,200</div>
              <div className="text-sm text-neutral-500">Followers</div>
            </div>
          </div>
          <Button variant="default" size="lg" className="mt-12 font-bold lg:mt-48">
            Get Started
          </Button>
        </div>
        <div className="mt-8">
          <div className="font-heading text-lg text-primary">Best Traders</div>
          <div className="flex flex-col gap-8 sm:flex-row">
            <TraderCard />
            <TraderCard />
          </div>
        </div>
        <div className="mt-8 max-w-[280px] md:mt-0">
          <div className="flex flex-col gap-12">
            <div className="grid grid-cols-[44px_1fr] gap-4">
              <Image src="/icons/brand-icons/bot.svg" alt="avatar" width={48} height={48} />
              <div>
                <div className="font-heading text-lg font-bold text-primary">Trading Bot</div>
                <div className="font-heading text-base text-black dark:text-gray-100">
                  Grid a DCA bots. Long, short strategy and more
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[44px_1fr] gap-4">
              <Image src="/icons/profit.png" alt="avatar" width={48} height={48} />
              <div>
                <div className="font-heading text-lg font-bold text-primary">Take Profit</div>
                <div className="font-heading text-base text-black dark:text-gray-100">
                  Grow your crypto wealth Simply smartly, effectively
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[44px_1fr] gap-4">
              <Image src="/icons/copy-trading.png" alt="avatar" width={48} height={48} />
              <div>
                <div className="font-heading text-lg font-bold text-primary">Copy Trading</div>
                <div className="font-heading text-base text-black dark:text-gray-100">
                  Let top trader work for you just copy them
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[44px_1fr] gap-4">
              <Image src="/icons/boxes.png" alt="avatar" width={48} height={48} />
              <div>
                <div className="font-heading text-lg font-bold text-primary">Bargain</div>
                <div className="font-heading text-base text-black dark:text-gray-100">Best offer on the Market</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
