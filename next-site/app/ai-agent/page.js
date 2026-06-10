'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const BUILDS = [
  { icon: '💬', title: 'WhatsApp AI Agent', desc: 'Auto-reply enquiries, qualify leads, send quotes and book appointments — all on WhatsApp, round the clock.' },
  { icon: '🎯', title: 'Lead Generation Bot', desc: 'Scrapes prospects, sends personalised outreach, follows up automatically, and delivers hot leads straight to you.' },
  { icon: '📅', title: 'Booking & Scheduling', desc: 'AI that handles appointments, sends reminders, reschedules, and never lets a booking slip through the cracks.' },
  { icon: '📧', title: 'Email Automation', desc: 'Personalised cold email sequences, follow-ups, and warm-up workflows that convert strangers into paying clients.' },
  { icon: '📊', title: 'Leads Dashboard', desc: 'All your enquiries in one place — status, source, contact details, and one-click WhatsApp follow-up.' },
  { icon: '🔁', title: 'Custom Workflow', desc: 'Have a unique process? We build fully custom AI agents that slot seamlessly into your existing business flow.' },
];

const STEPS = [
  { title: 'Free Strategy Call', desc: 'We understand your business, pain points, and goals in a 30-minute call — no pressure, no sales pitch.' },
  { title: 'Custom Blueprint', desc: 'We design the exact AI workflow for your use case — clear deliverables, fixed price, agreed timeline.' },
  { title: 'Build & Test', desc: 'We build, test, and refine your AI agent until it works exactly as expected. You get updates on WhatsApp.' },
  { title: 'Go Live + Support', desc: 'Deploy to your business. We monitor, maintain, and improve as your needs grow. Always reachable.' },
];

const PLANS = [
  { price: '₹8,000', label: 'One-time setup', title: 'Starter Bot', features: ['WhatsApp auto-reply bot', 'Lead capture + storage', 'Leads dashboard', 'Telegram notifications', '1 month support'] },
  { price: '₹25,000', label: 'One-time setup', title: 'Business AI Agent', featured: true, features: ['Full AI lead gen workflow', 'WhatsApp + Email automation', 'Booking & scheduling bot', 'Custom CRM dashboard', 'Telegram control panel', '3 months support'] },
  { price: '₹75,000', label: 'One-time + monthly retainer', title: 'Enterprise Workflow', features: ['Multi-channel AI agent', 'Full sales funnel automation', 'CRM integration', 'Analytics & reporting', 'Priority support 24/7', 'Unlimited revisions'] },
];

