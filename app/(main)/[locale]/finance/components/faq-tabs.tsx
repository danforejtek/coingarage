import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const faqs = [
  [
    {
      question: "faq.generalQuestions.question1.text",
      answer: "faq.generalQuestions.question1.answer",
    },
    {
      question: "faq.generalQuestions.question2.text",
      answer: "faq.generalQuestions.question2.answer",
    },
    {
      question: "faq.generalQuestions.question3.text",
      answer: "faq.generalQuestions.question3.answer",
    },
    {
      question: "faq.generalQuestions.question4.text",
      answer: "faq.generalQuestions.question4.answer",
    },
    {
      question: "faq.generalQuestions.question5.text",
      answer: "faq.generalQuestions.question5.answer",
    },
    {
      question: "faq.generalQuestions.question6.text",
      answer: "faq.generalQuestions.question6.answer",
    },
  ],
  [
    {
      question: "faq.silentPartnershipQuestions.question1.text",
      answer: "faq.silentPartnershipQuestions.question1.answer",
    },
    {
      question: "faq.silentPartnershipQuestions.question2.text",
      answer: "faq.silentPartnershipQuestions.question2.answer",
    },
    {
      question: "faq.silentPartnershipQuestions.question3.text",
      answer: "faq.silentPartnershipQuestions.question3.listAnswer",
    },
    {
      question: "faq.silentPartnershipQuestions.question4.text",
      answer: "faq.silentPartnershipQuestions.question4.answer",
    },
    {
      question: "faq.silentPartnershipQuestions.question5.text",
      answer: "faq.silentPartnershipQuestions.question5.answer",
    },
    {
      question: "faq.silentPartnershipQuestions.question6.text",
      answer: "faq.silentPartnershipQuestions.question6.answer",
    },
    {
      question: "faq.silentPartnershipQuestions.question7.text",
      answer: "faq.silentPartnershipQuestions.question7.answer",
    },
    {
      question: "faq.silentPartnershipQuestions.question8.text",
      answer: "faq.silentPartnershipQuestions.question8.answer",
    },
  ],
  [
    {
      question: "faq.visionQuestions.question1.text",
      answer: "faq.visionQuestions.question1.answer",
    },
    {
      question: "faq.visionQuestions.question2.text",
      answer: "faq.visionQuestions.question2.answer",
    },
    {
      question: "faq.visionQuestions.question3.text",
      answer: "faq.visionQuestions.question3.answer",
    },
    {
      question: "faq.visionQuestions.question4.text",
      answer: "faq.visionQuestions.question4.answer",
    },
    {
      question: "faq.visionQuestions.question5.text",
      answer: "faq.visionQuestions.question5.answer",
    },
    {
      question: "faq.visionQuestions.question6.text",
      answer: "faq.visionQuestions.question6.answer",
    },
  ],
  [
    {
      question: "faq.otherQuestions.question1.text",
      answer: "faq.otherQuestions.question1.answer",
    },
    {
      question: "faq.otherQuestions.question2.text",
      answer: "faq.otherQuestions.question2.answer",
    },
    {
      question: "faq.otherQuestions.question3.text",
      answer: "faq.otherQuestions.question3.answer",
    },
    {
      question: "faq.otherQuestions.question4.text",
      answer: "faq.otherQuestions.question4.answer",
    },
  ],
]

export const FaqTabs = ({ locale }: { locale: string }) => {
  unstable_setRequestLocale(locale)
  const t = useTranslations("finance")

  return (
    <Tabs defaultValue="section1" className="w-full">
      <TabsList className="flex w-full gap-4 lg:flex-row-reverse">
        <TabsTrigger value="section4">{t("faq.section4")}</TabsTrigger>
        <TabsTrigger value="section3">{t("faq.section3")}</TabsTrigger>
        <TabsTrigger value="section2">{t("faq.section2")}</TabsTrigger>
        <TabsTrigger value="section1">{t("faq.section1")}</TabsTrigger>
      </TabsList>
      {faqs.map((list, index) => {
        return (
          <TabsContent value={`section${index + 1}`}>
            <Accordion type="multiple" className="w-full">
              {list.map(({ question, answer }, index2) => (
                <AccordionItem
                  key={index2}
                  value={`item_${index2}`}
                  className="mb-8 rounded-3xl border-b-0 bg-neutral-100 px-8 dark:bg-backgroundMuted"
                >
                  <AccordionTrigger className="text-left font-heading text-lg">
                    <span className="mr-6">{t(question)}</span>
                  </AccordionTrigger>
                  <AccordionContent>{t(answer)}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        )
      })}
    </Tabs>
  )
}
