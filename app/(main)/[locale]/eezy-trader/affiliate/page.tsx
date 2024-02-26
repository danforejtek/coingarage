// import Figure from "@/components/Figure"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
// import { useTranslations } from "next-intl"
import Image from "next/image"

export default function Affiliate() {
  return (
    <main className="relative">
      <section className="container mx-auto flex flex-col flex-wrap items-center justify-center lg:flex-row xl:justify-between">
        <div className="w-full max-w-[600px] p-4">
          <h1 className="mb-6 flex flex-col gap-3 font-heading text-5xl font-bold">
            Earn passive income.
            <br />
            Earn Up to 15% from each partner you refer.
          </h1>

          <p className="text-text-neutral-600 mb-4 text-justify text-lg dark:text-neutral-300 lg:text-left">
            Monthly rewards, effortless. Imagine the joy of money flowing in without lifting a finger. Financial
            freedom, simply delightful.{" "}
            <span className="font-bold text-violet">Invite your friends and enjoy shared profits together!</span>
          </p>

          <div className="mt-12 flex flex-row-reverse">
            <Button variant="violet" className="px-10">
              Get Your Affiliate
            </Button>
          </div>
        </div>
        <div className="flex max-w-[600px] items-center justify-end lg:mt-16 xl:mt-0">
          <Image
            src="/images/eezy-trader/images/affiliate.svg"
            // className="animate-slow-bounce"
            alt=""
            width={600}
            height={600}
          />
        </div>
      </section>

      <section className="bg-violet-200/30 py-24 dark:bg-violet-200/10">
        <div className="container mx-auto max-w-[1200px]">
          <p className="text-center text-3xl font-bold">How to get started</p>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 lg:flex-row">
            <div className="flex min-h-[340px] max-w-[340px] flex-col items-center gap-6 rounded-lg bg-background p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet text-xl font-bold text-white">
                1
              </div>
              <span className="text-center text-lg font-bold">Register to a Coingarage</span>
              <p className="text-center">Create an Account, Log in and then go section Affilate.</p>
            </div>
            <div className="flex min-h-[340px] max-w-[340px] flex-col items-center gap-6 rounded-lg bg-background p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet text-xl font-bold text-white">
                2
              </div>
              <span className="text-center text-lg font-bold">Invite Your Friends or Partners</span>
              <p className="text-center">
                Copy your Affiliate Link and send it to your friends or partners to increase your passive income.
              </p>
            </div>
            <div className="flex min-h-[340px] max-w-[340px] flex-col items-center gap-6 rounded-lg bg-background p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet text-xl font-bold text-white">
                3
              </div>
              <span className="text-center text-lg font-bold">Enjoy Your Earnings</span>
              <p className="text-center">
                Copy your Affiliate Link and send it to your friends or partners to increase your passive income.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="container mx-auto my-32 xl:mt-36">
        <p className="text-center text-3xl font-bold">FAQ</p>
        <Accordion type="multiple" className="mt-12 w-full">
          <AccordionItem value={`item-1`} className="mb-8 rounded border-b-0 px-8 shadow-md dark:bg-backgroundMuted">
            <AccordionTrigger className="text-left text-lg">
              <span className="mr-6">{`How does the affiliate program work?`}</span>
            </AccordionTrigger>
            <AccordionContent className="text-md">{`As an affiliate, you'll receive a unique referral link or code that you can share with your audience. When someone clicks on your link or uses your code to make a purchase or sign up, you'll earn a commission on the sale or sign-up.`}</AccordionContent>
          </AccordionItem>
          <AccordionItem value={`item-2`} className="mb-8 rounded border-b-0 px-8 shadow-md dark:bg-backgroundMuted">
            <AccordionTrigger className="text-left text-lg">
              <span className="mr-6">{`Is there a limit to how much I can earn through the affiliate program?`}</span>
            </AccordionTrigger>
            <AccordionContent className="text-md">{`There is no limit to how much you can earn through our affiliate program. Your earnings depend on the number of referrals you generate and the value of their purchases or sign-ups.`}</AccordionContent>
          </AccordionItem>
          <AccordionItem value={`item-3`} className="mb-8 rounded border-b-0 px-8 shadow-md dark:bg-backgroundMuted">
            <AccordionTrigger className="text-left text-lg">
              <span className="mr-6">{` How can I track my referrals and commissions?`}</span>
            </AccordionTrigger>
            <AccordionContent className="text-md">{`Our affiliate program provides access to a dashboard or portal where you can track your referrals, monitor sales or sign-ups, and view your commission earnings in real-time.`}</AccordionContent>
          </AccordionItem>
          <AccordionItem value={`item-4`} className="mb-8 rounded border-b-0 px-8 shadow-md dark:bg-backgroundMuted">
            <AccordionTrigger className="text-left text-lg">
              <span className="mr-6">{`What is the commission structure for the affiliate program?`}</span>
            </AccordionTrigger>
            <AccordionContent className="text-md">
              {`Our affiliate program offers a multi-level commission structure, with commission percentages based on the level of referrals:`}
              <br />
              <br />
              <ul>
                <li>
                  <b>Level 1</b>: 15% commission
                </li>
                <li>
                  <b>Level 2</b>: 10% commission
                </li>
                <li>
                  <b>Level 3</b>: 5% commission
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}
