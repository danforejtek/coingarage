import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"
import { Button } from "@/components/ui/button"

export default function AboutUs({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("AboutUs")
  return (
    <main className="relative">
      {/* <div className="h-[84px]"></div> */}
      <section className="container mx-auto flex flex-col flex-wrap items-center justify-center lg:flex-row xl:mt-28 xl:justify-between">
        <div className="w-full max-w-[680px] p-4">
          <p className="mb-2 font-heading text-lg text-primary">Radio</p>
          <h1 className="mb-10 font-heading text-4xl font-semibold">{"Coingarage FM"}</h1>
          <p className="text-text-neutral-600 mb-4 text-justify text-lg dark:text-neutral-300 lg:text-left">
            {
              "Coingarage, the unique platform for cryptocurrency enthusiasts, is now expanding its services with its own radio station! Our new radio station will be a source of the latest information and analytical programs on cryptocurrencies and blockchain. Users can expect regular updates and exclusive interviews."
            }
          </p>
          <div className="flex flex-row-reverse">
            <Button asChild>
              <a href="https://play.radioking.com/radio/coingarage-fm/tracks" target="_blank" rel="noopener">
                Connect to the Radio
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-16 flex max-w-[500px] flex-col items-center justify-end xl:mt-0">
          <p className="mb-6 font-heading text-2xl font-bold">Send us a message!</p>
          <iframe
            id="AudioDedication"
            src="https://widget.radioking.io/audio-shoutouts/?id=coingarage-fm"
            allow="microphone"
            width="265"
            height="265"
            className="rounded-lg"
            frameBorder="0"
          ></iframe>
        </div>
      </section>
    </main>
  )
}
