import Link from 'next/link';

export const metadata = {
  title: 'About Shathyapriyan | Web Developer in Chennai',
  description: 'Learn about Shathyapriyan, a web developer and digital growth expert based in Chennai with 8 years of experience building 50+ business websites.',
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="cat-hero" style={{ padding: '40px 5%' }}>
        <div className="cat-hero-inner" style={{ display: 'flex', alignItems: 'center', gap: '30px', padding: 0, flexWrap: 'wrap' }}>
          <img src="/images/avatar.png" alt="Shathyapriyan" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 8px 24px rgba(0,0,0,0.2)', flexShrink: 0 }} />
          <div style={{ flex: '1 1 300px' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px', color: 'rgba(255,255,255,0.7)' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link> &nbsp;›&nbsp; <span style={{ color: '#fff' }}>About Me</span>
            </div>
            <h1 className="cat-hero-label" style={{ margin: 0 }}>Behind the Code</h1>
            <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>I'm Shathyapriyan, a Chennai-based web developer passionate about local business growth.</p>
          </div>
        </div>
      </div>
      
      <section style={{ minHeight: '80vh', backgroundColor: '#f8f8f2' }}>
        <div className="section-wrap" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <h2 className="section-title" style={{ marginBottom: '24px' }}>My Story</h2>
          <div style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '20px' }}>
              For the past 8 years, I've been helping businesses across Tamil Nadu establish their digital presence. What started as a fascination with code quickly turned into a mission: <strong>helping local businesses compete in a digital-first world.</strong>
            </p>
            <p style={{ marginBottom: '20px' }}>
              I realized early on that most business owners don't just want a "website." They want more phone calls, more foot traffic, and more sales. A website is just the vehicle to get there.
            </p>
            <p style={{ marginBottom: '20px' }}>
              That's why my approach is different. I don't just write code and hand over a template. I look at your business, optimize your local SEO, integrate AI chatbots to capture leads while you sleep, and build a digital ecosystem designed to generate revenue.
            </p>
          </div>

          <h2 className="section-title" style={{ marginTop: '50px', marginBottom: '24px' }}>My Tech Stack</h2>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'WordPress', 'SEO', 'AI Chatbots', 'Google Ads'].map((tech) => (
              <span key={tech} style={{ 
                background: '#0f7a5215', 
                color: '#0f7a52', 
                border: '1px solid #0f7a5230', 
                padding: '8px 16px', 
                borderRadius: '20px', 
                fontWeight: 600,
                fontSize: '0.9rem'
              }}>
                {tech}
              </span>
            ))}
          </div>

          <div style={{ marginTop: '60px', padding: '40px', background: '#fff', borderRadius: '20px', border: '1px solid #e0e0d4', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', fontWeight: 800 }}>Ready to grow your business?</h3>
            <p style={{ color: '#666', marginBottom: '24px' }}>Let's talk about your goals and how a strategic digital presence can get you there.</p>
            <Link href="/#consultation" className="btn-primary" style={{ display: 'inline-block' }}>
              Book a Consultation
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
