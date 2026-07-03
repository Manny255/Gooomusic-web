import type { Metadata } from 'next';
import './globals.css';
import { SiteFooter, SiteHeader } from './components/SiteChrome';

export const metadata: Metadata = {
  title: 'GoooMusic | Listen Together',
  description: 'Create shared listening rooms where everyone hears the same song in sync.',
  metadataBase: new URL('https://gooomusic.gooofan.com'),
  openGraph: {
    title: 'GoooMusic',
    description: 'Listen together, no matter the distance.',
    url: 'https://gooomusic.gooofan.com',
    siteName: 'GoooMusic',
    images: ['/images/gooomusic_logo.png'],
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}