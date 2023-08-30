"use client"

import { CSSProperties, useEffect, useRef } from "react"

export const AnimatedGradientBorderTW: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const boxElement = boxRef.current

    if (!boxElement) {
      return
    }

    const updateAnimation = () => {
      const angle =
        (parseFloat(boxElement.style.getPropertyValue("--angle")) + 0.5) % 360
      boxElement.style.setProperty("--angle", `${angle}deg`)
      requestAnimationFrame(updateAnimation)
    }

    requestAnimationFrame(updateAnimation)
  }, [])

  return (
    <div
      ref={boxRef}
      style={
        {
          "--angle": "0deg",
          "--border-color": "linear-gradient(var(--angle), #070707, #687aff)",
          "--bg-color": "linear-gradient(#E6E6E6, #232323)",
        } as CSSProperties
      }
      className="flex h-[150px] w-[150px] items-center justify-center rounded-lg border-2 border-[#0000] p-3 [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
    >
      {children}
    </div>
  )
}
