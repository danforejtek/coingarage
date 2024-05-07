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

  if (
    hostname === "coingarage.io" &&
    (pathname === `/finance` || pathname === `/${locale}/finance` || pathname.startsWith(`/${locale}/finance`))
  ) {
    console.log(hostname)
    const url = request.nextUrl.clone()
    url.hostname = "new.coingarage-finance.com"
    url.pathname = pathname === `/finance` ? `/` : pathname.replace(/^\/finance/, "")
    console.log("using CG:", url.toString())
    return NextResponse.redirect(url)
  }

  console.log(pathname, pathname.startsWith(`/${locale}/finance`))
  if (hostname === "new.coingarage-finance.com" && pathname.startsWith(`/${locale}/finance`)) {
    const url = request.nextUrl.clone()
    url.pathname = pathname === `/finance` ? `/` : pathname.replace(/^\/finance/, "")
    console.log("using CGF:", url.toString())
    return NextResponse.rewrite(url)
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
