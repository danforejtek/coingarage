"use client"
import { cn, timeAgo } from "@/lib/utils"
// import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { useQuery } from "@tanstack/react-query"
import { fetchNews } from "@/app/(main)/[locale]/(coingarage)/(homepage)/actions"

type Article = {
  id: number
  text: string
  timestamp: string
  url?: string
}

export const revalidate = 0

// const getData = async () => {
//   try {
//     const response = await fetch(
//       process.env.NODE_ENV === "development" ? `http://localhost:3000/api/news` : `/api/news`,
//       { next: { revalidate: 60 * 10 } }
//     )
//     const data = (await response.json()) as Article[]
//     return data
//   } catch (error) {
//     console.log(error)
//     return null
//   }
// }

const Article = ({ text, timestamp, url }: Article) => {
  return (
    <div className="flex min-h-[68px] w-full flex-col">
      <div className="text-sm text-primary">{timeAgo(new Date(timestamp))}</div>
      <a href={url} target="_blank" rel="noreferrer noopener" className="hover:text-primary">
        <div className="font-lg line-clamp-2 w-full font-heading font-bold">{text}</div>
      </a>
    </div>
  )
}

export default function NewsFeed({ className }: { className?: string }) {
  const { isPending, isLoading, error, data, refetch } = useQuery({
    queryKey: ["news"],
    queryFn: () => fetchNews(),
  })
  // const [articles, setArticles] = useState<Article[] | null>()

  // useEffect(() => {
  //   const getArticles = async () => {
  //     const data = await getData()
  //     setArticles(data)
  //   }
  //   getArticles()
  // }, [])
  // const articles = await getData()

  if (isLoading)
    return (
      <div className={cn("flex flex-col gap-6", className)}>
        <Skeleton className="h-[68px] w-full" />
        <Skeleton className="h-[68px] w-full" />
        <Skeleton className="h-[68px] w-full" />
      </div>
    )

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {data && data.map((article, index: number) => <Article key={index} {...article} />)}
    </div>
  )
}
