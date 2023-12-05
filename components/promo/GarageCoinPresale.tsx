import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export function GarageCoinPresale() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-primary">🔥 GARAGECoin Pre-sale</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink asChild>
              <div className="w-[240px] p-2">
                <a
                  href="https://trade.coingarage.io/launchpad/project-details?project=GARA"
                  target="_blank"
                  rel="noopener"
                  className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <span className="mr-3">🛒</span>Buy GARAGECoin
                </a>
                <a
                  href="https://drive.google.com/file/d/1SyCoYZfPiy8rmH7-UKEogmxrW7ztfbwH/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <span className="mr-3">🇬🇧</span>Whitepaper EN
                </a>
                <a
                  href="https://drive.google.com/file/d/1lOZVIrVbaX08d-j3V1iiMEC9O8u1s6SG/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <span className="mr-3">🇨🇿</span>Whitepaper CZ
                </a>
                <a
                  href="https://drive.google.com/file/d/1k1B95gX09dpDdquhW8DJC2eoqHpqzHaD/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <span className="mr-3">🇩🇪</span>Whitepaper DE
                </a>
              </div>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
