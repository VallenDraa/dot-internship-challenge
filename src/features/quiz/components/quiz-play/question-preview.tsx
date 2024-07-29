import { Button } from "@/features/shared/components/ui/button";
import { type Quiz } from "../../types/quiz-type";
import { cn } from "@/features/shared/utils/cn";

export type QuestionPreviewProps = {
	quiz: Quiz;
	userAnswer: string;
};

export const QuestionPreview = (props: QuestionPreviewProps) => {
	const { quiz, userAnswer } = props;

	return (
		<li className="flex w-96 flex-shrink-0 snap-center flex-col justify-between gap-4 rounded border-2 border-black bg-white p-4 shadow-brutal-base">
			<div>
				<span
					className="rounded-full border-2 border-black bg-amber-300 px-2 py-1 text-xs text-black"
					dangerouslySetInnerHTML={{ __html: quiz.category }}
				/>

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
							"font-bold shadow-brutal-lg disabled:opacity-100":
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
		</li>
	);
};
