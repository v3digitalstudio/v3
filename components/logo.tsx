import Image from "next/image"
import { useTheme } from "next-themes"

export function Logo() {
  const { resolvedTheme } = useTheme()
  let src

  switch (resolvedTheme) {
    case "light":
      src = "/images/v3-logo-light.png"
      break
    case "dark":
      src = "/images/v3-logo-dark.png"
      break
    default:
      src = "/images/v3-logo-light.png"
      break
  }

  return (
    <Image
      className=""
      src={src}
      width={55}
      height={55}
      alt="V3 Digital Studio Logo"
    />
  )
}
