import createMiddleware from "next-intl/middleware"
import { locales } from "@/config"
import { NextRequest, NextResponse } from "next/server"

// const financeRoutes = ["/finance", "/finance/partners"]

export default async function middleware(request: NextRequest) {
  const [, locale] = request.nextUrl.pathname.split("/")
  const { pathname, hostname } = request.nextUrl
  if (hostname === "new.coingarage-finance.com" && (pathname === "/" || locale === "")) {
    return NextResponse.redirect("https://new.coingarage-finance.com/en")
  }

  const handleI18nRouting = createMiddleware({
    locales: locales,
    defaultLocale: "en",
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
    url.hostname = "new.coingarage-finance.com"
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, "")
    url.pathname =
      pathnameWithoutLocale === `/finance`
        ? `/${locale}/`
        : `/${locale}/${pathnameWithoutLocale.replace(/^\/finance/, "")}`
    // console.log("using CG:", url.toString())
    return NextResponse.redirect(url)
  }

  if (hostname === "new.coingarage-finance.com") {
    const url = request.nextUrl.clone()
    url.pathname = pathname === `/` ? `/${locale}/finance` : `/${locale}/finance/${pathname.replace(`/${locale}`, "")}`
    if (locale === "") url.pathname === "/en/finance"
    return NextResponse.rewrite(url)
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
