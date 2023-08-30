import * as z from "zod"

export type formValues = z.infer<typeof formSchema>
export type newsletterFormValues = z.infer<typeof newsletterSchema>

export const newsletterSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Email must be at least 2 characters.",
    })
    .max(50, { message: "Email must be less than 50 characters." }),
})

export const formSchema = z.object({
  name: z
    .string({
      required_error: "Your full name is required.",
    })
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(50, { message: "Name must be less than 50 characters." }),
  company: z
    .string({
      required_error: "Your company name is required.",
    })
    .min(2, {
      message: "Company must be at least 2 characters.",
    })
    .max(50, { message: "Company must be less than 50 characters." }),
  email: z
    .string()
    .email("This is not a valid email.")
    .min(2, {
      message: "Email must be at least 2 characters.",
    })
    .max(50, { message: "Email must be less than 50 characters." }),
  startDate: z
    .date({
      required_error: "A start date is required.",
    })
    .min(new Date("2023-09-01"), {
      message: "Cannot be older than today's date.",
    })
    .max(new Date("2029-01-01"), { message: "Too far into the future." }),
  work: z.string().optional(),
  budget: z.string().optional(),
  survey: z.string().optional(),
  details: z.string().min(2, {
    message: "Please provide additional details.",
  }),
  newsletter: z.boolean().default(false).optional(),
})
