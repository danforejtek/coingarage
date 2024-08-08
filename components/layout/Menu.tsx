"use client"
import { useTranslations } from "next-intl"
import * as React from "react"
import Link from "next/link"
// import { usePathname } from "@/navigation"
import { useParams, usePathname } from "next/navigation"

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

import BuyCrypto from "@/public/icons/main/buy_crypto.svg"
import SpotTrading from "@/public/icons/main/spot_trading.svg"
import Launchpad from "@/public/icons/main/launchpad.svg"
import Bot from "@/public/icons/main/bot.svg"
import Deposit from "@/public/icons/main/deposit.svg"
import DepositSepa from "@/public/icons/main/deposit_sepa.svg"
import Shareholder from "@/public/icons/main/shareholder.svg"
import Affiliate from "@/public/icons/main/affiliate.svg"
import Stake from "@/public/icons/main/stake.svg"
import AboutUs from "@/public/icons/main/about_us.svg"
import Partners from "@/public/icons/main/partners.svg"
import PosterWall from "@/public/icons/main/poster_wall.svg"
import Blog from "@/public/icons/main/blog.svg"
import Academy from "@/public/icons/main/academy.svg"

import BuyCryptoDark from "@/public/icons/main/dark/buy_crypto.svg"
import SpotTradingDark from "@/public/icons/main/dark/spot_trading.svg"
import LaunchpadDark from "@/public/icons/main/dark/launchpad.svg"
import BotDark from "@/public/icons/main/dark/bot.svg"
import DepositDark from "@/public/icons/main/dark/deposit.svg"
import DepositSepaDark from "@/public/icons/main/dark/deposit_sepa.svg"
import ShareholderDark from "@/public/icons/main/dark/shareholder.svg"
import AffiliateDark from "@/public/icons/main/dark/affiliate.svg"
import StakeDark from "@/public/icons/main/dark/stake.svg"
import AboutUsDark from "@/public/icons/main/dark/about_us.svg"
import PartnersDark from "@/public/icons/main/dark/partners.svg"
import PosterWallDark from "@/public/icons/main/dark/poster_wall.svg"
import BlogDark from "@/public/icons/main/dark/blog.svg"
import AcademyDark from "@/public/icons/main/dark/academy.svg"
import { RadioTower } from "lucide-react"
import { BookOpen } from "lucide-react"

type NavItem = {
  title: string
  key?: string
  icon?: string
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
  radio: <RadioTower className="fill-primary stroke-1" />,
  knowledge_base: <BookOpen className="fill-white stroke-2" />,
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
  radio: <RadioTower className=" fill-primary stroke-1" />,
  knowledge_base: <BookOpen className="fill-transparent stroke-2" />,
}

export const navItems: NavItem[] = [
  {
    title: "Buy Crypto",
    key: "buyCrypto",
    href: "/buy-crypto",
    icon: "buy_crypto",
    subItems: [
      {
        title: "Buy Crypto",
        key: "buyCrypto",
        href: "https://trade.coingarage.io/buy-crypto/buy",
        icon: "buy_crypto",
        // href: "/buy-crypto",
        // href: "https://trade.coingarage.io/login",
      },
      {
        title: "Deposit FIAT",
        key: "depositFiat",
        href: "https://trade.coingarage.io/buy-crypto/buy",
        icon: "deposit", // href: "/buy-crypto",
        // href: "https://trade.coingarage.io/login",
      },
      {
        title: "Deposit FIAT via SEPA",
        key: "depositFiatViaSepa",
        href: "https://trade.coingarage.io/buy-crypto/buy",
        icon: "deposit_sepa", // href: "/buy-crypto",
        // href: "https://trade.coingarage.io/login",
      },
    ],
  },
  {
    title: "Trade",
    key: "trade",
    href: "/trade",
    icon: "spot_trading",
    subItems: [
      {
        title: "Spot trading",
        key: "spotTrading",
        href: "https://trade.coingarage.io/exchange",
        icon: "spot_trading",
      },
      {
        title: "Launchpad",
        key: "launchpad",
        href: "https://trade.coingarage.io/launchpad/projects",
        // href: "https://trade.coingarage.io/login",
        icon: "launchpad",
      },
      {
        title: "Trading Bot",
        key: "tradingBot",
        href: "/trading-bot",
        icon: "bot",
      },
    ],
  },
  {
    title: "Convert",
    key: "convert",
    href: "https://trade.coingarage.io/convert",
    // href: "/convert",
  },
  {
    title: "Earn",
    key: "earn",
    href: "/earn",
    icon: "stake",
    subItems: [
      {
        title: "Become a Shareholder",
        key: "becomeAShareholder",
        href: "https://coingarage-finance.com",
        icon: "shareholder",
      },
      {
        title: "Affiliate",
        key: "affiliate",
        href: "/earn",
        icon: "affiliate",
      },
      {
        title: "Stake",
        key: "stake",
        href: "/earn/staking",
        icon: "stake",
      },
    ],
  },
  {
    title: "More",
    key: "more",
    href: "/more",
    icon: "about_us",
    subItems: [
      {
        title: "About us",
        key: "aboutUs",
        href: "/about-us",
        icon: "about_us",
      },
      {
        title: "Partners",
        key: "partners",
        href: "/partners",
        icon: "partners",
      },
      // {
      //   title: "GARY's Poster wall",
      //   href: "/garys-poster-wall",
      //   icon: "poster_wall",
      // },
      // {
      //   title: "Blog",
      //   key: "blog",
      //   href: "/blog",
      //   icon: "blog",
      // },
      {
        title: "Knowdledge Base",
        key: "knowledgeBase",
        href: "/eezy-trader/knowledge-base",
        icon: "knowledge_base",
      },
      {
        title: "Coingarage FM",
        key: "radio",
        href: "/coingarage-fm",
        icon: "radio",
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
  const pathname = usePathname()
  const { locale } = useParams()
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "")
  const t = useTranslations()
  const { resolvedTheme } = useTheme()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map(({ title, href, subItems, icon, key }, index) => {
          const hasActiveSubItem = subItems?.some(({ href }) => pathnameWithoutLocale.endsWith(href))
          const isActive =
            pathnameWithoutLocale.endsWith(pathname) ||
            hasActiveSubItem ||
            (href.includes(pathname) && pathname !== "/")

          // @ts-ignore
          const Icon = resolvedTheme === "dark" ? iconsDark[icon] : icons[icon] || null
          if (subItems) {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent px-3 text-sm text-secondary dark:text-white",
                    isActive ? "!text-primary" : ""
                  )}
                >
                  {t(`Menu.${key}`)}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-4 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
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
                            <div className="mb-2 mt-2 text-lg font-medium">{t(`Menu.${key}`)}</div>
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground"></p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {subItems.map(({ title, href, description, icon, key }, index) => {
                      return (
                        // @ts-ignore
                        <ListItem key={index} href={href} title={title} icon={icon} localeKey={key}>
                          {description ? description : t(`Menu.${key}`)}
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
                    className={cn(navigationMenuTriggerStyle(), "px-3 text-sm text-secondary dark:text-white")}
                  >
                    {t(`Menu.${key}`)}
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
  // @ts-ignore
  ({ className, title, children, icon, localeKey, href, ...props }, ref) => {
    const pathname = usePathname()
    const isActive = pathname.endsWith(href) || (href.includes(pathname) && pathname !== "/")
    const t = useTranslations()
    const { resolvedTheme } = useTheme()
    // @ts-ignore
    const Icon = resolvedTheme === "dark" ? iconsDark[icon] : icons[icon] || null
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            href={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              isActive ? "text-primary" : "",
              className
            )}
            {...props}
          >
            <div className="grid w-full grid-cols-[24px_1fr] items-center gap-6">
              {typeof Icon === "function" ? <Icon width="24px" height="24px" /> : Icon}
              <div className="text-sm font-medium leading-none">{t(`Menu.${localeKey}`)}</div>
            </div>
            {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p> */}
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"
