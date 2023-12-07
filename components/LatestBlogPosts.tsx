import { promises as fs } from "fs"
import { Blog } from "@/components/blog"
import Image from "next/image"

type Article = {
  heading: string
  perex: string
  image: string
  slug: string
  date: string
  author: string
  content: any
}

const getData = async ({ slug }: { slug: string }) => {
  const jsonData = await fs.readFile(process.cwd() + "/static/articles.json", "utf-8")
  const data = JSON.parse(jsonData)
    .filter((item: Article) => item.slug !== slug)
    .slice(-3)
  return data
}

export default async function LatestBlogPosts({ slug }: { slug: string }) {
  const data: Article[] = await getData({ slug })

  return (
    <div className="flex flex-col gap-6">
      {data.map((item: Article, index: number) => {
        const { heading, perex, image, date, author, slug } = item
        return (
          <Blog.Item key={index}>
            <Blog.Image>
              <Image src={image} alt="" fill={true} style={{ objectFit: "cover" }} />
            </Blog.Image>
            <Blog.Content>
              <Blog.Author>{author}</Blog.Author>
              <Blog.Heading>{heading}</Blog.Heading>
              <Blog.Perex>{perex}</Blog.Perex>
              <Blog.Footer>
                <Blog.Date>{date}</Blog.Date>
                <Blog.Link href={`/blog/${slug}`}>Read more...</Blog.Link>
              </Blog.Footer>
            </Blog.Content>
          </Blog.Item>
        )
      })}
    </div>
  )
}
