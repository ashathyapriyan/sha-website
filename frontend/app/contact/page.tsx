'use client';

import { useState } from 'react';
import CategoryHero from '@/components/CategoryHero';
import { submitContact } from '@/lib/api';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await submitContact(formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <CategoryHero 
        accent="#111111" 
        label="📬 Contact" 
        description="Have a project in mind or just want to say hi? Get in touch." 
        breadcrumbPath="Contact"
        image="/images/avatar.png"
      />
      <section className="section">
        <div className="contact-wrap">
          {status === 'success' && (
            <div className="alert alert-success">
              🎉 Thanks! Your message has been sent successfully. I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="alert alert-error">
              ⚠️ {errorMsg}
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required minLength={2} value={formData.name} onChange={handleChange} disabled={status === 'loading'} />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} disabled={status === 'loading'} />
            </div>
            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required minLength={2} value={formData.subject} onChange={handleChange} disabled={status === 'loading'} />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} required minLength={5} value={formData.message} onChange={handleChange} disabled={status === 'loading'} />
            </div>
            <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
