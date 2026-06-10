'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const LINKS = [
  { href: '/shadev/ai-news', label: 'AI News', icon: '🤖' },
  { href: '/shadev/space-news', label: 'Space', icon: '🚀', mobLabel: 'Space News' },
  { href: '/shadev/technology', label: 'Technology', icon: '💻' },
  { href: '/shadev/web-development', label: 'Web Dev', icon: '🌐' },
  { href: '/shadev/digital-marketing', label: 'Marketing', icon: '📈' },
  { href: '/shadev/tutorials', label: 'Tutorials', icon: '📚' },
  { href: '/shadev/tools', label: 'Tools', icon: '🔧' },
  { href: '/shadev/portfolio', label: 'Portfolio', icon: '👤' },
  { href: '/shadev/blog', label: 'Blog', icon: '✍️' },
  { href: '/shadev/contact', label: 'Contact', icon: '📬' },
];

export default function ShadevNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div className="sha-banner">Also visit: <Link href="/">sha.dev Portfolio →</Link></div>
      <nav className="sd-navbar">
        <div className="sd-nav-inner">
          <Link href="/shadev" className="sd-logo">sha<span>dev</span>.in</Link>
          <div className="sd-nav-links">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={l.label === 'Contact' ? 'nav-contact-btn' : ''}>
                {l.label}
              </Link>
            ))}
          </div>
          <button className="sd-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>
      <div className={'sd-mob-overlay' + (open ? ' open' : '')}>
        <div className="sd-mob-top">
          <Link href="/shadev" className="sd-mob-logo" onClick={close}>sha<span>dev</span>.in</Link>
          <button className="sd-mob-close" onClick={close}>✕</button>
        </div>
        <div className="sd-mob-links">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={close}>
              {l.icon} {l.mobLabel || l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
