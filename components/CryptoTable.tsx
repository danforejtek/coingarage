import Image from "next/image"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Heading from "./Heading"
import { cn } from "@/lib/utils"

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

export default function CryptoTable({ heading }: { heading: string }) {
  return (
    <div className="rounded-2xl bg-neutral-100 p-6">
      <Heading tag="h3" size="3xl" className="ml-4">
        {heading}
      </Heading>
      <Table className="mt-4">
        <TableBody>
          {cryptoData.map((data, index) => (
            <TableRow key={index} className="border-b-transparent">
              <TableCell className="border-b-transparent font-medium">
                <div className="flex flex-row items-center gap-8">
                  <Image src={data.icon} alt={data.currency} width={32} height={32} />
                  <div className="flex w-full flex-col">
                    <span className="font-heading text-lg">{data.short}</span>
                    <span className="text-sm text-neutral-400">{data.currency}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex w-full flex-col">
                  <span className="font-heading text-lg">{usd.format(data.price)}</span>
                  <span className={cn("text-sm text-neutral-400", data.change > 0 ? up : down)}>
                    {percents.format(data.change)}
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
