/**
 * Shared team certifications — no individual attribution.
 * Studio rollup only.
 */

export const certifications = {
  eyebrow: 'Credentials',
  headline: 'Team certifications',
  subhead:
    'Credentials across the InitDev team — strategy, AI, and production reliability. Listed as a studio, not by individual.',

  layers: {
    leadership: {
      label: 'Strategy & Leadership',
      description: 'Planning and executive education that shapes how we scope and deliver.',
    },
    ai: {
      label: 'AI & Data',
      description: 'Applied AI and data fluency for production products — not demos.',
    },
    reliability: {
      label: 'Observability & Reliability',
      description: 'APM, monitoring, and incident tooling our performance bench actually uses.',
    },
  },

  items: [
    {
      name: 'Strategic Planning Professional',
      issuer: 'Stanford University School of Engineering',
      year: '2024',
      layer: 'leadership' as const,
    },
    {
      name: 'Harvard Business School Executive Education',
      issuer: 'Harvard Business School',
      year: '2024–2025',
      layer: 'leadership' as const,
    },
    {
      name: 'Python for Data Science, AI & Development',
      issuer: 'IBM',
      year: '2024',
      layer: 'ai' as const,
    },
    {
      name: 'Microsoft AI Engineer',
      issuer: 'Microsoft',
      year: null,
      layer: 'ai' as const,
    },
    {
      name: 'AppDynamics (Double Certified)',
      issuer: 'Cisco AppDynamics',
      year: null,
      layer: 'reliability' as const,
    },
    {
      name: 'New Relic Certified',
      issuer: 'New Relic',
      year: null,
      layer: 'reliability' as const,
    },
    {
      name: 'Dynatrace — Specialist',
      issuer: 'Dynatrace',
      year: null,
      layer: 'reliability' as const,
    },
    {
      name: 'Datadog — Specialist',
      issuer: 'Datadog',
      year: null,
      layer: 'reliability' as const,
    },
    {
      name: 'Splunk Core Power User',
      issuer: 'Splunk',
      year: null,
      layer: 'reliability' as const,
    },
  ],
} as const;

/** Soft domain experience — no company names. Amplifies the shipped-work story. */
export const domainExperience = [
  { label: 'Retail & e-commerce', detail: 'Checkout, inventory, loyalty, peak traffic' },
  { label: 'Banking & payments', detail: 'Transaction paths, SLA-critical flows' },
  { label: 'Healthcare', detail: 'Staffing systems, production monitoring' },
  { label: 'Automotive & global ops', detail: 'Multi-country platforms, 24/7 monitoring' },
  { label: 'Enterprise software', detail: 'Portals, SaaS, cloud migrations' },
  { label: 'Energy & utilities', detail: 'High-availability operational systems' },
] as const;

export type CertLayer = keyof typeof certifications.layers;
export type Certification = (typeof certifications.items)[number];
