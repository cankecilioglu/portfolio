/**
 * Central site configuration: name, URLs, contact details, and nav.
 */

export const SITE = {
  /** Full name, used as the base <title> and in structured data. */
  name: 'Can Keçilioğlu',
  /** Bare domain, shown in the wordmark / footer. */
  domain: 'cankecilioglu.dev',
  /** Canonical origin (no trailing slash). Mirrors `site` in astro.config. */
  url: 'https://cankecilioglu.dev',
  /** One-line positioning, used as the default meta description tail. */
  role: 'Robotics, AI & embedded engineer',
  /** Default meta description for pages that do not set their own. */
  description:
    'Can Keçilioğlu, mechatronics engineer working across robotics, AI and embedded systems. I build the software and firmware that lets machines sense, decide and act.',
} as const;

export const CONTACT = {
  email: 'cankecilioglu@gmail.com',
  github: 'https://github.com/cankecilioglu',
  githubHandle: 'github.com/cankecilioglu',
  linkedin: 'https://www.linkedin.com/in/can-kecilioglu/',
  linkedinLabel: 'LinkedIn',
} as const;

export type NavItem = { href: string; label: string };

export const NAV: NavItem[] = [
  { href: '/work', label: 'Work' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];
