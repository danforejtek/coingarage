import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ArrowDown, ChevronRight, BookOpen, Users, CreditCard } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

export function Sidebar() {
  return (
    <aside className="sticky top-[0px] hidden h-[calc(100vh)] w-[284px] border-r px-4 pt-4 shadow-sm md:flex md:shrink-0 md:flex-col">
      <Link href="/">
        <div className="gap-8p-4 flex flex-row items-center justify-center">
          <Image src="/images/eezy-trader/logo/logo.png" width={200} height={31} alt="logo" />
        </div>
      </Link>
      <div className="flex h-full flex-col justify-between gap-8 px-2 py-12">
        <nav className="flex w-full flex-col items-center gap-3">
          <Collapsible className="w-full">
            <CollapsibleTrigger className="" asChild>
              <Button
                variant="ghost"
                className="group flex w-full flex-row items-center justify-between gap-4 text-start text-base"
              >
                <div className="flex flex-row items-center gap-4">
                  <BookOpen className="h-6 w-6" />
                  Knowledge base
                </div>
                <ChevronRight className="h-4 w-4 group-data-[state=open]:rotate-90" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="ml-14 flex flex-col border-l pl-2">
              <Button variant="ghost" size="sm" className="justify-start">
                General
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                Grid bot
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                DCA bot
              </Button>
            </CollapsibleContent>
          </Collapsible>
          <Button
            variant="ghost"
            className="group flex w-full flex-row items-center justify-between gap-4 text-start text-base"
          >
            <div className="flex flex-row items-center gap-4">
              <Users className="h-6 w-6" />
              Affiliate Program
            </div>
          </Button>
          <Button
            variant="ghost"
            className="group flex w-full flex-row items-center justify-between gap-4 text-start text-base"
          >
            <div className="flex flex-row items-center gap-4">
              <CreditCard className="h-6 w-6" />
              Affiliate Program
            </div>
          </Button>
        </nav>
      </div>
    </aside>
  )
}
