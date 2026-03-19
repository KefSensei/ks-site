import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    thumbnail: z.string().optional(),
    liveUrl: z.string().url().optional(),
    isOriginal: z.boolean().default(false),
    role: z.string().optional(),
    publisher: z.string().optional(),
    year: z.number().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { portfolio };
