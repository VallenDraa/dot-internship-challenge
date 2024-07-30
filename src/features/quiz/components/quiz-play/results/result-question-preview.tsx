import { Button } from "@/features/shared/components/ui/button";
import { type Quiz } from "@/features/quiz/types/quiz-type";
import { cn } from "@/features/shared/utils/cn";
import { Chip } from "@/features/shared/components/ui/chip";
import { Card } from "@/features/shared/components/ui/card";
import { getDifficultyColor } from "@/features/quiz/utils/get-color";

export type ResultQuestionPreviewProps = {
	quiz: Quiz;
	userAnswer: string;
};

export const ResultQuestionPreview = (props: ResultQuestionPreviewProps) => {
	const { quiz, userAnswer } = props;

	return (
		<Card
			as="li"
			className="flex w-96 flex-shrink-0 snap-center flex-col justify-between gap-4 p-4"
		>
			<div>
				<div className="flex w-full flex-wrap justify-between gap-2">
					<Chip
						variant="info"
						dangerouslySetInnerHTML={{ __html: quiz.category }}
					/>

					<Chip
						variant={getDifficultyColor(quiz.difficulty)}
						dangerouslySetInnerHTML={{ __html: quiz.difficulty }}
					/>
				</div>

				<h4
					className="mt-8 text-center text-lg font-bold"
					dangerouslySetInnerHTML={{ __html: quiz.question }}
				/>
			</div>

			<div>
				<div className="grid grid-cols-2 gap-2">
					<Button
						disabled
						size="small"
						variant="primary"
						dangerouslySetInnerHTML={{ __html: quiz.correct_answer }}
						className={cn({
							"font-bold shadow-brutal-base disabled:opacity-100":
								userAnswer === quiz.correct_answer,
						})}
					/>

					{quiz.incorrect_answers.map((incorrectAnswer, idx) => (
						<Button
							key={idx}
							disabled
							size="small"
							variant="danger"
							dangerouslySetInnerHTML={{ __html: incorrectAnswer }}
							className={cn({
								"font-bold shadow-brutal-lg disabled:opacity-100":
									userAnswer === incorrectAnswer,
							})}
						/>
					))}
				</div>

				<p className="mt-6 text-sm italic text-neutral-700">
					{userAnswer ? `You Answered: ${userAnswer}` : "You didn't answer"}
				</p>
			</div>
		</Card>
	);
};
