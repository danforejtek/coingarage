import { cn } from "@/lib/utils"
import Image from "next/image"

type FigureProps = {
  icon?: string
  caption: string
  iconSize?: number
  className?: string
  textClassName?: string
  children?: React.ReactNode
}

export default function Figure({ icon, iconSize = 56, caption, className, textClassName, children }: FigureProps) {
  return (
    <figure className={cn("flex max-w-[164px] flex-col items-center gap-4", className)}>
      {icon ? <Image src={icon} alt={caption} width={iconSize} height={iconSize} /> : null}
      <figcaption className={cn("text-center text-[--text-light] dark:text-gray-100", textClassName)}>
        {children ? children : caption}
      </figcaption>
    </figure>
  )
}
