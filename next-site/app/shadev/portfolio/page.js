import { projects, skills } from '@/lib/shadevData';

export const metadata = { title: 'Portfolio — shadev.in' };

export default function PortfolioPage() {
  return (
    <>
      <section className="cat-hero" style={{ '--accent': '#9b2c8a' }}>
        <div className="cat-hero-inner">
          <span className="cat-hero-label">👤 Portfolio</span>
          <p>Projects and work by Sha — full-stack engineering, developer tools and more.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-head"><h2>Projects</h2></div>
        <div className="card-grid">
          {projects.map((p) => (
            <a key={p.title} href="#" className="card project-card">
              <div className="card-body">
                <span className="project-emoji">{p.emoji}</span>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-excerpt">{p.excerpt}</p>
                <div className="project-tech">
                  {p.tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="section section--alt">
        <div className="section-head"><h2>Skills</h2></div>
        <div className="skills">
          {skills.map((s) => (
            <div className="skill" key={s.name}>
              <div className="skill-top"><span>{s.name}</span><span>{s.pct}%</span></div>
              <div className="skill-bar"><div className="skill-fill" style={{ width: `${s.pct}%` }}></div></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
