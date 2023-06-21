import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      // eslint-disable-next-line
      className="text-sm text-zinc-800 dark:text-zinc-200  hover:text-teal-500 dark:hover:text-teal-400 font-medium transition"
    >
      {children}
    </Link>
  )
}

export function SiteFooter() {
  return (
    <footer>
      <div className="container gap-4 py-10">
        <div className="border-t-2">
          <div className="flex flex-col items-center justify-center gap-4 pt-8 md:flex-row">
            <NavLink href="/features">Features</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/docs">Documentation</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/studio">Studio</NavLink>
            <ModeToggle />
          </div>
          <p className="pt-5 text-center text-sm text-zinc-600 dark:text-zinc-300">
            V3 Digital Studio &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
