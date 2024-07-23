import { z } from "zod";

export const envValidator = z.object({
	dev: z.boolean(),
	questionsApiUrl: z.string().url(),
	categoriesApiUrl: z.string().url(),
});

export const env = envValidator.parse({
	dev: import.meta.env.DEV,
	questionsApiUrl: import.meta.env.VITE_QUESTIONS_API_URL as string,
	categoriesApiUrl: import.meta.env.VITE_CATEGORIES_API_URL as string,
});
