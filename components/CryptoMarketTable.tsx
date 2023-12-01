import Image from "next/image"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn, formatAmount, formatCurrency, formatPercentage } from "@/lib/utils"

const cryptoData = [
  {
    currency: "Bitcoin",
    icon: "/icons/coins/bitcoin.png",
    price: "$250.00",
    change: "0.00%",
    volume: "$500.00",
    marketCap: "$2500000.00",
  },
  {
    currency: "Ripple",
    icon: "/icons/coins/ripple.png",
    price: "$250.00",
    change: "0.00%",
    volume: "$500.00",
    marketCap: "$2500000.00",
  },
  {
    currency: "Doge",
    icon: "/icons/coins/doge.png",
    price: "$250.00",
    change: "0.00%",
    volume: "$500.00",
    marketCap: "$2500000.00",
  },
  {
    currency: "Litecoin",
    icon: "/icons/coins/litecoin.png",
    price: "$250.00",
    change: "0.00%",
    volume: "$500.00",
    marketCap: "$2500000.00",
  },
  {
    currency: "Dash",
    icon: "/icons/coins/dash.png",
    price: "$250.00",
    change: "0.00%",
    volume: "$500.00",
    marketCap: "$2500000.00",
  },
]

const getData = async () => {
  const response = await fetch("http://localhost:3000/api/latest", { cache: "no-cache" })
  const data = await response.json()
  // console.log(JSON.stringify(data))
  return data
}

export default async function CryptoMarketTable() {
  const data = await getData()
  return (
    <div className="rounded-2xl bg-neutral-100 p-6 dark:bg-backgroundMuted">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[160px]">Currency</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">24h Change</TableHead>
            <TableHead className="text-right">24h Volume</TableHead>
            <TableHead className="text-right">Market Cap</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((item: any, index: number) => {
            // console.log(index === 1 ? item : null)
            const changeClass = item?.quote?.USD?.percent_change_24h < 0 ? "text-red-500" : "text-green-500"
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <div className="flex flex-row items-center gap-8">
                    <Image
                      src={`https://coinicons-api.vercel.app/api/icon/${item.symbol.toLowerCase()}`}
                      alt={item.symbol}
                      width={40}
                      height={40}
                    />
                    <span>{item.name}</span>
                  </div>
                </TableCell>
                <TableCell className={cn("text-right")}>{formatCurrency(item?.quote?.USD?.price)}</TableCell>
                <TableCell className={cn("text-right", changeClass)}>
                  {formatPercentage(item?.quote?.USD?.percent_change_24h)}
                </TableCell>
                <TableCell className={cn("text-right", changeClass)}>
                  {formatCurrency(item?.quote?.USD?.volume_change_24h)}
                </TableCell>
                <TableCell className={cn("text-right")}>{formatCurrency(item?.quote?.USD?.market_cap, 0)}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
