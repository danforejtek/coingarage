import { Blog } from "@/app/(main)/[locale]/(coingarage)/blog/components/blog"
import Image from "next/image"
import { formatDateString } from "@/lib/utils"
import { Link } from "@/navigation"

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
      {data.map((item: Article, index: number) => {
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
      })}
    </div>
  )
}
