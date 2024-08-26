import LatestBlogPosts from "@/app/(main)/[locale]/(coingarage)/blog/components/latest-blog-posts"
import { getLatestArticles } from "@/app/(main)/[locale]/(coingarage)/blog/lib/data"
import { locales } from "@/config"
import { cn } from "@/lib/utils"
import { unstable_setRequestLocale } from "next-intl/server"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Record<string, string>
}) {
  const latestBlogPosts = await getLatestArticles({ params })
  const latestBlogPostsLength = latestBlogPosts?.length
  unstable_setRequestLocale(params?.locale)
  return (
    <div className="container mx-auto">
      <div className="grid-col-1 grid gap-32 lg:grid-cols-[1fr_344px]">
        <article className={cn(latestBlogPostsLength === 0 ? "col-span-2 max-w-[1200px]" : "")}>{children}</article>
        <div className="hidden lg:block">
          <LatestBlogPosts data={latestBlogPosts} locale={params?.locale} />
        </div>
      </div>
    </div>
  )
}
