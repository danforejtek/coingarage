export function generateMockTraderData(numTraders = 6, startDate = "2024-05-01", numDays = 10) {
  const traders = {}

  const generateRandomGrowth = (startValue, minGrowthRate, maxGrowthRate, flatChance = 0.2) => {
    let pnlData = {}
    let currentValue = startValue

    for (let i = 0; i < numDays; i++) {
      let date = new Date(startDate)
      date.setDate(date.getDate() + i)
      let formattedDate = date.toISOString().split("T")[0]

      // Random chance to keep PnL flatter
      if (Math.random() < flatChance) {
        // Flatter period: small growth or no growth
        currentValue *= 1 + Math.random() * 0.005 // 0% to 0.5% growth
      } else {
        // Normal growth
        let growthFactor = 1 + (Math.random() * (maxGrowthRate - minGrowthRate) + minGrowthRate)
        currentValue *= growthFactor
      }

      pnlData[formattedDate] = parseFloat(currentValue.toFixed(6))
    }

    return pnlData
  }

  for (let i = 0; i < numTraders; i++) {
    const traderId = `${i + 100000}`
    const totalPnL = parseFloat((0 + Math.random() * 3000).toFixed(2)) // Simulate total PnL between 0 and 3500
    const startPnl = parseFloat((0.1 + Math.random() * 5).toFixed(2)) // Start with a base PnL between 0.1 and 5
    const pnl = generateRandomGrowth(startPnl, 0.02, 0.1, 0.3) // 30% chance of flat periods, growth 2%-10% otherwise
    const roi = parseFloat((Math.random() * 20).toFixed(2)) // ROI between 0% and 20%
    const activeBots = Math.floor(1 + Math.random() * 20) // Active bots between 1 and 20

    // Randomize trading strategies
    const long = Math.random() > 0.5
    const short = Math.random() > 0.5
    const dca = Math.random() > 0.3
    const grid = Math.random() > 0.2

    traders[traderId] = {
      name: traderId,
      pnl: pnl,
      roi: roi,
      total_pnl: totalPnL,
      active_bots: activeBots,
      long: long,
      short: short,
      dca: dca,
      grid: grid,
    }
  }

  return traders
}
