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
    <div className={cn("flex flex-row items-center justify-start", className)}>
      <div className="top-0 left-0 w-4 h-16 bg-primary rounded-lg"></div>
      <Tag className={cn("font-bold font-heading text-gray-800 ml-8", size)}>{children}</Tag>
    </div>
  )
}

export default Heading
