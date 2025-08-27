import { cn } from "@/lib/utils";
export function Alert({ variant = "info", title, description }: { variant?: "info"|"warning"|"error"|"success"; title: string; description?: string; }) {
  const styles: Record<string, string> = {
    info: "border-slate-200 bg-slate-50",
    warning: "border-warning/30 bg-yellow-50",
    error: "border-danger/30 bg-red-50",
    success: "border-success/30 bg-emerald-50"
  };
  return (
    <div role="status" className={cn("rounded-xl border p-4", styles[variant])}>
      <div className="font-semibold">{title}</div>
      {description && <p className="text-sm text-slate-700 mt-1">{description}</p>}
    </div>
  );
}
