export const site = {
  name: 'Rakesh Purohit',
  role: 'DevRel Engineer',
  worksFor: 'Rocket',
  worksForUrl: 'https://rocket.new',
  tagline: "I write and ship code. Can't fake the tech.",
  summary:
    'DevRel Engineer at Rocket (rocket.new). I lead technical content, content strategy and community: 144 bylined articles on AI agents and MCP, a Discord grown from 0 to 22k, and an Instagram rebuilt from 3 likes to up to 10k engagements. I build with the tools I write about.',
  email: 'rakeshpurohit909@gmail.com',
  siteUrl: 'https://www.therakeshpurohit.com',
} as const;

export const socials = [
  { label: 'GitHub',   href: 'https://github.com/TheRakeshPurohit' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/therakeshpurohit' },
  { label: 'X',        href: 'https://x.com/irakeshpurohit' },
] as const;

export const metrics = [
  { value: '144',  label: 'Bylined articles on rocket.new and DhiWise' },
  { value: '22k',  label: 'Discord developer community members' },
  { value: '~10k', label: 'Peak engagements on a single Instagram post' },
  { value: '80%',  label: 'Organic traffic growth, Webflow → Next.js ISR' },
  { value: '1M+',  label: 'Monthly users on a $70/mo Vercel infra budget' },
  { value: '100K+', label: 'Figma plugin users (5k MAU)' },
] as const;

export type Project = {
  title: string;
  description: string;
  github: string;
  demo?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: 'VSCode ReactTestGen',
    description:
      'VS Code extension that generates React component test cases from source. Automates the tedious part of testing so you can stay in flow.',
    github: 'https://github.com/TheRakeshPurohit/VSCode-ReactTestGen',
    demo: 'https://marketplace.visualstudio.com/items?itemName=TheRakeshPurohit.reacttestgen',
    tags: ['VS Code', 'Testing', 'DX'],
  },
  {
    title: 'Live Link Embedded Preview',
    description:
      'Frontend solution for rich link embedded previews. Fetches Open Graph metadata and renders it inline.',
    github: 'https://github.com/TheRakeshPurohit/live-link-embedded-preview',
    tags: ['React', 'Open Graph', 'Tooling'],
  },
  {
    title: 'Water Reminder (Chrome Extension)',
    description:
      'Nudges you to stay hydrated every hour. Simple and persistent — your browser as a wellness habit.',
    github: 'https://github.com/TheRakeshPurohit/water-reminder',
    tags: ['Chrome Extension', 'Wellness'],
  },
  {
    title: 'Gujarati React Documentation',
    description:
      'Maintainer of the official Gujarati translation of React docs (gu.react.dev). Making the framework accessible to ~60 million native speakers.',
    github: 'https://github.com/reactjs/gu.react.dev',
    tags: ['Open Source', 'Localisation', 'React'],
  },
];

export type ExperienceRole = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  highlights: string[];
};

export const experience: ExperienceRole[] = [
  {
    role: 'DevRel Engineer',
    company: 'Rocket (rocket.new, formerly DhiWise)',
    companyUrl: 'https://rocket.new',
    period: 'Apr 2021 – present',
    highlights: [
      '144 bylined articles on AI agents, MCP servers, AI app development, and framework trade-offs.',
      'Grew the Discord developer community from 0 to 22k members.',
      'Rebuilt the Instagram content strategy (@rocketdotnew): posts went from ~3 likes to up to ~10k engagements.',
      'Ran technical SEO (JSON-LD, 2-day indexing): 80% organic traffic growth after Webflow → Next.js ISR migration.',
      'Served 1M+ monthly users on a $70 infrastructure budget. Core Web Vitals: Desktop 33 → 91, Mobile 38 → 88.',
      'Built a Gen-AI content workflow (GPT-4 + Claude) saving 20 hours a month.',
      'Built a Figma plugin with 100K+ users. Led 30Days30Usecases campaign with 10 direct reports.',
    ],
  },
  {
    role: 'Programmer Analyst',
    company: 'Coruscate Solutions',
    period: 'Jun 2020 – Mar 2021',
    highlights: [
      'Built JSON-driven UI for 10+ B2B diamond auction platforms.',
      'Set ESLint and Prettier standards for a 20-person engineering team.',
    ],
  },
  {
    role: 'React Native Intern',
    company: 'GatiSoftTech',
    period: 'Jan 2020 – Jun 2020',
    highlights: [
      'Rebuilt a CRM app for cross-platform React Native support.',
      'Ported 20 screens and 10 features from iOS to React Native.',
    ],
  },
];

export const recognition = [
  {
    title: 'India Quotient 30 Under 30',
    meta: '2024',
    description: 'Selected from 100 portfolio companies.',
  },
  {
    title: 'DhiWise Employee of the Year',
    meta: '2022',
    description: '',
  },
  {
    title: 'LinkedIn Learning: MCP – Hands-On with Agentic AI',
    meta: '2025',
    description: '',
  },
] as const;
