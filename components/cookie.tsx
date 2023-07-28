import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import { Icons } from "./icons"

export function CookieConsent() {
  return (
    <section className="fixed bottom-2 w-full px-4 py-2 md:py-4">
      <div className="container mx-auto px-20">
        <div>
          <div className="cursor-auto rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
            <div className="relative mx-auto mb-3">
              <Icons.cookie className="h-7 w-7 dark:fill-black md:h-10 md:w-10" />
            </div>
            <span className="mb-3 block w-48 text-sm leading-normal text-gray-800 dark:text-white">
              We use functional cookies to make the website work properly and
              analytical cookies to measure your behavior. We collect data on
              how you use our website to make our website easier to use. By
              clicking accept you agree to this. More information?
            </span>
            <div className="flex items-center justify-between">
              <a
                className="mr-1 text-xs text-gray-400 hover:text-gray-800 dark:hover:text-white"
                href="#"
              >
                Privacy Policy
              </a>
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
