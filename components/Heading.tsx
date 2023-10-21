import { cn } from "@/lib/utils"
import React from "react"

type HeadingProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children: React.ReactNode
  size?: string
  className?: string
}

const Heading: React.FC<HeadingProps> = ({ tag = "h3", size = "text-4xl", className, children }) => {
  const Tag = tag

  return (
    <div className={cn("grid grid-cols-[16px_1fr] items-center", className)}>
      <div className="top-0 left-0 w-4 h-[calc(100%+28px)] bg-primary rounded-lg"></div>
      <Tag className={cn("font-bold font-heading text-gray-800 ml-8", size)}>{children}</Tag>
    </div>
  )
}

export default Heading
