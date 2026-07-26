/**
 * Shape of the multi-step contact form.
 *
 * Previously exported from app/contact/page.tsx, which stopped working once
 * that page became a server component. Named ContactFormData rather than
 * FormData so it does not shadow the DOM global of the same name.
 */
export interface ContactFormData {
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  challenges: string;
  name: string;
  email: string;
  company: string;
  phone: string;
}
