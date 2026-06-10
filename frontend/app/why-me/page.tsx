import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Why Choose Me | Shathyapriyan',
  description: 'Local expert based in Chennai. Fair pricing, fast delivery, direct WhatsApp support, and full code ownership.',
};

export default function WhyMePage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="cat-hero" style={{ padding: '40px 5%' }}>
        <div className="cat-hero-inner" style={{ display: 'flex', alignItems: 'center', gap: '30px', padding: 0 }}>
          <img src="/images/avatar.png" alt="Why Me" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }} />
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px', color: 'rgba(255,255,255,0.7)' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link> &nbsp;›&nbsp; <span style={{ color: '#fff' }}>Why Me</span>
            </div>
            <h1 className="cat-hero-label" style={{ margin: 0 }}>Local Expert. Real Results.</h1>
            <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>Not an agency. Not a freelancer from another city. I'm based in Chennai and I understand your customers.</p>
          </div>
        </div>
      </div>
      <section id="why" style={{ minHeight: '80vh', backgroundColor: '#f8f8f2' }}>
        <div className="section-wrap">
          <div className="why-grid">
            <div className="why-card">
              <div className="icon">📍</div>
              <h4>Chennai Based</h4>
              <p>I know the local market, Tamil Nadu businesses, and what works here. Not a generic solution.</p>
            </div>
            <div className="why-card">
              <div className="icon">⏱️</div>
              <h4>Fast Delivery</h4>
              <p>Most projects done in 2–7 days. Audit reports in 24 hours. No waiting weeks for simple work.</p>
            </div>
            <div className="why-card">
              <div className="icon">💬</div>
              <h4>WhatsApp Support</h4>
              <p>Direct communication on WhatsApp. No ticket system, no waiting for email replies.</p>
            </div>
            <div className="why-card">
              <div className="icon">💰</div>
              <h4>Fair Pricing</h4>
              <p>Starting at ₹500. No agency markup. You pay for work, not for office rent and designer chairs.</p>
            </div>
            <div className="why-card">
              <div className="icon">📊</div>
              <h4>Results Focused</h4>
              <p>I track leads, traffic, and conversions — not just page views. You see real business impact.</p>
            </div>
            <div className="why-card">
              <div className="icon">🔒</div>
              <h4>You Own Everything</h4>
              <p>Your domain, your hosting, your code. Full ownership. No lock-in contracts.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
