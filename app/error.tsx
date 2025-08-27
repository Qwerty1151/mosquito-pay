"use client";
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <div className="container py-16">
          <h1 className="text-3xl font-bold">Что-то пошло не так</h1>
          <p className="mt-2 opacity-80">{error?.message || "Unexpected error"}</p>
          <button className="btn-primary mt-4" onClick={() => reset()}>Попробовать снова</button>
        </div>
      </body>
    </html>
  );
}
