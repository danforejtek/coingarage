"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { formatCurrency } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const defaultValues = {
  fullName: "",
  phoneNumber: "",
  email: "",
}

export function GetMoreInfoForm() {
  const form = useForm({
    defaultValues: defaultValues,
    mode: "onChange",
  })

  return (
    <Form {...form}>
      <form className="mx-auto mt-12 max-w-[600px]">
        <div className="mb-8 flex flex-row gap-8">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <div className="flex flex-col gap-2">
                  {/* <FormLabel className="text-left">Full name</FormLabel> */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Full name"
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
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <div className="flex flex-col gap-2">
                  {/* <FormLabel className="text-left">Phone number</FormLabel> */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Phone number"
                      className="h-[44px] rounded-3xl px-8 shadow-md dark:border-[#282930] dark:bg-[#282930]"
                    />
                  </FormControl>
                  <FormMessage className="font-light" />
                </div>
              </FormItem>
            )}
          />
        </div>
        <div className="mb-8 flex flex-row gap-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-3/4">
                <div className="flex flex-col gap-2">
                  {/* <FormLabel className="text-left">Email</FormLabel> */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Email"
                      className="h-[44px] rounded-3xl px-8 shadow-md dark:border-[#282930] dark:bg-[#282930]"
                    />
                  </FormControl>
                  <FormMessage className="font-light" />
                </div>
              </FormItem>
            )}
          />
          <Button className="w-1/4" type="submit" variant="default" size="lg">
            Send
          </Button>
        </div>
      </form>
    </Form>
  )
}
