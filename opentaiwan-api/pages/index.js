import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>OpenTaiwan API Service</h1>
      <p>Status: Operational</p>
      <h2>Available Endpoints</h2>
      <ul>
        <li><Link href="/api/health">Health Check</Link></li>
        <li><Link href="/api/check-quota">Check Quota</Link></li>
        <li><Link href="/api/status">System Status</Link></li>
      </ul>
    </div>
  );
}