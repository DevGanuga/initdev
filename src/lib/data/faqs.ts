/**
 * Homepage FAQ content.
 *
 * Lifted out of FAQSection so the homepage — a server component — can emit
 * matching FAQPage structured data. Structured data must reflect what is
 * actually visible on the page, so both must read from here.
 */
export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'What do you build?',
    answer:
      'Custom software across the stack — SaaS platforms, internal tools, AI-assisted products, consumer apps, and the secure infrastructure underneath them. Multi-tenant systems, role-based access, complex workflows. Production ready, not demos.',
  },
  {
    question: 'Do you handle security and infrastructure?',
    answer:
      "Yes. Security isn't an afterthought — we do secure architecture and threat modeling up front, plus application hardening, audits, network design, and monitoring. We also own cloud infrastructure, CI/CD, and observability so what we ship is reliable and defensible in production.",
  },
  {
    question: 'How does delivery work?',
    answer:
      'Sprint-based. Written specs, defined scope, clear acceptance criteria. Product and delivery managed through Linear. Playwright E2E testing and CI checks before anything ships.',
  },
  {
    question: 'What does the team look like?',
    answer:
      'Dedicated PM, backend and frontend engineers, QA, performance engineers, and cybersecurity professionals. A structured team that plugs into your workflow — with deep experience pressure-testing systems across retail, banking, healthcare, and enterprise platforms.',
  },
  {
    question: 'Have you actually worked at enterprise scale?',
    answer:
      "Our senior engineers have run performance, observability, and reliability engagements inside Citi, HSBC, Kroger, Target, Lowe's, Walgreens, VMware, Gilead Sciences, HCA HealthTrust, and Renault Nissan — think Black Friday checkout loads, SLA-critical payment paths, and 130+ production applications monitored across 22 countries. Those were career engagements, not InitDev contracts, and that's exactly the experience your sprint gets.",
  },
  {
    question: 'How fast can you start?',
    answer:
      "First call within 48 hours. Scoped proposal in 3-5 days. Development starts as soon as you sign off, typically within two weeks of first contact. If we don't have capacity, we'll tell you upfront instead of stretching your project thin.",
  },
  {
    question: 'What if I need ongoing support?',
    answer:
      "We offer flexible monthly retainers for continuous work. And because everything ships documented and tested in your repos, your own team can take it over whenever you want — you're never locked in.",
  },
  {
    question: 'What technologies do you work with?',
    answer:
      'React, Next.js, Node, Python, Go, Postgres, and AWS, plus the AI and data tooling around them. We pick the stack that fits your problem and your team — not whatever we used last.',
  },
  {
    question: 'How much does it cost?',
    answer:
      "Engagements start at $10k, and every sprint is fixed-scope and fixed-price - you see exactly what you're paying for before we write a line of code. No hourly billing surprises, no scope creep. If your budget is under $10k, we're probably not the right fit, and we'll tell you that on the first call.",
  },
];
