import Link from 'next/link';
import { tools } from '@/lib/shadevData';

export const metadata = { title: 'Tools — shadev.in' };

export default function ToolsPage() {
  return (
    <>
      <section className="cat-hero" style={{ '--accent': '#0c8599' }}>
        <div className="cat-hero-inner">
          <span className="cat-hero-label">🔧 Tools</span>
          <p>Free developer and design utilities — run entirely in your browser, no signup required.</p>
        </div>
      </section>
      <section className="section">
        <div className="tools-grid">
          {tools.map((t) =>
            t.href.startsWith('/') ? (
              <Link key={t.name} href={t.href} className="tool-card">
                <span className="tool-icon">{t.icon}</span>
                <h3 className="tool-name">{t.name}</h3>
                <p className="tool-desc">{t.desc}</p>
                <span className="tool-tag">{t.tag}</span>
              </Link>
            ) : (
              <a key={t.name} href={t.href} className="tool-card">
                <span className="tool-icon">{t.icon}</span>
                <h3 className="tool-name">{t.name}</h3>
                <p className="tool-desc">{t.desc}</p>
                <span className="tool-tag">{t.tag}</span>
              </a>
            )
          )}
        </div>
      </section>
    </>
  );
}
