"use client"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { SocialShareButton } from "@/app/(main)/[locale]/(coingarage)/blog/components/social-share-button"
import { Button } from "@/components/ui/button"
import { Share2Icon } from "lucide-react"

type SocialShareProps = {
  title: string
}

const handleShareButton = ({ url, title }: { url: string; title: string }) => {
  if (navigator.share) {
    console.log("Congrats! Your browser supports Web Share API")
    navigator
      .share({
        url: url,
        title: title,
      })
      .then(() => {
        console.log("Sharing successfull")
      })
      .catch(() => {
        console.log("Sharing failed")
      })
  }
}

export const SocialShare = ({ title }: SocialShareProps) => {
  const [url, setUrl] = useState<string>("")
  const { resolvedTheme } = useTheme()
  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  return (
    <div className="mt-24 flex flex-row flex-wrap items-center gap-4 rounded-md border border-tertiary bg-tertiary/10 p-4 md:justify-center">
      <div className="w-full text-center md:w-fit md:text-start">Share shis article:</div>
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-2 md:w-fit md:justify-start md:gap-4">
        <SocialShareButton social="facebook" url={url} title={title} theme={resolvedTheme} />
        <SocialShareButton social="x" url={url} title={title} theme={resolvedTheme} />
        <SocialShareButton social="telegram" url={url} title={title} theme={resolvedTheme} />
        <SocialShareButton social="linkedin" url={url} title={title} theme={resolvedTheme} />
        <Button
          variant="ghost"
          onClick={() => handleShareButton({ url, title })}
          className="border border-transparent hover:border-primary hover:bg-primary/10 hover:shadow-md hover:shadow-primary"
        >
          <Share2Icon className="size-6" />
        </Button>
      </div>
    </div>
  )
}
