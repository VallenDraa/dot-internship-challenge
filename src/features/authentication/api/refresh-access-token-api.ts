import axios from "axios";
import { type TokenResponse } from "../types/token-type";
import { getRefreshToken } from "../utils/refresh-token";

export const refreshAccessTokenApi = async () => {
	const refreshToken = getRefreshToken();

	if (!refreshToken) {
		throw new Error("You are unaunthenticated!");
	}

	const { data } = await axios.post<TokenResponse>(
		"https://dummyjson.com/auth/refresh",
		{ refreshToken },
	);

	return data.token;
};
