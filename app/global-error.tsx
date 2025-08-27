"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="container py-16">
          <h1 className="text-3xl font-bold">Критическая ошибка</h1>
          <p className="mt-2 text-muted-foreground">
            {String(error?.message || "Unexpected error")}
          </p>
          <button className="btn btn-primary mt-4" onClick={() => reset()}>
            Перезагрузить
          </button>
        </div>
      </body>
    </html>
  );
}
