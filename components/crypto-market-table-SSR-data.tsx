import Heading from "@/components/heading"
import { getTranslations } from "next-intl/server"
import CryptoMarketTable from "./crypto-market-table"

const getData = async () => {
  try {
    // https://pro.coinmarketcap.com/api/v1?source=post_page---------------------------#operation/getV1CryptocurrencyListingsLatest
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=${33}`,
      {
        next: { revalidate: 60 * 10 }, // in seconds
        headers: {
          "Content-Type": "application/json",
          "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY ?? "",
        },
      }
    )
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}

export default async function CryptoMarketTableSsrData() {
  const t = await getTranslations("CryptoMarket")
  const data = await getData()
  return (
    <>
      <Heading tag="h2">{t("name")}</Heading>
      <div className="mt-12">
        <div className="rounded-2xl bg-neutral-100 p-6 dark:bg-backgroundMuted">
          <CryptoMarketTable inputData={data} />
        </div>
      </div>
    </>
  )
}
