import type { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { AnimatedGradientBorderTW } from "@/components/animated-border"
import { Icons } from "@/components/icons"
import { MorphBg } from "@/components/morph-bg"
import { Newsletter } from "@/components/newsletter"
import { HumanSitting } from "@/components/svg"

// import { env } from '@/env.mjs'
// import Image from "next/image"
// import { siteConfig } from "@/config/site"
// import WebVitals from "@/components/web-vitals"
// import { CookieConsent } from "@/components/cookie"

export const metadata: Metadata = {
  title: "Home",
  description: "Home page of V3 Digital Studio.",
}

export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <MorphBg />
        <div className="container flex flex-col items-center gap-4 md:items-end">
          <HumanSitting />
          <p className="max-w-[26rem] text-center md:max-w-[30rem] md:text-end lg:max-w-[34rem] lg:text-lg">
            V3 Digital Studio is a modern web development and design agency
            based in the Sierra Nevadas
            <Icons.mountain className="inline-flex h-6 fill-zinc-300 pb-1.5 pl-1 dark:fill-zinc-800" />
          </p>
          <div className="flex flex-col md:flex-row">
            <Link
              href="/studio"
              className={cn(buttonVariants({ variant: "dark", size: "lg" }))}
            >
              Learn More
            </Link>
            <a
              href="https://bento.me/v3digitalstudio"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "elevated", size: "lg" }),
                "mt-2 md:ml-2 md:mt-0"
              )}
            >
              Follow V3
            </a>
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
            V3 creates exceptional web experiences. From pixel perfect design
            details, to the latest offerings in web technologies, we build sites
            that are fast, secure, and efficient.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4  sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[190px] flex-col justify-between rounded-md p-6">
              <Icons.keyboard className="h-7 w-7 md:h-12 md:w-12" />
              <div className="space-y-1">
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
              <Icons.folder className="h-7 w-7 md:h-12 md:w-12" />
              <div className="space-y-1">
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
              <Icons.monitorCheck className="h-7 w-7 md:h-12 md:w-12" />
              <div className="space-y-1">
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
              <Icons.hardDrive className="h-7 w-7 md:h-12 md:w-12" />
              <div className="space-y-1">
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
        id="partners"
        className="container mt-10 rounded-xl bg-indigo-400 py-8 shadow-lg md:py-12"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6">
          <h2 className="font-heading text-3xl leading-[1.1] text-white sm:text-3xl md:text-5xl">
            Ideal Partners
          </h2>
          <p className="max-w-[85%] text-center leading-normal text-white sm:text-lg sm:leading-7">
            V3 creates exceptional web experiences. From pixel perfect design
            details, to the latest offerings in web technologies, we build sites
            that are fast, secure, and efficient.
          </p>
          <div className="mx-auto grid justify-center gap-4  sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[190px] flex-col justify-between rounded-md p-5">
                <Icons.keyboard className="h-7 w-7 md:h-12 md:w-12" />
                <div className="space-y-1">
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
                <Icons.folder className="h-7 w-7 md:h-12 md:w-12" />
                <div className="space-y-1">
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
                <Icons.monitorCheck className="h-7 w-7 md:h-12 md:w-12" />
                <div className="space-y-1">
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
                <Icons.hardDrive className="h-7 w-7 md:h-12 md:w-12" />
                <div className="space-y-1">
                  <h3 className="font-bold">Small footprint</h3>
                  <p className="text-sm text-muted-foreground">
                    We build apps that are efficiently small and fast. No bloat.
                    Eco-concious.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2"></div>
      </section>
      <section
        id="solutions"
        className="container mt-10 rounded-xl bg-gray-400 py-8 shadow-lg md:py-12"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] text-white sm:text-3xl md:text-5xl ">
            Solutions
          </h2>
          {/* <div className="mx-auto grid grid-cols-1 justify-center gap-4 md:max-w-[64rem] md:grid-cols-2">
            <AnimatedGradientBorderTW>
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Icons.hardDrive className="h-7 w-7 md:h-12 md:w-12" />
                <div className="space-y-1">
                  <h3 className="font-bold">Small footprint</h3>
                  <p className="text-sm text-muted-foreground">
                    We build apps that are efficiently small and fast. No bloat.
                    Eco-concious.
                  </p>
                </div>
              </div>
            </AnimatedGradientBorderTW>
          </div> */}
        </div>
      </section>
      <section
        id="tech"
        className="container mt-10 rounded-xl bg-red-400 py-8 shadow-lg md:py-12"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 text-center">
          <h2 className="max-w-md font-heading text-3xl leading-[1.1] text-white sm:text-3xl md:text-5xl ">
            Trusted Software Providers
          </h2>
          <div className="mx-auto grid grid-cols-1 justify-center gap-4 md:max-w-[64rem] md:grid-cols-2"></div>
        </div>
        {/* <WebVitals /> */}
      </section>
      <section id="newsletter" className="container px-0 py-8 md:py-12">
        <Newsletter />
      </section>
      <section id="cta" className="container py-24 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
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
