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

/**
 * Engineering pedigree — enterprise environments where InitDev senior
 * engineers have run performance, observability, and reliability engagements.
 * Framed as team career experience, never as InitDev client logos.
 */
export const engineeringPedigree = {
  statement:
    'Senior engineers on this team have run production performance and reliability inside',
  disclaimer:
    'Career engagements of our senior engineers — the production scar tissue behind every InitDev sprint.',
  companies: [
    { name: 'Citi', sector: 'Banking' },
    { name: 'Kroger', sector: 'Retail' },
    { name: 'Target', sector: 'Retail' },
    { name: 'HSBC', sector: 'Banking' },
    { name: "Lowe's", sector: 'Retail' },
    { name: 'Prudential', sector: 'Financial Services' },
    { name: 'Walgreens', sector: 'Retail' },
    { name: 'VMware', sector: 'Enterprise Software' },
    { name: 'Gilead Sciences', sector: 'Life Sciences' },
    { name: 'City National Bank', sector: 'Banking' },
    { name: 'HCA HealthTrust', sector: 'Healthcare' },
    { name: 'Renault Nissan', sector: 'Automotive' },
    { name: 'Papa Johns', sector: 'POS · E-commerce' },
    { name: 'Advance Auto Parts', sector: 'Retail' },
    { name: 'Southern California Edison', sector: 'Energy' },
    { name: 'EY', sector: 'Professional Services' },
  ],
} as const;

/** Domain experience with the names attached — used in the trust section. */
export const domainExperience = [
  {
    label: 'Retail & e-commerce',
    detail: 'Peak-traffic checkout, POS, inventory, loyalty — Black Friday-grade load',
    names: "Kroger · Target · Lowe's · Walgreens · Advance Auto Parts · Papa Johns",
  },
  {
    label: 'Banking & payments',
    detail: 'End-to-end payment flows, SLA-critical transaction paths',
    names: 'Citi · HSBC · City National Bank · Prudential',
  },
  {
    label: 'Healthcare & life sciences',
    detail: 'Hospital staffing systems, 24/7 production monitoring',
    names: 'HCA HealthTrust · Gilead Sciences',
  },
  {
    label: 'Automotive & global ops',
    detail: '130+ critical applications monitored across 22 countries',
    names: 'Renault Nissan',
  },
  {
    label: 'Enterprise software',
    detail: 'Commerce portals, licensing platforms, cloud migrations',
    names: 'VMware · EY',
  },
  {
    label: 'Energy & utilities',
    detail: 'High-availability operational and SAP systems',
    names: 'Southern California Edison',
  },
] as const;

export type CertLayer = keyof typeof certifications.layers;
export type Certification = (typeof certifications.items)[number];
export type PedigreeCompany = (typeof engineeringPedigree.companies)[number];
