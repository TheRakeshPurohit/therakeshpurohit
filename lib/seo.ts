import { site, socials } from '@/lib/content';

export const siteUrl = 'https://therakeshpurohit.com';

export const defaultTitle = `${site.name} | ${site.role}`;
export const defaultDescription = site.summary;

export const defaultKeywords = [
  'Senior Frontend Engineer',
  'Frontend Engineering',
  'React',
  'Next.js',
  'Design Systems',
  'UI Architecture',
  'Web Performance',
  'Developer Experience',
  'JavaScript',
  'TypeScript',
  'Tooling',
  'AST',
];

export const defaultOgImage = '/og.svg';

export const sameAsLinks = socials.map((social) => social.href);
