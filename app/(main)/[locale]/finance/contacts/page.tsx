// import { getTranslations, unstable_setRequestLocale } from "next-intl/server"
import { ContactUsForm } from "@/components/form/contact-us"
import { Fingerprint, Mail, MapPin, Phone } from "lucide-react"

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  // unstable_setRequestLocale(locale)
  // const t = await getTranslations("finance")
  return (
    <main>
      <section className="container mx-auto mt-6 flex flex-col flex-wrap items-start justify-center gap-12 md:flex-row xl:mt-14 xl:justify-center">
        <div className="w-full md:w-[400px]">
          <ContactUsForm />
        </div>
        <div className="mt-0 flex flex-row flex-wrap justify-center gap-x-40 gap-y-12 py-4 md:mt-0 md:justify-between">
          <address className="not-italic">
            <ul className="flex flex-col gap-6 font-sans text-sm text-foreground">
              <li className="grid grid-cols-[24px_1fr] gap-4">
                <MapPin className="mt-1 h-5 w-5" />
                <span>
                  Revoluční&nbsp;1082/8
                  <br />
                  Nové&nbsp;Město&nbsp;(Praha&nbsp;1)
                  <br />
                  110&nbsp;00&nbsp;Prague,&nbsp;Czech&nbsp;Republic
                </span>
              </li>
              <li className="grid grid-cols-[24px_1fr] gap-4">
                <Phone className="h-5 w-5" />
                <span>+420&nbsp;778&nbsp;116&nbsp;516</span>
              </li>
              <li className="grid grid-cols-[24px_1fr] gap-4">
                <Mail className="h-5 w-5" />
                <a href="mailto:support@coingarage.io" target="_blank" className="hover:text-primary">
                  support@coingarage.io
                </a>
              </li>
              <li className="grid grid-cols-[24px_1fr] items-center gap-4">
                <Fingerprint className="h-5 w-5" />
                IČ:&nbsp;11667974
              </li>
            </ul>
          </address>
        </div>
      </section>
    </main>
  )
}
