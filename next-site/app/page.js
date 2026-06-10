'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SERVICES = [
  { icon: '🔍', title: 'Website Audit Report', desc: '15-point check — speed, SEO, mobile, security. Full report + fix plan delivered in 24 hours.', price: '₹500', note: 'One-time • Delivered in 24hrs' },
  { icon: '📄', title: 'New Page Added', desc: 'Add a service page, landing page, or about page to your existing website. SEO-optimised.', price: '₹999', note: 'One-time • Done in 2 days' },
  { icon: '⚡', title: 'Speed Fix', desc: 'Make your site 3× faster. Slow websites lose customers. I fix it — images, code, hosting config.', price: '₹1,499', note: 'One-time • Done in 3 days' },
  { icon: '📈', title: 'SEO Starter Pack', desc: 'On-page SEO fixes + Google Search Console setup. Get found on Google for local searches.', price: '₹1,999', note: 'One-time • Done in 5 days' },
  { icon: '✍️', title: 'Blog Post Written', desc: '1000-word SEO blog post — written, optimised, and published to your website for you.', price: '₹2,499', note: 'One-time • Delivered in 48hrs' },
  { icon: '🌐', title: 'New Website', desc: '5–10 page professional website. Mobile-first, fast, SEO-ready. Includes 1 month post-launch support.', price: '₹15,000 – ₹35,000', note: 'One-time • 7–14 days delivery' },
  { icon: '🤖', title: 'AI Chatbot', desc: 'Smart chatbot for your website — answers questions, captures leads, books appointments 24/7.', price: '₹8,000 – ₹20,000', note: 'One-time setup + optional monthly' },
  { icon: '🛠️', title: 'Monthly Maintenance', desc: 'Updates, backups, security monitoring, 4 blog posts/month. Your website always up and running.', price: '₹1,999 – ₹5,999/mo', note: 'Monthly retainer' },
  { icon: '🚀', title: 'Custom AI Agent', desc: 'WhatsApp bot, booking system, lead gen bot, or any custom automation for your business.', price: '₹25,000 – ₹75,000', note: 'Custom quote • Most popular 🔥' },
  { icon: '🎨', title: 'Branding', desc: 'Logo, colour palette, typography, brand guidelines — everything your business needs to look professional and consistent across all channels.', price: '₹5,000 – ₹20,000', note: 'One-time • 5–10 days delivery' },
  { icon: '🌟', title: 'Influencer Marketing', desc: 'Connect with the right local Tamil Nadu influencers — Instagram, YouTube, and reels. Campaign strategy, creator outreach, and results tracking included.', price: '₹8,000 – ₹30,000', note: 'Per campaign • Results tracked' },
];

const WHY = [
  { icon: '📍', title: 'Chennai Based', desc: 'I know the local market, Tamil Nadu businesses, and what works here. Not a generic solution.' },
  { icon: '⏱️', title: 'Fast Delivery', desc: 'Most projects done in 2–7 days. Audit reports in 24 hours. No waiting weeks for simple work.' },
  { icon: '💬', title: 'WhatsApp Support', desc: 'Direct communication on WhatsApp. No ticket system, no waiting for email replies.' },
  { icon: '💰', title: 'Fair Pricing', desc: 'Starting at ₹500. No agency markup. You pay for work, not for office rent and designer chairs.' },
  { icon: '📊', title: 'Results Focused', desc: 'I track leads, traffic, and conversions — not just page views. You see real business impact.' },
  { icon: '🔒', title: 'You Own Everything', desc: 'Your domain, your hosting, your code. Full ownership. No lock-in contracts.' },
];

const STEPS = [
  { title: 'Book Consultation', desc: 'Book a 1-hour online session for ₹199. Video or WhatsApp call — available 24/7.' },
  { title: 'Proposal & Price', desc: 'I send a clear scope and fixed price. No surprises later.' },
  { title: 'I Build It', desc: 'Fast turnaround. You get daily updates on WhatsApp.' },
  { title: 'Live & Growing', desc: 'Your site goes live. I track results and report monthly.' },
];

const TESTIMONIALS = [
  { text: '"Sha built our clinic website in just 5 days. Online appointment bookings went up 40% in the first month. Best investment we made."', name: 'Dr. Ramesh Kumar', biz: 'Dental Clinic, Anna Nagar' },
  { text: '"Our restaurant now gets 3× more online orders since Sha set up our website and Google listing. Response was very quick and price was very reasonable."', name: 'Murugan S.', biz: 'Restaurant Owner, T Nagar' },
  { text: '"The ₹500 audit report showed me exactly why my site was slow. Sha fixed everything in 2 days. Now Google ranks us on page 1 for our area."', name: 'Priya V.', biz: 'Interior Designer, Adyar' },
];

