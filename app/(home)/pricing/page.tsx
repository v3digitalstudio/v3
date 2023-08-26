import type { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { buttonVariants } from "@/components/ui/button"
import { CalEmbed } from "@/components/cal-embed"
import Icons from "@/components/icons"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing page for V3 Digital Studio.",
}

export default function PricingPage() {
  return (
    <section className="container flex flex-col gap-6 py-12 md:max-w-[64rem] lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-4xl md:text-6xl">Pricing</h2>
        <p className="max-w-[85%] leading-normal sm:text-lg sm:leading-7">
          We keep our pricing transparent. We offer a stretch of services that
          will accommodate various sizes of entities. No surprises, exceptional
          results.
        </p>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">Starter</h3>
          <ul className="text-md grid gap-3 text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> 1-2 Requests at a
              time
            </li>
            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> Queued Feature
              Requests
            </li>

            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> Custom design and
              development
            </li>
            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> Umami Analytics
            </li>
            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> 5 day availability
            </li>
            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> 24/7 Uptime
              Monitoring
            </li>
            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> Change detection
              Monitoring
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-10 text-center">
          <div>
            <h4 className="text-5xl font-bold tracking-tighter">$5999</h4>
            <p className="text-end text-sm font-bold text-muted-foreground">
              per month
            </p>
          </div>
          <a
            href="https://buy.stripe.com/00gaGB5WD86448g3cd"
            className={cn(buttonVariants({ variant: "elevated", size: "lg" }))}
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border-4 p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            Pro{" "}
            <Icons name="arrow-right" className="inline-block h-6 w-6 py-1" />{" "}
            <span className="rounded-xl border bg-red-200 p-2.5 text-sm uppercase text-red-400 dark:text-red-600">
              Popular
            </span>
          </h3>
          <ul className="text-md grid gap-3 text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> 2-3 Requests at a
              time
            </li>
            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> Priority Feature
              Requests
            </li>

            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> Custom design and
              development
            </li>
            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> Simple Analytics
            </li>
            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> 10 day
              availability
            </li>
            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> 24/7 Uptime
              Monitoring
            </li>
            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> Change detection
              Monitoring
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-10 text-center">
          <div>
            <h4 className="text-5xl font-bold tracking-tighter">$12,999</h4>
            <p className="text-end text-sm font-bold text-muted-foreground">
              per month
            </p>
          </div>
          <a
            href="https://buy.stripe.com/9AQaGBfxd7206go8ww"
            className={cn(
              buttonVariants({ variant: "dark", size: "lg" }),
              "border-2",
              "border-amber-500"
            )}
          >
            Get Started
          </a>
        </div>
      </div>
      {/* <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">Pro</h3>
          <ul className="text-md grid gap-3 text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Unlimited Requests
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Priority Feature Requests
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Custom design and development
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Dashboard Analytics
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> 5 day availability
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Unlimited Feedback
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-10 text-center">
          <div>
            <h4 className="text-5xl font-bold tracking-tighter">$32,000</h4>
            <p className="text-end text-sm font-bold text-muted-foreground">
              per month
            </p>
          </div>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "elevated", size: "lg" }))}
          >
            Get Started
          </Link>
        </div>
      </div> */}
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">Enterprise</h3>
          <ul className="text-md grid gap-3 text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> Unlimited Requests
            </li>
            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> Up Next Feature
              Queue
            </li>

            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> Custom design and
              development
            </li>
            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> Metabase Suite
            </li>
            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> 15+ day
              availability
            </li>
            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> 24/7 Uptime
              Monitoring
            </li>
            <li className="flex items-center">
              <Icons name="check" className="mr-2 h-4 w-4" /> Change detection
              Monitoring
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-12 text-center">
          <div>
            <h4 className="text-4xl font-bold tracking-tight">Custom</h4>
          </div>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "elevated", size: "lg" }))}
          >
            Get Started
          </Link>
        </div>
      </div>
      <section
        id="framer"
        className="container rounded-lg border bg-indigo-400 py-8 shadow-xl dark:bg-inherit md:py-12"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6">
          <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
            Add on
          </span>
          <h2 className="text-3xl font-bold leading-[1.1] text-white sm:text-3xl md:text-4xl ">
            Framer site
          </h2>

          <span className="text-2xl font-bold leading-[1.1] text-white dark:text-gray-400 sm:text-2xl md:text-3xl">
            $2099
          </span>
          <p className="text-start text-white">
            Get a great site faster with Framer. Ideal for small sites, blogs,
            restaurants, real estate agents, and more.
          </p>
        </div>
      </section>
      <section
        id="super"
        className="container rounded-lg border bg-amber-500 py-8 shadow-xl dark:bg-inherit md:py-12"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6">
          <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
            Add on
          </span>
          <h2 className="text-3xl font-bold leading-[1.1] text-white sm:text-3xl md:text-4xl ">
            Super.so site
          </h2>
          <span className="text-2xl font-bold leading-[1.1] text-white dark:text-gray-400 sm:text-2xl md:text-3xl">
            $1499
          </span>
          <p className="text-start text-white">
            Using Notion? Manage your site with your own workspace. Thats where
            Super comes in.
          </p>
        </div>
      </section>

      {/* <div className="mx-auto flex w-full justify-center gap-4">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          V3 contributes <strong>1% of your subscription</strong> to remove C0
          <sub>2</sub> from the atmosphere using{" "}
          <a
            href="https://www.stripe.com/climate"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Stripe Climate
          </a>
          .
        </p>
      </div> */}

      <div className="mx-auto mt-10 flex w-full justify-center gap-4 md:mt-24">
        <h2 className="text-center font-heading text-3xl">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="rounded-lg p-10">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mx-auto mt-10 flex w-full justify-center gap-4 md:mt-24">
        <h2 className="text-center font-heading text-3xl">
          Anything we missed?
        </h2>
      </div>
      <div className="mx-auto flex w-full justify-center rounded-lg bg-gray-200 p-10 dark:bg-inherit">
        <CalEmbed />
      </div>
    </section>
  )
}
