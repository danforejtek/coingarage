import RegistrationIcon from "@/public/images/finance/icons/registration.svg"
import PersonalDataIcon from "@/public/images/finance/icons/personalData.svg"
import KycIcon from "@/public/images/finance/icons/kyc.svg"
import PaymentIcon from "@/public/images/finance/icons/payment.svg"
import ContractIcon from "@/public/images/finance/icons/contract.svg"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { ChevronDown } from "lucide-react"
import { ReactElement } from "react"
import { Button } from "../ui/button"

const steps = [
  {
    id: 1,
    caption: "steps.1",
    icon: <RegistrationIcon width="64px" height="64px" className="dark:fill-white" />,
  },
  {
    id: 2,
    caption: "steps.2",
    icon: <PersonalDataIcon width="64px" height="64px" className="dark:fill-white" />,
  },
  {
    id: 3,
    caption: "steps.3",
    icon: <KycIcon width="54px" height="64px" className="dark:fill-white" />,
  },
  {
    id: 4,
    caption: "steps.4",
    icon: <PaymentIcon width="64px" height="64px" className="dark:fill-white" />,
  },
  {
    id: 5,
    caption: "steps.5",
    icon: <ContractIcon width="50px" height="64px" className="dark:fill-white" />,
  },
]

const IconFigure = ({
  status,
  caption,
  children,
  icon,
  href,
}: {
  status: string
  caption: string
  children: React.ReactNode
  icon?: React.ReactNode | string
  href?: string
}) => {
  const statusImage =
    status === "done"
      ? "/images/finance/icons/done.svg"
      : status === "inDevelopment"
        ? "/images/finance/icons/inDevelopment.svg"
        : "/images/finance/icons/planned.svg"

  return (
    <figure className="h-[192px] w-[256px] rounded-lg border bg-background px-2 pb-6 pt-2 shadow transition-all dark:border-none dark:bg-[#282930] xl:w-[186px]">
      <div className="flex flex-row-reverse">{icon || <Image src={statusImage} width={18} height={18} alt="" />}</div>
      <div className="flex flex-row items-center justify-center px-6 py-2">{children}</div>
      <figcaption className="text-wrap text-center font-heading">{caption}</figcaption>
    </figure>
  )
}

const FiveSteps = (): ReactElement => {
  const t = useTranslations("eezyTrader.activation")

  return (
    <>
      <p className="mb-6 mt-20 text-center font-heading text-4xl font-bold">{t("header")}</p>
      <div className="relative mt-12 flex w-full grid-cols-5 grid-rows-1 flex-col flex-wrap gap-5 lg:grid lg:flex-row lg:pl-8">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[calc(100%+24px)] w-6 -translate-x-1/2 -translate-y-1/2 transform rounded-xl bg-primary/25 lg:h-6 lg:w-[calc(100%+24px)] lg:-translate-x-1/2 lg:-translate-y-1/2"></div>
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center gap-4 lg:flex-row">
            <IconFigure
              status="done"
              caption={t(step.caption)}
              icon={<span className="font-bold text-primary">{step.id}</span>}
            >
              {step.icon}
            </IconFigure>
            {index < steps.length - 1 && <ChevronDown className="h-6 w-6 text-primary/80 lg:-rotate-90" />}
          </div>
        ))}
      </div>
      <div className="mt-12">
        <Button variant="default">
          <a href="https://coingarage.io" target="_blank" rel="noreferrer noopener">
            {t("registerBtn")}
          </a>
        </Button>
      </div>
    </>
  )
}

export default FiveSteps
