import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { unstable_setRequestLocale } from "next-intl/server"
import BlockRendererClient from "@/lib/strapi/block-renderer"
import { getArticle, getArticleSlugs, getArtileMetadata } from "@/app/(main)/[locale]/(coingarage)/blog/lib/data"
import { SocialShare } from "@/app/(main)/[locale]/(coingarage)/blog/components/social-share"
import { FormattedDate } from "@/app/(main)/[locale]/(coingarage)/blog/components/formatted-date"

type Article = {
  heading: string
  perex: string
  image: string
  slug: string
  date: string
  author: string
  content: Content[]
}

type Content = {
  type: string
  content: string | string[]
}

type Props = {
  params: { slug: string; locale: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getArtileMetadata({ params })
  return data as Metadata
}

export async function generateStaticParams({ params }: { params: { slug: string; locale: string } }) {
  const slugs = await getArticleSlugs({ params })
  return slugs
}

export default async function Page({ params }: { params: { slug: string; locale: string } }) {
  const slug = params.slug
  const locale = params.locale
  unstable_setRequestLocale(locale)
  const data: Article = await getArticle({ params })
  if (!data?.attributes?.title) return <>Not found</>
  const { title, perex, image, date_created, author, content, seo } = data?.attributes
  const imageSrc = image?.data?.[0]?.attributes?.url
  const authorName = `${author?.data?.attributes?.name} ${author?.data?.attributes?.surname}`
  const metaTitle = seo?.metaTitle || title

  return (
    <div className="mt-12">
      <Link href="/blog" className="inline-flex items-center text-primary">
        <ArrowLeft className="mr-2" size={16} />
        Back
      </Link>
      <FormattedDate date={date_created} className="mt-12 text-primary" />
      <h1 className="mt-4 font-heading text-4xl">{title}</h1>
      <div className="mt-6 flex flex-col">
        <span className="text-xs text-neutral-400">Posted by</span>
        <p className="mt-2 font-heading text-primary">{authorName}</p>
      </div>
      {/* <p className="mt-4 font-heading">{perex}</p> */}
      <div className="my-4 h-[1px] w-full bg-neutral-200 dark:bg-neutral-800"></div>
      <div className="relative mt-12 aspect-2/1 w-full">
        {imageSrc.startsWith("http") ? (
          <Image
            src={imageSrc}
            alt=""
            fill={true}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <Image
            src={strapiUrl + imageSrc}
            alt=""
            fill={true}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <div className="mt-10">
        <BlockRendererClient content={content} />
      </div>
      <SocialShare title={metaTitle} />
    </div>
  )
}
