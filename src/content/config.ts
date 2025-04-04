import { defineCollection, z } from "astro:content";

const entry = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.string(),
        tech: z.string()
    })
})

export const collections = { entry }