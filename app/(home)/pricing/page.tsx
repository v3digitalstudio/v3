import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const metadata = {
  title: "Pricing",
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
              <Icons.check className="mr-2 h-4 w-4" /> 1-2 Requests at a time
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Queued Feature Requests
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Custom design and custom
              development
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Simple Analytics
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> 5 day availability
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Unlimited Support
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-10 text-center">
          <div>
            <h4 className="text-5xl font-bold tracking-tighter">$6000</h4>
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
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border-8 p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            Pro{" "}
            <span className="pl-1 text-sm uppercase text-red-400">
              ... Most Popular!
            </span>
          </h3>
          <ul className="text-md grid gap-3 text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> 2-3 Requests at a time
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Priority Feature Requests
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Custom design and custom
              development
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Personal Dashboard
              Analytics
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> 15 day availability
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Unlimited Support
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-10 text-center">
          <div>
            <h4 className="text-5xl font-bold tracking-tighter">$16,000</h4>
            <p className="text-end text-sm font-bold text-muted-foreground">
              per month
            </p>
          </div>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "dark", size: "lg" }),
              "border-2",
              "border-amber-500"
            )}
          >
            Get Started
          </Link>
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
              <Icons.check className="mr-2 h-4 w-4" /> Custom design and custom
              development
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
              <Icons.check className="mr-2 h-4 w-4" /> Custom design and custom
              development
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Premium Analytics
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> 15+ day availability
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Unlimited Support
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
        className="container rounded-lg bg-indigo-400 py-8 shadow-xl dark:border-2 dark:bg-inherit md:py-12"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6">
          <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
            Add on
          </span>
          <h2 className="text-3xl font-bold leading-[1.1] text-white sm:text-3xl md:text-4xl ">
            Framer site
          </h2>

          <span className="text-2xl font-bold leading-[1.1] text-white dark:text-gray-400 sm:text-2xl md:text-3xl">
            $1499
          </span>
          <p className="text-start text-white">
            Get a great site faster with Framer. Ideal for small sites, blogs,
            restaurants, real estate agents, and more.
          </p>
        </div>
      </section>
      <section
        id="super"
        className="container rounded-lg bg-amber-500 py-8 shadow-xl dark:border-2 dark:bg-inherit md:py-12"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6">
          <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
            Add on
          </span>
          <h2 className="text-3xl font-bold leading-[1.1] text-white sm:text-3xl md:text-4xl ">
            Super.so site
          </h2>
          <span className="text-2xl font-bold leading-[1.1] text-white dark:text-gray-400 sm:text-2xl md:text-3xl">
            $999
          </span>
          <p className="text-start text-white">
            Using Notion? Manage your site with your own workspace. Thats where
            Super comes in.
          </p>
        </div>
      </section>

      <div className="mx-auto flex w-full justify-center gap-4">
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
      </div>
      <div className="mx-auto mt-10 flex w-full justify-center gap-4 md:mt-36">
        <h2 className="font-heading text-3xl">Have more questions?</h2>
      </div>
      <div className="mx-auto flex w-full justify-center rounded-lg border p-10">
        <span>Book a call</span>
      </div>
    </section>
  )
}
