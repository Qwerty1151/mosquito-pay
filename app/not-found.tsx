import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold text-deep">404 — Page not found</h1>
      <p className="mt-2 text-slate-600">The page you are looking for does not exist.</p>
      <Link href="/" className="btn-ghost mt-4">Home</Link>
    </div>
  );
}
