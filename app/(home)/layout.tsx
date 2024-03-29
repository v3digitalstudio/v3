import Link from "next/link"

import { homeConfig } from "@/config/home"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
// import { Banner } from "@/components/banner"

interface HomeLayoutProps {
  children: React.ReactNode
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Banner /> */}
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={homeConfig.mainNav} />
          <nav>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "amberGlow", size: "sm" }),
                "mt-2 px-4"
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
