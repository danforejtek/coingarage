import { Button } from "@/components/ui/button"
import { Link } from "@/navigation"

export function GarageCoinPresale() {
  return (
    <Button
      variant="outlinePrimary"
      className="flex !w-[200px] whitespace-nowrap bg-transparent text-sm"
      size="sm"
      asChild
    >
      <Link href="/gara-coin">🔥 Gara Coin Presale</Link>
    </Button>
  )
}
