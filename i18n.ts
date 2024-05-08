import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"
import { locales as globalLocales } from "./config"

const locales = globalLocales

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()
  return {
    messages: (await import(`./public/locales/${locale}/common.json`)).default,
  }
})
