export type RoleTrack = {
  id: string;
  title: string;
  summary: string;
  highlights: string[];
};

export type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tags: string[];
};

export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
};

export type ExperienceRole = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export type CredentialItem = {
  title: string;
  description?: string;
  meta?: string;
  href?: string;
};

export type CredentialGroup = {
  title: string;
  items: CredentialItem[];
};

export const site = {
  name: 'Rakesh Purohit',
  role: 'Senior Frontend Engineer',
  tagline:
    'Building high-performance UI systems, frontend tooling, and developer experiences.',
  summary:
    'Senior frontend engineer and DevRel at Rocket (rocket.new) with 5+ years building scalable React and Next.js platforms. I focus on performance, design systems, developer tooling, and growth-ready frontend systems. I also write for Rocket and DhiWise.',
};

export const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/therakeshpurohit',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/therakeshpurohit',
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/irakeshpurohit',
  },
];

export const impactMetrics = [
  {
    value: '1M+',
    label: 'Monthly users supported on a $70 infra budget via Vercel edge.',
  },
  {
    value: '51.19%',
    label: 'Build time reduction using CRACO + esbuild (17m -> 8m).',
  },
  {
    value: '90+',
    label: 'Core Web Vitals and PageSpeed after performance hardening.',
  },
  {
    value: '80%',
    label: 'Organic traffic growth after Webflow -> Next.js + ISR.',
  },
  {
    value: '100K+',
    label: 'Figma plugin users with 5K MAU in production.',
  },
  {
    value: '20 hrs',
    label: 'Saved monthly through Gen-AI workflow automation.',
  },
  {
    value: '1.8x',
    label: 'Faster latency via Redis HTML caching with auth/device variants.',
  },
  {
    value: '30%',
    label: 'Server compute cost reduction from cache strategy.',
  },
];

export const focusAreas = [
  {
    title: 'Frontend Tooling & Compilers',
    description:
      'AST-driven transforms, build pipelines, and front-of-house tooling.',
  },
  {
    title: 'Design Systems & UI Architecture',
    description:
      'Scalable component libraries, documentation, and UI governance.',
  },
  {
    title: 'Performance & Core Web Vitals',
    description:
      'Profiling, optimization, and runtime stability at scale.',
  },
  {
    title: 'Technical SEO & Growth',
    description:
      'Schema-first SEO, indexing strategy, and content distribution.',
  },
  {
    title: 'Analytics & Experimentation',
    description:
      'Behavioral analytics, product insights, and reliability tooling.',
  },
  {
    title: 'Extensions & Integrations',
    description:
      'Figma, IDE, and browser integrations that improve delivery.',
  },
];

export const roleTracks: RoleTrack[] = [
  {
    id: 'platform',
    title: 'Platform Frontend',
    summary:
      'Building the tooling, build systems, and guardrails that help teams ship reliably.',
    highlights: [
      'Performance budgets and build pipeline optimization.',
      'AST-driven transformations and code generation.',
      'Design system governance and shared UI infrastructure.',
    ],
  },
  {
    id: 'product',
    title: 'Product Engineering',
    summary:
      'Partnering with product teams to design accessible, delightful interfaces and scale delivery.',
    highlights: [
      'User-centered UI architecture and component ergonomics.',
      'High-velocity delivery with stability and observability.',
      'Experimentation frameworks and performance profiling.',
    ],
  },
  {
    id: 'advocacy',
    title: 'Developer Experience',
    summary:
      'Teaching, documenting, and building feedback loops that empower developers.',
    highlights: [
      'Technical writing and educational content at scale.',
      'Community programs and internal enablement.',
      'Support workflows that convert feedback into roadmap wins.',
    ],
  },
];

export const skills = [
  'React 18',
  'Next.js',
  'TypeScript',
  'Server Components',
  'Suspense',
  'Context API',
  'Redux',
  'Zustand',
  'React Native',
  'Tailwind CSS',
  'Webpack',
  'CRACO',
  'esbuild',
  'Puppeteer',
  'Strapi',
  'Docusaurus',
  'Edge Computing',
  'Nx Monorepo',
  'Vercel',
  'Git',
  'ESLint',
  'Prettier',
  'CI/CD',
  'Storybook',
  'GitHub Actions',
  'CodeRabbit',
  'HubSpot',
  'Figma Plugin Dev',
  'Design Systems',
  'WCAG 2.1',
  'ARIA',
  'Lighthouse Audits',
  'GA4',
  'Mixpanel',
  'Sentry',
  'Clarity',
  'JSON-LD',
  'OpenAI',
  'Claude',
];

