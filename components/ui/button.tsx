import * as React from "react"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        dark: "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg shadow-lg text-sm dark:bg-gray-800 dark:hover:bg-gray-700",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 dark:bg-red-500",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        elevated:
          "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded",
        amberGlow:
          "text-white bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-600 shadow-md shadow-amber-500/50 dark:shadow-md dark:shadow-amber-600/60 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",
        amberOutline:
          "text-gray-900 hover:text-white border-4 border-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-amber-300 dark:text-amber-300 dark:hover:text-white dark:hover:bg-amber-400 dark:focus:ring-amber-900",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
