"use client"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { SocialShareButton } from "@/app/(main)/[locale]/(coingarage)/blog/components/social-share-button"

type SocialShareProps = {
  title: string
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
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-4 md:w-fit md:justify-start">
        <SocialShareButton social="facebook" url={url} title={title} theme={resolvedTheme} />
        <SocialShareButton social="x" url={url} title={title} theme={resolvedTheme} />
        <SocialShareButton social="telegram" url={url} title={title} theme={resolvedTheme} />
        <SocialShareButton social="linkedin" url={url} title={title} theme={resolvedTheme} />
      </div>
    </div>
  )
}
