"use client"
import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"

import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer"
import { Quote } from "lucide-react"

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL

export default function BlockRendererClient({ content }: { readonly content: BlocksContent }) {
  if (!content) return null
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        image: ({ image }: { image: { url: string; width: number; height: number; alternativeText: string } }) => {
          if (!image.url.startsWith("http")) {
            return <Image src={image.url} width={image.width} height={image.height} alt={image.alternativeText || ""} />
          }
          return (
            <Image
              src={strapiUrl + image.url}
              width={image.width}
              height={image.height}
              alt={image.alternativeText || ""}
            />
          )
        },
        link: ({ children, url }: { children: ReactNode; url: string }) => (
          <Link href={url} className="text-primary underline hover:text-primary/50">
            {children}
          </Link>
        ),
        paragraph: ({ children }: { children: ReactNode }) => <p className="mb-8 mt-6">{children}</p>,
        heading: ({ children, level }: { children: ReactNode; level: number }) => {
          switch (level) {
            case 1:
              return <h2 className="mb-6 mt-4 font-heading text-5xl">{children}</h2>
            case 2:
              return <h2 className="mb-6 mt-4 font-heading text-4xl">{children}</h2>
            case 3:
              return <h3 className="mb-6 mt-4 font-heading text-3xl">{children}</h3>
            case 4:
              return <h4 className="my-4 font-heading text-2xl">{children}</h4>
            case 5:
              return <h5 className="my-4 font-heading text-2xl">{children}</h5>
            case 6:
              return <h6 className="my-2 font-heading text-xl">{children}</h6>
            default:
              return <p className="my-2 font-heading text-xl">{children}</p>
          }
        },
        list: ({ children, ordered }: { children: ReactNode; ordered: boolean }) => {
          if (ordered) {
            return <ol className="list-inside list-decimal">{children}</ol>
          }
          return <ul className="list-inside list-disc">{children}</ul>
        },
        quote: ({ children }: { children: ReactNode }) => (
          <Alert className="mx-6">
            <Quote className="h-4 w-4" />
            <AlertDescription className="mb-2 mt-4">
              <blockquote className="px-4 text-lg">{children}</blockquote>
            </AlertDescription>
          </Alert>
        ),
      }}
      modifiers={{
        bold: ({ children }: { children: ReactNode }) => <strong>{children}</strong>,
        italic: ({ children }: { children: ReactNode }) => <span className="italic">{children}</span>,
        underline: ({ children }: { children: ReactNode }) => <u>{children}</u>,
        strikethrough: ({ children }: { children: ReactNode }) => <s>{children}</s>,
        code: ({ children }: { children: ReactNode }) => <code>{children}</code>,
      }}
    />
  )
}
