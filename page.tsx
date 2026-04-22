import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <div className="brand">
            <div className="brand-mark">W</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 20 }}>Construction Wizzard</div>
              <div className="eyebrow">Estimating for Serious Builders</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/demo" className="btn btn-primary">Open Customer Demo</Link>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="hero" style={{ gridTemplateColumns: '1fr' }}>
          <div>
            <span className="badge">Deploy-ready customer preview</span>
            <h1 style={{ marginTop: 20 }}>Your live sample page is ready to publish.</h1>
            <p className="sub">
              This project is built so you can deploy it on Vercel right away and send contractors to a clean,
              customer-facing preview of Construction Wizzard.
            </p>
            <div className="cta-row">
              <Link href="/demo" className="btn btn-primary">Go to Demo Page</Link>
              <a href="https://constructionwizzard.com/demo" className="btn btn-secondary">Future public link</a>
            </div>
            <div className="grid-4">
              <div className="stat"><div className="label">Route</div><div className="value">/demo</div></div>
              <div className="stat"><div className="label">Use</div><div className="value">Sales calls</div></div>
              <div className="stat"><div className="label">Deploy</div><div className="value">Vercel</div></div>
              <div className="stat"><div className="label">Need</div><div className="value">No env vars</div></div>
            </div>
          </div>
        </section>
      </main>

      <div className="footer-note">Construction Wizzard demo starter</div>
    </div>
  );
}
