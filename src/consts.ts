/**
 * Central site configuration.
 *
 * ── TODO before launch ──────────────────────────────────────────────
 *  CONTACT.linkedin  → paste your real LinkedIn profile URL.
 * ────────────────────────────────────────────────────────────────────
 */

export const SITE = {
  /** Full name, used as the base <title> and in structured data. */
  name: 'Can Keçilioğlu',
  /** Bare domain, shown in the wordmark / footer. */
  domain: 'cankecilioglu.dev',
  /** Canonical origin (no trailing slash). Mirrors `site` in astro.config. */
  url: 'https://cankecilioglu.dev',
  /** One-line positioning, used as the default meta description tail. */
  role: 'Robotics perception & embedded engineer',
  /** Default meta description for pages that do not set their own. */
  description:
    'Can Keçilioğlu — robotics perception & embedded engineer. From a raw sensor reading on bare-metal firmware to a coherent world model a robot can act on.',
} as const;

export const CONTACT = {
  email: 'cankecilioglu@gmail.com',
  github: 'https://github.com/cankecilioglu',
  githubHandle: 'github.com/cankecilioglu',
  // TODO: replace with your real LinkedIn URL.
  linkedin: 'https://www.linkedin.com/in/cankecilioglu',
  linkedinLabel: 'LinkedIn',
} as const;

export type NavItem = { href: string; label: string };

export const NAV: NavItem[] = [
  { href: '/work', label: 'Work' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];
