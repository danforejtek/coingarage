import MegaInput from "@/components/form/mega-input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Icons } from "@/components/icons"

export default function AboutUs() {
  return (
    <main className="relative">
      <section className="container mx-auto mt-12 flex flex-col flex-wrap items-start justify-center lg:flex-row xl:mt-28 xl:justify-between">
        <div className="w-full">
          <h1 className="mb-6 flex flex-col gap-3 text-center font-heading text-5xl font-bold">Convert</h1>
        </div>
        <div className="xl:mt10 mt-16 flex w-full flex-col items-center justify-center gap-4">
          <MegaInput label={"Spend"} subLabel={"Available"} />
          <div className="my-5">
            <Image src="/icons/exchange-arrows.png" alt="" width={42} height={42} />
          </div>
          <MegaInput label={"Receive"} subLabel={"Balance"} />
          <Button className="mt-4 px-16 py-6 text-lg">Convert</Button>
          <Button variant="ghost">
            <Icons.history className="mr-2 h-6 w-6" />
            History
          </Button>
        </div>
      </section>
    </main>
  )
}
