import CryptoTable from "./CryptoTable"

const getData = async () => {
  try {
    const response = await fetch(
      process.env.NODE_ENV === "development"
        ? `http://localhost:3000/api/crypto-market`
        : `https://${process.env.VERCEL_URL}/api/crypto-market`,
      { next: { revalidate: 60 * 9 } }
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return []
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
