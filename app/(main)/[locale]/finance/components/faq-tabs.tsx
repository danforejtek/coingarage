import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

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
      answer: "faq.silentPartnershipQuestions.question3.answer",
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
      <TabsList className="flex w-full !flex-row justify-center !gap-2 lg:!flex-row-reverse lg:justify-start lg:gap-4">
        <TabsTrigger value="section4" asChild>
          <Button
            variant="link"
            size="sm"
            className="text-foreground !no-underline !shadow-none hover:text-primary data-[state=active]:!bg-transparent data-[state=active]:!text-primary"
          >
            {t("faq.section4")}
          </Button>
        </TabsTrigger>
        <TabsTrigger value="section3" asChild>
          <Button
            variant="link"
            size="sm"
            className="text-foreground !no-underline !shadow-none hover:text-primary data-[state=active]:!bg-transparent data-[state=active]:!text-primary"
          >
            {t("faq.section3")}
          </Button>
        </TabsTrigger>
        <TabsTrigger value="section2" asChild>
          <Button
            variant="link"
            size="sm"
            className="text-foreground !no-underline !shadow-none hover:text-primary data-[state=active]:!bg-transparent data-[state=active]:!text-primary"
          >
            {t("faq.section2")}
          </Button>
        </TabsTrigger>
        <TabsTrigger value="section1" asChild>
          <Button
            variant="link"
            size="sm"
            className="text-foreground !no-underline !shadow-none hover:text-primary data-[state=active]:!bg-transparent data-[state=active]:!text-primary"
          >
            {t("faq.section1")}
          </Button>
        </TabsTrigger>
      </TabsList>
      {faqs.map((list, index) => {
        return (
          <TabsContent key={index} value={`section${index + 1}`}>
            <Accordion type="multiple" className="w-full">
              {list.map(({ question, answer }, index2) => (
                <AccordionItem
                  key={index2}
                  value={`item_${index2}`}
                  className="shodow mb-8 rounded-3xl border border-neutral-100 bg-transparent px-8 shadow-lg dark:border-none dark:bg-tertiary/20 dark:shadow-none"
                >
                  <AccordionTrigger className="text-left font-heading text-lg">
                    <span className="mr-6">{t(question)}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-justify lg:text-start">
                    {t.rich(answer, {
                      li: (chunks) => <li>{chunks}</li>,
                      ul: (chunks) => <ul className="list-outside list-disc px-4">{chunks}</ul>,
                    })}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        )
      })}
    </Tabs>
  )
}
