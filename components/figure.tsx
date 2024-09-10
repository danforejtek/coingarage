import { cn } from "@/lib/utils"
import Image from "next/image"

type FigureProps = {
  icon?: string
  caption: string
  iconSize?: number
  className?: string
  textClassName?: string
  children?: React.ReactNode
  direction?: "vertical" | "horizontal"
}

export default function Figure({
  icon,
  iconSize = 56,
  caption,
  className,
  textClassName,
  children,
  direction = "vertical",
}: FigureProps) {
  return (
    <figure
      className={cn(
        "flex w-[164px] flex-col items-center gap-4",
        direction === "vertical" ? "flex-col" : "flex-row",
        className
      )}
    >
      <></>
      {icon ? <Image src={icon} alt={caption} width={iconSize} height={iconSize} className="select-none" /> : null}
      <figcaption
        className={cn(
          "text-[--text-light] dark:text-gray-100",
          direction === "vertical" ? "text-center" : "text-start",
          textClassName
        )}
      >
        {children ? children : caption}
      </figcaption>
    </figure>
  )
}
