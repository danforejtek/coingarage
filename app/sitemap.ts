import { getArticlesForSitemap } from "@/app/(main)/[locale]/(coingarage)/blog/lib/data"
import { MetadataRoute } from "next"
import { locales } from "@/config"

const baseUrl = process.env.VERCEL_URL as string
const baseUrlFinance =
  process.env.NODE_ENV !== "production" ? `${baseUrl}/finance` : `https://${process.env.FINANCE_DOMAIN}`

const staticPages = [
  {
    url: `/`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1,
  },
  {
    url: `/earn`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `/blog`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  },
  {
    url: `/about-us`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: `/partners`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: `/legal/terms-of-service`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: `/legal/privacy-policy`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: `/legal/cookie-policy`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
]

const staticPagesFinance = [
  {
    isFinance: true,
    url: `${baseUrlFinance}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1,
  },
  {
    isFinance: true,
    url: `${baseUrlFinance}/contacts`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  },
]

const addLocalesToUrls = (
  baseUrl: string,
  urlArray: { url: string; lastModified: Date; changeFrequency: string; priority: number }[],
  locales: string[]
) => {
  const localizedUrls = []

  urlArray.forEach((item) => {
    locales.forEach((locale) => {
      localizedUrls.push({
        url: `${baseUrl}/${locale}${item.url}`,
        lastModified: item.lastModified,
        changeFrequency: item.changeFrequency,
        priority: item.priority,
      })
    })
  })

  return localizedUrls
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articlesEn = await getArticlesForSitemap({ locale: "en" })
  const articlesCs = await getArticlesForSitemap({ locale: "cs" })

  const articleUrls = [...articlesCs, ...articlesEn].map((article) => ({
    url: `${baseUrl}/${article.locale}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "daily",
    priority: 0.8,
  }))

  const localizedUrls = addLocalesToUrls(baseUrl, staticPages, locales)
  const localizedUrlsFinance = addLocalesToUrls(baseUrlFinance, staticPagesFinance, locales)

  return [
    ...articleUrls,
    ...localizedUrls,
    ...localizedUrlsFinance,
    // ...otherStaticPages,
  ]
}
