import { cn } from "@/lib/utils"

const data = [
  {
    heading: "PayPal Registers as Crypto Service Provider with UK Financial Conduct Authority",
    timestamp: "20 minutes ago",
  },
  {
    heading: "AI and Real-World Assets Gain Investor Attention as Cryptocurrency Discussions Wane",
    timestamp: "36 minutes ago",
  },
  {
    heading: "PayPal Registers as Crypto Service Provider with UK Financial Conduct Authority",
    timestamp: "43 minutes ago",
  },
]

const Article = ({ heading, timestamp }: { heading: string; timestamp: string }) => {
  return (
    <div className="flex flex-col">
      <div className="text-sm text-primary">{timestamp}</div>
      <div className="font-lg text-heading font-bold">{heading}</div>
    </div>
  )
}

export default function NewsFeed({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {data.map((article, index) => (
        <Article key={index} {...article} />
      ))}
    </div>
  )
}
