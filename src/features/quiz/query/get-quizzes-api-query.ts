import { queryOptions, useQuery } from "@tanstack/react-query";

import { type QueryConfig } from "@/lib/react-query";
import {
	getQuizzesApi,
	type GetQuizzesApiOptions,
} from "../api/get-quizzes-api";

export const QUIZZES_QUERY_KEY = "quizzes";

export const quizzesOptions = (quizzesApiOptions: GetQuizzesApiOptions) =>
	queryOptions({
		refetchOnReconnect: false,
		queryKey: [QUIZZES_QUERY_KEY],
		queryFn: async () => getQuizzesApi(quizzesApiOptions),
	});

export type QuizzesOptions = {
	queryConfig?: QueryConfig<typeof quizzesOptions>;
};

export const useQuizzes = (
	quizzesApiOptions: GetQuizzesApiOptions,
	{ queryConfig }: QuizzesOptions = {},
) => useQuery({ ...quizzesOptions(quizzesApiOptions), ...queryConfig });
