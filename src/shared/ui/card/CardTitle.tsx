import { forwardRef } from "react"

export const CardTitle = forwardRef<HTMLHeadingElement, React.ComponentProps<"h3">>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
))
