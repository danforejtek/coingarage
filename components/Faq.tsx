import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTranslations } from "next-intl"

export default function Faq() {
  const t = useTranslations("Faq")

  const faqs = [
    {
      title: t("question1.question"),
      content: t("question1.answer"),
    },
    {
      title: t("question2.question"),
      content: t("question2.answer"),
    },
    {
      title: t("question3.question"),
      content: t("question3.answer"),
    },
    {
      title: t("question4.question"),
      content: t("question4.answer"),
    },
    {
      title: t("question5.question"),
      content: t("question5.answer"),
    },
  ]

  return (
    <Accordion type="multiple" className="w-full">
      {faqs.map(({ title, content }, index) => (
        <AccordionItem
          key={index}
          value={`item_${index}`}
          className="mb-8 rounded-3xl border-b-0 bg-neutral-100 px-8 dark:bg-backgroundMuted"
        >
          <AccordionTrigger className="text-left font-heading text-lg">
            <span className="mr-6">{title}</span>
          </AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
