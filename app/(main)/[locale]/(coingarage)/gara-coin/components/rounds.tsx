export function Rounds() {
  return (
    <div className="mx-2">
      <div className="my-2 flex w-full flex-row justify-center gap-2">
        <div className="flex flex-1 flex-col items-center gap-1 rounded-xl bg-primary px-6 py-2">
          <p className="text-xs leading-none text-white">
            1<sup>st</sup> round
          </p>
          <p className="text-gary-yellow text-base font-bold leading-none text-background dark:text-foreground">
            $0.10
          </p>
        </div>
        <div className="bg-gary-input-blue flex flex-1 flex-col items-center gap-1 rounded-xl border border-neutral-200 bg-neutral-100 px-6 py-2 dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-xs leading-none ">
            2<sup>nd</sup> round
          </p>
          <p className="text-gary-pink text-base font-bold leading-none">$0.12</p>
        </div>
      </div>
      <div className="my-2 flex w-full flex-row justify-center gap-2">
        <div className="bg-gary-input-blue flex flex-1 flex-col items-center gap-1 rounded-xl border border-neutral-200 bg-neutral-100 px-6 py-2 dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-xs leading-none ">
            3<sup>rd</sup> round
          </p>
          <p className="text-gary-pink text-base font-bold leading-none">$0.15</p>
        </div>
        <div className="bg-gary-input-blue flex flex-1 flex-col items-center gap-1 rounded-xl border border-neutral-200 bg-neutral-100 px-6 py-2 dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-xs leading-none ">Listing</p>
          <p className="text-gary-pink text-base font-bold leading-none">$0.20</p>
        </div>
      </div>
    </div>
  )
}
