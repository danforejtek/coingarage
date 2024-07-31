"use client"
import { Youtube } from "lucide-react"
import { useTranslations } from "next-intl"
import { useLocale } from "next-intl"

const youtubeLinks = {
  en: "https://www.youtube.com/watch?v=y7-5gdlkLWw",
  cs: "https://www.youtube.com/watch?v=F0jPOQDfkbk",
  de: "https://www.youtube.com/watch?v=5rMQX-xsqPI",
  es: "https://www.youtube.com/watch?v=N8sAFmEM8z4",
}

type Links = typeof youtubeLinks

export function RegistrationHelp() {
  const t = useTranslations("CryptoLandingPage")
  const locale = useLocale() || "en"

  return (
    <a
      title="How to sign up"
      href={youtubeLinks[locale as keyof Links]}
      rel="noopener noreferrer"
      target="_blank"
      className="text-primary"
    >
      <Youtube className="mr-2 inline-block" size={20} />
      {t("howToSignUp")}
    </a>
  )
}
