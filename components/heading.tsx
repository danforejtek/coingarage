import { cn } from "@/lib/utils"
import React from "react"

type HeadingProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children: React.ReactNode
  size?: keyof typeof sizes
  className?: string
}

const sizes = {
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
}

const Heading: React.FC<HeadingProps> = ({ tag = "h3", size = "4xl", className, children }) => {
  const Tag = tag
  const barSizeClass = ["4xl"].includes(size) ? "h-[110%] min-h-[64px] w-4" : "h-[110%] min-h-[48px]  w-3"

  return (
    <div className={cn("mb-4 grid grid-cols-[16px_1fr] items-center text-balance break-words", className)}>
      <div className={cn("left-0 top-0 rounded-lg bg-primary", barSizeClass)}></div>
      <Tag className={cn("ml-8 font-heading font-bold text-gray-800 dark:text-gray-100", sizes?.[size])}>
        {children}
      </Tag>
    </div>
  )
}

export default Heading
