import { type TokenResponse } from "../types/token-type";
import { getRefreshToken } from "../utils/refresh-token";
import { authApi } from "@/lib/axios";

export const refreshAccessTokenApi = async () => {
	const refreshToken = getRefreshToken();

	if (!refreshToken) {
		throw new Error("You are unaunthenticated!");
	}

	const { data } = await authApi.post<TokenResponse>("/refresh", {
		refreshToken,
	});

	return data.token;
};
