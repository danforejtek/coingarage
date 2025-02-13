"use client"
import Image from "next/image"
import { IoSearchSharp } from "react-icons/io5"
import { FaSort } from "react-icons/fa"
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti"
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
import { Value } from "@radix-ui/react-select"

type Props = { inputData: any }

type Crypto = {
  name: string
  price: number
  volume_change_24h: number
  volume_24h: number
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

// set columns width to fix percents, so the table doesnt jump when pages are changed
const columnWidths = ["24%", "14%", "14%", "24%", "24%"]

export default function CryptoMarketTable({ inputData }: Props) {
  const t = useTranslations("CryptoMarket")
  console.log(inputData)

  const [data, setData] = React.useState(convertData(inputData.data))

  const columns = React.useMemo<ColumnDef<Crypto>[]>(
    () => [
      {
        accessorKey: "name",
        id: "name",
        header: () => <span>{t("currency")}</span>,
        cell: (info) => {
          const symbol = (info.getValue() as string).split("#")[1]
          return (
            <span className="flex items-center gap-8">
              <Image
                // src={`https://coinicons-api.vercel.app/api/icon/${item.symbol.toLowerCase()}`}
                src={`/icons/coins/${symbol.toLowerCase()}.png`}
                alt={symbol}
                width={40}
                height={40}
              />
              {(info.getValue() as string).split("#")[0]}
            </span>
          )
        },
      },
      {
        accessorKey: "price",
        id: "price",
        header: () => <span>{t("price")}</span>,
        cell: (info) => formatCurrency(info.getValue() as number),
      },
      {
        accessorKey: "volume_change_24h",
        id: "volume_change_24h",
        header: () => <span>{t("24hChange")}</span>,
        cell: (info) => {
          const value = info.getValue() as number
          return <span className={value < 0 ? "text-red-500" : "text-green-500"}>{formatPercentage(value)}</span>
        },
      },
      {
        accessorKey: "volume_24h",
        id: "volume_24h",
        header: () => <span>{t("24hVolume")}</span>,
        cell: (info) => formatCurrency(info.getValue() as number),
      },

      {
        accessorKey: "market_cap",
        id: "market_cap",
        header: () => <span>{t("marketCap")}</span>,
        cell: (info) => formatCurrency(info.getValue() as number, 0),
      },
    ],
    []
  )

  return (
    <MyTable
      {...{
        data,
        columns,
      }}
    />
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
    enableSortingRemoval: false,
    //no need to pass pageCount or rowCount with client-side pagination as it is calculated automatically
    state: {
      pagination,
    },
    initialState: {
      sorting: [
        {
          id: "market_cap",
          desc: true,
        },
      ],
    },
    // autoResetPageIndex: false, // turn off page index reset when sorting or filtering
  })

  return (
    <div>
      <div className="relative overflow-auto p-2">
        <div className="h-2" />
        <table className="mt-6 w-full min-w-[800px] table-auto">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="h-14 border-b pb-3 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                {headerGroup.headers.map((header, index) => {
                  return (
                    <th
                      className={cn(
                        "h-12 p-3 text-left align-middle font-medium text-muted-foreground",
                        index === 0 ? "text-left" : "text-right"
                      )}
                      style={{ width: columnWidths[index] }}
                      key={header.id}
                      colSpan={header.colSpan}
                    >
                      <div
                        {...{
                          className: header.column.getCanSort() ? "cursor-pointer select-none" : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {{
                          asc: <span>▲ </span>,
                          desc: "▼ ",
                        }[header.column.getIsSorted() as string] ?? (
                          <div className="relative top-[-6px] mr-2 inline-flex flex-col text-[8px] leading-[9px]">
                            <span>▲</span>
                            <span>▼</span>
                          </div>
                        )}
                        {flexRender(header.column.columnDef.header, header.getContext())}
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
                <tr
                  key={row.id}
                  className="h-16 border-b transition-colors last:border-0 hover:bg-muted/50 data-[state=selected]:bg-muted"
                >
                  {row.getVisibleCells().map((cell, index) => {
                    return (
                      <td className={index === 0 ? "p-3 text-left" : "p-3 text-right"} key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="h-2" />
      <div className="flex justify-center gap-2 opacity-60">
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
        {Array.apply(null, Array(table.getPageCount())).map((_, index) => (
          <button
            key={index}
            className={cn("rounded border p-1", {
              "bg-gray-600": table.getState().pagination.pageIndex === index,
            })}
            onClick={() => table.setPageIndex(index)}
          >
            {index + 1}
          </button>
        ))}
        <button className="rounded border p-1" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          {">"}
        </button>
        <button className="rounded border p-1" onClick={() => table.lastPage()} disabled={!table.getCanNextPage()}>
          {">>"}
        </button>
      </div>
    </div>
  )
}

function Filter({ column, table }: { column: Column<any, any>; table: Table<any> }) {
  const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  return typeof firstValue === "string" ? (
    <div className="absolute left-2 top-1">
      <IoSearchSharp size={20} className="absolute left-2 top-[6px]" />
      <input
        className="h-8 w-64 rounded border pl-8 shadow"
        onChange={(e) => column.setFilterValue(e.target.value)}
        onClick={(e) => e.stopPropagation()}
        placeholder={`Search currency...`}
        type="text"
        value={(columnFilterValue ?? "") as string}
      />
    </div>
  ) : null
}

// https://tanstack.com/table/latest/docs/framework/react/examples/pagination
