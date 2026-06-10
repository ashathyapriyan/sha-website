'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="main-nav">
        <div className="logo"><Link href="/">sha<span>.</span>dev</Link></div>
        <div className="nav-links">
          <Link href="/#consultation">📅 Consultation — ₹199</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#why">Why Me</Link>
          <Link href="/#process">Process</Link>
          <Link href="/#testimonials">Reviews</Link>
          <Link href="/#contact">Contact</Link>
          <Link href="/seo-analyzer" className="tool-link">🔍 SEO Tool</Link>
          <Link href="/interview-course" className="tool-link">📚 Interview Q&amp;A</Link>
          <Link href="/ai-agent" className="tool-link">🤖 AI Agent</Link>
        </div>
        <Link href="/#consultation" className="nav-cta">Book Consultation</Link>
        <button
          className={'hamburger' + (open ? ' open' : '')}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={'mobile-menu-overlay' + (open ? ' open' : '')}>
        <div className="mobile-menu-top">
          <div className="logo">sha<span>.</span>dev</div>
          <button className="mobile-close-btn" onClick={close}>✕</button>
        </div>
        <div className="mobile-menu-links">
          <Link href="/#consultation" onClick={close}>📅 Consultation — ₹199</Link>
          <Link href="/#services" onClick={close}>Services</Link>
          <Link href="/#why" onClick={close}>Why Me</Link>
          <Link href="/#process" onClick={close}>Process</Link>
          <Link href="/#testimonials" onClick={close}>Reviews</Link>
          <Link href="/#contact" onClick={close}>Contact</Link>
          <Link href="/#free-tools" onClick={close}>🔧 Free Tools</Link>
          <Link href="/seo-analyzer" className="tool-link" onClick={close}>🔍 SEO Analyzer</Link>
          <Link href="/interview-course" className="tool-link" onClick={close}>📚 Interview Q&amp;A</Link>
          <Link href="/ai-agent" className="tool-link" onClick={close}>🤖 AI Agent</Link>
        </div>
        <div className="mobile-menu-cta">
          <Link href="/#consultation" onClick={close}>Book Consultation — ₹199</Link>
        </div>
      </div>
    </>
  );
}
