import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export const metadata: Metadata = {
  title: {
    default: 'Sha — Web Developer & Digital Growth, Chennai',
    template: '%s | Sha Web Developer',
  },
  description:
    '8 years experience. 50+ websites built across Tamil Nadu. Websites, SEO, AI Chatbots, Digital Marketing — starting ₹500.',
  keywords: 'web developer Chennai, SEO Chennai, website design Chennai, digital marketing Chennai, AI chatbot Chennai',
  metadataBase: new URL('https://shadev.in'),
  openGraph: {
    siteName: 'Sha Web Developer',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
