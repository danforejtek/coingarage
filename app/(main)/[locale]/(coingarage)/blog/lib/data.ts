"use server"

import { Metadata } from "next"

const API_URL = process.env.STRAPI_URL
const API_TOKEN = process.env.STRAPI_API_TOKEN

export const getArticleSlugs = async ({ params }: { params: { locale: string } }) => {
  const { locale } = params
  const response = await fetch(`${API_URL}/api/articles?locale=${locale}&fields[0]=slug&pagination[pageSize]=100`, {
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
  const response = await fetch(`${API_URL}/api/articles?locale=${locale}&populate=*&filters[slug][$eq]=${slug}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    next: {
      revalidate: 43200,
    },
  })
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
  const response = await fetch(
    `${API_URL}/api/articles?fields[0]=title&fields[1]=date_created&fields[2]=perex&populate[0]=author&populate[1]=image&filters[slug][$eq]=${slug}&locale=${locale}`,
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
  const { title, perex, image, author } = data[0]?.attributes
  const imageSrc = API_URL + image?.data?.[0]?.attributes?.url
  const authorName = `${author?.data?.attributes?.name} ${author?.data?.attributes?.surname}`

  return {
    title: title,
    description: perex,
    authors: [authorName],
    openGraph: {
      images: [imageSrc],
    },
  }
}

export const getArticles = async ({ params }: { params: { locale: string } }) => {
  const { locale } = params
  const response = await fetch(`${API_URL}/api/articles?locale=${locale}&sort[0]=publishedAt:desc&populate=*`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    next: {
      revalidate: 43200,
    },
  })
  const responseData = await response.json()
  const data = responseData?.data
  const pagination = responseData?.meta?.pagination
  return { data, pagination }
}

export const getLatestArticles = async ({ params }: { params: Partial<{ locale: string; slug: string }> }) => {
  const { locale, slug } = params
  const response = await fetch(
    `${process.env.STRAPI_URL}/api/articles?locale=${locale}&fields[0]=title&fields[1]=date_created&fields[2]=perex&populate[0]=author&populate[1]=image&filters[slug][$ne]=${slug}&sort[0]=publishedAt:desc&pagination[pageSize]=3`,
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
