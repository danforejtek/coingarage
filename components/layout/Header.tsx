import Image from "next/image"
import { Menu } from "./Menu"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/Icons"
import MobileNav from "./MobileNav"

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 xbg-secondary h-[86px]">
      <div className="grid grid-cols-2">
        <nav className="flex items-center p-6 lg:px-8 gap-10" aria-label="Global">
          <Link href="/">
            <div className="w-[206px] h-[30]">
              <Image src="/logo.svg" width={206} height={30} alt="logo" />
            </div>
          </Link>
          <div className="hidden lg:block">
            <Menu />
          </div>
        </nav>
        <div className="flex items-center justify-end p-6 lg:px-8 gap-4">
          <div className="hidden lg:block">
            <Button variant="ghost" className="text-md" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="text-md" asChild>
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </div>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
