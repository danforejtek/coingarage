"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { useTheme } from "next-themes"

import BuyCrypto from "../../public/icons/main/buy_crypto.svg"
import SpotTrading from "../../public/icons/main/spot_trading.svg"
import Launchpad from "../../public/icons/main/launchpad.svg"
import Bot from "../../public/icons/main/bot.svg"
import Deposit from "../../public/icons/main/deposit.svg"
import DepositSepa from "../../public/icons/main/deposit_sepa.svg"
import Shareholder from "../../public/icons/main/shareholder.svg"
import Affiliate from "../../public/icons/main/affiliate.svg"
import Stake from "../../public/icons/main/stake.svg"
import AboutUs from "../../public/icons/main/about_us.svg"
import Partners from "../../public/icons/main/partners.svg"
import PosterWall from "../../public/icons/main/poster_wall.svg"
import Blog from "../../public/icons/main/blog.svg"
import Academy from "../../public/icons/main/academy.svg"

import BuyCryptoDark from "../../public/icons/main/dark/buy_crypto.svg"
import SpotTradingDark from "../../public/icons/main/dark/spot_trading.svg"
import LaunchpadDark from "../../public/icons/main/dark/launchpad.svg"
import BotDark from "../../public/icons/main/dark/bot.svg"
import DepositDark from "../../public/icons/main/dark/deposit.svg"
import DepositSepaDark from "../../public/icons/main/dark/deposit_sepa.svg"
import ShareholderDark from "../../public/icons/main/dark/shareholder.svg"
import AffiliateDark from "../../public/icons/main/dark/affiliate.svg"
import StakeDark from "../../public/icons/main/dark/stake.svg"
import AboutUsDark from "../../public/icons/main/dark/about_us.svg"
import PartnersDark from "../../public/icons/main/dark/partners.svg"
import PosterWallDark from "../../public/icons/main/dark/poster_wall.svg"
import BlogDark from "../../public/icons/main/dark/blog.svg"
import AcademyDark from "../../public/icons/main/dark/academy.svg"

type NavItem = {
  title: string
  icon?: React.ReactNode
  href: string
  description?: string
  subItems?: NavItem[]
}

const icons = {
  buy_crypto: BuyCrypto,
  spot_trading: SpotTrading,
  launchpad: Launchpad,
  bot: Bot,
  deposit: Deposit,
  deposit_sepa: DepositSepa,
  shareholder: Shareholder,
  affiliate: Affiliate,
  stake: Stake,
  about_us: AboutUs,
  partners: Partners,
  poster_wall: PosterWall,
  blog: Blog,
  academy: Academy,
}

const iconsDark = {
  buy_crypto: BuyCryptoDark,
  spot_trading: SpotTradingDark,
  launchpad: LaunchpadDark,
  bot: BotDark,
  deposit: DepositDark,
  deposit_sepa: DepositSepaDark,
  shareholder: ShareholderDark,
  affiliate: AffiliateDark,
  stake: StakeDark,
  about_us: AboutUsDark,
  partners: PartnersDark,
  poster_wall: PosterWallDark,
  blog: BlogDark,
  academy: AcademyDark,
}

