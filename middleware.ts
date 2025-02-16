import createMiddleware from "next-intl/middleware"
import { locales, defaultLocale } from "@/config"
import { NextRequest, NextResponse } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

const FINANCE_DOMAIN: string = process.env.FINANCE_DOMAIN ?? ""
const FINANCE_ROUTES = ["/contacts"]

type Locale = (typeof locales)[number]

const getLocale = ({
  acceptLanguage,
  locales,
  defaultLocale,
}: {
  acceptLanguage: string
  locales: Array<string>
  defaultLocale: Locale
}) => {
  const languages = new Negotiator({ headers: { "accept-language": acceptLanguage } }).languages()
  const assertedLocale = match(languages, locales, defaultLocale)
  return assertedLocale && assertedLocale !== "" ? assertedLocale : defaultLocale
}

export default async function middleware(request: NextRequest) {
  const [, locale] = request.nextUrl.pathname.split("/")
  let noLocale = false
  if (!locales.includes(locale)) noLocale = true
  const { pathname, hostname } = request.nextUrl
  const acceptLanguage = request.headers.get("accept-language") || ""
  const localeFromHeader = getLocale({ acceptLanguage, locales: ["cs", "en"], defaultLocale })
  if (hostname === FINANCE_DOMAIN && noLocale) {
    return NextResponse.redirect(`https://${FINANCE_DOMAIN}/${localeFromHeader}${pathname !== "/" ? pathname : ""}`)
  }

  const handleI18nRouting = createMiddleware({
    locales: locales,
    defaultLocale: defaultLocale,
    localePrefix: "always",
  })
  const response = handleI18nRouting(request)

  if (
    hostname === "coingarage.io" &&
    (pathname === `/finance` ||
      pathname === `/${locale}/finance` ||
      pathname.startsWith(`/finance`) ||
      pathname.startsWith(`/${locale}/finance`))
  ) {
    const url = request.nextUrl.clone()
    url.hostname = FINANCE_DOMAIN
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, "")
    url.pathname =
      pathnameWithoutLocale === `/finance`
        ? `/${locale}/`
        : `/${locale}/${pathnameWithoutLocale.replace(/^\/finance/, "")}`
    // console.log("using CG:", url.toString())
    return NextResponse.redirect(url)
  }

  if (hostname === FINANCE_DOMAIN) {
    const url = request.nextUrl.clone()
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, "")
    if (pathnameWithoutLocale !== "" && !FINANCE_ROUTES.includes(pathnameWithoutLocale)) {
      return NextResponse.redirect(`https://coingarage.io/${locale}${pathnameWithoutLocale}`)
    }
    const prefixedPathname =
      pathname === `/`
        ? `/${locale}/finance`
        : `/${locale}/finance/${pathname.replace(`/${locale}`, "")}`.replaceAll("//", "/")
    console.log("pathname", prefixedPathname)
    url.pathname = prefixedPathname
    if (locale === "") url.pathname === "/en/finance"
    return NextResponse.rewrite(url)
  }

  return response
}

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
}
