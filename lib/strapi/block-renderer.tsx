"use client"
import Image from "next/image"

import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer"
import Link from "next/link"
export default function BlockRendererClient({ content }: { readonly content: BlocksContent }) {
  console.log(content)
  if (!content) return null
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        image: ({ image }) => {
          return <Image src={image.url} width={image.width} height={image.height} alt={image.alternativeText || ""} />
        },
        link: ({ children, url }) => (
          <Link href={url} className="text-primary underline hover:text-primary/50">
            {children}
          </Link>
        ),
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className="italic">{children}</span>,
      }}
    />
  )
}
