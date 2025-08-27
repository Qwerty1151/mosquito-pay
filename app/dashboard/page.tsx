'use client';
import { useState } from "react";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
export default function DashboardPage() {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<null | "ok" | "invalid" | "expired">(null);
  const [details, setDetails] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  async function check() {
    setLoading(true); setStatus(null);
    try {
      const res = await fetch(`/api/license/verify?token=${encodeURIComponent(token)}&install_id=demo`, { cache: "no-store" });
      const data = await res.json();
      if (!data.ok) setStatus("invalid");
      else {
        const now = Date.now()/1000;
        if (data.expiresAt && data.expiresAt < now) setStatus("expired"); else setStatus("ok");
      }
      setDetails(data);
    } catch { setStatus("invalid"); } finally { setLoading(false); }
  }
  return (
    <div className="container py-14 lg:py-20 max-w-xl">
      <h1 className="text-3xl font-bold">License dashboard</h1>
      <div className="card p-6 mt-6 space-y-4">
        <div>
          <label className="label" htmlFor="token">License key</label>
          <Input id="token" placeholder="paste-your-key-here" value={token} onChange={e=>setToken(e.target.value)} />
        </div>
        <Button onClick={check} disabled={loading || !token.trim()}>{loading? "Checking..." : "Check"}</Button>
        {status === "ok" && <div className="text-green-400">License valid</div>}
        {status === "invalid" && <div className="text-red-400">Invalid key</div>}
        {status === "expired" && <div className="text-yellow-400">License expired</div>}
        {details && <pre className="overflow-auto bg-secondary/40 border border-border rounded-xl p-3 text-sm">{JSON.stringify(details,null,2)}</pre>}
      </div>
      <div className="card p-6 mt-6">
        <div className="font-semibold">History of purchases</div>
        <p className="text-slate-300 text-sm mt-1">Coming soon</p>
      </div>
    </div>
  );
}
