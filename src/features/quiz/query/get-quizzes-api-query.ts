import { queryOptions, useQuery } from "@tanstack/react-query";

import { type QueryConfig } from "@/lib/react-query";
import {
	getQuizzesApi,
	type GetQuizzesApiOptions,
} from "../api/get-quizzes-api";
import { getQuizSessionProgress } from "../utils/save-quiz-session-progress";
import { type Quiz } from "../types/quiz-type";

export const QUIZZES_QUERY_KEY = "quizzes";

export const quizzesOptions = (quizzesApiOptions: GetQuizzesApiOptions) =>
	queryOptions({
		refetchOnReconnect: false,
		staleTime: Infinity,
		queryKey: [QUIZZES_QUERY_KEY],
		queryFn: async (): Promise<Quiz[] | null> =>
			getQuizzesApi(quizzesApiOptions),
		initialData: (getQuizSessionProgress()?.quizzes ?? undefined) as
			| Quiz[]
			| null,
	});

export type QuizzesOptions = {
	queryConfig?: QueryConfig<typeof quizzesOptions>;
};

export const useQuizzes = (
	quizzesApiOptions: GetQuizzesApiOptions,
	{ queryConfig }: QuizzesOptions = {},
) => useQuery({ ...quizzesOptions(quizzesApiOptions), ...queryConfig });
