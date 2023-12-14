import LatestBlogPosts from "@/components/LatestBlogPosts"

export default function Layout({ children, params }: { children: React.ReactNode; params: Record<string, string> }) {
  const slug = params.slug
  return (
    <div className="container mx-auto">
      <div className="grid-col-1 grid gap-32 lg:grid-cols-[1fr_344px]">
        <article>{children}</article>
        <div className="hidden lg:block">
          <LatestBlogPosts slug={slug} />
        </div>
      </div>
    </div>
  )
}
