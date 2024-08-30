"use server"

export async function getTradersData({ interval }: { interval: "D" | "W" | "M" }): Promise<Object | null> {
  try {
    const response = await fetch(`${process.env.COINGARAGE_API_URL}/grid/charts?interval=${interval}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}