export default function HomePage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', biz: '', msg: '' });

  async function submitForm(e) {
    e.preventDefault();
    setSending(true);
    try {
      await fetch('https://income-agent-six.vercel.app/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, phone: form.phone, business_type: form.biz, message: form.msg }),
      });
    } catch (_) { /* silent */ }
    setSent(true);
    setForm({ name: '', phone: '', biz: '', msg: '' });
    setSending(false);
  }

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <div className="home-page">
      <Navbar />

      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-badge">Available for new projects</div>
            <h1>Web Developer &<br /><span>Digital Growth</span><br />Expert, Chennai</h1>
            <p>8 years experience. 50+ websites built across Tamil Nadu. I help local businesses get found online, get more leads, and grow revenue — starting at just ₹500.</p>
            <div className="hero-btns">
              <a href="#consultation" className="btn-primary">Book Consultation — ₹199</a>
              <a href="#free-tools" className="btn-secondary">Free Tools ↓</a>
            </div>
            <div className="hero-stats">
              <div className="stat-item"><div className="num">50+</div><div className="lbl">Websites Built</div></div>
              <div className="stat-item"><div className="num">8</div><div className="lbl">Years Experience</div></div>
              <div className="stat-item"><div className="num">300%</div><div className="lbl">Avg Traffic Growth</div></div>
              <div className="stat-item"><div className="num">200+</div><div className="lbl">Free Resources</div></div>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-profile">
              <div className="avatar">S</div>
              <div>
                <div className="name">Shathyapriyan</div>
                <div className="role">Web Developer &amp; Digital Growth, Chennai</div>
              </div>
            </div>
            <div className="card-tags">
              <span className="tag tag-purple">React &amp; Next.js</span>
              <span className="tag tag-green">SEO Expert</span>
              <span className="tag tag-orange">AI Chatbots</span>
              <span className="tag tag-purple">WordPress</span>
              <span className="tag tag-green">Google Ads</span>
            </div>
            <div className="result-row"><span>Dental Clinic, Anna Nagar</span><span className="rval">+40% bookings</span></div>
            <div className="result-row"><span>Restaurant, T Nagar</span><span className="rval">3× more orders</span></div>
            <div className="result-row"><span>Real Estate, OMR</span><span className="rval">2× leads/month</span></div>
            <div className="result-row"><span>Coaching Centre, Porur</span><span className="rval">₹2L+ revenue</span></div>
          </div>
        </div>
      </section>

      <section id="free-tools" className="sec">
        <div className="section-wrap">
          <span className="section-label">100% Free — No Signup</span>
          <h2 className="section-title">Free Tools &amp; Resources</h2>
          <p className="section-sub">Professional tools and learning resources built to help developers and business owners grow online.</p>
          <div className="tools-feature-grid">
            <div className="tool-feature-card">
              <div className="tf-icon">🔍</div>
              <h3>SEO Analyzer</h3>
              <p>Instantly audit any website&apos;s SEO — check meta tags, Open Graph, Twitter Cards, schema markup, keyword density, and get an SEO score out of 100.</p>
              <div className="tf-tags">
                <span className="tf-tag">Meta Tags</span>
                <span className="tf-tag">Schema</span>
                <span className="tf-tag">Keywords</span>
                <span className="tf-tag">AI Suggestions</span>
              </div>
              <Link href="/seo-analyzer" className="tool-cta">Launch SEO Analyzer →</Link>
            </div>
            <div className="tool-feature-card">
              <div className="tf-icon">📚</div>
              <h3>Web Dev Interview Course</h3>
              <p>200 interview questions with full answers and a live code editor — just like W3Schools. Try the code right in your browser. HTML, CSS, JS, React, Node.js and more.</p>
              <div className="tf-tags">
                <span className="tf-tag">200 Questions</span>
                <span className="tf-tag">Live Editor</span>
                <span className="tf-tag">10 Topics</span>
                <span className="tf-tag">Free</span>
              </div>
              <Link href="/interview-course" className="tool-cta">Start Learning →</Link>
            </div>
            <div className="tool-feature-card">
              <div className="tf-icon">🤖</div>
              <h3>AI Agent Workflow</h3>
              <p>Automate your business with custom AI agents — lead capture, WhatsApp follow-ups, booking systems, and more. See how AI can work for your Tamil Nadu business.</p>
              <div className="tf-tags">
                <span className="tf-tag">AI Automation</span>
                <span className="tf-tag">WhatsApp Bot</span>
                <span className="tf-tag">Lead Gen</span>
              </div>
              <Link href="/ai-agent" className="tool-cta secondary">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="consultation">
        <div className="consult-inner">
          <div>
            <span className="consult-badge">🟢 24/7 Available</span>
            <h2>Online Consultation<br /><span>with Sha</span></h2>
            <p>Got questions about your website, SEO, or digital presence? Book a 1-hour session and get clear answers, an action plan, and expert advice — all live on video or WhatsApp call.</p>
            <div className="consult-features">
              <span>🎥 Video or WhatsApp Call</span>
              <span>📋 Written Summary After</span>
              <span>🔍 SEO / Website / AI Advice</span>
              <span>⚡ Same-day Booking</span>
              <span>🌐 Any Business, Any Industry</span>
            </div>
          </div>
          <div className="consult-card">
            <div className="c-label">Online Consultation</div>
            <div className="c-price">₹199</div>
            <div className="c-unit">per 1 hour session</div>
            <div className="c-avail">🟢 Available 24/7</div>
            <a href="#contact" className="book-btn">Book Now →</a>
          </div>
        </div>
      </section>

      <section id="services" className="sec">
        <div className="section-wrap">
          <span className="section-label">What I Offer</span>
          <h2 className="section-title">Services &amp; Pricing</h2>
          <p className="section-sub">No hidden charges. Fixed price. Delivered on time. Every time.</p>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="price">{s.price}</div>
                <div className="price-note">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="sec">
        <div className="section-wrap">
          <span className="section-label">Why Choose Me</span>
          <h2 className="section-title">Local Expert.<br />Real Results.</h2>
          <p className="section-sub">Not an agency. Not a freelancer from another city. I&apos;m based in Chennai and I understand your customers.</p>
          <div className="why-grid">
            {WHY.map((w) => (
              <div className="why-card" key={w.title}>
                <div className="icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="sec">
        <div className="section-wrap">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Simple 4-Step Process</h2>
          <p className="section-sub">From first message to live website — here&apos;s exactly what happens.</p>
          <div className="process-steps">
            {STEPS.map((s, i) => (
              <div className="step" key={s.title}>
                <div className="step-num">{i + 1}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="sec">
        <div className="section-wrap">
          <span className="section-label">Client Reviews</span>
          <h2 className="section-title">What Clients Say</h2>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <div className="testimonial-card" key={t.name}>
                <div className="stars">★★★★★</div>
                <p>{t.text}</p>
                <div className="client-info">
                  <div className="cname">{t.name}</div>
                  <div className="cbiz">{t.biz}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="sec">
        <div className="section-wrap">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Book a Session or<br />Send a Message</h2>
          <div className="contact-wrap-main">
            <div className="contact-info">
              <p>Book a 1-hour online consultation for ₹199, or send a message about a project. I&apos;ll reply within 2 hours.</p>
              <div className="contact-item"><div className="ci">📧</div><span>ashathyapriyan@gmail.com</span></div>
              <div className="contact-item"><div className="ci">📍</div><span>Chennai, Tamil Nadu</span></div>
              <div className="contact-item"><div className="ci">⏰</div><span>Online Consultation — 24/7 Available</span></div>
              <br />
              <p style={{ fontSize: '.82rem', color: '#666' }}>
                🟢 Online Consultation — ₹199 / 1 hr<br />✅ Fixed price — no surprises<br />✅ WhatsApp updates throughout<br />✅ 1 month support after delivery
              </p>
            </div>
            <div className="contact-form-main">
              <form onSubmit={submitForm}>
                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" placeholder="e.g. Ramesh Kumar" required value={form.name} onChange={set('name')} />
                </div>
                <div className="form-group">
                  <label>Phone / WhatsApp *</label>
                  <input type="tel" placeholder="e.g. 98765 43210" required value={form.phone} onChange={set('phone')} />
                </div>
                <div className="form-group">
                  <label>Business Type</label>
                  <select value={form.biz} onChange={set('biz')}>
                    <option value="">Select your business</option>
                    <option>Restaurant / Cafe</option>
                    <option>Clinic / Hospital</option>
                    <option>Real Estate</option>
                    <option>Retail / Shop</option>
                    <option>Education / Coaching</option>
                    <option>Interior Design</option>
                    <option>Event Management</option>
                    <option>Travel / Tours</option>
                    <option>Branding</option>
                    <option>Influencer Marketing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>What do you need?</label>
                  <textarea placeholder="e.g. I need a website for my dental clinic in Anna Nagar. Currently no online presence." value={form.msg} onChange={set('msg')} />
                </div>
                <button type="submit" className="submit-btn" disabled={sending}>
                  {sending ? 'Sending…' : 'Send Message →'}
                </button>
                {sent && (
                  <div className="form-success">✅ Message sent! I&apos;ll reply within 2 hours on WhatsApp.</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <div className="mobile-sticky">
        <a href="#consultation">
          🟢 Book Online Consultation
          <span className="ms-price">₹199 / 1 hr</span>
        </a>
      </div>
    </div>
  );
}
