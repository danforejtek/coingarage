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

const up = "text-green-500"
const down = "text-red-500"

export default function CryptoTable({ heading, data }: { heading: string; data: CryptoData[] }) {
  return (
    <div className="h-[532px] rounded-2xl bg-neutral-100 p-6 dark:bg-backgroundMuted">
      <Heading tag="h3" size="3xl" className="ml-4">
        {heading}
      </Heading>
      <Table className="mt-4">
        <TableBody>
          {data.map((data, index) => (
            <TableRow key={index} className="border-b-transparent">
              <TableCell className="border-b-transparent font-medium">
                <div className="grid grid-cols-[32px_1fr] items-center gap-8">
                  <div className="relative h-8 w-8">
                    <Image
                      src={`https://trade.coingarage.io/assets/icons/${data.name.toLowerCase()}.png`}
                      // src={`https://coinicons-api.vercel.app/api/icon/${data.name.toLowerCase()}`}
                      alt={data.name}
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="32px"
                      // width={32}
                      // height={32}
                    />
                  </div>
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
