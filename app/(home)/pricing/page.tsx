import type { Metadata } from "next"
import Link from "next/link"

// import Investment from "@/public/images/home/investment.svg"

import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { buttonVariants } from "@/components/ui/button"
import { CalEmbed } from "@/components/cal-embed"
import { Icons } from "@/components/icons"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing page for V3 Digital Studio.",
}

export default function PricingPage() {
  return (
    <section className="container py-12 md:py-24">
      <div className="mx-auto mb-20 max-w-5xl space-y-5 px-8 text-start">
        <h2 className="font-heading text-4xl lg:text-6xl">Pricing</h2>
        <p className="max-w-[85%] leading-normal sm:text-lg sm:leading-7">
          We keep our pricing transparent. We offer a stretch of services that
          will accommodate various sizes of entities. No surprises, exceptional
          results.
        </p>

        <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
          <div className="grid gap-6">
            <h3 className="text-xl font-bold sm:text-2xl">Starter</h3>
            <ul className="text-md grid gap-3 text-muted-foreground sm:grid-cols-2">
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> 1-2 Requests at a time
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Queued Feature Requests
              </li>

              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Custom design and
                development
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Umami Analytics
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> 5 day availability
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> 24/7 Uptime Monitoring
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Change detection
                Monitoring
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-10 text-center">
            <div>
              <h4 className="text-3xl font-bold tracking-tighter md:text-5xl">
                $5999
              </h4>
              <p className="text-end text-sm font-bold text-muted-foreground">
                per month
              </p>
            </div>
            <a
              href="https://buy.stripe.com/00gaGB5WD86448g3cd"
              className={cn(
                buttonVariants({ variant: "elevated", size: "lg" })
              )}
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="grid w-full items-start gap-10 rounded-lg border-4 p-10 md:grid-cols-[1fr_200px]">
          <div className="grid gap-6">
            <h3 className="text-xl font-bold sm:text-2xl">
              Pro <Icons.arrowRight className="inline-block h-6 w-6 py-1" />{" "}
              <span className="rounded-xl border bg-red-200 p-2.5 text-sm uppercase text-red-400 dark:text-red-600">
                Popular
              </span>
            </h3>
            <ul className="text-md grid gap-3 text-muted-foreground sm:grid-cols-2">
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> 2-3 Requests at a time
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Priority Feature
                Requests
              </li>

              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Custom design and
                development
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Simple Analytics
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> 10 day availability
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> 24/7 Uptime Monitoring
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Change detection
                Monitoring
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-10 text-center">
            <div>
              <h4 className="text-3xl font-bold tracking-tighter md:text-5xl">
                $12,999
              </h4>
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
                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Requests
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Up Next Feature Queue
              </li>

              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Custom design and
                development
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Metabase Suite
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> 15+ day availability
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> 24/7 Uptime Monitoring
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Change detection
                Monitoring
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-12 text-center">
            <div>
              <h4 className="text-3xl font-bold tracking-tight md:text-5xl">
                Custom
              </h4>
            </div>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "elevated", size: "lg" })
              )}
            >
              Contact
            </Link>
          </div>
        </div>
        <section
          id="framer"
          className="container rounded-lg border bg-indigo-400 py-8 shadow-xl dark:bg-inherit md:py-12"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6">
            <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
              Builder
            </span>
            <h2 className="text-3xl font-bold leading-[1.1] text-white sm:text-3xl md:text-4xl ">
              Framer
            </h2>

            <h4 className="text-2xl font-bold leading-[1.1] text-white dark:text-gray-400 sm:text-2xl md:text-3xl">
              $2099{" "}
              <span className="text-sm font-bold text-white">per month</span>
            </h4>
            <p className="text-center text-white">
              Get a great site faster with Framer.
              <br /> Ideal for small sites, blogs, restaurants, real estate
              agents, and more.
            </p>
          </div>
        </section>
        <section
          id="super"
          className="container rounded-lg border bg-amber-500 py-8 shadow-xl dark:bg-inherit md:py-12"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6">
            <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
              Builder
            </span>
            <h2 className="text-3xl font-bold leading-[1.1] text-white sm:text-3xl md:text-4xl ">
              Super.so
            </h2>
            <h4 className="text-2xl font-bold leading-[1.1] text-white dark:text-gray-400 sm:text-2xl md:text-3xl">
              $1499{" "}
              <span className="text-sm font-bold text-white">per month</span>
            </h4>
            <p className="text-center text-white">
              Using Notion? Integrate your site with your own workspace. <br />
              Thats where Super comes in.
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

        <div className="mx-auto flex w-full justify-center gap-4">
          <h2 className="mt-10 text-center font-heading text-3xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="rounded-lg p-10">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How does it work once you subscribe?
              </AccordionTrigger>
              <AccordionContent>
                The first thing we&apos;ll do on every plan is identify where
                your application is causing you pain and why. To do this,
                we&apos;ll talk to you and your team and review your code and
                designs to get a clear understanding of what&apos;s going wrong,
                where you can improve and which things are most likely to have
                the biggest impact. Then we&apos;ll advise you on how best to
                achieve that. If you&apos;re on one of our recurring plans,
                we&apos;ll then provide monthly support to help you start making
                these improvements. How this looks can be different from project
                to project. Using our recommendations above, and taking into
                account any features you&apos;d like to add, we&apos;ll create a
                list of requests and work through them one at a time. We&apos;ll
                always advise you on where we will be most valuable to make sure
                you&apos;re making the most important improvements first.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Why not just hire a developer/designer?
              </AccordionTrigger>
              <AccordionContent>
                Good question! A full-time senior developer costs over $150,000
                and a full-time senior designer costs over $100,000, and
                that&apos;s excluding project management and employee benefits.
                By working with us you get access to our team of designers and
                developers for the price of hiring just one. If you don&apos;t
                have enough work to keep a designer and a developer busy in a
                full time role, you&apos;ll be paying for people you don&apos;t
                need. But with our service, we can adjust our workflow to make
                sure you&apos;re getting exactly what you need on a
                month-by-month basis, whether that&apos;s 50/50 or a different
                split. Furthermore, you&apos;ll get access to our entire team.
                That means that you get the benefits of having specialists being
                able to focus on providing the best solution for you, not just a
                single person you&apos;ve happened to hire. As we continue to
                grow, you&apos;ll get even better access to specialists for the
                same price. And if you&apos;re on our monthly plan, you can
                pause and resume your subscription at any time, ensuring you
                only pay when you have work.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I make requests?</AccordionTrigger>
              <AccordionContent>
                We&apos;re pretty flexible on how we accept requests. We manage
                our requests in linear so if you&apos;re comfortable you can add
                them there, otherwise you can send us however you might be
                comfortable, like github, notion or google sheets.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is there a limit to requests?</AccordionTrigger>
              <AccordionContent>
                Once you&apos;re subscribed you can make as many requests as
                you&apos;d like, which we&apos;ll work on one-by-one. We&apos;ll
                help provide the initial list of recommended work but you can
                always choose what you think is most important to prioritise
                next.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What if I need to make more changes at one time?
              </AccordionTrigger>
              <AccordionContent>
                If you need to be able to make multiple changes at once,
                you&apos;ll probably benefit from our custom solution more.
                We&apos;ll always take into account your needs and advise you on
                which solution is best for you before we start working together.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Does V3 offer refunds?</AccordionTrigger>
              <AccordionContent>
                Due to the highly custom nature of our solutions we do not offer
                a refund policy. If you are on our monthly plan you can cancel
                your subscription at any time. If you are on our longer plans,
                we offer a 3 month trial period, where if you are unhappy with
                our service we will downgrade your plan to a monthly
                subscription and refund you for any unused months.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mx-auto flex w-full flex-col justify-center gap-4">
          <h2 className="mt-10 text-center font-heading text-3xl">
            Anything we missed? <br />
            Need a custom project?
          </h2>
        </div>
        <div className="mx-auto flex w-full justify-center rounded-lg bg-gray-200 p-10 dark:bg-inherit">
          <CalEmbed />
        </div>
        {/* <hr />
        <p className="text-start text-sm">Why charge for the call?</p>
        <span className="text-xs">
          Custom work takes time and heavy evaluation to determine what will be
          the best route for your project. For that time we will go complete a
          detailed overview.{" "}
          <strong>
            When you decide to subscribe the cost of the call will go toward
            your first month.
          </strong>
        </span> */}
        {/* <div className="relative">
          <div className="absolute -bottom-12 right-[-37rem]">
            <Investment />
          </div>
        </div> */}
      </div>
    </section>
  )
}
