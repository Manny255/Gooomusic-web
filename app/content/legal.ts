export type LegalSection = {
  title: string;
  body: string[];
};

export const updatedAt = 'July 28, 2026';

export const termsSections: LegalSection[] = [
  {
    title: 'Using GoooMusic',
    body: [
      'GoooMusic lets people create or join shared listening rooms, play eligible music, chat, report rooms, and link a Gooofan account for token and wallet features.',
      'You are responsible for how you use rooms, uploaded content, chat, room names, tags, and shared links. Do not use GoooMusic for harassment, illegal activity, fraud, spam, impersonation, or content that infringes another person\'s rights.',
    ],
  },
  {
    title: 'Age, community safety, and zero tolerance',
    body: [
      'GoooMusic shared rooms and anonymous chat are intended for people who are 18 or older. By using room chat, room tags, uploads, shared links, or other community features, you confirm that you meet this age requirement and agree to these terms.',
      'We have no tolerance for objectionable content or abusive users. Do not post, upload, tag, link, or share content that is harassing, threatening, hateful, sexually explicit, exploitative, spam, fraudulent, illegal, invasive of privacy, or otherwise unsafe.',
      'GoooMusic may filter, reject, hide, remove, or limit content before or after it is posted. Users who violate these rules may be muted, removed from rooms, blocked, restricted, suspended, or permanently ejected from Gooofan and GoooMusic services.',
    ],
  },
  {
    title: 'Music and content rights',
    body: [
      'Only upload or select music that you own, are licensed to use, or are otherwise allowed to use in a shared room. GoooMusic may remove content, disable room access, or restrict features when content appears to violate rights, laws, or platform rules.',
      'Artists and rights holders remain responsible for their own music, artwork, titles, descriptions, and related metadata. Users must not bypass access controls or token requirements for room-available music.',
    ],
  },
  {
    title: 'Rooms, controls, and moderation',
    body: [
      'Room administrators may control playback, lock rooms, mute participants from controlling room actions, edit room tags, deactivate rooms, and review participants. Muting limits control permissions; it is not designed to mute a listener\'s device audio.',
      'Users can report rooms or messages, block abusive participants, and remove their own chat messages from the feed. Room creators can deactivate rooms immediately when a room becomes unsafe or inappropriate.',
      'We review objectionable-content and abuse reports within 24 hours. When a violation is confirmed, we remove the offending content where available and may eject, block, suspend, or otherwise restrict the user or session responsible.',
    ],
  },
  {
    title: 'Tokens and account linking',
    body: [
      'Some music, chat, wallet, or account features may require Gooofan Token (GTN), a linked Gooofan account, or temporary access. Availability, pricing, and duration may change based on product rules and regional requirements.',
      'Do not attempt to manipulate balances, access windows, playback counts, or room analytics. Suspicious activity may result in blocked access or account review.',
    ],
  },
  {
    title: 'Service availability',
    body: [
      'We work to keep GoooMusic reliable, but shared playback depends on networks, devices, media hosting, and third-party platforms. We may update, suspend, limit, or discontinue features when needed for safety, compliance, performance, or product changes.',
      'GoooMusic is provided as-is to the fullest extent allowed by law. Nothing in these terms limits rights that cannot legally be limited.',
    ],
  },
  {
    title: 'Changes to these terms',
    body: [
      'We may update these terms as GoooMusic grows. If a change is important, we will make reasonable efforts to make the updated terms available through the app or website.',
    ],
  },
];

export const privacySections: LegalSection[] = [
  {
    title: 'Information we process',
    body: [
      'GoooMusic may process session identifiers, room codes, room activity, playback state, selected tracks, uploads, reports, chat messages, token access status, linked Gooofan account information, device and network diagnostics, and basic app usage information.',
      'If you link your Gooofan account, we may use the linked account status, username, token balance, wallet access state, and verification information needed to connect the two services.',
    ],
  },
  {
    title: 'How we use information',
    body: [
      'We use information to create and join rooms, keep playback synchronized, process uploads, manage token access, support chat, detect abuse, process reports, improve reliability, protect users, comply with law, and operate Gooofan and GoooMusic features.',
      'Playback synchronization requires server-authoritative room timing, track identifiers, participant session state, and related connection events so listeners can hear the same song at the same moment.',
    ],
  },
  {
    title: 'Music, uploads, and reports',
    body: [
      'Uploaded music, cover images, metadata, and room activity may be stored and processed so the service can play tracks, display room information, calculate access and analytics, and respond to moderation or rights concerns.',
      'Reports may include room identifiers, message identifiers, reported session identifiers, selected reasons, optional details, and technical context needed to review the issue and act within the required moderation window.',
    ],
  },
  {
    title: 'Sharing and service providers',
    body: [
      'We may use hosting, storage, analytics, messaging, security, payment, or infrastructure providers to operate the service. These providers process information only as needed for their services and our instructions, subject to applicable requirements.',
      'Room links can be shared by users. Anyone with a valid room code or link may be able to attempt to join depending on room state, lock status, and access rules.',
    ],
  },
  {
    title: 'Retention and choices',
    body: [
      'We keep information for as long as needed to provide the service, resolve disputes, support safety and security, comply with law, and maintain business records. Retention periods may vary by data type and feature.',
      'You can choose not to link a Gooofan account, leave rooms, avoid uploading content, or contact support about account and privacy questions. Some features may not work without required session or account data.',
    ],
  },
  {
    title: 'Security and children',
    body: [
      'We use reasonable safeguards to protect information, but no internet service is perfectly secure. Do not share sensitive personal information in room chat or public room details.',
      'GoooMusic shared rooms and anonymous chat are intended for users who are 18 or older. Reports may be used to review suspected underage or unsafe use.',
    ],
  },
];

export const helpTopics = [
  {
    title: 'Create a listening room',
    text: 'Start a room, share the room link or code, choose music, then control playback together in real time.',
  },
  {
    title: 'Join a room',
    text: 'Open a shared link or enter the room code from the landing page. If a room is locked, only existing participants may be allowed back in.',
  },
  {
    title: 'Use room music',
    text: 'Some songs may require GTN access before they can be used in a room. Previewing music does not set it as the room song.',
  },
  {
    title: 'Fix sync or playback issues',
    text: 'Use a stable connection, keep the app updated, and avoid low-power restrictions during shared playback. If audio is off after joining late, leave and rejoin after checking your connection.',
  },
  {
    title: 'Report or block abuse',
    text: 'Use Report Room or the message action menu to flag inappropriate content, harassment, spam, underage risk, copyright concerns, or other issues. You can also block abusive chat participants from the message menu.',
  },
  {
    title: 'Need more help?',
    text: 'Contact Gooofan support at support@gooofan.com for safety reports, inappropriate activity, privacy questions, account help, or other GoooMusic support needs.',
  },
];