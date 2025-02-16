import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter, X, Youtube } from "lucide-react"
export const socials = ["facebook", "twitter", "x", "telegram", "linkedin"] as const
export type Social = (typeof socials)[number]
const getSocialUrl = (social: Social, url: string, title: string) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  switch (social) {
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&p[title]=${encodedTitle}`
    case "x":
      return `https://x.com/intent/post?text=${encodedTitle}&url=${encodedUrl}`
    case "telegram":
      return `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`
    case "linkedin":
      return `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`
  }
}

const getSocialIcon = (social: Social, theme: string) => {
  switch (social) {
    case "facebook":
      return <Facebook />
    case "x":
    case "twitter":
      return <Twitter />
    case "telegram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill={theme === "dark" ? "white" : "black"}
        >
          <path
            d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337.403-.294.67-.767.795-1.307.374-1.63 2.853-13.427 3.276-15.38l-.012.046c.296-1.1.187-2.108-.496-2.705-.342-.297-.736-.427-1.13-.444zm-.118 1.874c.027.025.025.025.002.027-.007-.002.08.118-.09.755l-.007.024-.005.022c-.432 1.997-2.936 13.9-3.27 15.356-.046.196-.065.182-.054.17-.1-.015-.285-.094-.3-.1l-7.48-5.525c2.562-2.467 5.182-4.7 7.827-7.08.468-.235.39-.96-.17-.972-.594.14-1.095.567-1.64.84-3.132 1.858-6.332 3.492-9.43 5.406-1.59-.553-3.177-1.012-4.643-1.467 1.272-.51 2.283-.886 3.278-1.27 1.738-.67 3.996-1.54 6.256-2.415 4.522-1.748 9.07-3.51 9.465-3.662l.032-.013.03-.013c.11-.05.173-.055.202-.057 0 0-.01-.033-.002-.026zM10.02 16.016l1.234.912c-.532.52-1.035 1.01-1.398 1.36z"
            color="#000"
          />
        </svg>
      )
    case "linkedin":
      return <Linkedin />
  }
}

export const SocialShareButton = ({
  social,
  url,
  title,
  theme,
  className,
}: {
  social: Social
  url: string
  title: string
  theme?: string
  className?: string
}) => {
  const shareUrl = getSocialUrl(social, url, title)
  return (
    <Button
      variant="ghost"
      asChild
      className="border border-transparent hover:border-primary hover:bg-primary/10 hover:shadow-md hover:shadow-primary"
    >
      <a href={shareUrl} target="_blank" rel="noopener noreferrer" className={className}>
        {getSocialIcon(social, theme)}
      </a>
    </Button>
  )
}
