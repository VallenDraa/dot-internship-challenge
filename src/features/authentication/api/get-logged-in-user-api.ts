import axios from "axios";
import { type User } from "../types/user-type";

export const getLoggedInUserApi = async (bearerToken: string) => {
	const { data } = await axios.get<User>("https://dummyjson.com/auth/me", {
		headers: { Authorization: bearerToken },
	});

	return data;
};
