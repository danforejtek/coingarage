import CryptoTable from "./CryptoTable"

const getData = async () => {
  try {
    // const response = await fetch(`https://api.coingarage.io/market/market-data`, { cache: "no-cache" })
    const response = await fetch(`https://api.coingarage.io/market/market-data`, { next: { revalidate: 60 * 9 } })
    const data = await response.json()
    console.log("coingaragedata", data)
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
    return { trending, topGainers, recentlyAdded }
  } catch (error) {
    console.log("WHY THIS SHIT FAILS ON FUCNKING VERCEL")
    console.log(error)
    return { trending: [], topGainers: [], recentlyAdded: [] }
  }
}

export default async function CryptoStats() {
  const { trending, topGainers, recentlyAdded } = await getData()
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-16">
      <CryptoTable heading="Trending" data={trending} />
      <CryptoTable heading="Top Gainers" data={topGainers} />
      <CryptoTable heading="Recently Added" data={recentlyAdded} />
    </div>
  )
}
