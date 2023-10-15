import Image from "next/image"

type FigureProps = {
  icon: string
  caption: string
  children?: React.ReactNode
}

export default function Figure({ icon, caption, children }: FigureProps) {
  return (
    <figure className="flex flex-col items-center gap-4 max-w-[164px]">
      <Image src={icon} alt={caption} width={56} height={56} />
      <figcaption className="text-center text-[--text-light]">{children ? children : caption}</figcaption>
    </figure>
  )
}