export default function AiAgentPage() {
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', biz: '', email: '', need: 'WhatsApp Bot' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setSending(true);
    try {
      await fetch('https://income-agent-six.vercel.app/api/ai-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          business_name: form.biz + (form.need ? ' — ' + form.need : ''),
          email: form.email,
        }),
      });
    } catch (_) { /* silent — show success anyway */ }
    setDone(true);
  }

  return (
    <div>
      <Navbar />

      <div className="aia-hero">
        <div className="hero-badge">🤖 AI Agent Workflows · Chennai</div>
        <h1>Automate Your Business<br /><span>with AI Agents</span></h1>
        <p>We build custom AI workflows that run 24/7 — lead generation, WhatsApp bots, booking systems, follow-ups and more. You focus on your business. AI handles the rest.</p>
        <div className="hero-btns">
          <a href="#enquiry-form" className="btn-primary">Book Free Strategy Call →</a>
          <a className="btn-secondary" href="#what-we-build">See What We Build ↓</a>
        </div>
      </div>

      <div className="trust-bar">
        <div className="trust-item">⚡ <span><strong>24/7</strong> Automation</span></div>
        <div className="trust-item">📍 <span>Based in <strong>Chennai</strong></span></div>
        <div className="trust-item">🤖 <span>Custom <strong>AI Agents</strong></span></div>
        <div className="trust-item">💬 <span><strong>WhatsApp</strong> Bots</span></div>
        <div className="trust-item">📈 <span><strong>Lead Gen</strong> Workflows</span></div>
        <div className="trust-item">🏢 <span><strong>Any Business</strong>, Any Size</span></div>
      </div>

      <section id="what-we-build" className="sec">
        <div className="section-wrap">
          <span className="section-label">What We Build</span>
          <h2 className="section-title">AI Agents for Every Business</h2>
          <p className="section-sub">End-to-end automation workflows tailored to your exact needs.</p>
          <div className="services-grid">
            {BUILDS.map((b) => (
              <div className="service-card" key={b.title}>
                <div className="service-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works">
        <div className="section-wrap">
          <div className="center">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">From Call to Live Agent in Days</h2>
            <p className="section-sub" style={{ marginBottom: 40 }}>No jargon, no months of waiting. A clear 4-step process.</p>
          </div>
          <div className="process-steps">
            {STEPS.map((s, i) => (
              <div className="step" key={s.title}>
                <div className="step-counter">{i + 1}</div>
                <div className="step-num">{i + 1}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="sec">
        <div className="section-wrap">
          <div className="center">
            <span className="section-label">Investment</span>
            <h2 className="section-title">Transparent Pricing</h2>
            <p className="section-sub">Fixed price. No surprises. No lock-in contracts.</p>
          </div>
          <div className="price-grid">
            {PLANS.map((p) => (
              <div className={'price-card' + (p.featured ? ' featured' : '')} key={p.title}>
                {p.featured && <span className="featured-badge">⭐ Most Popular</span>}
                <div className="price-tag">{p.price}</div>
                <div className="price-label">{p.label}</div>
                <h3>{p.title}</h3>
                <ul className="price-features">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry-form">
        <div className="section-wrap">
          <div className="form-outer">
            <div className="form-header">
              <span className="section-label">Get Started</span>
              <h2>🚀 Build Your AI Agent</h2>
              <p>Fill in your details and we&apos;ll WhatsApp you within 24 hours to discuss your custom workflow.</p>
            </div>
            <div className="form-card">
              {!done ? (
                <form onSubmit={submit}>
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" placeholder="e.g. Ravi Kumar" required value={form.name} onChange={set('name')} />
                  </div>
                  <div className="form-group">
                    <label>WhatsApp / Mobile Number *</label>
                    <input type="tel" placeholder="e.g. 98765 43210" required value={form.phone} onChange={set('phone')} />
                  </div>
                  <div className="form-group">
                    <label>Business Name</label>
                    <input type="text" placeholder="e.g. Ravi's Jewellery, Anna Nagar" value={form.biz} onChange={set('biz')} />
                  </div>
                  <div className="form-group">
                    <label>Email ID</label>
                    <input type="email" placeholder="e.g. ravi@mybusiness.com" value={form.email} onChange={set('email')} />
                  </div>
                  <div className="form-group">
                    <label>What do you need?</label>
                    <select value={form.need} onChange={set('need')}>
                      <option value="WhatsApp Bot">💬 WhatsApp AI Bot</option>
                      <option value="Lead Generation">🎯 Lead Generation Bot</option>
                      <option value="Booking System">📅 Booking &amp; Scheduling</option>
                      <option value="Email Automation">📧 Email Automation</option>
                      <option value="Full AI Workflow">🤖 Full AI Workflow</option>
                      <option value="Not Sure">🤔 Not Sure — Need Advice</option>
                    </select>
                  </div>
                  <button type="submit" className="submit-btn" disabled={sending}>
                    {sending ? 'Sending…' : 'Book Free Strategy Call →'}
                  </button>
                </form>
              ) : (
                <div className="success-msg">
                  ✅ <strong>Received!</strong> We&apos;ll WhatsApp you within 24 hours to schedule your free strategy call.<br />
                  <span style={{ fontSize: '.85rem', color: '#888', marginTop: 8, display: 'block' }}>
                    In a hurry? Email directly →{' '}
                    <a href="mailto:ashathyapriyan@gmail.com" style={{ color: 'var(--accent)' }}>ashathyapriyan@gmail.com</a>
                  </span>
                </div>
              )}
            </div>
            <p className="form-note">
              🔒 Your details are safe. We never share your information.<br />
              <Link href="/">← Back to main site</Link>
            </p>
          </div>
        </div>
      </section>

      <footer className="main-footer">
        <p>© 2025 Shathyapriyan — Web &amp; AI Automation, Chennai</p>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#contact">Contact</Link>
          <a href="mailto:ashathyapriyan@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
}
