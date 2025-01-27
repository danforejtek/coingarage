
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function SavingsWidget() {
  const t = useTranslations("eezy-trader.BtcSaving")

  return (
    <div className="p-6 bg-background rounded-xlg">
      <h3 className="h3-caption-primary !font-bold mt-7 mb-2">{t("whatIsDCA.regularSaving.header")}</h3>
      <p className="mt-4 mb-8 common-text">{t("whatIsDCA.regularSaving.text")}</p>

      {/* BTC = USDC */}

      <div id="parent numbers" className="justify-between sm:flex sm:bg-backgroundMuted rounded-xlg">
        <div id="btc number" className="flex justify-between p-3 mb-3 bg-backgroundMuted rounded-xlg sm:mb-0 sm:flex sm:flex-col">
          <span><Image className="inline relative top-[-1px] mr-2" src="/icons/coins/btc.png" alt="BTC coin" width={18} height={18} />
            <span className="font-bold">0,1319 BTC</span>
          </span>
          <span className="ml-1 label">{t("whatIsDCA.regularSaving.bought")}</span></div>
        <span id="equal =" className="hidden mt-3 sm:block">=</span>
        <div id="usdc number" className="p-3 bg-backgroundMuted rounded-xlg">
          <Image className="inline relative top-[-1px] mr-2" src="/icons/coins/usd-trans.png" alt="BTC coin" width={18} height={18} />8,705.53 USDC
        </div>
      </div>

      {/* money stats */}
      <br />


      {/* top numbers */}
      <div className="p-3 bg-backgroundMuted rounded-xlg">
        <div id="parent numbers" className="flex justify-between">
          <div id="btc number" className="flex flex-col justify-between bg-backgroundMuted rounded-xlg">
            <span className="text-lg font-bold text-primary">70 182 CZK</span>
            <span className="label">{t("whatIsDCA.regularSaving.investedAmount")}</span>
          </div>
          <div id="btc number" className="flex flex-col justify-between bg-backgroundMuted rounded-xlg">
            <span className="text-lg font-bold text-right text-green-foreground">135 227 CZK</span>
            <span className="text-right label">{t("whatIsDCA.regularSaving.receivedAmount")}</span>
          </div>
        </div>


        {/* chart */}
        <div className="flex gap-2 my-4">
          <div className="w-[27%] bg-primary h-[6px] rounded-lg">
          </div>
          <div className="w-[73%] bg-green h-[6px] rounded-lg">
          </div>
        </div>

        {/* bottom numbers */}
        <div id="parent numbers" className="flex justify-between">
          <div id="btc number" className="flex flex-col justify-between bg-backgroundMuted rounded-xlg">
            <span className="text-lg font-bold">70 182 CZK</span>
            <span className="label">{t("whatIsDCA.regularSaving.totalAmount")}</span>
          </div>
          <div id="btc number" className="flex flex-col justify-between bg-backgroundMuted rounded-xlg">
            <span className="text-lg font-bold text-right">135 227 CZK</span>
            <span className="text-right label">{t("whatIsDCA.regularSaving.percentageCalculation")}</span>
          </div>
        </div>

      </div>
    </div>

  )
}
