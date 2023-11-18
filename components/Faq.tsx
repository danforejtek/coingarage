import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    title: `What is the difference between a "Coin" and a "Token" on the site?`,
    content: `A coin is a cryptocurrency that can operate independently. A token is a cryptocurrency that depends on another cryptocurrency as a platform to operate. Check out our blog post for more information.`,
  },
  {
    title: `What is Bitcoin (BTC)?`,
    content: `Bitcoin is the first cryptocurrency created in 2009 by Satoshi Nakamoto. It is a decentralized digital currency that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.`,
  },
  {
    title: `What is USDT Coin (USDT)?`,
    content: `Tether (USDT) is a cryptocurrency with a value meant to mirror the value of the U.S. dollar. The idea was to create a stable cryptocurrency that can be used like digital dollars. Coins that serve this purpose of being a stable dollar substitute are called “stable coins.” USDT is the most popular stable coin and even acts as a dollar replacement on many popular exchanges!`,
  },
  {
    title: `How can I buy cryptocurrency?`,
    content: `You can buy cryptocurrency on Coingarage by following these three steps: 1. Sign up for a Coingarage account. 2. Verify your account. 3. Deposit EUR or other supported cryptocurrencies. 4. Buy your favorite cryptocurrencies.`,
  },
  {
    title: `How can I verify my personal account?`,
    content: `You can verify your personal account by following these three steps: 1. Log in to your Coingarage account. 2. Go to your account settings. 3. Click on the verification tab. 4. Follow the instructions and upload the required documents. 5. Wait for your verification to be processed. 6. Start trading!`,
  },
]

export default function Faq() {
  return (
    <Accordion type="multiple" className="w-full">
      {faqs.map(({ title, content }, index) => (
        <AccordionItem
          key={index}
          value={`item_${index}`}
          className="dark:bg-backgroundMuted mb-8 rounded-3xl border-b-0 bg-neutral-100 px-8"
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
