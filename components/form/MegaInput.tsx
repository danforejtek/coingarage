type MegaInputProps = {
  label: string
  subLabel: string
}

export default function MegaInput({ label, subLabel, ...props }: MegaInputProps) {
  return (
    <div className="dark:bg-backgroundMuted h-[130px] w-[512px] rounded-2xl bg-neutral-100 px-5 py-4">
      <div className="grid h-full w-full grid-rows-2 gap-4">
        <div className="grid grid-cols-2">
          <div className="font-heading text-lg font-semibold text-neutral-800 dark:text-neutral-200">{label}</div>
          <div className="flex items-start justify-end gap-6">
            <div className="text-sm">{subLabel}</div>
            <div className="text-sm font-bold text-primary">200.00 USD</div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_64px] gap-8">
          <div className="flex items-center">
            <input
              title="Enter Amount"
              name="amount"
              type="number"
              min="0.01"
              max="1000000000.00"
              step="0.01"
              className="placeholder-text-neutral-500 h-full w-full bg-transparent text-3xl text-neutral-900 outline-none dark:text-white"
              placeholder="0.00"
            />
          </div>
          <div className="flex items-center">
            <select
              title="Select Currency"
              name="currency"
              className="placeholder-text-neutral-500 h-full w-full bg-transparent font-heading text-lg font-semibold text-neutral-900 outline-none dark:text-white"
              placeholder="0"
            >
              <option value="BTC">BTC</option>
              <option value="LTC">LTC</option>
              <option value="ETH">ETH</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
