import createMiddleware from "next-intl/middleware"
import { locales } from "@/config"
import { NextRequest, NextResponse } from "next/server"

// const financeRoutes = ["/finance", "/finance/partners"]

export default async function middleware(request: NextRequest) {
  const [, locale] = request.nextUrl.pathname.split("/")
  const handleI18nRouting = createMiddleware({
    locales: locales,
    defaultLocale: "en",
    localePrefix: "always",
  })
  const response = handleI18nRouting(request)

  const { pathname, hostname } = request.nextUrl
  // console.log(hostname, pathname, pathname.startsWith(`/${locale}/finance`))

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
    url.pathname = pathnameWithoutLocale === `/finance` ? `/` : pathnameWithoutLocale.replace(/^\/finance/, "")
    // console.log("using CG:", url.toString())
    return NextResponse.redirect(url)
  }

  if (hostname === "new.coingarage-finance.com") {
    const url = request.nextUrl.clone()
    url.pathname = pathname === `/` ? `/finance` : `/${locale}/finance${pathname.replace(`/${locale}`, "")}`
    // console.log("using CGF:", url.toString())
    return NextResponse.rewrite(url)
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
