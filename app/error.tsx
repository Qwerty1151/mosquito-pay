'use client';
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html><body>
      <div className="container py-16">
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-slate-600">{error.message || 'Unexpected error'}</p>
        <button className="btn-primary mt-4" onClick={() => reset()}>Try again</button>
      </div>
    </body></html>
  );
}
