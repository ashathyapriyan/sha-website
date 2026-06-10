import Link from 'next/link';
import React from 'react';

interface Props {
  accent?: string;
  label: string;
  description: string;
  image?: string;
  breadcrumbPath?: string;
}

export default function CategoryHero({ accent, label, description, image, breadcrumbPath }: Props) {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section
        className="cat-hero"
        style={{ '--cat-accent': accent ?? '#0f7a52', padding: '40px 5%' } as React.CSSProperties}
      >
        <div className="cat-hero-inner" style={{ display: 'flex', alignItems: 'center', gap: '30px', padding: 0 }}>
          {image && (
            <img 
              src={image} 
              alt={label} 
              style={{ width: '120px', height: '120px', borderRadius: '16px', objectFit: 'cover', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }} 
            />
          )}
          <div>
            {breadcrumbPath && (
              <div style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px', color: 'rgba(255,255,255,0.7)' }}>
                <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link> &nbsp;›&nbsp; <span style={{ color: '#fff' }}>{breadcrumbPath}</span>
              </div>
            )}
            <h1 className="cat-hero-label" style={{ margin: 0 }}>{label}</h1>
            <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>{description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
