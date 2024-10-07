export async function GET() {
  // get ETH_USDT price
  const response = await fetch(`https://api.coingarage.io/api/v1/summary`, {
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 10 },
  })
  const data = await response.json()

  const ethPrice = data?.find((item: any) => item.trading_pairs === "ETH_USDT")?.last_price
  return Response.json({ eth_usd: ethPrice })
}
