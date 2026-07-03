import Image from 'next/image';
import Link from 'next/link';

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <article className="feature-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Shared listening rooms</p>
          <h1>Listen together, no matter the distance.</h1>
          <p className="hero-text">
            GoooMusic creates real-time rooms where friends, fans, and communities hear the same song in sync, control the moment, and chat while the music plays.
          </p>
          <div className="hero-actions">
            <Link className="primary-action" href="/help">How it works</Link>
            <Link className="secondary-action" href="/privacy">Privacy</Link>
          </div>
        </div>
        <div className="player-preview" aria-label="GoooMusic room preview">
          <div className="room-code">ROOM CODE&nbsp;&nbsp; S4KVTZ</div>
          <div className="pulse-wrap">
            <Image src="/images/gooomusic_splash_logo.png" alt="GoooMusic" width={116} height={116} priority />
            <div className="bars" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div>
            <h2>Playing in sync</h2>
            <p>One room. One song. Everyone aligned.</p>
          </div>
          <div className="progress-line"><span /></div>
        </div>
      </section>

      <section className="feature-grid" aria-label="GoooMusic features">
        <Feature title="Real-time rooms" text="Create a room, share a code, and keep playback actions synchronized for everyone inside." />
        <Feature title="Music access" text="Use room-available tracks, previews, uploads, and GTN-based access rules without confusing preview and room playback." />
        <Feature title="Room safety" text="Admin tools, reports, locks, and control permissions help keep shared rooms intentional and respectful." />
      </section>
    </>
  );
}