import { GoogleAnalytics as GoogleAnalyticsLoader } from "@next/third-parties/google"
import { FINANCE_GA_TRACKING_ID, GA_TRACKING_ID } from "@/lib/gtag"

const GoogleAnalytics = ({ isFinance }: { isFinance: boolean }) => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") {
    return null
  }

  return (
    <>
      <GoogleAnalyticsLoader gaId={(isFinance ? FINANCE_GA_TRACKING_ID : GA_TRACKING_ID) as string} />
    </>
  )
}

export default GoogleAnalytics
