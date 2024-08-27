import { revalidatePath } from "next/cache"

export async function POST(request: Request) {
  try {
    if (request.headers.get("Authorization") !== process.env.STRAPI_WEBHOOK_SECRET) {
      return new Response("Unauthorized", { status: 401 })
    }
    const data = await request.json()
    const { uid } = data
    const { locale, slug } = data.entry
    console.log(`Received webhook for ${uid} in ${locale} with slug ${slug}`)
    if (uid === "api::article.article") {
      console.log(`Revalidating /${locale}/blog`)
      revalidatePath(`/${locale}/blog`)
      console.log(`Revalidating /${locale}/blog/${slug}`)
      revalidatePath(`/${locale}/blog/${slug}`)
    }
  } catch (error) {
    return new Response(`Webhook error: ${error?.message}`, {
      status: 400,
    })
  }

  return new Response("Success", {
    status: 200,
  })
}
