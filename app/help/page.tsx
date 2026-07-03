import { helpTopics } from '../content/legal';

export const metadata = {
  title: 'Help Center | GoooMusic',
  description: 'Help for creating rooms, joining shared listening sessions, using music, and reporting issues.',
};

export default function HelpPage() {
  return (
    <section className="document-page">
      <div className="document-header">
        <p className="eyebrow">Support</p>
        <h1>Help Center</h1>
        <p>Quick answers for creating rooms, joining friends, using music, and reporting issues.</p>
      </div>
      <div className="help-grid">
        {helpTopics.map((topic) => (
          <article key={topic.title} className="help-card">
            <h2>{topic.title}</h2>
            <p>{topic.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}