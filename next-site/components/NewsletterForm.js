'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [note, setNote] = useState('');
  const [email, setEmail] = useState('');

  function subscribe(e) {
    e.preventDefault();
    setNote(`Thanks! ${email} is subscribed to the weekly digest.`);
    setEmail('');
  }

  return (
    <>
      <form className="newsletter-form" onSubmit={subscribe}>
        <input
          type="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-primary-sd">Subscribe</button>
      </form>
      <p className="newsletter-note">{note}</p>
    </>
  );
}
