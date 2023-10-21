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
import { describe } from "node:test"

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
        title: "Buy with Credit Card",
        href: "/buy-crypto",
      },
      {
        title: "Buy with Bank Transfer",
        href: "/buy-crypto",
      },
      {
        title: "Buy with Crypto",
        href: "/buy-crypto",
      },
    ],
  },
  {
    title: "Trade",
    href: "/trade",
  },
  {
    title: "Convert",
    href: "/convert",
  },
  {
    title: "Earn",
    href: "/earn",
  },
  {
    title: "NFT",
    href: "/ntf",
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
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          {/* <Icons.logo className="h-6 w-6" /> */}
                          <div className="mb-2 mt-4 text-lg font-medium">Crypto</div>
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
