"use client"

import Script from "next/script"

const UmamiAnalytics = ({ isProd }: { isProd: boolean }) => {
  if (!isProd) return null
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://umami-jj.vercel.app/script.js`}
        data-website-id="baf9a615-3360-4af9-9047-fa490001aead"
      />
    </>
  )
}

export default UmamiAnalytics
