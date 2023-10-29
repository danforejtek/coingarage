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

type NavItem = {
  title: string
  href: string
  description?: string
  subItems?: NavItem[]
}

export const navItems: NavItem[] = [
  {
    title: "Buy Crypto",
    href: "/buy-crypto",
    subItems: [
      {
        title: "Buy Crypto",
        href: "/buy-crypto",
      },
      {
        title: "Deposit FIAT",
        href: "/deposit",
      },
      {
        title: "Deposit FIAT via SEPA",
        href: "/deposit-via-sepa",
      },
    ],
  },
  {
    title: "Trade",
    href: "/trade",
    subItems: [
      {
        title: "Spot trading",
        href: "/trading",
      },
      {
        title: "Launchpad",
        href: "/launchpad",
      },
      {
        title: "Trader Bot",
        href: "/trader-bot",
      },
    ],
  },
  {
    title: "Convert",
    href: "/convert",
  },
  {
    title: "Earn",
    href: "/earn",
    subItems: [
      {
        title: "Become a Shareholder",
        href: "/earn/shareholder",
      },
      {
        title: "Affiliate",
        href: "/earn/affiliate",
      },
      {
        title: "Staking",
        href: "/earn/staking",
      },
    ],
  },
  {
    title: "More",
    href: "/more",
    subItems: [
      {
        title: "About us",
        href: "/about-us",
      },
      {
        title: "Partners",
        href: "/partners",
      },
      {
        title: "GARY's Poster wall",
        href: "/garys-poster-wall",
      },
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "Academy",
        href: "/academy",
      },
    ],
  },
]

export function Menu({ textColor = "text-secondary" }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map(({ title, href, subItems }, index) => {
          if (subItems) {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger className={(cn("text-md bg-transparent"), textColor)}>
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
                          {/* <Icons.logo className="h-6 w-6" /> */}
                          <div className="mb-2 mt-2 text-lg font-medium">{title}</div>
                          <p className="text-sm leading-tight text-muted-foreground"></p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {subItems.map(({ title, href, description }, index) => {
                      return (
                        <ListItem key={index} href={href} title={title}>
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
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-md", textColor)}>
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
  ({ className, title, children, ...props }, ref) => {
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
            <div className="text-sm font-medium leading-none">{title}</div>
            {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p> */}
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"
