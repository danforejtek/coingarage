"use server"

export type FinanceDataResponse = {
  currencies: {
    lang: "cs" | "en"
    value: "CZK" | "USD" | "EUR" | "USDT"
    decimals: number
    total_amount: number
    minimum_input: number
    maximum_input: number
  }[]
  rounds: {
    id: string
    value: string
    price_per_unit: {
      [key in "CZK" | "USD" | "EUR" | "BTC" | "ETH" | "LTC" | "USDT"]: string
    }
    active: "true" | "false"
  }[]
  round_percentage: [number, number, number]
}

export async function fetchFinanceData(): Promise<
  { status: "ok"; data: FinanceDataResponse } | { status: "error"; error: any }
> {
  try {
    const response = await fetch("https://app.coingarage-finance.com/services/api/v1/homepage/")
    const data = await response.json()
    return { status: "ok", data }
  } catch (error) {
    console.error(error)
    return { status: "error", error }
  }
}
