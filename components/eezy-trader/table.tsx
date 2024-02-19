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

const data = [
  {
    name: "INV001",
    value: 0.8,
  },
  {
    name: "INV001",
    value: 0.8,
  },
  {
    name: "INV001",
    value: 0.8,
  },
  {
    name: "INV001",
    value: 0.8,
  },
  {
    name: "INV001",
    value: 0.8,
  },
  {
    name: "INV001",
    value: 0.8,
  },
  {
    name: "INV001",
    value: 0.8,
  },
]

export function TableComp() {
  return (
    <div>
      <div className="mb-6 w-full text-center text-xl font-bold">Top performers</div>
      <div className="dark:bg-violet/10 rounded-xl bg-violet-50 px-4 py-5">
        <Table>
          <TableHeader className="bg-violet/50">
            <TableRow className="">
              <TableHead className="h-9 w-[100px] rounded-l-lg text-white">Name</TableHead>
              <TableHead className="h-9 rounded-r-lg text-right text-white">%</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{invoice.name}</TableCell>
                <TableCell className="text-right">{invoice.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
