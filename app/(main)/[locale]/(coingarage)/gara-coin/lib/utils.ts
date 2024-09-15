const COINGARAGE_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_COINGARAGE_ADDRESS as `0x${string}`
const USDC_POLYGON_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_USDC_POLYGON_CONTRACT_ADDRESS as `0x${string}`
const USDC_ETHEREUM_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_USDC_ETHEREUM_CONTRACT_ADDRESS as `0x${string}`
const USDC_BSC_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_USDC_BSC_CONTRACT_ADDRESS as `0x${string}`

export const getUsdcOnChain = (chain: any) => {
  switch (chain) {
    case "Polygon":
      return USDC_POLYGON_CONTRACT_ADDRESS
    case "Ethereum":
      return USDC_ETHEREUM_CONTRACT_ADDRESS
    case "BNB Smart Chain":
      return USDC_BSC_CONTRACT_ADDRESS
    default:
      return USDC_POLYGON_CONTRACT_ADDRESS
  }
}
