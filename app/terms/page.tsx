import { LegalPage } from '../components/LegalPage';
import { termsSections, updatedAt } from '../content/legal';

export const metadata = {
  title: 'Terms of Use | GoooMusic',
  description: 'Terms for using GoooMusic shared listening rooms.',
};

export default function TermsPage() {
  return <LegalPage eyebrow="Legal" title="Terms of Use" sections={termsSections} updatedAt={updatedAt} />;
}