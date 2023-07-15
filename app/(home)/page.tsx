import Link from "next/link"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"

// import { env } from '@/env.mjs'
import { buttonVariants } from "@/components/ui/button"
import { HumanSitting } from "@/components/svg"
import { Icons } from "@/components/icons"
// import { CookieConsent } from "@/components/cookie"

export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex flex-col items-center gap-4 md:items-end">
          <HumanSitting />
          <p className="max-w-[26rem] text-center text-muted-foreground md:max-w-[30rem] md:text-end lg:max-w-[34rem]">
            V3 Digital Studio is a modern web development and design agency
            based in the Sierra Nevadas
            <Icons.mountain className="inline-flex  h-6 fill-zinc-300 pb-1.5 pl-1 dark:fill-zinc-800" />
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
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.keyboard className="h-10 w-10" />
              <div className="space-y-2">
                <h3 className="font-bold">Modern Apps</h3>
                <p className="text-sm text-muted-foreground">
                  Built with the latest tooling and design forward. App dir,
                  Routing, Layouts, Loading UI and API routes.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.folder className="h-10 w-10" />
              <div className="space-y-2">
                <h3 className="font-bold">Security built in</h3>
                <p className="text-sm text-muted-foreground">
                  Each app is built with security in mind. We use the latest
                  security practices and tools.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.monitorCheck className="h-10 w-10" />
              <div className="space-y-2">
                <h3 className="font-bold">Self hosting</h3>
                <p className="text-sm text-muted-foreground">
                  Self hosting is important to many. We know how to build it,
                  maintain it, and launch it.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.hardDrive className="h-10 w-10" />
              <div className="space-y-2">
                <h3 className="font-bold">Small footprint</h3>
                <p className="text-sm text-muted-foreground">
                  We build apps that are efficiently small and fast. No bloat.
                  Eco-concious.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="customers"
        className="container mt-10 rounded-xl bg-indigo-400 py-8 shadow-lg dark:bg-transparent md:py-12"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] text-white sm:text-3xl md:text-5xl ">
            Customers
          </h2>
          <p className="max-w-[85%] leading-normal text-white sm:text-lg sm:leading-7 ">
            V3 partners with visionary clients that value
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2"></div>
      </section>
      <section id="build" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-xl leading-[1.1] sm:text-3xl md:text-5xl">
            We build greatness
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We&apos;re a digital powerhouse studio focused on providing our
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
      {/* <CookieConsent /> */}
    </>
  )
}
