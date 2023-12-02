import { cn, timeAgo } from "@/lib/utils"

type Article = {
  id: number
  text: string
  timestamp: string
  url: string
}

const getData = async () => {
  try {
    const response = await fetch(
      process.env.NODE_ENV === "development"
        ? `${process.env.NEXT_PUBLIC_URL}/api/news`
        : `https://${process.env.VERCEL_URL}/api/news`,
      { next: { revalidate: 60 * 10 } }
    )
    const data = (await response.json()) as Article[]
    return data || []
  } catch (error) {
    console.log(error)
    return []
  } finally {
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
  const data = await getData()

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {data.map((article, index: number) => (
        <Article key={index} {...article} />
      ))}
    </div>
  )
}
