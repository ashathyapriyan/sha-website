'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 11;

  const scrollToSlide = (idx: number) => {
    if (gridRef.current) {
      const cards = Array.from(gridRef.current.children) as HTMLElement[];
      if (cards[idx]) {
        gridRef.current.scrollTo({
          left: cards[idx].offsetLeft - gridRef.current.offsetLeft,
          behavior: 'smooth'
        });
        setCurrentSlide(idx);
      }
    }
  };

  const handleScroll = () => {
    if (gridRef.current) {
      const scrollLeft = gridRef.current.scrollLeft;
      const cardWidth = gridRef.current.children[0]?.clientWidth || 300;
      const index = Math.round(scrollLeft / cardWidth);
      if (index !== currentSlide && index >= 0 && index < totalSlides) {
        setCurrentSlide(index);
      }
    }
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="cat-hero" style={{ padding: '40px 5%' }}>
        <div className="cat-hero-inner" style={{ display: 'flex', alignItems: 'center', gap: '30px', padding: 0 }}>
          <img src="/images/web.png" alt="Services" style={{ width: '120px', height: '120px', borderRadius: '16px', objectFit: 'cover', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }} />
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px', color: 'rgba(255,255,255,0.7)' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link> &nbsp;›&nbsp; <span style={{ color: '#fff' }}>Services</span>
            </div>
            <h1 className="cat-hero-label" style={{ margin: 0 }}>Services & Pricing</h1>
            <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>No hidden charges. Fixed price. Delivered on time. Every time.</p>
          </div>
        </div>
      </div>
      <section id="services" style={{ minHeight: '80vh' }}>
        <div className="section-wrap">
          <div className="services-grid" ref={gridRef} onScroll={handleScroll}>
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>Website Audit Report</h3>
              <p>15-point check — speed, SEO, mobile, security. Full report + fix plan delivered in 24 hours.</p>
              <div className="price">₹500</div>
              <div className="price-note">One-time • Delivered in 24hrs</div>
            </div>
            <div className="service-card">
              <div className="service-icon">📄</div>
              <h3>New Page Added</h3>
              <p>Add a service page, landing page, or about page to your existing website. SEO-optimised.</p>
              <div className="price">₹999</div>
              <div className="price-note">One-time • Done in 2 days</div>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Speed Fix</h3>
              <p>Make your site 3× faster. Slow websites lose customers. I fix it — images, code, hosting config.</p>
              <div className="price">₹1,499</div>
              <div className="price-note">One-time • Done in 3 days</div>
            </div>
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3>SEO Starter Pack</h3>
              <p>On-page SEO fixes + Google Search Console setup. Get found on Google for local searches.</p>
              <div className="price">₹1,999</div>
              <div className="price-note">One-time • Done in 5 days</div>
            </div>
            <div className="service-card">
              <div className="service-icon">✍️</div>
              <h3>Blog Post Written</h3>
              <p>1000-word SEO blog post — written, optimised, and published to your website for you.</p>
              <div className="price">₹2,499</div>
              <div className="price-note">One-time • Delivered in 48hrs</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>New Website</h3>
              <p>5–10 page professional website. Mobile-first, fast, SEO-ready. Includes 1 month post-launch support.</p>
              <div className="price">₹15,000 – ₹35,000</div>
              <div className="price-note">One-time • 7–14 days delivery</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🤖</div>
              <h3>AI Chatbot</h3>
              <p>Smart chatbot for your website — answers questions, captures leads, books appointments 24/7.</p>
              <div className="price">₹8,000 – ₹20,000</div>
              <div className="price-note">One-time setup + optional monthly</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🛠️</div>
              <h3>Monthly Maintenance</h3>
              <p>Updates, backups, security monitoring, 4 blog posts/month. Your website always up and running.</p>
              <div className="price">₹1,999 – ₹5,999/mo</div>
              <div className="price-note">Monthly retainer</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>Custom AI Agent</h3>
              <p>WhatsApp bot, booking system, lead gen bot, or any custom automation for your business.</p>
              <div className="price">₹25,000 – ₹75,000</div>
              <div className="price-note">Custom quote • Most popular 🔥</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Branding</h3>
              <p>Logo, colour palette, typography, brand guidelines — everything your business needs to look professional and consistent across all channels.</p>
              <div className="price">₹5,000 – ₹20,000</div>
              <div className="price-note">One-time • 5–10 days delivery</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🌟</div>
              <h3>Influencer Marketing</h3>
              <p>Connect with the right local Tamil Nadu influencers — Instagram, YouTube, and reels. Campaign strategy, creator outreach, and results tracking included.</p>
              <div className="price">₹8,000 – ₹30,000</div>
              <div className="price-note">Per campaign • Results tracked</div>
            </div>
          </div>
          <div className="carousel-dots" id="service-dots">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <span 
                key={i} 
                className={currentSlide === i ? 'active' : ''} 
                onClick={() => scrollToSlide(i)} 
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
