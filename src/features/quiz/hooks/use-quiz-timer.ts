import React from "react";
import { type QuizDifficulty } from "../types/quiz-type";
import { getSessionTimer } from "../utils/get-session-timer";

export const useQuizTimer = (
	currentQuizIdx: number,
	difficulty: QuizDifficulty,
	onTimesUp: () => void,
) => {
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

	return { initialTime, timeLeft, timeInPercentage };
};
