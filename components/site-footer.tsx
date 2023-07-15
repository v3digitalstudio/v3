import Link from "next/link"
import { ModeToggle } from "./mode-toggle"


export function SiteFooter() {
  return (
    <section className="container">
      <footer className="m-4 rounded-lg bg-white shadow dark:bg-gray-800">
          <div className="mx-auto flex w-full flex-col-reverse items-center justify-between p-4 md:flex-row">
            <span className="mt-1 text-sm text-gray-500 dark:text-gray-400 md:mt-0">© 2023 <Link href="/" className="hover:underline">V3 Digital Studio</Link>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400">
              <li>
                  <Link href="/studio" className="mr-4 hover:underline md:mr-6 ">Studio</Link>
              </li>
              <li>
                  <Link href="/privacy-policy" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
              </li>
              <li>
                  <Link href="/" className="mr-4 hover:underline md:mr-6">Help</Link>
              </li>
              <li>
                  <Link href="/contact" className="mr-5 hover:underline">Contact</Link>
              </li>
              <ModeToggle />
          </ul>
          </div>
      </footer>
    </section>
  )
}
