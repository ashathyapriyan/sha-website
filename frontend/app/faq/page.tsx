import Link from 'next/link';

export const metadata = {
  title: 'FAQ | Web Development & SEO Questions Chennai',
  description: 'Frequently asked questions about website costs, SEO timelines, and AI automation for businesses in Chennai, answered by Shathyapriyan.',
};

export default function FAQPage() {
  const faqs = [
    {
      q: "How much does a website cost in Chennai?",
      a: "My prices are transparent. A simple website audit starts at just ₹500. A brand new 5-10 page professional business website ranges from ₹15,000 to ₹35,000 depending on features like booking systems or AI chat integrations."
    },
    {
      q: "How long does it take to build a website?",
      a: "Most standard business websites are completed and live within 7 to 14 days. Smaller tasks, like a page addition or an audit, are delivered in 24 to 48 hours."
    },
    {
      q: "Will my website show up on Google?",
      a: "Yes! Every website I build is optimized for Local SEO out-of-the-box. If you want to aggressively rank for specific keywords, I offer an SEO Starter Pack (₹1,999) to get your Google Business Profile and Search Console dialed in."
    },
    {
      q: "What is an AI Chatbot and why do I need one?",
      a: "An AI Chatbot sits on your website and acts like a 24/7 receptionist. It answers customer questions instantly, captures their contact info (leads), and can even book appointments directly into your calendar while you are sleeping."
    },
    {
      q: "Do I have to pay a monthly fee?",
      a: "You own your website code 100%. The only mandatory ongoing costs are your domain and hosting (usually ~₹3,000/year paid to providers like Hostinger/GoDaddy). However, I do offer optional Monthly Maintenance packages starting at ₹1,999/mo to keep your site updated, secure, and backed up."
    },
    {
      q: "How do we get started?",
      a: "It's simple! Book a 1-hour online consultation with me for ₹199. We will discuss your business, and I will give you a clear roadmap and fixed-price quote."
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="cat-hero" style={{ padding: '40px 5%' }}>
        <div className="cat-hero-inner" style={{ display: 'flex', alignItems: 'center', gap: '30px', padding: 0, flexWrap: 'wrap' }}>
          <div style={{ width: '120px', height: '120px', background: 'rgba(255,255,255,0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', flexShrink: 0 }}>❓</div>
          <div style={{ flex: '1 1 300px' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px', color: 'rgba(255,255,255,0.7)' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link> &nbsp;›&nbsp; <span style={{ color: '#fff' }}>FAQ</span>
            </div>
            <h1 className="cat-hero-label" style={{ margin: 0 }}>Frequently Asked Questions</h1>
            <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>Clear answers to the most common questions about working with me.</p>
          </div>
        </div>
      </div>
      
      <section style={{ minHeight: '80vh', backgroundColor: '#f8f8f2' }}>
        <div className="section-wrap" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #e0e0d4', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '12px', color: '#111' }}>{faq.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.6, fontSize: '0.95rem' }}>{faq.a}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '50px', textAlign: 'center' }}>
            <p style={{ color: '#666', marginBottom: '20px' }}>Still have questions? Send me a message directly.</p>
            <Link href="/#contact" className="btn-secondary" style={{ display: 'inline-block' }}>
              Contact Me
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
