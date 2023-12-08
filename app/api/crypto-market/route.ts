export async function GET(request: Request) {
  try {
    // const response = await fetch(`https://api.coingarage.io/market/market-data`, { cache: "no-cache" })
    const response = await fetch(`https://api.coingarage.io/market/market-data`, {
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
    })
    const data = await response.json()
    if (typeof data === "object") {
      const market = data?.crypto_market
      const trending = Object.keys(data?.trending)
        .filter((item) => item.split("_")[1] === "USDT")
        .map((item) => {
          return { name: item.split("_")[0], ...market[item] }
        })
      const topGainers = Object.keys(data?.top_gainer)
        .filter((item) => item.split("_")[1] === "USDT")
        .map((item) => {
          return { name: item.split("_")[0], ...market[item] }
        })
      const recentlyAdded = Object.keys(data?.recently_added)
        .filter((item) => item.split("_")[1] === "USDT")
        .map((item) => {
          return { name: item.split("_")[0], ...market[item] }
        })
      return Response.json({ trending, topGainers, recentlyAdded })
    }
    return Response.json({ trending: [], topGainers: [], recentlyAdded: [] })
  } catch (error) {
    console.log(error)
    return Response.json({ trending: [], topGainers: [], recentlyAdded: [] })
  }
}
