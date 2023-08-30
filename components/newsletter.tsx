"use client"

import { newsletterFormValues, newsletterSchema } from "@/schemas/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

export function Newsletter() {
  const form = useForm<newsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(data: newsletterFormValues) {
    const response = await fetch(`/api/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
      }),
    })
    console.log(data.email)

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        variant: "destructive",
      })
    }

    toast({
      title: "Subscribed!",
      description: "",
    })
  }

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="mt-8 max-w-xl lg:max-w-lg">
            <h2 className="font-heading text-3xl tracking-tight text-white">
              Keep up to date with V3
            </h2>
            <p className="mt-4 text-base leading-5 text-white md:hidden">
              Never spam. Only our most significant news, delivered every now
              and then.
            </p>

            <Form {...form}>
              <form
                className="flex flex-wrap gap-x-4 space-y-1.5"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <FormControl>
                        <input
                          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2.5 py-2 text-sm text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-zinc-200 md:text-base"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button
                  type="submit"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "px-6"
                  )}
                >
                  Subscribe
                </button>
              </form>
            </Form>
          </div>
          <dl className="hidden gap-x-8 gap-y-10 md:grid md:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <Icons.calendar
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">
                Every now and then articles
              </dt>
              <dd className="mt-2 leading-7 text-white">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure
                cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <Icons.megaphone
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-white">
                Officia excepteur ullamco ut sint duis proident non adipisicing.
                Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