export const experience: ExperienceRole[] = [
  {
    role: 'DevRel & Senior Frontend Engineer',
    company: 'Rocket (rocket.new)',
    period: 'Apr 2021 - Present',
    highlights: [
      'DevRel and senior frontend ownership focused on developer experience and frontend systems.',
      'Implemented Redis HTML caching in Next.js with pre/post-login and mobile/desktop variants, delivering 1.8x faster latency and reducing server compute costs by 30%.',
    ],
  },
  {
    role: 'Senior Frontend Engineer',
    company: 'DhiWise',
    period: 'Apr 2021 - Present',
    highlights: [
      'Architected a scalable frontend supporting 1M+ monthly users on a $70 infrastructure budget via Vercel edge.',
      'Built a component library with 20+ reusable components across three products using HOCs and render props.',
      'Slashed build time by 51.19% (17m -> 8m) and runtime by 55.10% (5m -> 2m) using CRACO + esbuild.',
      'Led the migration from Preact to React 18 with 100% TypeScript adoption, Server Components, and Suspense.',
      'Delivered a drag-and-drop no-code dashboard builder using Redux + Context architecture.',
      'Engineered a Figma plugin serving 100K+ users with 5K MAU, improving acquisition by 30%.',
      'Enhanced the in-browser IDE to support modern image formats and asset workflows (+50% compatibility).',
      'Automated content ops from Notion to Strapi CMS via a Chrome extension, improving throughput by 60%.',
      'Migrated Webflow to Next.js with ISR, maintaining 90+ PageSpeed and driving 80% organic growth.',
      'Improved Core Web Vitals: Desktop 33 -> 91, Mobile 38 -> 88 through script and caching strategy.',
      'Instrumented product analytics with GA4, Mixpanel, Sentry, Clarity, and HubSpot.',
      'Deployed a Gen-AI workflow with GPT-4 and Claude, saving 20 developer hours monthly.',
      'Established technical SEO with JSON-LD, reaching top-10 rankings with ~2-day indexing.',
      'Reduced support tickets by 30% through UX improvements and documentation overhaul.',
      'Project lead for #30Days30Usecases, managing 10 direct reports and mentoring 2 engineers.',
    ],
  },
  {
    role: 'Programmer Analyst',
    company: 'Coruscate Solutions Pvt. Ltd.',
    period: 'Jun 2020 - Mar 2021',
    highlights: [
      'Built JSON-driven UI with REST APIs for 10+ B2B diamond auction platforms (+40% efficiency).',
      'Refactored legacy class components to React Hooks, reducing technical debt by 30%.',
      'Engineered real-time dashboards for diamond trading workflows and insights.',
      'Introduced ESLint and Prettier standards across a 20-person engineering team.',
    ],
  },
  {
    role: 'React Native Intern',
    company: 'GatiSoftTech',
    period: 'Jan 2020 - Jun 2020',
    highlights: [
      'Rebuilt a CRM app for cross-platform React Native support, raising acquisition by 30%.',
      'Deployed offline-first architecture with SQLite, boosting engagement by 50%.',
      'Ported 20 screens and 10 features from iOS-only to React Native.',
    ],
  },
];

