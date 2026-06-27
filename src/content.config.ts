import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Work — project case studies (MDX). The rover deep-dive is the centerpiece;
 * split-flap is an in-progress teaser. Ordered by `order` (lower = first).
 */
const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['flagship', 'in-progress', 'archived']).default('flagship'),
    order: z.number().default(99),
    year: z.union([z.string(), z.number()]).optional(),
    role: z.string().optional(),
    stack: z.array(z.string()).default([]),
    repo: z.string().optional(),
    repoLabel: z.string().optional(),
    /** Short caption for the hero media placeholder at the top of the page. */
    heroMedia: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/**
 * Writing — the blog. Empty for now; the first post will be the rover article.
 */
const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, writing };
