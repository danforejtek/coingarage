import { useLocale } from "next-intl"
import { locales, localesLabel } from "@/config"
import LocaleSwitchSelect from "@/components/layout/locale-switch-select"

export default function LocaleSwitcher({ isFinance = false }) {
  // const t = useTranslations("LocaleSwitcher")
  const locale = useLocale()

  return (
    <LocaleSwitchSelect
      defaultValue={locale}
      label={locale}
      locales={locales.filter((item) => (isFinance ? !["es"].includes(item) : true))}
    />
  )
}
