import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactUs({ children }: { children?: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-heading text-3xl text-primary">Contact us</DialogTitle>
          <DialogDescription>
            We are here to help and answer any question you might have. We look forward to hearing from you.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="firstName" className="text-left">
              First name
            </Label>
            <Input id="firstName" defaultValue="" placeholder="Jane" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="surname" className="text-left">
              Surname
            </Label>
            <Input id="surname" defaultValue="" placeholder="Doe" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-left">
              Email
            </Label>
            <Input id="email" defaultValue="" placeholder="jane@doe.com" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone" className="text-left">
              Phone
            </Label>
            <Input id="phone" defaultValue="" placeholder="+420 213 423 523" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="message" className="text-left">
              Message
            </Label>
            <Textarea id="message" defaultValue="" placeholder="Your message..." />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
