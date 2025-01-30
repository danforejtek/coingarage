const calculateMaxPnL = (data: any[]): number => {
  let maxPnL = 0;

  data.forEach((trader) => {
    if (trader.total_pnl > maxPnL) {
      maxPnL = trader.total_pnl;
    }
  });

  return maxPnL;
};