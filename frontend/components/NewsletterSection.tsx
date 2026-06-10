'use client';

import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Stub — wire to email provider in Phase 2
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="newsletter">
      <div className="newsletter-inner">
        <h2>Get the weekly digest</h2>
        <p>One email every week with the best of AI, space, tech and tutorials. No spam.</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            id="newsletter-email"
          />
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>
        {status === 'success' && (
          <p className="newsletter-note success">🎉 You're subscribed! Welcome aboard.</p>
        )}
        {status === 'error' && (
          <p className="newsletter-note error">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}
