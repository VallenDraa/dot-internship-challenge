import { z } from "zod";

export const loginValidator = z.object({
	username: z.string().trim().min(1, "Username cannot be empty"),
	password: z.string().trim().min(1, "Password cannot be empty"),
});

export type LoginInput = z.infer<typeof loginValidator>;
