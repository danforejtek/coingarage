import Image from "next/image"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Heading from "./Heading"
import { cn, formatCurrency, formatPercentage } from "@/lib/utils"

type CryptoData = {
  name: string
  last_price: string
  lowest_ask: string
  highest_bid: string
  base_volume: string
  high_24hr: string
  low_24hr: string
  change_perc_24hr: string
}

const cryptoData = [
  {
    currency: "Bitcoin",
    short: "BTC",
    icon: "/icons/coins/bitcoin.png",
    price: 35325.43,
    change: 0.002,
  },
  {
    currency: "Ripple",
    short: "XRP",
    icon: "/icons/coins/ripple.png",
    price: 0.602,
    change: 0.072,
  },
  {
    currency: "Doge",
    short: "DOGE",
    icon: "/icons/coins/doge.png",
    price: 4.58,
    change: -0.12,
  },
  {
    currency: "Litecoin",
    short: "LTC",
    icon: "/icons/coins/litecoin.png",
    price: 68.08,
    change: -0.05,
  },
  {
    currency: "Dash",
    short: "DASH",
    icon: "/icons/coins/dash.png",
    price: 28.76,
    change: 0.03,
  },
]

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

const percents = new Intl.NumberFormat("en-US", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const up = "text-green-500"
const down = "text-red-500"

export default function CryptoTable({ heading, data }: { heading: string; data: CryptoData[] }) {
  return (
    <div className="rounded-2xl bg-neutral-100 p-6 dark:bg-backgroundMuted">
      <Heading tag="h3" size="3xl" className="ml-4">
        {heading}
      </Heading>
      <Table className="mt-4">
        <TableBody>
          {data.map((data, index) => (
            <TableRow key={index} className="border-b-transparent">
              <TableCell className="border-b-transparent font-medium">
                <div className="flex flex-row items-center gap-8">
                  <Image
                    src={`https://coinicons-api.vercel.app/api/icon/${data.name.toLowerCase()}`}
                    alt={data.name}
                    width={32}
                    height={32}
                  />
                  <div className="flex w-full flex-col">
                    <span className="font-heading text-lg">{data.name}</span>
                    <span className="text-sm text-neutral-400">{data.name}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex w-full flex-col">
                  <span className="font-heading text-lg">{formatCurrency(Number(data.last_price))}</span>
                  <span className={cn("text-sm text-neutral-400", Number(data.change_perc_24hr) > 0 ? up : down)}>
                    {formatPercentage(Number(data.change_perc_24hr))}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
