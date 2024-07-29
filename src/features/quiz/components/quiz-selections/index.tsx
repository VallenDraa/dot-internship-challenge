import { Input } from "@/features/shared/components/ui/input";
import { QuizCategorySelection } from "./quiz-category-selection";
import { QuizDifficultySelection } from "./quiz-difficulty-selection";
import { QuizTypeSelection } from "./quiz-type-selection";
import { Button } from "@/features/shared/components/ui/button";
import { useQuizSelectionHandler } from "@/features/quiz/hooks/use-quiz-selection-handler";

export const QuizSelections = () => {
	const {
		amount,
		category,
		difficulty,
		isQuizStarting,
		setAmount,
		setCategory,
		setDifficulty,
		type,
		setType,
		startQuizSession,
	} = useQuizSelectionHandler();

	return (
		<div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				<Input
					disabled={isQuizStarting}
					type="number"
					label="Question Amount"
					min={1}
					max={30}
					value={amount}
					onChange={e => {
						setAmount(e.target.valueAsNumber);
					}}
				/>
				<QuizTypeSelection
					disabled={isQuizStarting}
					selected={type}
					onChange={setType}
				/>
				<QuizDifficultySelection
					disabled={isQuizStarting}
					selected={difficulty}
					onChange={setDifficulty}
				/>
				<QuizCategorySelection
					disabled={isQuizStarting}
					selected={category}
					onChange={setCategory}
				/>
			</div>

			<Button
				disabled={isQuizStarting}
				onClick={startQuizSession}
				className="mt-8 w-full"
			>
				Start Quiz
			</Button>
		</div>
	);
};