export const navItems: NavItem[] = [
  {
    title: "Buy Crypto",
    href: "/buy-crypto",
    icon: "buy_crypto",
    subItems: [
      {
        title: "Buy Crypto",
        href: "https://trade.coingarage.io/buy-crypto/buy",
        icon: "buy_crypto",
        // href: "/buy-crypto",
        // href: "https://trade.coingarage.io/login",
      },
      {
        title: "Deposit FIAT",
        href: "https://trade.coingarage.io/buy-crypto/buy",
        icon: "deposit", // href: "/buy-crypto",
        // href: "https://trade.coingarage.io/login",
      },
      {
        title: "Deposit FIAT via SEPA",
        href: "https://trade.coingarage.io/buy-crypto/buy",
        icon: "deposit_sepa", // href: "/buy-crypto",
        // href: "https://trade.coingarage.io/login",
      },
    ],
  },
  {
    title: "Trade",
    href: "/trade",
    icon: "spot_trading",
    subItems: [
      {
        title: "Spot trading",
        href: "https://trade.coingarage.io/exchange",
        icon: "spot_trading",
      },
      {
        title: "Launchpad",
        href: "https://trade.coingarage.io/launchpad/projects",
        // href: "https://trade.coingarage.io/login",
        icon: "launchpad",
      },
      {
        title: "Trading Bot",
        href: "/trading-bot",
        icon: "bot",
      },
    ],
  },
  {
    title: "Convert",
    href: "https://trade.coingarage.io/convert",
    // href: "/convert",
  },
  {
    title: "Earn",
    href: "/earn",
    icon: "stake",
    subItems: [
      {
        title: "Become a Shareholder",
        href: "https://www.coingarage-finance.com/en",
        icon: "shareholder",
      },
      {
        title: "Affiliate",
        href: "/earn",
        icon: "affiliate",
      },
      {
        title: "Stake",
        href: "/earn/staking",
        icon: "stake",
      },
    ],
  },
  {
    title: "More",
    href: "/more",
    icon: "about_us",
    subItems: [
      {
        title: "About us",
        href: "/about-us",
        icon: "about_us",
      },
      {
        title: "Partners",
        href: "/partners",
        icon: "partners",
      },
      // {
      //   title: "GARY's Poster wall",
      //   href: "/garys-poster-wall",
      //   icon: "poster_wall",
      // },
      {
        title: "Blog",
        href: "/blog",
        icon: "blog",
      },
      // {
      //   title: "Academy",
      //   href: "/academy",
      //   icon: "academy",
      // },
      // {
      //   title: "Whitepaper",
      //   href: "/whitepaper",
      //   icon: "whitepaper",
      // },
    ],
  },
]

export function Menu() {
  const { resolvedTheme } = useTheme()
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map(({ title, href, subItems, icon }, index) => {
          const Icon =
            resolvedTheme === "dark" ? (iconsDark[icon] as React.ReactNode) : (icons[icon] as React.ReactNode) || null
          if (subItems) {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger className={cn("text-md bg-transparent text-secondary dark:text-white")}>
                  {title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-4 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li
                      // TODO: write this like a normal person
                      className={cn(
                        subItems?.length === 1 && "row-span-1",
                        subItems?.length === 2 && "row-span-2",
                        subItems?.length === 3 && "row-span-3",
                        subItems?.length === 4 && "row-span-4",
                        subItems?.length === 5 && "row-span-5",
                        subItems?.length === 6 && "row-span-6"
                      )}
                    >
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="flex h-full flex-col justify-start">
                            {icon && typeof Icon === "function" ? <Icon width="64px" height="64px" /> : <div></div>}
                            <div className="mb-2 mt-2 text-lg font-medium">{title}</div>
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground"></p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {subItems.map(({ title, href, description, icon }, index) => {
                      return (
                        <ListItem key={index} href={href} title={title} icon={icon}>
                          {description ? description : title}
                        </ListItem>
                      )
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )
          } else {
            return (
              <NavigationMenuItem key={index}>
                <Link href={href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "text-md text-secondary dark:text-white")}
                  >
                    {title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )
          }
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, icon, ...props }, ref) => {
    const { resolvedTheme } = useTheme()
    const Icon =
      resolvedTheme === "dark" ? (iconsDark[icon] as React.ReactNode) : (icons[icon] as React.ReactNode) || null
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="grid w-full grid-cols-[24px_1fr] items-center gap-6">
              {typeof Icon === "function" ? <Icon width="24px" height="24px" /> : <div></div>}
              <div className="text-sm font-medium leading-none">{title}</div>
            </div>
            {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p> */}
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"
