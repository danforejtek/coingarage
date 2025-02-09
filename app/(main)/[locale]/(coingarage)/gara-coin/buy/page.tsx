import { BuyGara } from "@/app/(main)/[locale]/(coingarage)/gara-coin/components/buy-gara-widget/widget"

export default function Page() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center space-y-6 pb-24">
        <div className="mt-12">
          <BuyGara className="rounded-none border-none shadow-none md:rounded-2xl md:border md:shadow-md" />
        </div>
      </div>
    </>
  )
}
