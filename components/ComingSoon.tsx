import Image from "next/image"

export default function ComingSoon() {
  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col items-center justify-center">
      <Image src="/logo/coingarage_full_gradient.svg" alt="" width={200} height={111} />
      <div className="font-heading text-4xl font-bold text-black dark:text-neutral-200">Great things coming soon.</div>
      <div className="mt-4 font-heading text-xl font-medium text-primary">
        We are building the simply & safely future.
      </div>
    </div>
  )
}
