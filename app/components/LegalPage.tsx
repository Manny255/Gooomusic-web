import type { LegalSection } from '../content/legal';

export function LegalPage({ eyebrow, title, sections, updatedAt }: { eyebrow: string; title: string; sections: LegalSection[]; updatedAt: string }) {
  return (
    <section className="document-page">
      <div className="document-header">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>Last updated: {updatedAt}</p>
      </div>
      <div className="document-body">
        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </section>
  );
}