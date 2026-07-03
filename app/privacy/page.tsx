import { LegalPage } from '../components/LegalPage';
import { privacySections, updatedAt } from '../content/legal';

export const metadata = {
  title: 'Privacy Policy | GoooMusic',
  description: 'How GoooMusic handles data, sessions, rooms, account linking, and playback information.',
};

export default function PrivacyPage() {
  return <LegalPage eyebrow="Privacy" title="Privacy Policy" sections={privacySections} updatedAt={updatedAt} />;
}