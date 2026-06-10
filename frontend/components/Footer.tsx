'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [showSticky, setShowSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const consultSection = document.getElementById('consultation');
      if (consultSection) {
        const rect = consultSection.getBoundingClientRect();
        // Hide sticky CTA when user can see the consultation card
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setShowSticky(false);
        } else {
          setShowSticky(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer className="big-footer" style={{ background: '#111', color: '#fff', padding: '80px 5% 40px', marginTop: 'auto' }}>
        <div className="footer-inner" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
          
          <div className="footer-col brand">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '16px' }}>sha.dev</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
              8 years of experience building modern, high-performance web applications and digital growth systems for businesses in Chennai and beyond.
            </p>
            <div className="socials" style={{ display: 'flex', gap: '12px' }}>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: '#fff' }}>in</a>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: '#fff' }}>tw</a>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: '#fff' }}>fb</a>
            </div>
          </div>

          <div className="footer-col links" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>Services</h4>
            <Link href="/services" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>Website Audits</Link>
            <Link href="/services" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>Performance Speed Fix</Link>
            <Link href="/services" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>SEO Starter Pack</Link>
            <Link href="/services" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>Custom Landing Pages</Link>
          </div>

          <div className="footer-col links" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>Resources</h4>
            <Link href="/ai-news" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>AI News & Trends</Link>
            <Link href="/web-development" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>Web Dev Tutorials</Link>
            <Link href="/digital-marketing" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>Digital Marketing Guides</Link>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>Personal Blog</Link>
            <Link href="/portfolio" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>My Portfolio</Link>
          </div>

          <div className="footer-col contact" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>Contact</h4>
            <a href="mailto:ashathyapriyan@gmail.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>📧 ashathyapriyan@gmail.com</a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>📍 Chennai, Tamil Nadu, India</span>
            <Link href="/contact" style={{ display: 'inline-block', marginTop: '12px', background: '#0f7a52', color: '#fff', padding: '8px 16px', borderRadius: '6px', textAlign: 'center', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Book a Session</Link>
          </div>

        </div>
        <div className="footer-bottom" style={{ maxWidth: '1100px', margin: '40px auto 0', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>© {new Date().getFullYear()} Shathyapriyan. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="#" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="#" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>Terms of Service</Link>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bottom CTA */}
      <div 
        className="mobile-sticky" 
        id="sticky-cta" 
        style={{ 
          opacity: showSticky ? 1 : 0, 
          pointerEvents: showSticky ? 'auto' : 'none',
          transition: 'opacity .3s' 
        }}
      >
        <Link href="/#consultation">
          🟢 Book Online Consultation
          <span className="ms-price">₹199 / 1 hr</span>
        </Link>
      </div>
    </>
  );
}
