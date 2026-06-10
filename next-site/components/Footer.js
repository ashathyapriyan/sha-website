import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="main-footer">
      <p>© 2025 Shathyapriyan — Web &amp; Digital Growth, Chennai</p>
      <div className="footer-links">
        <Link href="/#services">Services</Link>
        <Link href="/#contact">Contact</Link>
        <a href="mailto:ashathyapriyan@gmail.com">Email</a>
      </div>
    </footer>
  );
}
