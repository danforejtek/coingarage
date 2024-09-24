import { GoogleTagManager as GoogleTagManagerLoader } from "@next/third-parties/google"
import { GTM_ID, FINANCE_GTM_ID } from "@/lib/gtag"

export default function GoogleTagManager({ isFinance }: { isFinance: boolean }) {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") {
    return null
  }

  return (
    <>
      <GoogleTagManagerLoader gtmId={(isFinance ? FINANCE_GTM_ID : GTM_ID) as string} />
    </>
  )
}
