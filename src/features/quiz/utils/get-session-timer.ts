import { type QuizDifficulty } from "../types/quiz-type";

export const getSessionTimer = (difficulty: QuizDifficulty) => {
	const BASE_TIME_PER_QUESTION = 15_000;
	let difficultyDivisor = 0;

	if (difficulty === "hard") {
		difficultyDivisor = 0.75;
	} else if (difficulty === "medium") {
		difficultyDivisor = 0.85;
	} else {
		difficultyDivisor = 0;
	}

	return difficultyDivisor
		? BASE_TIME_PER_QUESTION * difficultyDivisor
		: BASE_TIME_PER_QUESTION;
};
