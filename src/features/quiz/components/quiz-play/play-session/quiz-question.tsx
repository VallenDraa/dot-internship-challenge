import { type Quiz } from "@/features/quiz/types/quiz-type";
import { QuizTimer } from "./quiz-timer";
import { Button } from "@/features/shared/components/ui/button";
import { Chip } from "@/features/shared/components/ui/chip";
import { getDifficultyColor } from "@/features/quiz/utils/get-color";
import { TransitionedCard } from "@/features/shared/components/ui/transitioned-card";

export type QuizQuestionProps = {
	activeQuizIdx: number;
	activeQuiz: Quiz;
	activeQuizAnswers: string[];
	handleTimesUp: () => void;
	handleUserAnswerQuiz: (answer: string) => void;
};

export const QuizQuestion = (props: QuizQuestionProps) => {
	const {
		activeQuiz,
		activeQuizIdx,
		activeQuizAnswers,
		handleTimesUp,
		handleUserAnswerQuiz,
	} = props;

	return (
		<TransitionedCard className="flex h-min flex-col items-center gap-6">
			<div className="flex w-full justify-between">
				<Chip
					variant="info"
					dangerouslySetInnerHTML={{ __html: activeQuiz.category }}
				/>

				<Chip
					variant={getDifficultyColor(activeQuiz.difficulty)}
					dangerouslySetInnerHTML={{ __html: activeQuiz.difficulty }}
				/>
			</div>

			<h1
				className="mb-4 text-center text-xl font-bold"
				dangerouslySetInnerHTML={{ __html: activeQuiz.question }}
			/>

			<div className="grid grid-cols-1 gap-4 self-stretch md:grid-cols-2">
				{activeQuizAnswers.map((answer, index) => {
					let variant: "primary" | "info" | "warning" | "danger";

					if (index === 0) {
						variant = "primary";
					} else if (index === 1) {
						variant = "danger";
					} else if (index === 2) {
						variant = "info";
					} else {
						variant = "warning";
					}

					return (
						<Button
							size="large"
							variant={variant}
							onClick={() => {
								handleUserAnswerQuiz(answer);
							}}
							key={index}
							dangerouslySetInnerHTML={{ __html: answer }}
						/>
					);
				})}
			</div>

			<QuizTimer
				currentQuizIdx={activeQuizIdx}
				difficulty={activeQuiz.difficulty}
				onTimesUp={handleTimesUp}
			/>
		</TransitionedCard>
	);
};
