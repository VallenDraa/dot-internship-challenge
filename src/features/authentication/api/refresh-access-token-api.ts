import axios from "axios";
import { getBearerToken } from "../utils/tokens";
import { type TokenResponse } from "../types/token-type";

export const getLoggedInUserApi = async () => {
	const bearerToken = getBearerToken();

	if (!bearerToken) {
		throw new Error("You are unaunthenticated!");
	}

	const { data } = await axios.post<TokenResponse>(
		"https://dummyjson.com/auth/refresh",
		{ headers: { Authorization: bearerToken } },
	);

	return data;
};
