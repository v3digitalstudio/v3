"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import * as z from "zod"

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
import Icons from "@/components/icons"

const FormSchema = z.object({
  name: z.any({
    required_error: "Your full name is required.",
  }),
  company: z.any({
    required_error: "Your company name is required.",
  }),
  email: z.any({
    required_error: "Your email is required.",
  }),
  startDate: z.any({
    required_error: "A date of birth is required.",
  }),
  work: z.any({
    required_error: "Please select a service.",
  }),
  budget: z.any({
    required_error: "Please select a budget.",
  }),
  survey: z.any({
    required_error: "Please select an option.",
  }),
  details: z.any({
    required_error: "Please provide some additional details.",
  }),
  newsletter: z.any({
    required_error: "",
  }),
})

export function ContactForm() {
  const router = useRouter()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    },
  })
  const [isSaving, setIsSaving] = React.useState<boolean>(false)
  const [checked, setChecked] = React.useState<boolean>(false)

  const handleChange = () => {
    setChecked(!checked)
  }

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSaving(true)

    const response = await fetch(`http://localhost:3001/api/notion/route`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

    router.refresh()
  }

  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   toast({
  //     title: "Submitted!",
  //     description: "We'll be in touch shortly."
  //     (
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //       </pre>
  //     ),
  //   })
  // }

  {
    /* <Button
      className="mt-4"
      variant="default"
      onClick={() => {
        toast({
          title: "Submitted!",
          description: "We'll be in touch shortly.",
        })
      }}
    >
      Submit
    </Button> */
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
          render={() => (
            <FormItem className="mt-2 flex flex-col">
              <FormControl>
                <label>
                  <span className="text-gray-700 dark:text-muted-foreground">
                    Full name
                  </span>
                  <input
                    type="text"
                    className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit"
                    placeholder="Your full name"
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
          render={() => (
            <FormItem className="flex flex-col">
              <FormControl>
                <label>
                  <span className="text-gray-700 dark:text-muted-foreground">
                    Company
                  </span>
                  <input
                    type="text"
                    className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit"
                    placeholder="Your company name"
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
          render={() => (
            <FormItem className="flex flex-col">
              <FormControl>
                <label>
                  <span className="text-gray-700 dark:text-muted-foreground">
                    Email address
                  </span>
                  <input
                    type="email"
                    className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit"
                    placeholder="john@example.com"
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
                      <Icons
                        name="calendar"
                        className="ml-auto h-5 w-5 text-gray-500"
                      />
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
          render={() => (
            <FormItem className="mt-2 flex flex-col">
              <label className="block">
                <span className="text-gray-700 dark:text-muted-foreground">
                  What type of work?
                </span>
                <select
                  name="selectedProject"
                  className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit"
                >
                  <option>Development</option>
                  <option>Design + Development</option>
                  <option>Self hosted solutions</option>
                  <option>Framer</option>
                  <option>Super.so</option>
                  <option>Documentation</option>
                  <option>Content Management</option>
                  <option>Other</option>
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
          render={() => (
            <FormItem className="mt-2 flex flex-col">
              <label className="block">
                <span className="text-gray-700 dark:text-muted-foreground">
                  Estimated budget?
                </span>
                <select
                  name="selectedBudget"
                  defaultValue="3"
                  className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit"
                >
                  <option value="1">$5,000-$8,000</option>
                  <option value="2">$8,000-$15,000</option>
                  <option value="3">$15,000-$30,000</option>
                  <option value="4">$30,000-$45,000</option>
                  <option value="5">$45,000-$65,000</option>
                  <option value="6">$65,000+</option>
                </select>
              </label>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="survey"
          render={() => (
            <FormItem className="mt-2 flex flex-col">
              <label className="block">
                <span className="text-gray-700 dark:text-muted-foreground">
                  How did you hear about us?
                </span>
                <select
                  name="selectedSurvey"
                  defaultValue="3"
                  className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit"
                >
                  <option value="1">Articles</option>
                  <option value="2">Colleague</option>
                  <option value="3">Newsletter</option>
                  <option value="4">Former Client</option>
                  <option value="5">LinkedIn</option>
                  <option value="6">Twitter (X)</option>
                  <option value="7">Other</option>
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
          render={() => (
            <FormItem className="mt-2 flex flex-col">
              <label className="block">
                <span className="text-gray-700 dark:text-muted-foreground">
                  Additional details
                </span>
                <textarea
                  className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit"
                  rows={3}
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
          render={() => (
            <FormItem className="mt-2 flex flex-col">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="mr-3 rounded border-gray-300 shadow-sm"
                  checked={checked}
                  onChange={handleChange}
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
          {isSaving && (
            <Icons name="loader" className="mr-2 h-4 w-4 animate-spin" />
          )}
          <span>Submit</span>
        </Button>
      </form>
    </Form>
  )
}
