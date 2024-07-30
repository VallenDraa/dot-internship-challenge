import { type QuizDifficulty } from "../types/quiz-type";

export const getDifficultyColor = (difficulty: QuizDifficulty) => {
	let difficultyColor: "danger" | "warning" | "primary";

	if (difficulty === "hard") {
		difficultyColor = "danger";
	} else if (difficulty === "medium") {
		difficultyColor = "warning";
	} else {
		difficultyColor = "primary";
	}

	return difficultyColor;
};
