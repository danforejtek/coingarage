"use client"
import Image from "next/image"
import {
  Table as Taable,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn, formatCurrency, formatPercentage } from "@/lib/utils"
import { useTranslations } from "next-intl"
import {
  Column,
  ColumnDef,
  PaginationState,
  Table,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import React from "react"
import { symbol } from "zod"

type Props = { inputData: any }

type Crypto = {
  name: string
  price: number
  volume_24h: number
  volume_change_24h: number
  market_cap: number
}

const convertData = (data: any): Crypto[] => {
  return data.map((item: any) => {
    return {
      name: item.name + "#" + item.symbol,
      price: item.quote.USD.price,
      volume_24h: item.quote.USD.volume_24h,
      volume_change_24h: item.quote.USD.percent_change_24h,
      market_cap: item.quote.USD.market_cap,
    }
  })
}

export default function CryptoMarketTable({ inputData }: Props) {
  const t = useTranslations("CryptoMarket")
  console.log(inputData)

  const [data, setData] = React.useState(convertData(inputData.data))

  const columns = React.useMemo<ColumnDef<Crypto>[]>(
    () => [
      {
        accessorKey: "name",
        id: "name",
        header: () => <span>Currency</span>,
        cell: (info) => {
          const symbol = (info.getValue() as string).split("#")[1];
          return (
            <span>
              {(info.getValue() as string).split("#")[0]}
              <Image
                // src={`https://coinicons-api.vercel.app/api/icon/${item.symbol.toLowerCase()}`}
                src={`/icons/coins/${symbol.toLowerCase()}.png`}
                alt={symbol}
                width={40}
                height={40}
              />
            </span>
          )
        },
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "price",
        id: "price",
        header: () => <span>Price</span>,
        cell: (info) => formatCurrency(info.getValue()),
        footer: (props) => formatCurrency(props.column.getAggregatedValue()),
      },
      {
        accessorKey: "volume_24h",
        id: "volume_24h",
        header: () => <span>24h Volume</span>,
        cell: (info) => formatCurrency(info.getValue()),
        footer: (props) => formatCurrency(props.column.getAggregatedValue()),
      },
      {
        accessorKey: "volume_change_24h",
        id: "volume_change_24h",
        header: () => <span>24h Change</span>,
        cell: (info) => formatPercentage(info.getValue()),
        footer: (props) => formatPercentage(props.column.getAggregatedValue()),
      },
      {
        accessorKey: "market_cap",
        id: "market_cap",
        header: () => <span>Market Cap</span>,
        cell: (info) => formatCurrency(info.getValue(), 0),
        footer: (props) => formatCurrency(props.column.getAggregatedValue(), 0),
      },
    ],
    []
  )

  return (
    <>
      <MyTable
        {...{
          data,
          columns,
        }}
      />

      <Taable>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[160px]">{t("currency")}</TableHead>
            <TableHead className="text-right">{t("price")}</TableHead>
            <TableHead className="text-right">{t("24hChange")}</TableHead>
            <TableHead className="text-right">{t("24hVolume")}</TableHead>
            <TableHead className="text-right">{t("marketCap")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inputData?.data?.map((item: any, index: number) => {
            // console.log(index === 1 ? item : null)
            const changeClass = item?.quote?.USD?.percent_change_24h < 0 ? "text-red-500" : "text-green-500"
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <div className="flex flex-row items-center gap-8">
                    <Image
                      // src={`https://coinicons-api.vercel.app/api/icon/${item.symbol.toLowerCase()}`}
                      src={`/icons/coins/${item.symbol.toLowerCase()}.png`}
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
                <TableCell className={cn("text-right")}>{formatCurrency(item?.quote?.USD?.volume_24h)}</TableCell>
                <TableCell className={cn("text-right")}>{formatCurrency(item?.quote?.USD?.market_cap, 0)}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Taable>
    </>
  )
}

function MyTable({ data, columns }: { data: Crypto[]; columns: ColumnDef<Crypto>[] }) {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    //no need to pass pageCount or rowCount with client-side pagination as it is calculated automatically
    state: {
      pagination,
    },
    // autoResetPageIndex: false, // turn off page index reset when sorting or filtering
  })

  return (
    <div className="p-2">
      <div className="h-2" />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    <div
                      {...{
                        className: header.column.getCanSort() ? "cursor-pointer select-none" : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                      {header.column.getCanFilter() ? (
                        <div>
                          <Filter column={header.column} table={table} />
                        </div>
                      ) : null}
                    </div>
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button className="rounded border p-1" onClick={() => table.firstPage()} disabled={!table.getCanPreviousPage()}>
          {"<<"}
        </button>
        <button
          className="rounded border p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button className="rounded border p-1" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          {">"}
        </button>
        <button className="rounded border p-1" onClick={() => table.lastPage()} disabled={!table.getCanNextPage()}>
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount().toLocaleString()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            min="1"
            max={table.getPageCount()}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="w-16 rounded border p-1"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>
        Showing {table.getRowModel().rows.length.toLocaleString()} of {table.getRowCount().toLocaleString()} Rows
      </div>
      <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre>
    </div>
  )
}

function Filter({ column, table }: { column: Column<any, any>; table: Table<any> }) {
  const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  return typeof firstValue === "number" ? (
    <div className="flex space-x-2" onClick={(e) => e.stopPropagation()}>
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ""}
        onChange={(e) => column.setFilterValue((old: [number, number]) => [e.target.value, old?.[1]])}
        placeholder={`Min`}
        className="w-24 rounded border shadow"
      />
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ""}
        onChange={(e) => column.setFilterValue((old: [number, number]) => [old?.[0], e.target.value])}
        placeholder={`Max`}
        className="w-24 rounded border shadow"
      />
    </div>
  ) : (
    <input
      className="w-36 rounded border shadow"
      onChange={(e) => column.setFilterValue(e.target.value)}
      onClick={(e) => e.stopPropagation()}
      placeholder={`Search...`}
      type="text"
      value={(columnFilterValue ?? "") as string}
    />
  )
}
