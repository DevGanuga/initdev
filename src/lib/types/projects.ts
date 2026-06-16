// Portfolio / Case Study Types

export type ProjectCategory =
  | 'SaaS'
  | 'AI'
  | 'Enterprise'
  | 'Consumer'
  | 'Platform'
  | 'Realtime Video'
  | 'E-commerce'
  | 'Marketplace'
  | 'Payments'
  | 'Mobile'
  | 'Security'
  | 'B2B';

export interface Project {
  slug: string;
  name: string;
  /** Public-facing URL of the live build. */
  url: string;
  /** Domain shown as a label, e.g. "dyia.io". */
  domain: string;
  /** One-line positioning line, factual to the live product. */
  tagline: string;
  /** Short paragraph describing what the product is. */
  summary: string;
  /** Concrete things we built — factual, no invented metrics. */
  built: string[];
  /** Tech / capability tags. */
  tech: string[];
  /** Category tags used for grouping and badges. */
  categories: ProjectCategory[];
  /** Screenshot path under /public. */
  image: string;
  /** Tailwind-friendly accent gradient (from-/to- classes). */
  accent: string;
  /** Featured builds surface on the homepage teaser. */
  featured?: boolean;
}
