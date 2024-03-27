import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { unstable_setRequestLocale } from "next-intl/server"
import { useTranslations } from "next-intl"

export default function Page({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("knowledgeBase")
  const tEzNav = useTranslations("eezy-trader.nav")

  return (
    <div>
      <Breadcrumb className="mt-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/eezy-trader/knowledge-base">{tEzNav("knowledgeBase")}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>{t("general.name")}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="py-12">
        <Tabs defaultValue="intro">
          <TabsList>
            <TabsTrigger value="intro">{t("dcaBot.dcaStrategy.name")}</TabsTrigger>
            <TabsTrigger value="setup">{t("dcaBot.setupDcaBot.name")}</TabsTrigger>
            <TabsTrigger value="customize">{t("dcaBot.setupDcaStrategy.name")}</TabsTrigger>
          </TabsList>
          <TabsContent value="intro">
            <article className="max-w-[800px]">
              <h1 className="mb-4 text-sm font-bold opacity-0">{t("dcaBot.dcaStrategy.name")}</h1>
              <p className="mb-4">{t("dcaBot.dcaStrategy.strategy.subText1")}</p>
              <p className="mb-8">{t("dcaBot.dcaStrategy.strategy.subText2")}</p>
              <h2 className="mb-4 text-xl font-bold">{t("dcaBot.dcaStrategy.profit.header")}</h2>
              <p className="mb-8">{t("dcaBot.dcaStrategy.profit.subText")}</p>
              <h2 className="mb-4 text-xl font-bold">{t("dcaBot.dcaStrategy.risk.header")}</h2>
              <p className="mb-8">{t("dcaBot.dcaStrategy.risk.subText")}</p>
              <h2 className="mb-4 text-xl font-bold">{t("dcaBot.dcaStrategy.conclusion.header")}</h2>
              <p className="mb-4">{t("dcaBot.dcaStrategy.conclusion.subText")}</p>
            </article>
          </TabsContent>
          <TabsContent value="setup">
            <iframe
              className="aspect-video w-full"
              src={`https://www.youtube.com/embed/${t("dcaBot.setupGridBotYoutubeId")}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </TabsContent>
          <TabsContent value="customize">
            <iframe
              className="aspect-video w-full"
              src={`https://www.youtube.com/embed/${t("dcaBot.customizeGridBotYoutubeId")}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
