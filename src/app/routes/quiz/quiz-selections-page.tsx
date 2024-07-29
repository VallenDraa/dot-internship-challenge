import { QuizSelections } from "@/features/quiz/components/quiz-selections";
import { FormLayout } from "@/features/shared/components/layouts/form-layout";

export const QuizLandingPage = () => (
	<FormLayout
		title="🎉 Welcome to Triquest!"
		subtitle="Select your quiz preferences to start the game!"
	>
		<QuizSelections />
	</FormLayout>
);
