import React from 'react';
import Link from 'next/link';

export default function SaasProductsPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="cat-hero" style={{ padding: '40px 5%' }}>
        <div className="cat-hero-inner" style={{ display: 'flex', alignItems: 'center', gap: '30px', padding: 0 }}>
          <img src="/images/ai.png" alt="SaaS Products" style={{ width: '120px', height: '120px', borderRadius: '16px', objectFit: 'cover', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }} />
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px', color: 'rgba(255,255,255,0.7)' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link> &nbsp;›&nbsp; <span style={{ color: '#fff' }}>SaaS Products</span>
            </div>
            <h1 className="cat-hero-label" style={{ margin: 0 }}>Future SaaS Products</h1>
            <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>Exciting new software-as-a-service products are currently in development.</p>
          </div>
        </div>
      </div>
      <section style={{ minHeight: '60vh', backgroundColor: '#f8f8f2', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div className="section-wrap" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#111' }}>Coming Soon</h2>
          <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.6 }}>
            I am currently building some incredible SaaS tools designed to help local businesses automate their marketing and operations.
            <br /><br />
            Check back soon for updates, or contact me directly if you have a custom software requirement!
          </p>
          <Link href="/#contact" className="btn btn-primary" style={{ marginTop: '30px', display: 'inline-block' }}>Contact Me</Link>
        </div>
      </section>
    </div>
  );
}
