import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { label: 'About', href: '/' },
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Help', href: '/help' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="GoooMusic home">
        <Image src="/images/gooomusic_splash_logo.png" alt="" width={42} height={42} priority />
        <span>GoooMusic</span>
      </Link>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>GoooMusic</span>
      <div>
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/help">Help</Link>
      </div>
    </footer>
  );
}