import Link from "next/link"

import { homeConfig } from "@/config/home"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
// import { Banner } from "@/components/banner"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

interface HomeLayoutProps {
  children: React.ReactNode
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Banner /> */}
      <header className="container">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={homeConfig.mainNav} />
          <nav>
            <button className="group relative mx-auto inline-flex items-center overflow-hidden rounded-full bg-orange-600 px-8 py-3 transition">
              <div className="absolute inset-0 flex items-center [container-type:inline-size]">
                <div className="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 [animation-duration:3s] group-hover:opacity-100"></div>
              </div>

              <div className="absolute inset-0.5 rounded-full bg-orange-400"></div>

              <div className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100"></div>

              <span className="relative mt-px bg-clip-text text-base font-medium text-white transition-all duration-200">
                {" "}
                Contact V3{" "}
              </span>
            </button>
          </nav>
        </div>
      </header>
      <main className="flex-1 antialiased">{children}</main>
      <SiteFooter />
    </div>
  )
}
