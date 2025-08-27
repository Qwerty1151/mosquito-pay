export const metadata = { title: "Privacy Policy" };
export default function PrivacyPage() {
  return (
    <div className="container py-12 lg:py-20 prose max-w-3xl">
      <h1>Privacy Policy</h1>
      <p>Last updated: August 27, 2025</p>
      <h2 id="what-we-collect">What we collect</h2>
      <ul>
        <li>Email you provide at checkout</li>
        <li>License metadata (plan, status, expiration)</li>
        <li>Minimal technical logs for security and anti-fraud</li>
      </ul>
      <h2 id="how-we-use">How we use it</h2>
      <p>We use your email to deliver a license and for transactional messages (e.g., re-sending the key). We do not sell personal data.</p>
      <h2 id="payments">Payments</h2>
      <p>Payments are processed via Payeer. Card data never touches our servers.</p>
      <h2 id="storage">Storage</h2>
      <p>We store data in Vercel KV and rotate access tokens following best practices.</p>
      <h2 id="security">Security</h2>
      <p>We validate Payeer callbacks server-side, sign licenses with JWT secrets from environment variables, and restrict CORS to allowed origins.</p>
      <h2 id="contact">Contact</h2>
      <p>Support email will be added on this subdomain after mail provider setup.</p>
    </div>
  );
}
