"use client"

import * as React from "react"
import { formSchema, formValues } from "@/schemas/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { useForm } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

export function ContactForm() {
  const form = useForm<formValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      details: "",
      work: "select",
      budget: "select",
      survey: "select",
      newsletter: false,
    },
  })
  const [isSaving, setIsSaving] = React.useState<boolean>(false)

  async function onSubmit(data: formValues) {
    setIsSaving(true)

    const response = await fetch(`/api/notion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: data.name,
        company: data.company,
        email: data.email,
        startDate: data.startDate,
        work: data.work,
        budget: data.budget,
        survey: data.survey,
        details: data.details,
        newsletter: data.newsletter,
      }),
    })
    console.log(data)

    setIsSaving(false)

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        variant: "destructive",
      })
    }

    toast({
      title: "Submitted!",
      description: "We'll reach out shortly.",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 underline decoration-indigo-500 decoration-double dark:text-white">
          Contact Info
        </h2>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mt-2 flex flex-col">
              <FormControl>
                <label>
                  <span className="text-gray-700 dark:text-muted-foreground">
                    Full name
                  </span>
                  <input
                    className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit"
                    placeholder="Your full name"
                    {...field}
                  />
                </label>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormControl>
                <label>
                  <span className="text-gray-700 dark:text-muted-foreground">
                    Company
                  </span>
                  <input
                    className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit"
                    placeholder="Your company name"
                    {...field}
                  />
                </label>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormControl>
                <label>
                  <span className="text-gray-700 dark:text-muted-foreground">
                    Email address
                  </span>
                  <input
                    className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit"
                    placeholder="john@example.com"
                    {...field}
                  />
                </label>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-900 underline decoration-indigo-500 decoration-double dark:text-white">
          Project Info
        </h2>
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem className="mt-2 flex flex-col">
              <span className="text-gray-700 dark:text-muted-foreground">
                Target launch date?
              </span>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"default"}
                      className={cn(
                        "text-md border border-gray-300 bg-white p-2 text-left text-gray-700 shadow-sm  hover:bg-inherit focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit dark:text-zinc-300",
                        !field.value && "text-zinc-700"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span className="text-gray-500 dark:text-muted-foreground">
                          Select a date
                        </span>
                      )}
                      <Icons.calendar className="ml-auto h-5 w-5 text-gray-500" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="work"
          render={({ field }) => (
            <FormItem className="mt-2 flex flex-col">
              <label className="block">
                <span className="text-gray-700 dark:text-muted-foreground">
                  What type of work?
                </span>
                <select
                  className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit"
                  {...field}
                >
                  <option value="select" disabled hidden>
                    Select
                  </option>
                  <option value="Development">Development</option>
                  <option value="Design + Development">
                    Design + Development
                  </option>
                  <option value="Self hosted solutions">
                    Self hosted solutions
                  </option>
                  <option value="Framer">Framer</option>
                  <option value="Super.so">Super.so</option>
                  <option value="Documentation">Documentation</option>
                  <option value="Content Management">Content Management</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <FormDescription>
                If you selected &apos;Other&apos; above, please explain in the
                additional details section.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem className="mt-2 flex flex-col">
              <label className="block">
                <span className="text-gray-700 dark:text-muted-foreground">
                  Estimated budget?
                </span>
                <select
                  className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit"
                  {...field}
                >
                  <option value="select" disabled hidden>
                    Select
                  </option>
                  <option value="$5000-$8000">$5,000-$8,000</option>
                  <option value="$8000-$15000">$8,000-$15,000</option>
                  <option value="$15000-$30000">$15,000-$30,000</option>
                  <option value="$30000-$45000">$30,000-$45,000</option>
                  <option value="$45000-$65000">$45,000-$65,000</option>
                  <option value="$65000+">$65,000+</option>
                </select>
              </label>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="survey"
          render={({ field }) => (
            <FormItem className="mt-2 flex flex-col">
              <label className="block">
                <span className="text-gray-700 dark:text-muted-foreground">
                  How did you hear about us?
                </span>
                <select
                  className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit"
                  {...field}
                >
                  <option value="select" disabled hidden>
                    Select
                  </option>
                  <option value="Articles">Articles</option>
                  <option value="Colleague">Colleague</option>
                  <option value="Newsletter">Newsletter</option>
                  <option value="Former Client">Former Client</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="X (Twitter)">X (Twitter)</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <FormDescription>
                If you selected &apos;Other&apos; above, please explain in the
                additional details section.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem className="mt-2 flex flex-col">
              <label className="block">
                <span className="text-gray-700 dark:text-muted-foreground">
                  Additional details
                </span>
                <textarea
                  className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit"
                  rows={3}
                  {...field}
                />
              </label>
              <FormDescription>
                Please provide additional details like the site URL, content
                amount, # of pages, etc.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newsletter"
          render={({ field }) => (
            <FormItem className="mt-2 flex flex-col">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="mr-3 rounded border-gray-300 shadow-sm"
                  checked={field.value}
                  onChange={field.onChange}
                />
                <span className="w-44 text-xs md:w-full md:text-base">
                  Sign me up for updates from V3 Digital Studio
                </span>
              </label>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className={cn(buttonVariants({ variant: "dark", size: "lg" }))}
          type="submit"
          disabled={isSaving}
        >
          {isSaving && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          <span>Submit</span>
        </Button>
      </form>
    </Form>
  )
}
