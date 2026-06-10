import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: 'Sha — Web Developer & Digital Growth, Chennai',
  description:
    '8 years experience. 50+ websites built across Tamil Nadu. Websites, SEO, AI Chatbots, Digital Marketing — starting ₹500.',
  keywords:
    'web developer Chennai, SEO Chennai, website design Chennai, digital marketing Chennai, AI chatbot Chennai',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
