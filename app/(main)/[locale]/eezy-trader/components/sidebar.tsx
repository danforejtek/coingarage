"use client"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { ArrowDown, ChevronRight, BookOpen, Users, CreditCard } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const activeLinkStyle = "text-primary hover:text-primary"

export function Sidebar() {
  const currentPath = usePathname()
  const t = useTranslations("knowledgeBase")
  const tSub = useTranslations("eezy-trader.subscription.plans")
  const tEzNav = useTranslations("eezy-trader.nav")
  return (
    <aside className="sticky top-[0px] -mb-24 hidden h-[calc(100vh)] w-[284px] border-r px-4 pt-4 shadow-sm md:shrink-0 md:flex-col lg:flex">
      <Link href="/eezy-trader/knowledge-base">
        <div className="gap-8p-4 flex flex-row items-center justify-center">
          <Image src="/images/eezy-trader/logo/logo.png" width={200} height={31} alt="logo" />
        </div>
      </Link>
      <div className="flex h-full flex-col justify-between gap-8 px-2 py-12">
        <nav className="flex h-full w-full flex-col items-center gap-3">
          <Collapsible className="w-full" defaultOpen={true}>
            <CollapsibleTrigger className="" asChild>
              <Button
                variant="ghost"
                className={cn(
                  "line-height group mb-3 flex w-full flex-row items-center justify-between gap-4 text-start text-base"
                )}
              >
                <div className="flex flex-row items-center gap-4">
                  <BookOpen className="h-6 w-6" />
                  {tEzNav("knowledgeBase")}
                </div>
                <ChevronRight className="h-4 w-4 group-data-[state=open]:rotate-90" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="ml-14 flex flex-col border-l pl-2">
              <Button variant="ghost" size="sm" className="justify-start" asChild>
                <Link
                  className={cn(currentPath.endsWith("/eezy-trader/knowledge-base") ? activeLinkStyle : "")}
                  href="/eezy-trader/knowledge-base"
                >
                  {t("general.name")}
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="justify-start" asChild>
                <Link
                  className={cn(currentPath.includes("/eezy-trader/knowledge-base/grid-bot") ? activeLinkStyle : "")}
                  href="/eezy-trader/knowledge-base/grid-bot"
                >
                  Grid bot
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="justify-start" asChild>
                <Link
                  className={cn(currentPath.includes("/eezy-trader/knowledge-base/dca-bot") ? activeLinkStyle : "")}
                  href="/eezy-trader/knowledge-base/dca-bot"
                >
                  DCA bot
                </Link>
              </Button>
            </CollapsibleContent>
          </Collapsible>
          {/* <Button
            variant="ghost"
            className="group flex w-full flex-row items-center justify-between gap-4 text-start text-base"
          >
            <div className="flex flex-row items-center gap-4">
              <Users className="h-6 w-6" />
              {tEzNav("affiliateProgram")}
            </div>
          </Button>
          <Button
            variant="ghost"
            className="group flex w-full flex-row items-center justify-between gap-4 text-start text-base"
          >
            <div className="flex flex-row items-center gap-4">
              <CreditCard className="h-6 w-6" />
              {tSub("header")}
            </div>
          </Button> */}
        </nav>
      </div>
    </aside>
  )
}
