"use client"

import Script from "next/script"
import * as gtag from "@/lib/gtag"

const GoogleAnalytics = ({ isFinance }: { isFinance: boolean }) => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${isFinance ? gtag.FINANCE_GA_TRACKING_ID : gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${isFinance ? gtag.FINANCE_GA_TRACKING_ID : gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics
