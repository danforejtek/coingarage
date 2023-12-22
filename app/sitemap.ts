import { MetadataRoute } from "next"
import { promises as fs } from "fs"
import path from "path"

type Article = {
  slug: string
  date: string
}

const baseUrl = process.env.NODE_ENV !== "production" ? "http://localhost:4200" : "https://coingarage.io"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const jsonData_cs = await fs.readFile(path.join(process.cwd(), "static", `articles_${"cs"}.json`), "utf-8")
  const jsonData_en = await fs.readFile(path.join(process.cwd(), "static", `articles_${"en"}.json`), "utf-8")
  const jsonData_de = await fs.readFile(path.join(process.cwd(), "static", `articles_${"de"}.json`), "utf-8")
  const jsonData_es = await fs.readFile(path.join(process.cwd(), "static", `articles_${"es"}.json`), "utf-8")
  const data_cs = JSON.parse(jsonData_cs)
  const data_en = JSON.parse(jsonData_en)
  const data_de = JSON.parse(jsonData_de)
  const data_es = JSON.parse(jsonData_es)

  const posts_cs = data_cs.map((post: Article) => ({
    url: `${baseUrl}/cs/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
  }))
  const posts_en = data_en.map((post: Article) => ({
    url: `${baseUrl}/en/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
  }))
  const posts_de = data_de.map((post: Article) => ({
    url: `${baseUrl}/de/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
  }))
  const posts_es = data_es.map((post: Article) => ({
    url: `${baseUrl}/es/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
  }))

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/earn`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...posts_cs,
    ...posts_en,
    ...posts_de,
    ...posts_es,
  ]
}
