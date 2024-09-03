import { Blog } from "@/app/(main)/[locale]/(coingarage)/blog/components/blog"
import Image from "next/image"
import type { Metadata } from "next"
import { formatDateString } from "@/lib/utils"
import { Pagination } from "@/app/(main)/[locale]/(coingarage)/blog/components/pagination"
import { getArticles } from "@/app/(main)/[locale]/(coingarage)/blog/lib/data"
import { Link } from "@/navigation"

type Article = {
  attributes: {
    title: string
    perex: string
    image: string
    publishedAt: string
  }
}

export const metadata: Metadata = {
  title: "Blog | Coingarage",
}

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale } = params
  const articles = await getArticles({ params })
  const { data, pagination } = articles

  return (
    <main>
      <section className="container mx-auto mt-6 flex flex-col flex-wrap items-center justify-center lg:flex-row xl:mt-14 xl:justify-between">
        <h1 className="mb-12 font-heading text-4xl">Blog</h1>
        <article className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {data
            ? data.map((item: Article, index: number) => {
                const { title, perex, image, author, publishedAt, slug } = item?.attributes
                const imageSrc = image?.data?.[0]?.attributes?.url?.startsWith("http")
                  ? image?.data?.[0]?.attributes?.url
                  : strapiUrl + image?.data?.[0]?.attributes?.url
                const authorName = `${author?.data?.attributes?.name} ${author?.data?.attributes?.surname}`
                return (
                  <Link href={`/blog/${slug}`} key={index}>
                    <Blog.Item key={index}>
                      <Blog.Image>
                        <Image src={imageSrc} alt="" fill={true} style={{ objectFit: "cover" }} />
                      </Blog.Image>
                      <Blog.Content>
                        <div className="flex flex-col justify-between gap-4">
                          <Blog.Heading>{title}</Blog.Heading>
                          <Blog.Perex>{perex}</Blog.Perex>
                        </div>
                        <Blog.Footer>
                          <div className="flex flex-col">
                            <Blog.Author>{authorName}</Blog.Author>
                            <Blog.Date>{formatDateString(publishedAt)}</Blog.Date>
                          </div>
                          <Blog.Link href={`/${locale}/blog/${slug}`}>Read more...</Blog.Link>
                        </Blog.Footer>
                      </Blog.Content>
                    </Blog.Item>
                  </Link>
                )
              })
            : null}
        </article>
        {data && data.length !== 0 ? <Pagination pagination={pagination} /> : null}
      </section>
      {!data || data.length === 0 ? (
        <div className="container mx-auto">
          <p>No articles found</p>
        </div>
      ) : null}
    </main>
  )
}
