import Link from 'next/link';
import ShadevCard from '@/components/ShadevCard';
import NewsletterForm from '@/components/NewsletterForm';
import { aiNews, spaceNews, tutorials, categories } from '@/lib/shadevData';

export default function ShadevHome() {
  return (
    <>
      <section className="sd-hero">
        <div className="sd-hero-inner">
          <span className="hero-kicker">shadev.in</span>
          <h1>Tech News, Tutorials &amp; Tools</h1>
          <p>The latest in AI, space, technology, web development and digital marketing — plus hands-on tutorials and free tools, all in one place.</p>
          <div className="hero-cta">
            <Link href="/shadev/ai-news" className="btn btn-primary-sd">Read the latest</Link>
            <Link href="/shadev/tools" className="btn btn-ghost">Explore tools</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>🤖 Latest AI News</h2>
          <Link href="/shadev/ai-news" className="see-all">See all →</Link>
        </div>
        <div className="card-grid">
          {aiNews.map((a) => <ShadevCard key={a.title} article={a} />)}
        </div>
      </section>

      <section className="section section--alt">
        <div className="section-head">
          <h2>🚀 Latest Space News</h2>
          <Link href="/shadev/space-news" className="see-all">See all →</Link>
        </div>
        <div className="card-grid">
          {spaceNews.map((a) => <ShadevCard key={a.title} article={a} />)}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>📚 Featured Tutorials</h2>
          <Link href="/shadev/tutorials" className="see-all">See all →</Link>
        </div>
        <div className="card-grid">
          {tutorials.map((a) => <ShadevCard key={a.title} article={a} />)}
        </div>
      </section>

      <section className="section section--alt">
        <div className="section-head">
          <h2>Browse every section</h2>
        </div>
        <div className="category-grid">
          {categories.map((c) => (
            <Link key={c.href} href={c.href} className="category-card" style={{ '--cat-accent': c.accent }}>
              <span className="category-icon">{c.icon}</span>
              <span className="category-name">{c.name}</span>
              <span className="category-blurb">{c.blurb}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter-inner">
          <h2>Get the weekly digest</h2>
          <p>One email every week with the best of AI, space, tech and tutorials. No spam.</p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
