import { Blog } from "@/components/blog"
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

const getData = async ({ locale, slug }: { locale: string; slug: string }) => {
  const response = await fetch(
    `${process.env.STRAPI_URL}/api/articles?locale=${locale}&fields[0]=title&fields[1]=date_created&fields[2]=perex&populate[0]=author&populate[1]=image&filters[slug][$ne]=${slug}&sort[0]=publishedAt:desc&pagination[pageSize]=3`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    }
  )
  const responseData = await response.json()
  const data = responseData?.data
  return data
}

export default async function LatestBlogPosts({ slug, locale }: { slug: string; locale: string }) {
  const data: Article[] = await getData({ slug, locale })

  return (
    <div className="flex flex-col gap-6">
      {data.map((item: Article, index: number) => {
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
      })}
    </div>
  )
}
