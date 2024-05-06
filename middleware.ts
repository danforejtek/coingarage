import createMiddleware from "next-intl/middleware"
import { locales } from "@/config"
import { NextRequest } from "next/server"

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
    (pathname === `/${locale}/finance` || pathname.startsWith(`/${locale}/finance/`))
  ) {
    const url = request.nextUrl.clone()
    url.hostname = "coingarage-finance.com"
    url.pathname = pathname === `/${locale}/finance` ? `/${locale}` : pathname.replace(/^\/finance/, "")
    return response.rewrite(url)
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
