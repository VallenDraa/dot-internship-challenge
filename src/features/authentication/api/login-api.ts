import axios from "axios";
import { type User } from "../types/user-type";
import { type TokenResponse } from "../types/token-type";

export const loginApi = async (username: string, password: string) => {
	const { data } = await axios.post<User & TokenResponse>(
		"https://dummyjson.com/auth/login",
		{ username, password },
	);

	return data;
};
