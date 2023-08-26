import * as React from "react"
import Link from "next/link"

import { MainNavItem } from "types"
// import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { useLockBody } from "@/hooks/use-lock-body"

// import { Icons } from "@/components/icons"

interface MobileNavProps {
  items: MainNavItem[]
  toggleShowMobileMenu: any
  children?: React.ReactNode
}

export function MobileNav({
  items,
  toggleShowMobileMenu,
  children,
}: MobileNavProps) {
  useLockBody()

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Link
          href="/"
          className="flex items-center space-x-2"
          onClick={toggleShowMobileMenu}
        >
          <svg viewBox="0 0 131 89" className="h-9 w-9 fill-current">
            <g filter="url(#filter0_d_804_1716)">
              <path d="M43.55 57.68L37.06 39.97L51.91 0.369996H65.11L43.55 57.68ZM34.86 45.8L41.35 63.51L34.86 81L4.61 0.369996H17.81L34.86 45.91V45.8ZM104.897 21.27C108.124 22.2233 111.057 23.6533 113.697 25.56C116.411 27.4667 118.721 29.7033 120.627 32.27C122.534 34.8367 124.001 37.6967 125.027 40.85C126.127 43.93 126.677 47.1567 126.677 50.53C126.677 54.71 125.871 58.67 124.257 62.41C122.644 66.0767 120.444 69.3033 117.657 72.09C114.944 74.8033 111.717 76.9667 107.977 78.58C104.237 80.1933 100.277 81 96.0972 81C90.9639 81 86.1239 79.79 81.5772 77.37C77.1039 74.95 73.4739 71.5767 70.6872 67.25C69.8072 66.0033 69.0372 64.6833 68.3772 63.29C67.7905 61.8967 67.2772 60.4667 66.8372 59L66.6172 58.34L78.0572 47.01L77.9472 49.76V50.53C77.9472 53.5367 78.6072 56.2867 79.9272 58.78C81.4672 61.86 83.6672 64.3167 86.5272 66.15C89.4605 67.91 92.6872 68.79 96.2072 68.79C98.7006 68.79 101.047 68.3133 103.247 67.36C105.447 66.4067 107.354 65.1233 108.967 63.51C110.654 61.8233 111.974 59.88 112.927 57.68C113.881 55.48 114.357 53.0967 114.357 50.53C114.357 48.11 113.881 45.8367 112.927 43.71C112.047 41.51 110.801 39.6033 109.187 37.99C107.647 36.3033 105.814 34.9833 103.687 34.03C101.561 33.0033 99.2872 32.4533 96.8672 32.38L96.6472 32.27L87.2972 26.11L96.4272 12.36H69.9172V0.369996H118.757L104.897 21.27Z" />
            </g>
            <defs>
              <filter
                id="filter0_d_804_1716"
                x="0.610001"
                y="0.369995"
                width="130.067"
                height="88.63"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_804_1716"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_804_1716"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          {/* <span className="font-bold">{siteConfig.name}</span> */}
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              onClick={toggleShowMobileMenu}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  )
}
