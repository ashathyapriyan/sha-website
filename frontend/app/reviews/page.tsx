import React from 'react';
import Link from 'next/link';

export default function ReviewsPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="cat-hero" style={{ padding: '40px 5%' }}>
        <div className="cat-hero-inner" style={{ display: 'flex', alignItems: 'center', gap: '30px', padding: 0 }}>
          <img src="/images/marketing.png" alt="Reviews" style={{ width: '120px', height: '120px', borderRadius: '16px', objectFit: 'cover', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }} />
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px', color: 'rgba(255,255,255,0.7)' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link> &nbsp;›&nbsp; <span style={{ color: '#fff' }}>Reviews</span>
            </div>
            <h1 className="cat-hero-label" style={{ margin: 0 }}>What Clients Say</h1>
            <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>Read reviews from verified businesses I've helped grow.</p>
          </div>
        </div>
      </div>
      <section id="testimonials" style={{ minHeight: '80vh', backgroundColor: '#f8f8f2' }}>
        <div className="section-wrap">
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Sha built our clinic website in just 5 days. Online appointment bookings went up 40% in the first month. Best investment we made."</p>
              <div className="client-info">
                <div className="cname">Dr. Ramesh Kumar</div>
                <div className="cbiz">Dental Clinic, Anna Nagar</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Our restaurant now gets 3× more online orders since Sha set up our website and Google listing. Response was very quick and price was very reasonable."</p>
              <div className="client-info">
                <div className="cname">Murugan S.</div>
                <div className="cbiz">Restaurant Owner, T Nagar</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"The ₹500 audit report showed me exactly why my site was slow. Sha fixed everything in 2 days. Now Google ranks us on page 1 for our area."</p>
              <div className="client-info">
                <div className="cname">Priya V.</div>
                <div className="cbiz">Interior Designer, Adyar</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
