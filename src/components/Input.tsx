import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";
export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (<input ref={ref} className={cn("input", className)} {...props} />)
);
Input.displayName = "Input";
