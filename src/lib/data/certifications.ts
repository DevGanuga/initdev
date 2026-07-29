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
    { name: 'Citi', sector: 'Banking', domain: 'citi.com' },
    { name: 'Kroger', sector: 'Retail', domain: 'kroger.com' },
    { name: 'Target', sector: 'Retail', domain: 'target.com' },
    { name: 'HSBC', sector: 'Banking', domain: 'hsbc.com' },
    { name: "Lowe's", sector: 'Retail', domain: 'lowes.com' },
    { name: 'Prudential', sector: 'Financial Services', domain: 'prudential.com' },
    { name: 'Walgreens', sector: 'Retail', domain: 'walgreens.com' },
    { name: 'VMware', sector: 'Enterprise Software', domain: 'vmware.com' },
    { name: 'Gilead Sciences', sector: 'Life Sciences', domain: 'gilead.com' },
    { name: 'City National Bank', sector: 'Banking', domain: 'cnb.com' },
    { name: 'HCA HealthTrust', sector: 'Healthcare', domain: 'hcahealthcare.com' },
    { name: 'Renault Nissan', sector: 'Automotive', domain: 'renaultgroup.com' },
    { name: 'Papa Johns', sector: 'POS · E-commerce', domain: 'papajohns.com' },
    { name: 'Advance Auto Parts', sector: 'Retail', domain: 'advanceautoparts.com' },
    { name: 'Southern California Edison', sector: 'Energy', domain: 'sce.com' },
    { name: 'EY', sector: 'Professional Services', domain: 'ey.com' },
  ],
} as const;

/** Company logo via Google's favicon service — no API key, reliable at 128px. */
export function companyLogo(domain: string, size: number = 128): string {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
}

/** Domain experience with the names attached — used in the trust section. */
export const domainExperience = [
  {
    label: 'Retail & e-commerce',
    detail: 'Peak-traffic checkout, POS, inventory, loyalty — Black Friday-grade load',
    names: "Kroger · Target · Lowe's · Walgreens · Advance Auto · Papa Johns",
    domains: ['kroger.com', 'target.com', 'lowes.com', 'walgreens.com', 'advanceautoparts.com', 'papajohns.com'],
  },
  {
    label: 'Banking & payments',
    detail: 'End-to-end payment flows, SLA-critical transaction paths',
    names: 'Citi · HSBC · City National Bank · Prudential',
    domains: ['citi.com', 'hsbc.com', 'cnb.com', 'prudential.com'],
  },
  {
    label: 'Healthcare & life sciences',
    detail: 'Hospital staffing systems, 24/7 production monitoring',
    names: 'HCA HealthTrust · Gilead Sciences',
    domains: ['hcahealthcare.com', 'gilead.com'],
  },
  {
    label: 'Automotive & global ops',
    detail: '130+ critical applications monitored across 22 countries',
    names: 'Renault Nissan',
    domains: ['renaultgroup.com'],
  },
  {
    label: 'Enterprise software',
    detail: 'Commerce portals, licensing platforms, cloud migrations',
    names: 'VMware · EY',
    domains: ['vmware.com', 'ey.com'],
  },
  {
    label: 'Energy & utilities',
    detail: 'High-availability operational and SAP systems',
    names: 'Southern California Edison',
    domains: ['sce.com'],
  },
] as const;

export type CertLayer = keyof typeof certifications.layers;
export type Certification = (typeof certifications.items)[number];
export type PedigreeCompany = (typeof engineeringPedigree.companies)[number];
