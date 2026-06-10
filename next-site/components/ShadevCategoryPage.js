import ShadevCard from '@/components/ShadevCard';

export default function ShadevCategoryPage({ accent, label, blurb, heading, articles }) {
  return (
    <>
      <section className="cat-hero" style={{ '--accent': accent }}>
        <div className="cat-hero-inner">
          <span className="cat-hero-label">{label}</span>
          <p>{blurb}</p>
        </div>
      </section>
      <section className="section">
        <div className="section-head"><h2>{heading}</h2></div>
        <div className="card-grid">
          {articles.map((a) => <ShadevCard key={a.title} article={a} />)}
        </div>
      </section>
    </>
  );
}
