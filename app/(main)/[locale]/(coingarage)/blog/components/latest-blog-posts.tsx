import { Blog } from "@/app/(main)/[locale]/(coingarage)/blog/components/blog"
import Image from "next/image"
import { formatDateString } from "@/lib/utils"

type Article = {
  heading: string
  perex: string
  image: string
  slug: string
  date: string
  author: string
  content: any
}

export default async function LatestBlogPosts({ data, locale }: { data: any; locale: string }) {
  return (
    <div className="flex flex-col gap-6">
      {data.map((item: Article, index: number) => {
        const { title, perex, image, author, publishedAt, slug } = item?.attributes
        const imageSrc = image?.data?.[0]?.attributes?.url
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
      })}
    </div>
  )
}
