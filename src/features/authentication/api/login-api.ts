import { type User } from "../types/user-type";
import { type TokenResponse } from "../types/token-type";
import { authApi } from "@/lib/axios";

export const loginApi = async (username: string, password: string) => {
	const { data } = await authApi.post<User & TokenResponse>("/login", {
		username,
		password,
	});

	return data;
};
