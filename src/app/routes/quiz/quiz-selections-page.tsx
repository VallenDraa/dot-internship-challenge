/* eslint-disable react-refresh/only-export-components */
import { QuizSelections } from "@/features/quiz/components/quiz-selections";
import { quizCategoriesOptions } from "@/features/quiz/query/get-quiz-categories-query";
import { FormLayout } from "@/features/shared/components/layouts/form-layout";
import { type QueryClient } from "@tanstack/react-query";

export const quizSelectionsPageLoader =
	(queryClient: QueryClient) => async () => {
		const quizCategoryQuery = quizCategoriesOptions();

		return (
			queryClient.getQueryData(quizCategoryQuery.queryKey) ??
			queryClient.fetchQuery(quizCategoryQuery)
		);
	};

export const QuizSelectionsPage = () => (
	<FormLayout
		title="🎉 Welcome to Triquest!"
		subtitle="Select your quiz preferences to start the game!"
	>
		<QuizSelections />
	</FormLayout>
);
