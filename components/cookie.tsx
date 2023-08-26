import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import { Icons } from "./icons"

export function CookieConsent() {
  return (
    <section className="fixed bottom-2 w-full px-4 py-2 md:max-w-2xl md:py-4">
      <div className="container mx-auto">
        <div>
          <div className="cursor-auto rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
            <div className="relative mx-auto mb-3">
              <Icons.cookie className="h-7 w-7 dark:fill-black md:h-10 md:w-10" />
            </div>
            <span className="mb-3 block w-full text-sm leading-normal text-gray-800 dark:text-white">
              We use functional cookies to make the website work properly and
              analytical cookies to measure your behavior. These cookies do not
              store any personal information.
            </span>
            <div className="flex items-center justify-between">
              <Link
                className="mr-1 text-sm text-gray-400 hover:text-gray-800 hover:underline dark:hover:text-white"
                href="/legal#privacy"
              >
                Privacy Policy
              </Link>
              <div className="flex flex-row">
                <button
                  type="button"
                  className={cn(
                    buttonVariants({ variant: "elevated", size: "sm" }),
                    "ml-4"
                  )}
                >
                  Accept
                </button>
                <button
                  type="button"
                  className={cn(
                    buttonVariants({ variant: "destructive", size: "sm" }),
                    "ml-2"
                  )}
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
