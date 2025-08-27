import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary"|"ghost"|"outline" }>(
  ({ className, variant = "primary", ...props }, ref) => (
    <button ref={ref} className={cn("btn", variant === "primary" ? "btn-primary" : variant === "ghost" ? "btn-ghost" : "btn-outline", className)} {...props} />
  )
);
Button.displayName = "Button";