export const credentials: CredentialGroup[] = [
  {
    title: 'Recognition',
    items: [
      {
        title: 'India Quotient 30 Under 30',
        description:
          'Selected from 100 portfolio companies for exceptional contributions.',
        meta: '2024',
      },
      {
        title: 'Employee of the Year',
        description: 'DhiWise',
        meta: '2022',
      },
    ],
  },
  {
    title: 'Certifications',
    items: [
      {
        title: 'Model Context Protocol (MCP): Hands-On with Agentic AI',
        description: 'LinkedIn Learning',
        meta: '2025',
      },
    ],
  },
  {
    title: 'Writing & Speaking',
    items: [
      {
        title: 'Rocket blog contributor',
        description:
          'Developer experience, frontend systems, and performance writing.',
        href: 'https://www.rocket.new/author/rakesh-purohit',
      },
      {
        title: 'DhiWise Blog contributor',
        description:
          'React, Next.js, and frontend architecture topics (10K+ monthly readers).',
        href: 'https://www.dhiwise.com/author/rakesh-purohit',
      },
      {
        title: 'Medium technical articles',
        description: 'Modern frontend development and product engineering.',
        href: 'https://medium.com/@therakeshpurohit',
      },
      {
        title: 'React India 2025 CFP submitted',
        description: 'Talk proposal on modern frontend systems and performance.',
      },
    ],
  },
  {
    title: 'Open Source',
    items: [
      {
        title: 'React Test Case Generator',
        description: 'VS Code extension for automated React test creation.',
        href: 'https://github.com/TheRakeshPurohit/React-test-cases-generator',
      },
      {
        title: 'react-amplitude-hooks',
        description: 'React hooks wrapper for Amplitude analytics.',
        href: 'https://github.com/koblas/react-amplitude-hooks',
      },
      {
        title: 'React Gujarati Documentation',
        description: 'Maintainer of Gujarati React docs.',
        href: 'https://github.com/reactjs/gu.react.dev',
      },
    ],
  },
  {
    title: 'Education',
    items: [
      {
        title: 'MSc Information & Communication Technology',
        description: 'JP Dawer Institute (VNSGU)',
        meta: '2018-2020 - CGPA 7.18/10',
      },
      {
        title: 'Bachelor of Computer Applications',
        description: 'SDJ International College (VNSGU)',
        meta: '2015-2018 - CGPA 8.00/10',
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Live Link Embedded Preview',
    description: 'A complete frontend solution for link embedded preview.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    github: 'https://github.com/TheRakeshPurohit/live-link-embedded-preview',
    demo: 'https://live-link-embedded-preview.vercel.app/',
    tags: ['Tooling', 'Performance'],
  },
  {
    title: 'VSCode-ReactTestGen',
    description: 'React component test case generator for Visual Studio Code.',
    image:
      'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d9?q=80&w=2674&auto=format&fit=crop',
    github: 'https://github.com/TheRakeshPurohit/VSCode-ReactTestGen',
    demo: 'https://marketplace.visualstudio.com/items?itemName=TheRakeshPurohit.reacttestgen',
    tags: ['Extensions', 'DX'],
  },
  {
    title: 'Water Reminder (Chrome Extension)',
    description:
      'An extension that nudges users to stay hydrated after every hour on screen.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop',
    github: 'https://github.com/TheRakeshPurohit/water-reminder',
    demo: 'https://github.com/TheRakeshPurohit/water-reminder',
    tags: ['Extensions', 'Wellness'],
  },
];

export const posts: Post[] = [
//   {
//     slug: 'tooling-for-scale',
//     title: 'Tooling for Scale: Cutting React Build Times by 51.2%',
//     summary:
//       'A closer look at performance profiling, CRACO-based optimizations, and repeatable build wins.',
//     date: '2024-03-15',
//     readTime: '5 min read',
//     tags: ['Performance', 'Tooling', 'React'],
//     content: `
// # Tooling for Scale: Cutting React Build Times by 51.2%

// ## Context
// While building a complex frontend platform, compile time became a daily bottleneck. The goal was to reduce feedback loops without sacrificing product stability.

// ## What Worked
// - Profiling webpack and identifying hot spots in the pipeline.
// - Introducing CRACO optimizations to tune the build process.
// - Validating improvements across multiple product surfaces.

// ## Impact
// The work resulted in a **51.2% compile time reduction** and a faster feedback loop for teams shipping frontend features.

// ## Takeaways
// Performance wins compound. Treat the build pipeline as a product, with clear owners, metrics, and incremental improvement.
// `,
//   },
//   {
//     slug: 'ast-driven-ui',
//     title: 'AST-Driven UI: From JSON to Reliable Components',
//     summary:
//       'How AST tooling enabled consistent HTML block conversion and reduced repetitive UI code.',
//     date: '2024-03-14',
//     readTime: '4 min read',
//     tags: ['AST', 'Automation', 'Design Systems'],
//     content: `
// # AST-Driven UI: From JSON to Reliable Components

// ## The Problem
// Manual UI mapping was error-prone and slowed down the pace of shipping new blocks.

// ## Approach
// - Built an AST generator for React component props.
// - Increased conversion accuracy by **40%**.
// - Reduced repetitive code by **70%** with a JSON-to-column generator.

// ## Outcome
// The team shipped faster while maintaining a predictable UI system and consistent component output.
// `,
//   },
//   {
//     slug: 'migration-playbook',
//     title: 'Migration Playbook: Webflow to Next.js + Strapi',
//     summary:
//       'A practical migration workflow with scripting, Puppeteer automation, and zero data loss.',
//     date: '2024-03-13',
//     readTime: '6 min read',
//     tags: ['Next.js', 'CMS', 'Automation'],
//     content: `
// # Migration Playbook: Webflow to Next.js + Strapi

// ## Goals
// Migrate a production Webflow site to Next.js with SSR and Strapi CMS without data loss.

// ## Workflow
// - Automated data extraction with scripting and Puppeteer.
// - Structured the migration to maintain content integrity.
// - Delivered the new site with zero data loss.

// ## Results
// A stable migration path with stronger performance characteristics and long-term maintainability.
// `,
//   },
];
