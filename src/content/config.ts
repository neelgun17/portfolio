import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	schema: z.object({
		inProgress: z.boolean(),
		title: z.string(),
		description: z.string(),
		img: z.string(),
		tags: z.array(z.string()),
		link: z.string(),
		img_alt: z.string().optional(),
		year: z.string().optional(),
		role: z.string().optional(),
		order: z.number().optional(),
	}),
});

export const collections = {
	projects: projectsCollection,
};
