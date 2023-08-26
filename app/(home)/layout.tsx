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
      <header className="container z-40">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={homeConfig.mainNav} />
          <nav>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "amberGlowWobble", size: "sm" }),
                "mt-2 px-3 text-xs md:mt-3 md:h-11 md:px-6 md:text-base"
              )}
            >
              Contact V3
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
