import { Post } from "@/app/(main)/[locale]/(coingarage)/blog/components/post"

type Article = {
  heading: string
  perex: string
  image: string
  slug: string
  date: string
  author: string
  content: any
}
const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL

export default async function LatestBlogPosts({ data, locale }: { data: any; locale: string }) {
  return (
    <div className="flex flex-col gap-6">
      {data &&
        data.map((item: Article, index: number) => {
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
        })}
    </div>
  )
}
