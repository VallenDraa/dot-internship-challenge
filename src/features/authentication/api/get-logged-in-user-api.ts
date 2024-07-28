import { type User } from "../types/user-type";
import { authApi } from "@/lib/axios";

export const getLoggedInUserApi = async (bearerToken: string) => {
	const { data } = await authApi.get<User>("/me", {
		headers: { Authorization: bearerToken },
	});

	return data;
};
