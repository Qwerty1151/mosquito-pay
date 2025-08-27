import { cn } from "@/src/components/utils"; // если нет, ниже дам fallback

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};
export default function Section({ id, className, children }: Props) {
  return (
    <section id={id} className={cn("container py-16 md:py-24", className)}>
      {children}
    </section>
  );
}
