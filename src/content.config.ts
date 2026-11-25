import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each guide is one JSON file in src/content/guides. "body" is Markdown.
const guides = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keyword: z.string(),
    publishedAt: z.string(),
    updatedAt: z.string(),
    category: z.enum(['iphone', 'samsung', 'ipad', 'macbook', 'general']).default('general'),
    summary: z.array(z.string()).default([]),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    body: z.string(),
  }),
});

export const collections = { guides };
