import { queryOptions, useQuery } from "@tanstack/react-query";

import { type QueryConfig } from "@/lib/react-query";
import { getQuizCategoriesApi } from "../api/get-quiz-categories-api";

export const QUIZ_CATEGORY_QUERY = "quiz-categories";

export const quizCategoriesOptions = () =>
	queryOptions({
		queryKey: [QUIZ_CATEGORY_QUERY],
		queryFn: getQuizCategoriesApi,
	});

export type QuizCategoriesOptions = {
	queryConfig?: QueryConfig<typeof quizCategoriesOptions>;
};

export const useQuizCategories = ({
	queryConfig,
}: QuizCategoriesOptions = {}) =>
	useQuery({ ...quizCategoriesOptions(), ...queryConfig });
