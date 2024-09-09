"use client"
import { Button } from "@/components/ui/button"
import { ClipboardCopy } from "lucide-react"
import { useClipboard } from "@mantine/hooks"
import { toast } from "sonner"

export function PolygonAddressCopyToClipboard() {
  const clipboard = useClipboard({ timeout: 500 })

  const handleClick = () => {
    clipboard.copy("0x0B258A4ECC4Ac7a15fEdb882DB5d13F6EF23B02F")
    toast.success("Address copied to clipboard")
  }

  return (
    <Button variant="ghost" onClick={handleClick}>
      <span className="inline-flex items-center gap-2 font-heading text-xs md:text-sm">
        <ClipboardCopy className="size-4 stroke-primary" />
        0x0B258A4ECC4Ac7a15fEdb882DB5d13F6EF23B02F
      </span>
    </Button>
  )
}
