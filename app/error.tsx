"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">Что-то пошло не так</h1>
      <p className="mt-2 text-muted-foreground">
        {error?.message || "Unexpected error"}
      </p>
      <button className="btn btn-primary mt-4" onClick={() => reset()}>
        Попробовать снова
      </button>
    </div>
  );
}
