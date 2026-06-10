'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <nav id="navbar" style={{ boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,.4)' : 'none' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" className="logo">
            sha<span>.</span>dev
          </Link>
          <div className="nav-links" id="nav-links">
            <Link href="/#consultation">📅 Consultation — ₹199</Link>
            <div 
              className="nav-dropdown" 
              onMouseEnter={() => setDropdownOpen(true)} 
              onMouseLeave={() => setDropdownOpen(false)}
              style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <span style={{ fontSize: '.82rem', color: '#444', fontWeight: 500 }}>Resources ▾</span>
              {dropdownOpen && (
                <div 
                  className="dropdown-wrapper"
                  style={{
                    position: 'absolute', top: '100%', left: '-20px', 
                    paddingTop: '16px', // Invisible bridge to prevent hover loss
                    zIndex: 200, minWidth: '220px'
                  }}
                >
                  <div 
                    className="dropdown-menu"
                    style={{
                      background: '#fff', border: '1px solid #e0e0d4', borderRadius: '12px',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.08)', padding: '8px 0',
                      display: 'flex', flexDirection: 'column'
                    }}
                  >
                    <Link href="/ai-news" style={{ padding: '10px 20px', color: '#444', fontSize: '.85rem', fontWeight: 500, transition: '0.2s' }}>🤖 AI News</Link>
                    <Link href="/web-development" style={{ padding: '10px 20px', color: '#444', fontSize: '.85rem', fontWeight: 500, transition: '0.2s' }}>💻 Web Development</Link>
                    <Link href="/digital-marketing" style={{ padding: '10px 20px', color: '#444', fontSize: '.85rem', fontWeight: 500, transition: '0.2s' }}>📈 Digital Marketing</Link>
                    <Link href="/portfolio" style={{ padding: '10px 20px', color: '#444', fontSize: '.85rem', fontWeight: 500, transition: '0.2s' }}>🎨 Portfolio</Link>
                    <Link href="/blog" style={{ padding: '10px 20px', color: '#444', fontSize: '.85rem', fontWeight: 500, transition: '0.2s' }}>✍️ Blogging</Link>
                    <Link href="/saas-products" style={{ padding: '10px 20px', color: '#444', fontSize: '.85rem', fontWeight: 500, transition: '0.2s' }}>🚀 Future SaaS Products</Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/services">Services</Link>
            <Link href="/why-me">Why Me</Link>
            <Link href="/process">Process</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/#contact">Contact</Link>
            <Link href="/tools" className="tool-link">🔧 Tools</Link>
          </div>
          <Link href="/#consultation" className="nav-cta" id="nav-cta">
            Book Consultation
          </Link>
          <div className="hamburger" id="hamburger" onClick={toggleMenu}>
            <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}}></span>
            <span style={menuOpen ? { opacity: 0 } : {}}></span>
            <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}}></span>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} id="mobile-menu">
        <div className="mobile-menu-top">
          <div className="logo">sha<span>.</span>dev</div>
          <button className="mobile-close-btn" onClick={closeMenu}>✕</button>
        </div>
        <div className="mobile-menu-links">
          <Link href="/#consultation" onClick={closeMenu}>📅 Consultation — ₹199</Link>
          
          <div className="mobile-dropdown">
            <div 
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              style={{ display: 'block', fontSize: '1.15rem', fontWeight: 700, color: '#111111', padding: '16px 0', borderBottom: '1px solid #e0e0d4', cursor: 'pointer' }}
            >
              Resources {mobileDropdownOpen ? '▴' : '▾'}
            </div>
            {mobileDropdownOpen && (
              <div style={{ padding: '10px 0 10px 20px', display: 'flex', flexDirection: 'column', gap: '12px', background: '#f8f8f2', borderRadius: '8px', marginTop: '8px', marginBottom: '8px' }}>
                <Link href="/ai-news" onClick={closeMenu} style={{ padding: '0', border: 'none', fontSize: '1rem' }}>🤖 AI News</Link>
                <Link href="/web-development" onClick={closeMenu} style={{ padding: '0', border: 'none', fontSize: '1rem' }}>💻 Web Development</Link>
                <Link href="/digital-marketing" onClick={closeMenu} style={{ padding: '0', border: 'none', fontSize: '1rem' }}>📈 Digital Marketing</Link>
                <Link href="/portfolio" onClick={closeMenu} style={{ padding: '0', border: 'none', fontSize: '1rem' }}>🎨 Portfolio</Link>
                <Link href="/blog" onClick={closeMenu} style={{ padding: '0', border: 'none', fontSize: '1rem' }}>✍️ Blogging</Link>
                <Link href="/saas-products" onClick={closeMenu} style={{ padding: '0', border: 'none', fontSize: '1rem' }}>🚀 Future SaaS Products</Link>
              </div>
            )}
          </div>

          <Link href="/services" onClick={closeMenu}>Services</Link>
          <Link href="/why-me" onClick={closeMenu}>Why Me</Link>
          <Link href="/process" onClick={closeMenu}>Process</Link>
          <Link href="/reviews" onClick={closeMenu}>Reviews</Link>
          <Link href="/#contact" onClick={closeMenu}>Contact</Link>
          <Link href="/tools" className="tool-link" onClick={closeMenu}>🔧 Free Tools</Link>
        </div>
        <div className="mobile-menu-cta">
          <Link href="/#consultation" onClick={closeMenu}>
            Book Consultation — ₹199
          </Link>
        </div>
      </div>
    </>
  );
}
