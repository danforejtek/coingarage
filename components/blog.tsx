import Link from "next/link"
import { ReactNode } from "react"

const BlogItem = ({ children }: { children: ReactNode }) => {
  return <div className=" h-[626px] overflow-hidden rounded-lg border">{children}</div>
}

const BlogHeading = ({ children }: { children: ReactNode }) => {
  return <h2 className="line-clamp-2 font-heading text-lg font-bold">{children}</h2>
}

const BlogAuthor = ({ children }: { children: ReactNode }) => {
  return <div className="font-heading text-primary">{children}</div>
}

const BlogContent = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-4 p-6">{children}</div>
}

const BlogPerex = ({ children }: { children: ReactNode }) => {
  return <div className="line-clamp-6 max-h-[144px] text-sm text-neutral-500">{children}</div>
}

const BlogDate = ({ children }: { children: ReactNode }) => {
  return <div className="font-heading">{children}</div>
}

const BlogImage = ({ children }: { children: ReactNode }) => {
  return <div className="relative h-[284px] w-[auto]">{children}</div>
}

const BlogLink = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <Link href={href} className="font-heading text-primary">
      {children}
    </Link>
  )
}

const BlogFooter = ({ children }: { children: ReactNode }) => {
  return <div className="mt-4 flex flex-row justify-between">{children}</div>
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
