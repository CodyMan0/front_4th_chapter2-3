export const DialogHeader = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`} {...props} />
)
DialogHeader.displayName = "DialogHeader"
