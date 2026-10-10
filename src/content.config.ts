import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projecten = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/projecten' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    summary: z.string(),
    cover: z.string(),
    gallery: z.array(z.string()).default([]),
    highlights: z.array(z.string()).default([]),
    before: z.string().optional(),
    after: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    concept: z.boolean().default(false),
  }),
});

const legal = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './content/legal',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { projecten, legal };
