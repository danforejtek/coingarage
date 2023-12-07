// "use client"
import { cn, timeAgo } from "@/lib/utils"
// import { useEffect, useState } from "react"

type Article = {
  id: number
  text: string
  timestamp: string
  url: string
}

export const revalidate = 0

const getData = async () => {
  try {
    const response = await fetch(
      process.env.NODE_ENV === "development"
        ? `http://localhost:3000/api/news`
        : `https://${process.env.VERCEL_URL}/api/news`,
      { next: { revalidate: 0 } }
    )
    const data = (await response.json()) as Article[]
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}

const Article = ({ text, timestamp, url }: Article) => {
  return (
    <div className="flex w-full flex-col">
      <div className="text-sm text-primary">{timeAgo(new Date(timestamp))}</div>
      <a href={url} target="_blank" rel="noreferrer noopener" className="hover:text-primary">
        <div className="font-lg line-clamp-2 w-full font-heading font-bold">{text}</div>
      </a>
    </div>
  )
}

export default async function NewsFeed({ className }: { className?: string }) {
  // const [articles, setArticles] = useState<Article[]>([])

  // useEffect(() => {
  //   const getArticles = async () => {
  //     const data = await getData()
  //     setArticles(data)
  //   }
  //   getArticles()
  // }, [])
  const articles = await getData()

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {articles.map((article, index: number) => (
        <Article key={index} {...article} />
      ))}
    </div>
  )
}
