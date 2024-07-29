/* eslint-disable react-refresh/only-export-components */
import { QuizPlay } from "@/features/quiz/components/quiz-play";
import { quizzesOptions } from "@/features/quiz/query/get-quizzes-api-query";
import { type QueryClient } from "@tanstack/react-query";
import { type LoaderFunctionArgs } from "react-router-dom";

export const quizPlayPageLoader =
	(queryClient: QueryClient) =>
	async ({ request }: LoaderFunctionArgs) => {
		const params = Object.fromEntries(
			new URL(request.url).searchParams.entries(),
		);

		const quizCategoryQuery = quizzesOptions(params);

		const result =
			queryClient.getQueryData(quizCategoryQuery.queryKey) ??
			(await queryClient.fetchQuery(quizCategoryQuery));

		return result;
	};

export const QuizPlayPage = () => (
	<main className="flex min-h-screen items-center justify-center py-5">
		<QuizPlay />
	</main>
);
