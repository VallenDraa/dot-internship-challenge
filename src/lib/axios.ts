import { env } from "@/config/env";
import axios from "axios";

export const questionsApi = axios.create({
	baseURL: env.questionsApiUrl,
});

export const categoriesApi = axios.create({
	baseURL: env.categoriesApiUrl,
});
