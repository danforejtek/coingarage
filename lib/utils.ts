import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatAmount = (amount: number = 0, fraction = 2) => {
  if (amount && typeof amount === "number") {
    if (amount > 1) {
      let value = +amount.toFixed(fraction)
      return value.toLocaleString("us", {
        minimumFractionDigits: fraction,
        maximumFractionDigits: fraction,
      })
    } else {
      let value = +amount.toFixed(4)
      return value.toLocaleString("us", {
        minimumFractionDigits: 4,
        maximumFractionDigits: 4,
      })
    }
  }
  return "0.00"
}

export const formatCurrency = (amount: number = 0, fraction = 2) => {
  if (amount && typeof amount === "number") {
    if (amount > 1) {
      let value = +amount.toFixed(fraction)
      return new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: fraction,
        maximumFractionDigits: fraction,
      }).format(value)
    } else {
      let value = +amount.toFixed(4)
      return new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 4,
        maximumFractionDigits: 4,
      }).format(value)
    }
  }
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(0)
}

export const formatPercentage = (amount: number = 0) => {
  if (amount && typeof amount === "number") {
    let value = Number(amount) / 100
    return new Intl.NumberFormat("en", {
      style: "percent",
      unit: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  }
  return "0.00%"
}
