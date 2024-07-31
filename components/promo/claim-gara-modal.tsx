"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogHeader,
  // DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { usePageLeave } from "@mantine/hooks"
import { useEffect, useState } from "react"
import store from "store2"

export function ClaimGaraModal() {
  const [visited, setVisited] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!isOpen)
  const [left, setLeft] = useState(false)
  usePageLeave(() => setLeft(true))

  useEffect(() => {
    const storeVisited = store.get("claim-gara-modal") || false
    if (left && !storeVisited) {
      setOpen(true)
      setVisited(true)
      store.set("claim-gara-modal", true)
    }
  }, [left, visited, setOpen])

  return (
    <Dialog open={isOpen} onOpenChange={toggleOpen}>
      {/* <DialogTrigger onClick={toggleOpen}>Open</DialogTrigger> */}
      <DialogContent className="p-0">
        <div className="max-w-[512px]">
          <div className="relative h-[268px] w-full">
            <Image src="/images/promo/bow.png" alt="" fill={true} style={{ objectFit: "contain" }} />
          </div>
          <div className="relative p-8 text-center">
            <div className="absolute bottom-6 left-10 hidden -rotate-[15deg] sm:block">
              <Image src="/images/promo/gift.png" alt="" width={80} height={80} />
            </div>
            <h1 className="mb-4 font-heading text-3xl font-bold">
              Claim Your <span className="text-primary">100 USDT</span> Reward
            </h1>
            <p className="mb-6 text-sm">
              Verify your identity and start your crypto journey to earn this limited-time reward.
            </p>
            <div className="flex flex-row justify-center">
              <Button className="px-12 py-4 font-heading text-xl font-normal" asChild>
                <a href="https://trade.coingarage.io/signup">Claim Reward</a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
