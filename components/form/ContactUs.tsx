"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
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
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  surname: z.string().min(2, {
    message: "Surname must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(9, { message: "Phone number must be at least 9 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

const onSubmit = async (data: any) => {
  try {
    // console.log(data)
    const response = await fetch("/api/form/contact-us", {
      method: "POST",
      body: JSON.stringify(data),
    })
    // console.log(response.json())
  } catch (error) {
    console.log(error)
  }
}

export default function ContactUs({ children }: { children?: React.ReactNode }) {
  const { toast } = useToast()
  const [isOpen, setOpen] = useState(false)
  const toggleOnpen = () => setOpen(!isOpen)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      surname: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "onSubmit",
  })

  const {
    formState: { isSubmitSuccessful, isSubmitting },
  } = form || {}

  useEffect(() => {
    if (isSubmitSuccessful) {
      toast({
        title: "Your message has been sent.",
        description: "We will get back to you as soon as possible.",
        variant: "success",
      })
      form.reset()
      setOpen(false)
    }
  }, [isSubmitSuccessful])

  return (
    <Dialog open={isOpen} onOpenChange={toggleOnpen}>
      <DialogTrigger onClick={toggleOnpen} asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-heading text-3xl text-primary">Contact us</DialogTitle>
          <DialogDescription>
            We are here to help and answer any question you might have. We look forward to hearing from you.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col gap-2">
                        <FormLabel className="text-left">First name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Jane" />
                        </FormControl>
                        <FormMessage className="font-light" />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="surname"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col gap-2">
                        <FormLabel className="text-left">Surname</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Doe" />
                        </FormControl>
                        <FormMessage className="font-light" />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col gap-2">
                        <FormLabel className="text-left">Email</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="jane@doe.com" />
                        </FormControl>
                        <FormMessage className="font-light" />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col gap-2">
                        <FormLabel className="text-left">Phone</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="+420 213 423 523" />
                        </FormControl>
                        <FormMessage className="font-light" />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col gap-2">
                        <FormLabel className="text-left">Message</FormLabel>
                        <FormControl>
                          <Textarea {...field} placeholder="Your message..." />
                        </FormControl>
                        <FormMessage className="font-light" />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
