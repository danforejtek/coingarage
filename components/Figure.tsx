import { cn } from "@/lib/utils"
import Image from "next/image"

type FigureProps = {
  icon: string
  caption: string
  iconSize?: number
  className?: string
  textClassName?: string
  children?: React.ReactNode
}

export default function Figure({ icon, iconSize = 56, caption, className, textClassName, children }: FigureProps) {
  return (
    <figure className={cn("flex flex-col items-center gap-4 max-w-[164px]", className)}>
      <Image src={icon} alt={caption} width={iconSize} height={iconSize} />
      <figcaption className={cn("text-center text-[--text-light]", textClassName)}>
        {children ? children : caption}
      </figcaption>
    </figure>
  )
}
