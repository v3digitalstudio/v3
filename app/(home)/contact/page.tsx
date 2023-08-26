import type { Metadata } from "next"

// import Link from "next/link"

import { ContactForm } from "@/components/contact-form"

// import { Chat } from "@/components/svg"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Page for V3 Digital Studio.",
}

export default function Contact() {
  return (
    <div className="my-12 flex justify-center md:my-24">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 rounded-lg bg-gray-100 px-8 py-16 shadow dark:bg-inherit md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="font-heading text-4xl leading-tight lg:text-5xl">
              Lets talk about everything!
            </h2>
            <div className="mt-2 text-gray-700 dark:text-muted-foreground md:mt-8">
              Hate forms? Send us an{" "}
              <a className="underline" href="mailto:contact@v3digital.studio">
                email
              </a>{" "}
              instead.
            </div>
          </div>
          <div className="mt-2 text-center md:mt-8">{/* <Chat /> */}</div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
      {/* <div className="relative py-3 sm:mx-auto sm:max-w-xl">
        <div className="absolute inset-0 -skew-y-1 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg sm:-rotate-2 sm:skew-y-0 sm:rounded-3xl"></div>
        <div className="relative bg-white px-4 py-10 shadow-lg dark:bg-[#030711] sm:rounded-3xl sm:p-20">
          <div className="mx-auto max-w-md">
            <h1 className="mb-8 font-heading text-3xl">
              Starting or updating a project? <br /> Please share below a few
              details and we&apos;ll get back to you.
            </h1>
            <h2 className="mb-4 mt-6 text-xl font-semibold text-gray-900 underline decoration-indigo-500 decoration-double dark:text-white">
              Contact Info
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <ContactForm />
            </div>
            <div className="mt-24 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-center text-xs text-transparent">
              By submitting this form I confirm that I have read and accept the{" "}
              <Link
                href="/cookie-policy#privacy"
                className="text-indigo-400 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}
