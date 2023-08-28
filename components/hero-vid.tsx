// import Image from "next/image"
// import { useTheme } from "next-themes"

export function HeroVid() {
  //   const { resolvedTheme } = useTheme()
  //   let src

  //   switch (resolvedTheme) {
  //     case "light":
  //       src = "/images/amber-hero.png"
  //       break
  //     case "dark":
  //       src = "/images/dark-hero.png"
  //       break
  //     default:
  //       src = "/images/amber-hero.png"
  //       break
  // }

  return (
    <div
      className="absolute inset-x-0 -z-20 mx-auto overflow-hidden blur-2xl dark:hidden md:left-44 md:top-20"
      aria-hidden="true"
    >
      <video className="" autoPlay loop>
        <source src="/video/bg-blue-wave.webm" type="video/webm" />
        Sorry, your browser doesn&apos;t support videos.
      </video>
    </div>
  )
}
