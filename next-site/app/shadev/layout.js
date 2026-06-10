import Link from 'next/link';
import ShadevNav from '@/components/ShadevNav';

export const metadata = {
  title: 'shadev.in — Tech News, Tutorials & Tools',
  description:
    'The latest in AI, space, technology, web development and digital marketing — plus hands-on tutorials and free tools, all in one place.',
};

export default function ShadevLayout({ children }) {
  return (
    <div className="shadev-root">
      <ShadevNav />
      <main className="shadev-main">{children}</main>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Link href="/shadev" className="sd-logo">sha<span>dev</span>.in</Link>
            <p>Tech news, tutorials and tools — built and maintained by Sha.</p>
          </div>
          <div className="footer-col">
            <h4>Sections</h4>
            <Link href="/shadev/ai-news">AI News</Link>
            <Link href="/shadev/space-news">Space News</Link>
            <Link href="/shadev/technology">Technology</Link>
            <Link href="/shadev/web-development">Web Development</Link>
            <Link href="/shadev/digital-marketing">Digital Marketing</Link>
          </div>
          <div className="footer-col">
            <h4>More</h4>
            <Link href="/shadev/tutorials">Tutorials</Link>
            <Link href="/shadev/tools">Tools</Link>
            <Link href="/shadev/portfolio">Portfolio</Link>
            <Link href="/shadev/blog">Blog</Link>
            <Link href="/shadev/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Sha&apos;s Portfolio</h4>
            <Link href="/">sha.dev →</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 shadev.in — All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
