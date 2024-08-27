"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSearchParams, usePathname, useRouter } from "next/navigation"

type PaginationProps = {
  className?: string
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

export const Pagination = ({ pagination, className }: PaginationProps) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  if (!pagination) return null
  if (pagination?.pageCount === 1) return null
  if (pagination?.pageCount === pagination?.page) return null

  const currentPage = Number(searchParams.get("page")) || 1

  const handleLoadMore = () => {
    const params = new URLSearchParams(searchParams)
    params.set("page", String(currentPage + 1))
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className={cn("mt-12 flex w-full items-center justify-center", className)}>
      <Button variant="link" onClick={handleLoadMore}>
        Load more
      </Button>
    </div>
  )
}
