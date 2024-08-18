import { Blog } from "@/components/blog"
import Image from "next/image"
import type { Metadata } from "next"
import { formatDateString } from "@/lib/utils"
import { Pagination } from "@/app/(main)/[locale]/(coingarage)/blog/components/pagination"
import { getArticles } from "@/app/(main)/[locale]/(coingarage)/blog/lib/data"

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
                const imageSrc = process.env.STRAPI_URL + image?.data?.[0]?.attributes?.url
                const authorName = `${author?.data?.attributes?.name} ${author?.data?.attributes?.surname}`
                return (
                  <Blog.Item key={index}>
                    <Blog.Image>
                      <Image src={imageSrc} alt="" fill={true} style={{ objectFit: "cover" }} />
                    </Blog.Image>
                    <Blog.Content>
                      <Blog.Author>{authorName}</Blog.Author>
                      <Blog.Heading>{title}</Blog.Heading>
                      <Blog.Perex>{perex}</Blog.Perex>
                      <Blog.Footer>
                        <Blog.Date>{formatDateString(publishedAt)}</Blog.Date>
                        <Blog.Link href={`/${locale}/blog/${slug}`}>Read more...</Blog.Link>
                      </Blog.Footer>
                    </Blog.Content>
                  </Blog.Item>
                )
              })
            : "No articles found"}
        </article>
        <Pagination pagination={pagination} />
      </section>
    </main>
  )
}
