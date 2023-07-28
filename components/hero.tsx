// import Image from "next/image"
// import { useTheme } from "next-themes"

export function HeroBgImg() {
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
      className="absolute inset-x-0 -top-20 -z-20 transform-gpu overflow-hidden blur-2xl sm:-top-20"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#818cf8] to-[#2d9cc850] opacity-30 sm:w-[72.1875rem]"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      />
      {/* <Image
        src={src}
        width={2100}
        height={300}
        alt="V3 Digital Studio Hero Image"
      /> */}
    </div>
  )
}
