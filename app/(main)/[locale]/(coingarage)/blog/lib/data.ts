"use server"

import { Metadata } from "next"

const API_URL = process.env.STRAPI_URL
const API_TOKEN = process.env.STRAPI_API_TOKEN

export const getArticleSlugs = async ({ params }: { params: { locale: string } }) => {
  const { locale } = params
  const _locale = locale === "cs" ? "cs" : "en"
  const response = await fetch(`${API_URL}/api/articles?locale=${_locale}&fields[0]=slug&pagination[pageSize]=100`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    next: {
      revalidate: 43200,
    },
  })
  const responseData = await response.json()
  const data = responseData?.data
  if (!data || data?.length === 0) return []
  const slugs = data.map((item) => ({
    slug: item?.attributes?.slug,
  }))
  return slugs
}

export const getArticle = async ({ params }: { params: { slug: string; locale: string } }) => {
  const { slug, locale } = params
  const _locale = locale === "cs" ? "cs" : "en"
  const response = await fetch(
    `${API_URL}/api/articles?locale=${_locale}&populate[0]=image&populate[1]=author&populate[2]=seo.*&filters[slug][$eq]=${slug}`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
      next: {
        revalidate: 43200,
      },
    }
  )
  const responseData = await response.json()
  const data = responseData?.data
  return data[0]
}

export const getArtileMetadata = async ({
  params,
}: {
  params: { slug: string; locale: string }
}): Promise<Metadata> => {
  const { slug, locale } = params
  const _locale = locale === "cs" ? "cs" : "en"
  const response = await fetch(
    `${API_URL}/api/articles?fields[0]=title&fields[1]=date_created&fields[2]=perex&populate[0]=author&populate[1]=image&populate[2]=seo.*&populate[3]=seo.metaSocial&populate[4]=seo.metaImage&populate[5]=seo.metaSocial.image&filters[slug][$eq]=${slug}&locale=${_locale}`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
      next: {
        revalidate: 43200,
      },
    }
  )
  const responseData = await response.json()
  const data = responseData?.data
  if (data?.length === 0) return {}
  const { title, perex, image, author, date_created } = data[0]?.attributes
  const imageSrc = image?.data?.[0]?.attributes?.url
  const authorName = `${author?.data?.attributes?.name} ${author?.data?.attributes?.surname}`
  const seo = data[0]?.attributes?.seo
  const metaTitle = seo?.metaTitle || title
  const metaDescription = seo?.metaDescription || perex
  const metaImage = seo?.metaImage?.data?.[0]?.attributes?.url || imageSrc
  const metaSocial = seo?.metaSocial
  const metaTwitter = (metaSocial && metaSocial?.find((item) => item?.socialNetwork === "Twitter")) || null
  const twitter = {
    card: "summary_large_image",
    title: metaTwitter?.title || metaTitle,
    description: metaTwitter?.description || metaDescription,
    siteId: "1582689248574115841",
    creator: "@Coingaragesro",
    creatorId: "1582689248574115841",
    images: metaTwitter?.data?.[0]?.attributes?.url || metaImage,
  }

  return {
    title: metaTitle,
    description: metaDescription,
    authors: [authorName],
    openGraph: {
      images: [imageSrc || metaImage],
      type: "article",
      article: {
        publishedTime: date_created,
        modifiedTime: date_created,
        authors: [authorName],
      },
    },
    twitter,
  } as Metadata
}

export const getArticles = async ({ params, page = "1" }: { params: { locale: string }; page: string }) => {
  const { locale } = params
  const _locale = locale === "cs" ? "cs" : "en"
  const response = await fetch(
    `${API_URL}/api/articles?locale=${_locale}&sort[0]=publishedAt:desc&populate=*&pagination[page]=${page}`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
      next: {
        revalidate: 43200,
      },
    }
  )
  const responseData = await response.json()
  const data = responseData?.data
  const pagination = responseData?.meta?.pagination
  return { data, pagination }
}

export const getLatestArticles = async ({ params }: { params: Partial<{ locale: string; slug: string }> }) => {
  const { locale, slug } = params
  const _locale = locale === "cs" ? "cs" : "en"
  const response = await fetch(
    `${process.env.STRAPI_URL}/api/articles?locale=${_locale}&fields[0]=title&fields[1]=date_created&fields[2]=perex&fields[3]=slug&populate[0]=author&populate[1]=image&filters[slug][$ne]=${slug}&sort[0]=publishedAt:desc&pagination[pageSize]=3`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: {
        revalidate: 43200,
      },
    }
  )
  const responseData = await response.json()
  const data = responseData?.data
  return data
}

export const getArticlesForSitemap = async ({ locale }: { locale: string }) => {
  let page = 1
  const pageSize = 100
  let allSlugs: { locale: string; slug: string; updatedAt: string; createdAt: string }[] = []
  let totalPages = 1

  do {
    const response = await fetch(
      `${API_URL}/api/articles?fields[0]=slug&fields[1]=createdAt&fields[2]=updatedAt&fields[3]=locale&pagination[page]=${page}&pagination[pageSize]=${pageSize}&locale=${locale}`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
        next: {
          revalidate: 43200,
        },
      }
    )
    const responseData = await response.json()
    const data = responseData?.data
    const pagination = responseData?.meta?.pagination

    if (!data || data.length === 0) return []

    const slugs = data.map((item) => ({
      slug: item?.attributes?.slug,
      locale: item?.attributes?.locale,
      createdAt: item?.attributes?.createdAt,
      updatedAt: item?.attributes?.updatedAt,
    }))

    allSlugs = [...allSlugs, ...slugs]
    totalPages = pagination.pageCount
    page++
  } while (page <= totalPages)

  return allSlugs
}
