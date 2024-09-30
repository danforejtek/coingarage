"use client"

import { useState } from "react"
import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSearchParams } from "next/navigation"
import { useRouter, usePathname } from "@/navigation"

export function Pagination({
  pagination,
}: {
  pagination: {
    page: number
    pageCount: number
  }
}) {
  const { page, pageCount } = pagination

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { push } = useRouter()

  const updateSearchParams = (newPage) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", String(newPage))
    push(`${pathname}?${params.toString()}`)
    // const searchParams = new URLSearchParams(window.location.search)
    // searchParams.set("page", newPage)
    // const newUrl = `${window.location.pathname}?${searchParams.toString()}`
    // window.history.pushState({}, "", newUrl)
  }

  const handlePageChange = (newPage) => {
    updateSearchParams(newPage)
  }

  const renderPageNumbers = () => {
    const pages = []
    const maxPagesToShow = 4
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2)

    let startPage = Math.max(1, page - halfMaxPagesToShow)
    let endPage = Math.min(pageCount, page + halfMaxPagesToShow)

    if (page <= halfMaxPagesToShow) {
      endPage = Math.min(pageCount, maxPagesToShow)
    }

    if (page > pageCount - halfMaxPagesToShow) {
      startPage = Math.max(1, pageCount - maxPagesToShow + 1)
    }

    if (startPage > 1) {
      pages.push(
        <PaginationItem key={1}>
          <PaginationLink onClick={() => handlePageChange(1)}>1</PaginationLink>
        </PaginationItem>
      )
      if (startPage > 2) {
        pages.push(<PaginationEllipsis key="start-ellipsis" />)
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink className={cn(i === page ? "bg-primary" : undefined)} onClick={() => handlePageChange(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      )
    }

    if (endPage < pageCount) {
      if (endPage < pageCount - 1) {
        pages.push(<PaginationEllipsis key="end-ellipsis" />)
      }
      pages.push(
        <PaginationItem key={pageCount}>
          <PaginationLink onClick={() => handlePageChange(pageCount)}>{pageCount}</PaginationLink>
        </PaginationItem>
      )
    }

    return pages
  }

  return (
    <ShadcnPagination className="mt-6 gap-2">
      <PaginationPrevious onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        Previous
      </PaginationPrevious>
      <PaginationContent className="gap-2">{renderPageNumbers()}</PaginationContent>
      <PaginationNext onClick={() => handlePageChange(page + 1)} disabled={page === pageCount}>
        Next
      </PaginationNext>
    </ShadcnPagination>
  )
}
