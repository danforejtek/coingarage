import { promises as fs } from "fs"
import path from "path"
import Image from "next/image"
import Renderer from "@/lib/renderer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

type Article = {
  heading: string
  perex: string
  image: string
  slug: string
  date: string
  author: string
  content: Content[]
}

type Content = {
  type: string
  content: string | string[]
}

type Articles = Article[]

export async function generateStaticParams() {
  const data = await fs.readFile(path.join(process.cwd(), "static", "articles.json"), "utf-8")
  const slugs = JSON.parse(data).map((item: { slug: string }) => item.slug)
  return slugs
}

const getData = async ({ slug }: { slug: string }) => {
  const jsonData = await fs.readFile(path.join(process.cwd(), "static", "articles.json"), "utf-8")
  const data = JSON.parse(jsonData).find((item: Article) => item.slug === slug)
  return data
}

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const data: Article = await getData({ slug })
  const { heading, perex, image, date, author, content } = data

  return (
    <div className="mt-12">
      <Link href="/blog" className="inline-flex items-center text-primary">
        <ArrowLeft className="mr-2" size={16} />
        Back
      </Link>
      <h1 className="mb-12 mt-4 font-heading text-4xl">{heading}</h1>
      <p className="font-heading">{perex}</p>
      <div className="relative mt-12 h-[302px] w-full">
        <Image src={image} alt="" fill={true} style={{ objectFit: "cover" }} />
      </div>
      {content.map((item: Content, index: number) => (
        <Renderer key={index} index={index} block={item} />
      ))}
      <div className="mt-12 flex flex-row justify-between">
        <p className="font-heading text-primary">{date}</p>
        <p className="font-heading text-primary">{author}</p>
      </div>
      <div className="ml-4 mt-6 hidden list-inside list-decimal pl-4"></div>
    </div>
  )
}
