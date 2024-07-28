import axios from "axios";
import { type User } from "../types/user-type";
import { getBearerToken } from "../utils/tokens";

export const getLoggedInUserApi = async () => {
	const bearerToken = getBearerToken();

	if (!bearerToken) {
		throw new Error("You are unaunthenticated!");
	}

	const { data } = await axios.get<User>("https://dummyjson.com/auth/me", {
		headers: { Authorization: bearerToken },
	});

	return data;
};
