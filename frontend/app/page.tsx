'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { submitContact } from '@/lib/api';
import { motion } from 'framer-motion';
import TransformationStory from '@/components/TransformationStory';

const fadeUp = {
  hidden: { opacity: 0, y: 40, rotateX: -10, scale: 0.95 },
  visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function HomePage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const gridRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 4; // 4 service cards

  // Simple carousel dots logic for mobile
  const scrollToSlide = (idx: number) => {
    if (gridRef.current) {
      const cards = Array.from(gridRef.current.children) as HTMLElement[];
      if (cards[idx]) {
        gridRef.current.scrollTo({
          left: cards[idx].offsetLeft - gridRef.current.offsetLeft,
          behavior: 'smooth'
        });
        setCurrentSlide(idx);
      }
    }
  };

  const handleScroll = () => {
    if (gridRef.current) {
      const scrollLeft = gridRef.current.scrollLeft;
      const cardWidth = gridRef.current.children[0]?.clientWidth || 300;
      const index = Math.round(scrollLeft / cardWidth);
      if (index !== currentSlide && index >= 0 && index < totalSlides) {
        setCurrentSlide(index);
      }
    }
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const form = e.target as HTMLFormElement;
    const name = (form.querySelector('#f-name') as HTMLInputElement).value;
    const phone = (form.querySelector('#f-phone') as HTMLInputElement).value;
    const biz = (form.querySelector('#f-biz') as HTMLSelectElement).value;
    const msg = (form.querySelector('#f-msg') as HTMLTextAreaElement).value;

    try {
      await submitContact({
        name,
        email: phone.includes('@') ? phone : 'no-email@provided.com', // Provide a fallback if user types phone
        subject: biz || 'General Inquiry',
        message: msg + (phone && !phone.includes('@') ? `\n\nContact Phone: ${phone}` : ''),
      });
      setFormStatus('success');
      form.reset();
    } catch (err) {
      console.error(err);
      setFormStatus('error');
    }
  };

  return (
    <>
      <section className="hero dark-section" id="home" style={{ 
        backgroundImage: 'linear-gradient(rgba(17, 17, 17, 0.85), rgba(15, 122, 82, 0.85)), url("/images/dark_hero_bg.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="hero-inner">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="hero-text">
            <motion.div variants={fadeUp} className="hero-badge">Available for new projects</motion.div>
            <motion.h1 variants={fadeUp}>Web Developer &<br /><span>Digital Growth</span><br />Expert, Chennai</motion.h1>
            <motion.p variants={fadeUp}>8 years experience. 50+ websites built across Tamil Nadu. I help local businesses get found online, get more leads, and grow revenue — starting at just ₹500.</motion.p>
            <motion.div variants={fadeUp} className="hero-btns">
              <Link href="#consultation" className="btn-primary">Book Consultation — ₹199</Link>
              <Link href="#free-tools" className="btn-secondary">Free Tools ↓</Link>
            </motion.div>
            <motion.div variants={fadeUp} className="hero-stats">
              <div className="stat-item"><div className="num">50+</div><div className="lbl">Websites Built</div></div>
              <div className="stat-item"><div className="num">8</div><div className="lbl">Years Experience</div></div>
              <div className="stat-item"><div className="num">300%</div><div className="lbl">Avg Traffic Growth</div></div>
              <div className="stat-item"><div className="num">200+</div><div className="lbl">Free Resources</div></div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40, rotateY: 15 }} 
            animate={{ opacity: 1, x: 0, rotateY: 0 }} 
            transition={{ duration: 1, delay: 0.3, type: "spring" }} 
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
            className="hero-card"
            style={{ perspective: 1000 }}
          >
            <div className="card-profile">
              <img src="/images/avatar.png" alt="Shathyapriyan Avatar" className="avatar" style={{ objectFit: 'cover' }} />
              <div>
                <div className="name">Shathyapriyan</div>
                <div className="role">Web Developer & Digital Growth, Chennai</div>
              </div>
            </div>
            <div className="card-tags">
              <span className="tag tag-purple">React & Next.js</span>
              <span className="tag tag-green">SEO Expert</span>
              <span className="tag tag-orange">AI Chatbots</span>
              <span className="tag tag-purple">WordPress</span>
              <span className="tag tag-green">Google Ads</span>
            </div>
            <div className="result-row"><span>Dental Clinic, Anna Nagar</span><span className="rval">+40% bookings</span></div>
            <div className="result-row"><span>Restaurant, T Nagar</span><span className="rval">3× more orders</span></div>
            <div className="result-row"><span>Real Estate, OMR</span><span className="rval">2× leads/month</span></div>
            <div className="result-row"><span>Coaching Centre, Porur</span><span className="rval">₹2L+ revenue</span></div>
          </motion.div>
        </div>
      </section>

      <TransformationStory />

      <section id="free-tools">
        <motion.div className="section-wrap" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={fadeUp} className="section-label">100% Free — No Signup</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Free Tools & Resources</motion.h2>
          <motion.p variants={fadeUp} className="section-sub">Professional tools and learning resources built to help developers and business owners grow online.</motion.p>
          <motion.div variants={staggerContainer} className="tools-grid">
            
            <motion.div variants={fadeUp} whileHover={{ scale: 1.03, y: -10 }} className="tool-feature-card">
              <div className="tool-icon">🔍</div>
              <h3>SEO Analyzer</h3>
              <p>Instantly audit any website's SEO — check meta tags, Open Graph, Twitter Cards, schema markup, keyword density, and get an SEO score out of 100.</p>
              <div className="tool-tags">
                <span className="tool-tag">Meta Tags</span>
                <span className="tool-tag">Schema</span>
                <span className="tool-tag">Keywords</span>
                <span className="tool-tag">AI Suggestions</span>
              </div>
              <Link href="/tools" className="tool-cta">Launch SEO Analyzer →</Link>
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ scale: 1.03, y: -10 }} className="tool-feature-card">
              <div className="tool-icon">📚</div>
              <h3>Web Dev Tutorials</h3>
              <p>Read step-by-step guides for building modern web applications. HTML, CSS, JS, React, Next.js and more.</p>
              <div className="tool-tags">
                <span className="tool-tag">React</span>
                <span className="tool-tag">Next.js</span>
                <span className="tool-tag">Node.js</span>
              </div>
              <Link href="/tutorials" className="tool-cta">Start Learning →</Link>
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ scale: 1.03, y: -10 }} className="tool-feature-card">
              <div className="tool-icon">🤖</div>
              <h3>AI Agent Workflow</h3>
              <p>Automate your business with custom AI agents — lead capture, WhatsApp follow-ups, booking systems, and more.</p>
              <div className="tool-tags">
                <span className="tool-tag">AI Automation</span>
                <span className="tool-tag">WhatsApp Bot</span>
                <span className="tool-tag">Lead Gen</span>
              </div>
              <Link href="#contact" className="tool-cta secondary">Learn More →</Link>
            </motion.div>

          </motion.div>
        </motion.div>
      </section>

      <section id="consultation" style={{ 
        backgroundImage: 'linear-gradient(rgba(26, 39, 68, 0.88), rgba(17, 30, 56, 0.92)), url("/images/tech_bg.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <motion.div className="consult-inner" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.div variants={fadeUp}>
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
          </motion.div>
          <motion.div variants={fadeUp} whileHover={{ scale: 1.05, rotateY: -5, rotateX: 5 }} style={{ perspective: 1000 }}>
            <div className="consult-card">
              <div className="c-label">Online Consultation</div>
              <div className="c-price">₹199</div>
              <div className="c-unit">per 1 hour session</div>
              <div className="c-avail">🟢 Available 24/7</div>
              <Link href="#contact" className="book-btn">Book Now →</Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="services">
        <motion.div className="section-wrap" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={fadeUp} className="section-label">What I Offer</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Services & Pricing</motion.h2>
          <motion.p variants={fadeUp} className="section-sub">No hidden charges. Fixed price. Delivered on time. Every time.</motion.p>
          <motion.div variants={staggerContainer} className="services-grid" ref={gridRef} onScroll={handleScroll}>
            
            <motion.div variants={fadeUp} whileHover={{ scale: 1.03, y: -10 }} className="service-card">
              <div className="service-icon">🔍</div>
              <h3>Website Audit Report</h3>
              <p>15-point check — speed, SEO, mobile, security. Full report + fix plan delivered in 24 hours.</p>
              <div className="price">₹500</div>
              <div className="price-note">One-time • Delivered in 24hrs</div>
            </motion.div>
            
            <motion.div variants={fadeUp} whileHover={{ scale: 1.03, y: -10 }} className="service-card">
              <div className="service-icon">📄</div>
              <h3>New Page Added</h3>
              <p>Add a service page, landing page, or about page to your existing website. SEO-optimised.</p>
              <div className="price">₹999</div>
              <div className="price-note">One-time • Done in 2 days</div>
            </motion.div>
            
            <motion.div variants={fadeUp} whileHover={{ scale: 1.03, y: -10 }} className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Speed Fix</h3>
              <p>Make your site 3× faster. Slow websites lose customers. I fix it — images, code, hosting config.</p>
              <div className="price">₹1,499</div>
              <div className="price-note">One-time • Done in 3 days</div>
            </motion.div>
            
            <motion.div variants={fadeUp} whileHover={{ scale: 1.03, y: -10 }} className="service-card">
              <div className="service-icon">📈</div>
              <h3>SEO Starter Pack</h3>
              <p>On-page SEO fixes + Google Search Console setup. Get found on Google for local searches.</p>
              <div className="price">₹1,999</div>
              <div className="price-note">One-time • Done in 5 days</div>
            </motion.div>

          </motion.div>
          <div className="carousel-dots" id="service-dots">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <span 
                key={i} 
                className={currentSlide === i ? 'active' : ''} 
                onClick={() => scrollToSlide(i)} 
              />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/services" className="btn-secondary" style={{ display: 'inline-block' }}>Learn More About Services →</Link>
          </div>
        </motion.div>
      </section>

      <section id="why" className="dark-section" style={{ 
        backgroundImage: 'linear-gradient(rgba(26, 39, 68, 0.88), rgba(17, 30, 56, 0.92)), url("/images/dark_why_me_bg.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <motion.div className="section-wrap" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={fadeUp} className="section-label">Why Choose Me</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Local Expert.<br />Real Results.</motion.h2>
          <motion.p variants={fadeUp} className="section-sub">Not an agency. Not a freelancer from another city. I'm based in Chennai and I understand your customers.</motion.p>
          <motion.div variants={staggerContainer} className="why-grid">
            
            <motion.div variants={fadeUp} whileHover={{ scale: 1.05, y: -5 }} className="why-card">
              <div className="icon">📍</div>
              <h4>Chennai Based</h4>
              <p>I know the local market, Tamil Nadu businesses, and what works here. Not a generic solution.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} whileHover={{ scale: 1.05, y: -5 }} className="why-card">
              <div className="icon">⏱️</div>
              <h4>Fast Delivery</h4>
              <p>Most projects done in 2–7 days. Audit reports in 24 hours. No waiting weeks for simple work.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} whileHover={{ scale: 1.05, y: -5 }} className="why-card">
              <div className="icon">💬</div>
              <h4>WhatsApp Support</h4>
              <p>Direct communication on WhatsApp. No ticket system, no waiting for email replies.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} whileHover={{ scale: 1.05, y: -5 }} className="why-card">
              <div className="icon">💰</div>
              <h4>Fair Pricing</h4>
              <p>Starting at ₹500. No agency markup. You pay for work, not for office rent and designer chairs.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} whileHover={{ scale: 1.05, y: -5 }} className="why-card">
              <div className="icon">📊</div>
              <h4>Results Focused</h4>
              <p>I track leads, traffic, and conversions — not just page views. You see real business impact.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} whileHover={{ scale: 1.05, y: -5 }} className="why-card">
              <div className="icon">🔒</div>
              <h4>You Own Everything</h4>
              <p>Your domain, your hosting, your code. Full ownership. No lock-in contracts.</p>
            </motion.div>

          </motion.div>
          <motion.div variants={fadeUp} style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/why-me" className="btn-secondary" style={{ display: 'inline-block' }}>Learn More About Me →</Link>
          </motion.div>
        </motion.div>
      </section>

      <section id="process">
        <motion.div className="section-wrap" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={fadeUp} className="section-label">How It Works</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Simple 4-Step Process</motion.h2>
          <motion.p variants={fadeUp} className="section-sub">From first message to live website — here's exactly what happens.</motion.p>
          <motion.div variants={staggerContainer} className="process-steps">
            
            <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }} className="step">
              <div className="step-num">1</div>
              <h4>Book Consultation</h4>
              <p>Book a 1-hour online session for ₹199. Video or WhatsApp call — available 24/7.</p>
            </motion.div>
            <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }} className="step">
              <div className="step-num">2</div>
              <h4>Proposal & Price</h4>
              <p>I send a clear scope and fixed price. No surprises later.</p>
            </motion.div>
            <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }} className="step">
              <div className="step-num">3</div>
              <h4>I Build It</h4>
              <p>Fast turnaround. You get daily updates on WhatsApp.</p>
            </motion.div>
            <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }} className="step">
              <div className="step-num">4</div>
              <h4>Live & Growing</h4>
              <p>Your site goes live. I track results and report monthly.</p>
            </motion.div>

          </motion.div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/process" className="btn-secondary" style={{ display: 'inline-block' }}>Learn More About The Process →</Link>
          </div>
        </motion.div>
      </section>

      <section id="testimonials" className="dark-section" style={{ 
        backgroundImage: 'linear-gradient(rgba(15, 122, 82, 0.88), rgba(17, 17, 17, 0.95)), url("/images/dark_reviews_bg.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <motion.div className="section-wrap" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={fadeUp} className="section-label">Client Reviews</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">What Clients Say</motion.h2>
          <motion.div variants={staggerContainer} className="testimonials-grid">
            
            <motion.div variants={fadeUp} whileHover={{ scale: 1.03, y: -10 }} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Sha built our clinic website in just 5 days. Online appointment bookings went up 40% in the first month. Best investment we made."</p>
              <div className="client-info">
                <div className="cname">Dr. Ramesh Kumar</div>
                <div className="cbiz">Dental Clinic, Anna Nagar</div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} whileHover={{ scale: 1.03, y: -10 }} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Our restaurant now gets 3× more online orders since Sha set up our website and Google listing. Response was very quick and price was very reasonable."</p>
              <div className="client-info">
                <div className="cname">Murugan S.</div>
                <div className="cbiz">Restaurant Owner, T Nagar</div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} whileHover={{ scale: 1.03, y: -10 }} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"The ₹500 audit report showed me exactly why my site was slow. Sha fixed everything in 2 days. Now Google ranks us on page 1 for our area."</p>
              <div className="client-info">
                <div className="cname">Priya V.</div>
                <div className="cbiz">Interior Designer, Adyar</div>
              </div>
            </motion.div>

          </motion.div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/reviews" className="btn-secondary" style={{ display: 'inline-block' }}>Read More Reviews →</Link>
          </div>
        </motion.div>
      </section>

      <section id="contact">
        <motion.div className="section-wrap" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.span variants={fadeUp} className="section-label">Get In Touch</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Book a Session or<br />Send a Message</motion.h2>
          <div className="contact-wrap">
            <motion.div variants={fadeUp} className="contact-info">
              <p>Book a 1-hour online consultation for ₹199, or send a message about a project. I'll reply within 2 hours.</p>
              <div className="contact-item">
                <div className="ci">📧</div>
                <span>ashathyapriyan@gmail.com</span>
              </div>
              <div className="contact-item">
                <div className="ci">📍</div>
                <span>Chennai, Tamil Nadu</span>
              </div>
              <div className="contact-item">
                <div className="ci">⏰</div>
                <span>Online Consultation — 24/7 Available</span>
              </div>
              <br />
              <p style={{ fontSize: '.82rem', color: '#666' }}>🟢 Online Consultation — ₹199 / 1 hr<br />✅ Fixed price — no surprises<br />✅ WhatsApp updates throughout<br />✅ 1 month support after delivery</p>
            </motion.div>

            <motion.div variants={fadeUp} className="contact-form">
              <form onSubmit={submitForm}>
                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" id="f-name" placeholder="e.g. Ramesh Kumar" required />
                </div>
                <div className="form-group">
                  <label>Phone / WhatsApp *</label>
                  <input type="tel" id="f-phone" placeholder="e.g. 98765 43210" required />
                </div>
                <div className="form-group">
                  <label>Business Type</label>
                  <select id="f-biz">
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
                  <textarea id="f-msg" placeholder="e.g. I need a website for my dental clinic in Anna Nagar. Currently no online presence."></textarea>
                </div>
                <button type="submit" className="submit-btn" disabled={formStatus === 'sending'}>
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
                {formStatus === 'success' && (
                  <div className="form-success" style={{ display: 'block' }}>
                    ✅ Message sent! I'll reply within 2 hours on WhatsApp.
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="form-success" style={{ display: 'block', backgroundColor: '#fee2e2', color: '#b91c1c', borderColor: '#fca5a5' }}>
                    ❌ Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
