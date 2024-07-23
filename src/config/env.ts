import { z } from "zod";

export const envValidator = z.object({
	questionsApiUrl: z.string().url(),
	categoriesApiUrl: z.string().url(),
});

export const env = envValidator.parse({
	questionsApiUrl: import.meta.env.VITE_QUESTIONS_API_URL as string,
	categoriesApiUrl: import.meta.env.VITE_CATEGORIES_API_URL as string,
});
