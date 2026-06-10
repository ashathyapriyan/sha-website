import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'My 4-Step Process | Web Development Chennai',
  description: 'From online consultation to live website. Learn exactly how I build websites and digital growth ecosystems for local businesses.',
};

export default function ProcessPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="cat-hero" style={{ padding: '40px 5%' }}>
        <div className="cat-hero-inner" style={{ display: 'flex', alignItems: 'center', gap: '30px', padding: 0 }}>
          <img src="/images/ai.png" alt="Process" style={{ width: '120px', height: '120px', borderRadius: '16px', objectFit: 'cover', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }} />
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px', color: 'rgba(255,255,255,0.7)' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link> &nbsp;›&nbsp; <span style={{ color: '#fff' }}>Process</span>
            </div>
            <h1 className="cat-hero-label" style={{ margin: 0 }}>Simple 4-Step Process</h1>
            <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>From first message to live website — here's exactly what happens.</p>
          </div>
        </div>
      </div>
      <section id="process" style={{ minHeight: '80vh' }}>
        <div className="section-wrap">
          <div className="process-steps">
            <div className="step">
              <div className="step-num">1</div>
              <h4>Book Consultation</h4>
              <p>Book a 1-hour online session for ₹199. Video or WhatsApp call — available 24/7.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h4>Proposal & Price</h4>
              <p>I send a clear scope and fixed price. No surprises later.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h4>I Build It</h4>
              <p>Fast turnaround. You get daily updates on WhatsApp.</p>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <h4>Live & Growing</h4>
              <p>Your site goes live. I track results and report monthly.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
