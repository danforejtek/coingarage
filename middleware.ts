import createMiddleware from "next-intl/middleware"
import { locales } from "@/config"
import { NextRequest } from "next/server"

// const financeRoutes = ["/finance", "/finance/partners"]

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    // A list of all locales that are supported
    locales: locales,
    // Used when no locale matches
    defaultLocale: "en",
    // localeDetection: false,
    localePrefix: "always",
  })
  const response = handleI18nRouting(request)
  // if (process.env.VERCEL_ENV === "production") {
  //   if (financeRoutes.includes(request.nextUrl.pathname)) {
  //     return Response.redirect("https://example.com", 307)
  //   }
  // }

  return response
}

export const config = {
  // Matcher entries are linked with a logical "or", therefore
  // if one of them matches, the middleware will be invoked.
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
    // However, match all pathnames within `/users`, optionally with a locale prefix
  ],
}
