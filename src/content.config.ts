// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Define your collection(s)
const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./products" }),
  schema: z.object({
    title: z.string(),
    price: z.string(),
    picture: z.string(),
    materials: z.string(),
    description: z.string(),
  }),
});
const patterns = defineCollection ({
  loader: glob({ pattern: "**/*.md", base: "./patterns"}), 
  schema: z.object({
    title: z.string(),
    price: z.string(),
    picture: z.string(),
    level: z.string(), 
    description: z.string(),
    button: z.string().optional(),

  })
})


// 4. Export a single `collections` object to register your collection(s)
export const collections = { products, patterns };
