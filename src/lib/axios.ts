import { env } from "@/config/env";
import { clearRefreshToken } from "@/features/authentication/utils/refresh-token";
import axios, { type AxiosError } from "axios";

export const questionsApi = axios.create({
	baseURL: env.questionsApiUrl,
});

export const categoriesApi = axios.create({
	baseURL: env.categoriesApiUrl,
});

export const authApi = axios.create({
	baseURL: env.authApiUrl,
});

authApi.interceptors.response.use(
	res => res,
	async (err: AxiosError) => {
		if (err.response?.status === 401 || err.response?.status === 403) {
			clearRefreshToken();

			const currentPath = window.location.pathname;
			window.location.replace(
				`/auth/login?redirectTo=${encodeURIComponent(currentPath)}`,
			);
		}

		return Promise.reject(err);
	},
);
