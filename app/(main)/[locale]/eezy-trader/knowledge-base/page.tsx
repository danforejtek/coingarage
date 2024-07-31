import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { unstable_setRequestLocale } from "next-intl/server"
import { useTranslations } from "next-intl"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Knowledge Base | EEZY TRADER",
}

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
        <Tabs defaultValue="intro" className="max-w-[1000px]">
          <TabsList>
            <TabsTrigger value="intro">{t("general.introduction.name")}</TabsTrigger>
            <TabsTrigger value="slang">{t("general.slang.name")}</TabsTrigger>
            <TabsTrigger value="activation">{t("general.activation")}</TabsTrigger>
            <TabsTrigger value="subscription">{t("general.subscription")}</TabsTrigger>
            <TabsTrigger value="features">{t("general.features")}</TabsTrigger>
          </TabsList>
          <TabsContent value="intro">
            <article className="max-w-[800px]">
              <h1 className="mb-4 text-xl font-bold">{t("general.introduction.overview.header")}</h1>
              <p className="mb-8">{t("general.introduction.overview.subText")}</p>
              <h2 className="mb-4 text-xl font-bold">{t("general.introduction.advantages.header")}</h2>
              <ul className="unordered-list mb-8">
                <li>{t("general.introduction.advantages.subText1")}</li>
                <li>{t("general.introduction.advantages.subText2")}</li>
                <li>{t("general.introduction.advantages.subText3")}</li>
                <li>{t("general.introduction.advantages.subText4")}</li>
                <li>{t("general.introduction.advantages.subText5")}</li>
              </ul>
              <h3 className="mb-4 text-xl font-bold">{t("general.introduction.conclusion.header")}</h3>
              <p>{t("general.introduction.conclusion.subText")}</p>
            </article>
          </TabsContent>
          <TabsContent value="slang">
            <article className="max-w-[800px]">
              <p className="mb-4">
                <span className="mr-2 font-bold">GRID:</span>
                {t("general.slang.GRID")}
              </p>
              <p className="mb-4">
                <span className="mr-2 font-bold">DCA:</span>
                {t("general.slang.DCA")}
              </p>
              <p className="mb-4">
                <span className="mr-2 font-bold">TP:</span>
                {t("general.slang.TP")}
              </p>
              <p className="mb-4">
                <span className="mr-2 font-bold">SL:</span>
                {t("general.slang.SL")}
              </p>
              <p className="mb-4">
                <span className="mr-2 font-bold">SHORT:</span>
                {t("general.slang.SHORT")}
              </p>
              <p className="mb-4">
                <span className="mr-2 font-bold">LONG:</span>
                {t("general.slang.LONG")}
              </p>
              <p className="mb-4">
                <span className="mr-2 font-bold">START BY AI:</span>
                {t("general.slang.START_BY_AI")}
              </p>
              <p className="mb-4">
                <span className="mr-2 font-bold">DCA Auto:</span>
                {t("general.slang.DCA_Auto")}
              </p>
              <p className="mb-4">
                <span className="mr-2 font-bold">GRID Auto:</span>
                {t("general.slang.GRID_Auto")}
              </p>
            </article>
          </TabsContent>
          <TabsContent value="activation">
            <iframe
              className="aspect-video w-full"
              src={`https://www.youtube.com/embed/${t("general.activationYoutubeId")}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </TabsContent>
          <TabsContent value="subscription">
            <iframe
              className="aspect-video w-full"
              src={`https://www.youtube.com/embed/${t("general.subscriptionYoutubeId")}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </TabsContent>
          <TabsContent value="features">
            <iframe
              className="aspect-video w-full"
              src={`https://www.youtube.com/embed/${t("general.featuresYoutubeId")}`}
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
