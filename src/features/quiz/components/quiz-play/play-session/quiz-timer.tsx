import { getSessionTimer } from "@/features/quiz/utils/get-session-timer";
import { type QuizDifficulty } from "@/features/quiz/types/quiz-type";
import React from "react";
import { cn } from "@/features/shared/utils/cn";

export type QuizTimerProps = {
	currentQuizIdx: number;
	difficulty: QuizDifficulty;
	onTimesUp: () => void;
};

export const QuizTimer = (props: QuizTimerProps) => {
	const { currentQuizIdx, difficulty, onTimesUp } = props;

	const [initialTime, setInitialTime] = React.useState(() =>
		getSessionTimer(difficulty),
	);
	const [timeLeft, setTimeLeft] = React.useState(initialTime);
	const timeInPercentage = timeLeft / initialTime;

	React.useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(prev => {
				if (prev === 0) {
					onTimesUp();
					return 0;
				}

				const newTime = prev - 70;

				return newTime < 0 ? 0 : newTime;
			});
		}, 70);

		return () => {
			clearTimeout(timer);

			const newTime = getSessionTimer(difficulty);
			setInitialTime(newTime);
			setTimeLeft(newTime);
		};
	}, [onTimesUp, difficulty, currentQuizIdx]);

	return (
		<div className="relative h-5 w-full overflow-clip rounded-full border-2 border-black">
			<div
				className={cn("absolute inset-1 origin-left rounded-full transition", {
					"bg-emerald-300": timeInPercentage >= 0.6,
					"bg-amber-300": timeInPercentage > 0.4 && timeInPercentage < 0.6,
					"bg-red-300": timeInPercentage <= 0.4,
				})}
				style={{ transform: `scaleX(${timeInPercentage})` }}
			/>
		</div>
	);
};
