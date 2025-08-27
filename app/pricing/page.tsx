"use client";
import { useState } from "react";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import Link from "next/link";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function PricingPage() {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!isValidEmail(email)) return setError("Enter a valid email");
    if (!agree) return setError("You must agree to continue");
    setLoading(true);
    const url = `/api/checkout?plan=premium&email=${encodeURIComponent(email)}`;
    window.location.href = url;
  }

  return (
    <div className="container py-12 lg:py-20">
      <div className="max-w-xl mx-auto card p-6">
        <h1 className="text-3xl font-bold text-deep">Premium plan</h1>
        <p className="mt-2 text-slate-600">Pay with Payeer. License key will be sent to your email.</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="label" htmlFor="email">Email</label>
            <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} aria-invalid={!!error && !isValidEmail(email)} required />
          </div>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" checked={agree} onChange={e=>setAgree(e.target.checked)} />
            <span className="text-sm text-slate-700">I agree with <Link href="/terms" className="underline">Terms</Link> and <Link href="/privacy" className="underline">Privacy</Link>.</span>
          </label>
          {error && <div className="text-danger text-sm">{error}</div>}
          <Button type="submit" disabled={loading} aria-disabled={loading}>
            {loading ? "Redirecting..." : "Pay with Payeer"}
          </Button>
        </form>
      </div>
    </div>
  );
}
