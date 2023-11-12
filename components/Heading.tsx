import { cn } from "@/lib/utils"
import React from "react"

type HeadingProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children: React.ReactNode
  size?: string
  className?: string
}

const Heading: React.FC<HeadingProps> = ({ tag = "h3", size = "4xl", className, children }) => {
  const Tag = tag
  const barSizeClass = ["4xl"].includes(size) ? "h-16 w-4" : "h-12 w-3"

  return (
    <div className={cn("grid grid-cols-[16px_1fr] items-center", className)}>
      <div className={cn("left-0 top-0 rounded-lg bg-primary", barSizeClass)}></div>
      <Tag className={cn("ml-8 font-heading font-bold text-gray-800", `text-${size}`)}>{children}</Tag>
    </div>
  )
}

export default Heading
