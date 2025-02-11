export async function GET(request: Request) {
  try {
    // const { searchParams } = new URL(request.url)
    // const id = searchParams.get("id")
    const amount = "6";
    const res = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=${amount}`, {
      next: { revalidate: 60 * 10 }, // in seconds
      // cache: "no-cache", // Don't cache response
      // @ts-ignore
      headers: {
        "Content-Type": "application/json",
        "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY,
      },
    })
    if (!res.ok) {
      throw new Error("Network response was not ok")
    }

    const data = await res.json()

    return Response.json(data)
  } catch (error) {
    return Response.json([])
  }
}
