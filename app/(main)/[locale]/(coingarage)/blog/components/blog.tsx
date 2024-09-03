import Link from "next/link"
import type { ReactNode } from "react"

const BlogItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full max-h-[526px] overflow-hidden rounded-lg border transition-all hover:shadow-md">
      {children}
    </div>
  )
}

const BlogHeading = ({ children }: { children: ReactNode }) => {
  return <h2 className="line-clamp-2 h-12 font-heading text-lg font-bold leading-6">{children}</h2>
}

const BlogAuthor = ({ children }: { children: ReactNode }) => {
  return <div className="font-heading text-primary">{children}</div>
}

const BlogContent = ({ children }: { children: ReactNode }) => {
  return <div className="flex h-[252px] flex-col justify-between gap-4 p-6">{children}</div>
}

const BlogPerex = ({ children }: { children: ReactNode }) => {
  return <div className="line-clamp-4 max-h-[144px] text-sm text-neutral-500 dark:text-neutral-300">{children}</div>
}

const BlogDate = ({ children }: { children: ReactNode }) => {
  return (
    <div className="font-heading" suppressHydrationWarning>
      {children}
    </div>
  )
}

const BlogImage = ({ children }: { children: ReactNode }) => {
  return <div className="relative h-[224px] w-[auto]">{children}</div>
}

const BlogLink = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <Link href={href} className="font-heading text-primary">
      {children}
    </Link>
  )
}

const BlogFooter = ({ children }: { children: ReactNode }) => {
  return <div className="flex w-full flex-row items-end justify-between">{children}</div>
}

export const Blog = {
  Item: BlogItem,
  Heading: BlogHeading,
  Author: BlogAuthor,
  Content: BlogContent,
  Date: BlogDate,
  Image: BlogImage,
  Perex: BlogPerex,
  Link: BlogLink,
  Footer: BlogFooter,
}
