import LatestBlogPosts from "@/components/LatestBlogPosts"
import { locales } from "@/config"
import { unstable_setRequestLocale } from "next-intl/server"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function Layout({ children, params }: { children: React.ReactNode; params: Record<string, string> }) {
  unstable_setRequestLocale(params?.locale)
  const slug = params.slug
  const locale = params.locale
  return (
    <div className="container mx-auto">
      <div className="grid-col-1 grid gap-32 lg:grid-cols-[1fr_344px]">
        <article>{children}</article>
        <div className="hidden lg:block">
          <LatestBlogPosts slug={slug} locale={locale} />
        </div>
      </div>
    </div>
  )
}
