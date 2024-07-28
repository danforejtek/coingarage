"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { cn, formatCurrency } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { submitContactMeForm } from "@/app/(main)/[locale]/finance/lib/actions"
import { toast } from "sonner"
import { useTranslations } from "next-intl"

export const contactMeSchema = z
  .object({
    fullName: z.string().min(6, {
      message: "Full name must be at least 6 characters.",
    }),
    email: z.string().optional(),
    phone: z.string().optional(),
  })
  .and(
    z.union(
      [
        z.object({
          email: z.undefined(),
          phone: z.string().min(9, { message: "Phone number must be at least 9 characters." }),
        }),
        z.object({ email: z.string().email({ message: "Invalid email address." }), phone: z.undefined() }),
        z.object({
          email: z.string().email({ message: "Invalid email address." }),
          phone: z.string().min(9, { message: "Phone number must be at least 9 characters." }),
        }),
      ],
      { errorMap: (issue, ctx) => ({ message: "Either email or phone must be filled in" }) }
    )
  )

const defaultValues = {
  fullName: "",
  phone: undefined,
  email: undefined,
}

export function GetMoreInfoForm({ onSuccess, className }: { onSuccess?: () => void; className?: string }) {
  const t = useTranslations("finance")
  const form = useForm({
    defaultValues: defaultValues,
    mode: "onChange",
    resolver: zodResolver(contactMeSchema),
  })

  const submitHandler = async (data: z.infer<typeof contactMeSchema>) => {
    const response = await submitContactMeForm({ data })
    if (response.status === "ok") {
      form.reset()
      toast.success("Thank you for your interest!", {
        description: "We will get back to you as soon as possible.",
      })
      if (typeof onSuccess === "function") {
        onSuccess()
      }
    }
  }

  return (
    <Form {...form}>
      <form className={cn("mx-auto mt-12 max-w-[600px]", className)} onSubmit={form.handleSubmit(submitHandler)}>
        <div className="mb-4 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:gap-8">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="lg:w-1/2">
                <div className="flex flex-col gap-2">
                  {/* <FormLabel className="text-left">Full name</FormLabel> */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t("yourValuation.table2.placeholder1")}
                      className="h-[44px] rounded-3xl px-8 shadow-md dark:border-[#282930] dark:bg-[#282930]"
                    />
                  </FormControl>
                  <FormMessage className="font-light" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="lg:w-1/2">
                <div className="flex flex-col gap-2">
                  {/* <FormLabel className="text-left">Phone number</FormLabel> */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t("yourValuation.table2.placeholder2")}
                      className="h-[44px] rounded-3xl px-8 shadow-md dark:border-[#282930] dark:bg-[#282930]"
                    />
                  </FormControl>
                  <FormMessage className="font-light" />
                </div>
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-8 lg:mb-8 lg:flex-row">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="lg:w-3/4">
                <div className="flex flex-col gap-2">
                  {/* <FormLabel className="text-left">Email</FormLabel> */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t("yourValuation.table2.placeholder3")}
                      className="h-[44px] rounded-3xl px-8 shadow-md dark:border-[#282930] dark:bg-[#282930]"
                    />
                  </FormControl>
                  <FormMessage className="font-light" />
                </div>
              </FormItem>
            )}
          />
          <Button className="lg:w-1/4" type="submit" variant="default" size="lg">
            {t("yourValuation.table2.sendBtn")}
          </Button>
        </div>
      </form>
    </Form>
  )
}
