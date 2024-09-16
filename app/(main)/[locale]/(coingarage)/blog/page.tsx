import type { Metadata } from "next"
import { Pagination } from "@/app/(main)/[locale]/(coingarage)/blog/components/pagination"
import { getArticles } from "@/app/(main)/[locale]/(coingarage)/blog/lib/data"
import { Post } from "@/app/(main)/[locale]/(coingarage)/blog/components/post"

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
  description: "News from the world of cryptocurrencies and blockchain technology.",
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
                const { title, perex, image, author, date_created, slug } = item?.attributes
                const imageSrc = image?.data?.[0]?.attributes?.url?.startsWith("http")
                  ? image?.data?.[0]?.attributes?.url
                  : strapiUrl + image?.data?.[0]?.attributes?.url
                const authorName = `${author?.data?.attributes?.name} ${author?.data?.attributes?.surname}`
                return (
                  <Post
                    key={index}
                    imageSrc={imageSrc}
                    title={title}
                    perex={perex}
                    authorName={authorName}
                    date_created={date_created}
                    href={`/blog/${slug}`}
                  />
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
