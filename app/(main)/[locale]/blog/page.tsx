import { promises as fs } from "fs"
import { Blog } from "@/components/blog"
import Image from "next/image"
import path from "path"
import type { Metadata } from "next"

type Article = {
  heading: string
  perex: string
  image: string
  slug: string
  date: string
  author: string
  content: any
}

export const metadata: Metadata = {
  title: "Blog | Coingarage",
}

const getData = async () => {
  const jsonData = await fs.readFile(path.join(process.cwd(), "static", "articles.json"), "utf-8")
  const data = JSON.parse(jsonData).map((item: Article) => {
    delete item.content
    return { ...item }
  })
  return data
}

export default async function Page() {
  const data: Article[] = await getData()

  return (
    <main>
      <section className="container mx-auto mt-6 flex flex-col flex-wrap items-center justify-center lg:flex-row xl:mt-14 xl:justify-between">
        <h1 className="mb-12 font-heading text-4xl">Blog</h1>
        <article className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
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
        </article>
      </section>
    </main>
  )
}
