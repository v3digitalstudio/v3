import type { Metadata } from "next"
import Link from "next/link"
import OfficeDesk from "@/public/images/home/desk.svg"

import { Icons } from "@/components/icons"

export const metadata: Metadata = {
  title: "Studio",
  description: "About page for V3 Digital Studio.",
}

export default function Studio() {
  return (
    <section className="container py-12 md:py-24">
      <div className="mx-auto mb-20 max-w-5xl px-8 text-start">
        <h2 className="font-heading text-4xl leading-[1.1] lg:text-6xl">
          The Studio
        </h2>
        <p className="mb-10 font-heading text-lg italic underline decoration-blue-500 decoration-double dark:text-white md:my-5 lg:text-2xl">
          Digital for Thought
        </p>
        <div className="my-10 flex justify-center md:justify-end">
          <OfficeDesk />
        </div>
        <p className="mb-10 text-lg tracking-tight">
          V3 Digital Studio is a web development and design studio that delivers
          exceptional experiences on the web. We specialize in providing our
          clients with custom, high quality solutions utilizing the latest
          technologies available.
        </p>
        <p className="m-10 max-w-xl text-xl tracking-tight">
          <span className="font-semibold italic text-muted-foreground">
            We design and create extremely simple, performant, highly adaptive,
            responsive web experiences that convert visitors into clients.
          </span>
        </p>
        <p className="mb-10 text-lg">
          We are champions of the web. We seek to build for the better, work
          with others that wish to do the same, and continue to pioneer
          innovations that enhance the everchanging dynamic digital landscape
          that is the web.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center border-b-2 border-black font-medium leading-none dark:border-white"
        >
          <span className="mr-2">Get in touch</span>
          <span className="transition duration-100 group-hover:-rotate-45">
            <Icons.arrowRight className="h-5 w-5" />
          </span>
        </Link>
        {/* <h2 className="mt-10 font-heading text-3xl leading-[1.1] md:text-4xl">
            Technology
          </h2> */}
      </div>

      {/* Start grid section for Studio Statistics */}

      {/* <div className="mx-auto max-w-sm sm:max-w-none">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <div className="rounded-5xl flex h-72 items-end border pb-12 pl-8 pr-1 pt-8">
                <div>
                  <h5 className="mb-5 text-5xl lg:text-4xl 2xl:text-7xl">
                    50<sup> +</sup>
                  </h5>
                  <span className="text-coolGray-600 block">Clients</span>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <div className="rounded-5xl flex h-72 items-end border pb-12 pl-8 pr-1 pt-8">
                <div>
                  <h5 className="mb-5 text-5xl lg:text-4xl 2xl:text-7xl">
                    324<sup> +</sup>
                  </h5>
                  <span className="text-coolGray-600 block">Projects</span>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <div className="rounded-5xl flex h-72 items-end border pb-12 pl-8 pr-1 pt-8">
                <div>
                  <h5 className="mb-5 text-5xl lg:text-4xl 2xl:text-7xl">
                    400<sup> +</sup>
                  </h5>
                  <span className="text-coolGray-600 block">Designs</span>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <div className="rounded-5xl flex h-72 items-end border pb-12 pl-8 pr-1 pt-8">
                <div>
                  <h5 className="mb-5 text-5xl lg:text-4xl 2xl:text-7xl">
                    <span>1000</span>
                    <sup> +</sup>
                  </h5>
                  <span className="text-coolGray-600 block">Next</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </section>
  )
}
