import CryptoTable from "./CryptoTable"

export default function CryptoStats() {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-16">
      <CryptoTable heading="Trending" />
      <CryptoTable heading="Top Gainers" />
      <CryptoTable heading="Recently Added" />
    </div>
  )
}
