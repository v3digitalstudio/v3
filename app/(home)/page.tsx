import Link from "next/link"
import { MountainSnow } from "lucide-react"

// import { env } from '@/env.mjs'
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  AuthIcon,
  HumanSitting,
  NextIcon,
  PscaleIcon,
  ReactIcon,
  StripeIcon,
  TailwindIcon,
} from "@/components/svg"

export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-start md:items-end">
          {/* <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
            Digital Studio
          </h1> */}
          <HumanSitting />
          <p className="max-w-[24rem]  text-center leading-normal text-muted-foreground md:max-w-[30rem] md:text-end lg:max-w-[34rem]">
            V3 Digital Studio is a modern development and design agency based in
            the Sierra Nevadas{" "}
            <MountainSnow className="inline-flex h-6 fill-zinc-300 pb-1.5 dark:fill-zinc-800" />
          </p>
          <div className="space-x-4">
            <Link
              href="/studio"
              className={cn(
                buttonVariants({ variant: "dark", size: "lg" }),
                "mb-5"
              )}
            >
              Learn More
            </Link>
            <Link
              href={siteConfig.links.v3inbio}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "elevated", size: "lg" })
              )}
            >
              Follow V3
            </Link>
          </div>
        </div>
      </section>
      <section
        id="expertise"
        className="container space-y-16 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Expertise
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Utilizing the latest and greatest for your new web app.
            Optimization, optimization, optimization. Oh, and performance.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <NextIcon />
              <div className="space-y-2">
                <h3 className="font-bold">Next.js 13</h3>
                <p className="text-sm text-muted-foreground">
                  App dir, Routing, Layouts, Loading UI and API routes.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <ReactIcon />
              <div className="space-y-2">
                <h3 className="font-bold">React 18</h3>
                <p className="text-sm">
                  Server and Client Components. Use hook.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <PscaleIcon />
              <div className="space-y-2">
                <h3 className="font-bold">Database</h3>
                <p className="text-sm text-muted-foreground">
                  ORM using Prisma and deployed on PlanetScale.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <TailwindIcon />
              <div className="space-y-2">
                <h3 className="font-bold">Components</h3>
                <p className="text-sm text-muted-foreground">
                  UI components built using Radix UI and styled with Tailwind
                  CSS.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <AuthIcon />
              <div className="space-y-2">
                <h3 className="font-bold">Authentication</h3>
                <p className="text-sm text-muted-foreground">
                  Authentication using NextAuth.js and middlewares.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <StripeIcon />
              <div className="space-y-2">
                <h3 className="font-bold">Subscriptions</h3>
                <p className="text-sm text-muted-foreground">
                  Free and paid subscriptions using Stripe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-xl leading-[1.1] sm:text-3xl md:text-5xl">
            We build greatness
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We&apos;re a digital powerhouse agency focused on providing our
            clients with the best possible experience on the web. <br />{" "}
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "elevated", size: "lg" }),
              "px-6"
            )}
          >
            Let&apos;s begin
          </Link>
        </div>
      </section>
    </>
  )
}
