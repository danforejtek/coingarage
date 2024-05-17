export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ID
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
export const FINANCE_GTM_ID = process.env.NEXT_PUBLIC_FINANCE_GTM_ID
export const FINANCE_GA_TRACKING_ID = process.env.NEXT_PUBLIC_FINANCE_GOOGLE_ID

type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[]
  gtag: (...args: any[]) => void
}

declare const window: WindowWithDataLayer

export const pageview = (url: string) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: "pageview",
      page: url,
    })
  } else {
    console.log({
      event: "pageview",
      page: url,
    })
  }
}

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label: string
  value: number
}) => {
  if (typeof window.dataLayer !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  } else {
    console.log("event", action, category, label, value)
  }
}
