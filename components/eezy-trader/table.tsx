import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"
import { cn, formatPercentage } from "@/lib/utils"

const up = "text-green-500"
const down = "text-red-500"

export function TableComp({
  heading,
  data = [],
  isLoading = true,
}: {
  heading: string
  data: Array<{ name: string; value: number }>
  isLoading: boolean
}) {
  return (
    <div>
      <div className="mb-6 w-full text-center text-xl font-bold">{heading}</div>
      <div className="rounded-xl border px-4 pb-2 pt-5">
        {isLoading ? (
          <Skeleton className="min-h-[394px] w-full rounded-xl" />
        ) : (
          <Table>
            <TableHeader className="bg-tertiary">
              <TableRow className="border-none">
                <TableHead className="h-9 w-[100px] rounded-l-lg text-white">Name</TableHead>
                <TableHead className="h-9 rounded-r-lg text-right text-white">ROI / Month</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index} className="border-none">
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-right">
                    <span className={cn("text-sm text-neutral-400", Number(item.value) > 0 ? up : down)}>
                      {formatPercentage(Number(item.value))}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  )
}
