export const metadata = { title: 'Contact — shadev.in' };

export default function ContactPage() {
  return (
    <>
      <section className="cat-hero" style={{ '--accent': '#111111' }}>
        <div className="cat-hero-inner">
          <span className="cat-hero-label">📬 Contact</span>
          <p>Have a question, a project, or just want to say hi? Send a message.</p>
        </div>
      </section>
      <section className="section">
        <div className="contact-wrap">
          <form className="contact-form" method="POST" action="https://formsubmit.co/ashathyapriyan@gmail.com">
            <input type="hidden" name="_subject" value="New message from shadev.in contact form" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" minLength={2} required placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="you@example.com" />
            </div>
            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" minLength={2} required placeholder="What is this about?" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} minLength={5} required placeholder="Your message..." />
            </div>
            <button type="submit" className="btn btn-primary-sd">Send message</button>
          </form>
        </div>
      </section>
    </>
  );
}
