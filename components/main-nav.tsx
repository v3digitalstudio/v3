"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { MainNavItem } from "types"
// import { siteConfig } from '@/config/site'
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Logo } from "@/components/logo"
import { MobileNav } from "@/components/mobile-nav"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  const handleShowMobileMenu = React.useCallback(
    () => setShowMobileMenu((showMobileMenu) => !showMobileMenu),
    []
  )

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-1 md:flex">
        <Logo />
        <span className="font-base hidden font-heading text-lg tracking-wide sm:inline-block">
          Digital Studio
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "text-md flex items-center font-medium transition-colors hover:text-foreground/80",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.hamburger />}
        <span className="font-bold">Menu</span>
      </button>

      {showMobileMenu && items && (
        <MobileNav items={items} toggleShowMobileMenu={handleShowMobileMenu}>
          {children}
        </MobileNav>
      )}
    </div>
  )
}
