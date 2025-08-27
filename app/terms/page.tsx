export const metadata = { title: "Terms of Service & Refunds" };
export default function TermsPage() {
  return (
    <div className="container py-12 lg:py-20 prose max-w-3xl">
      <h1>Terms of Service & Refunds</h1>
      <p>Last updated: August 27, 2025</p>
      <h2 id="license">License</h2>
      <p>Premium is a digital license for the Ultrasonic Mosquito Repellent extension. The license term is defined in your plan and encoded into the JWT.</p>
      <h2 id="activation">Activation</h2>
      <p>After payment, we issue a license key to your email. Activate it inside the extension; the app will verify the key via <code>/api/license/verify</code>.</p>
      <h2 id="refunds">Refunds</h2>
      <p>Digital licenses are generally non-refundable. If you paid by mistake and did not activate the key, contact support and we will review the case.</p>
      <h2 id="fair-use">Fair Use</h2>
      <p>Reasonable use across your personal Chrome profiles and devices is allowed. We may limit concurrent activations to prevent abuse.</p>
      <h2 id="liability">Liability</h2>
      <p>The product emits audio signals designed to be safe at normal volumes. Effectiveness may vary; no guarantee of mosquito repelling is provided.</p>
    </div>
  );
}
