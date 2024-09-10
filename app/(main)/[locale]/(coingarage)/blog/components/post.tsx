import { formatDateString } from "@/lib/utils"
import { Link } from "@/navigation"
import Image from "next/image"

export const Post = ({
  imageSrc,
  title,
  perex,
  authorName,
  date_created,
  href,
}: {
  imageSrc: string
  title: string
  perex: string
  authorName: string
  date_created: string
  href: string
}) => {
  return (
    <Link href={href}>
      <div className="h-full max-h-[526px] overflow-hidden rounded-lg border transition-all hover:shadow-md">
        <div className="relative h-[224px] w-[auto]">
          <Image src={imageSrc} alt="" fill={true} style={{ objectFit: "cover" }} />
        </div>
        <div className="flex h-[252px] flex-col justify-between gap-4 p-6">
          <div className="flex flex-col justify-between gap-4">
            <h2 className="line-clamp-2 h-12 font-heading text-lg font-bold leading-6">{title}</h2>
            <div className="line-clamp-4 max-h-[144px] text-sm text-neutral-500 dark:text-neutral-300">{perex}</div>
            <div className="flex w-full flex-row items-end justify-between">
              <div className="flex flex-col">
                <div className="font-heading text-primary">{authorName}</div>
                <div className="font-heading" suppressHydrationWarning>
                  {formatDateString(date_created)}
                </div>
              </div>
              <span className="font-heading text-primary">Read more...</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
