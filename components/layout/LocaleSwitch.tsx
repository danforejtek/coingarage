import { useLocale } from "next-intl"
import { locales, localesLabel } from "@/config"
import LocaleSwitchSelect from "@/components/layout/LocaleSwitchSelect"

export default function LocaleSwitcher() {
  // const t = useTranslations("LocaleSwitcher")
  const locale = useLocale()

  return (
    <LocaleSwitchSelect defaultValue={locale} label={locale}>
      {locales.map((item) => (
        <option key={item} value={item}>
          {/* @ts-ignore */}
          {localesLabel[item]}
        </option>
      ))}
    </LocaleSwitchSelect>
  )
}
