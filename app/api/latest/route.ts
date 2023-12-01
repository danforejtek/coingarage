// https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest

export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url)
  // const id = searchParams.get("id")
  const res = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=${20}`, {
    next: { revalidate: 60 * 60 }, // Revalidate every 60 seconds
    // cache: "no-cache", // Don't cache response
    headers: {
      "Content-Type": "application/json",
      "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY,
    },
  })
  const data = await res.json()

  return Response.json(data)
}
