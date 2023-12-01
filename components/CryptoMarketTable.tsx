import Image from "next/image"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

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
  const response = await fetch("http://localhost:3000/api/latest")
  const data = await response.json()
  console.log(data)
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
          {data?.data?.map((item, index) => (
            console.log(index === 1 ? item : null)
            <TableRow key={index}>
              <TableCell className="font-medium">
                <div className="flex flex-row items-center gap-8">
                  <Image src={item.icon} alt={item.symbol} width={40} height={40} />
                  <span>{item.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">{item.price}</TableCell>
              <TableCell className="text-right">{item.change}</TableCell>
              <TableCell className="text-right">{item.volume}</TableCell>
              <TableCell className="text-right">{item.marketCap}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
