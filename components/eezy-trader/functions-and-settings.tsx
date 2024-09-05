"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Card } from "../ui/card"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"
import { useMediaQuery } from "@mantine/hooks"
import FceAndSettingsMobile from "./fce-and-settings-mobile"
import FceAndSettingsDesktop from "./fce-amd-settings-desktop"

const FunctionsAndSettings = () => {
  const { resolvedTheme } = useTheme()
  const [theme, setTheme] = useState("")
  const isMobile = useMediaQuery("(max-width: 738px)")

  useEffect(() => {
    setTheme(resolvedTheme !== "dark" ? "light" : "dark")
  }, [resolvedTheme])
  const t = useTranslations("eezyTrader.functions")

  return (
    <div className="mt-28 lg:flex lg:justify-between">
      <div className="mx-auto flex max-w-[508px] flex-col items-center justify-center lg:mx-0 lg:ml-8 lg:mt-8 lg:block">
        <h3 className="mb-5 max-w-[396px] text-center font-heading text-4xl font-bold lg:text-start">{t("header")}</h3>
        <p className="mb-10 text-center font-heading lg:text-start">{t("text")}</p>
        <div className="justify-left flex w-full flex-row">
          <Button className="mx-auto min-w-64 lg:ml-0">{t("startBtn")}</Button>
        </div>
      </div>

      <div className="mt-6 flex flex-row flex-wrap justify-center gap-4 lg:grid lg:grid-cols-5 lg:grid-rows-1 lg:gap-5">
        {isMobile ? <FceAndSettingsMobile /> : <FceAndSettingsDesktop />}
      </div>
    </div>
  )
}

export default FunctionsAndSettings
