import type { Metadata } from 'next';
import { getPortfolio } from '@/lib/api';
import CategoryHero from '@/components/CategoryHero';
import SkillBar from '@/components/SkillBar';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Projects and skills by Sha.',
};

export default async function PortfolioPage() {
  const { projects, skills } = await getPortfolio();

  return (
    <>
      <CategoryHero 
        accent="#9b2c8a" 
        label="👤 Portfolio" 
        description="Projects, experiments, and skills." 
        breadcrumbPath="Portfolio"
        image="/images/blog.png"
      />
      
      <section className="section">
        <div className="section-head">
          <h2>Featured Projects</h2>
        </div>
        <div className="card-grid">
          {projects.map((p) => (
            <a key={p.name} href={p.url} className="card project-card" target="_blank" rel="noopener noreferrer">
              <div className="card-body">
                <span className="project-emoji">{p.emoji}</span>
                <h3 className="card-title">{p.name}</h3>
                <p className="card-excerpt">{p.description}</p>
                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="section-head">
          <h2>Core Skills</h2>
        </div>
        <div className="skills">
          {skills.map((s) => (
            <SkillBar key={s.name} skill={s} />
          ))}
        </div>
      </section>
    </>
  );
}
