/* eslint-disable react-refresh/only-export-components */
import { QuizSelections } from "@/features/quiz/components/quiz-selections";
import { quizCategoriesOptions } from "@/features/quiz/query/get-quiz-categories-query";
import { FormLayout } from "@/features/shared/components/layouts/form-layout";
import { type QueryClient } from "@tanstack/react-query";

export const quizSelectionsPageLoader =
	(queryClient: QueryClient) => async () => {
		const quizCategoryQuery = quizCategoriesOptions();

		const quizCategories =
			queryClient.getQueryData(quizCategoryQuery.queryKey) ??
			(await queryClient.fetchQuery(quizCategoryQuery));

		return { quizCategories };
	};

export const QuizSelectionsPage = () => (
	<FormLayout
		title="🎉 Welcome to Triquest!"
		subtitle="Select your quiz preferences to start the game!"
	>
		<QuizSelections />
	</FormLayout>
);
