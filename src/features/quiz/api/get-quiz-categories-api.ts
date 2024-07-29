import { categoriesApi } from "@/lib/axios";
import { type Category } from "../types/quiz-type";

export const getQuizCategoriesApi = async () => {
	const { data } = await categoriesApi.get<{ trivia_categories: Category[] }>(
		"",
	);

	return data.trivia_categories;
};
