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

export const getTimerColor = (timePercentage: number, asHex = false) => {
	let timerColor: string;

	if (timePercentage >= 0.6) {
		timerColor = asHex ? "#34D399" : "bg-emerald-300";
	} else if (timePercentage > 0.4 && timePercentage < 0.6) {
		timerColor = asHex ? "#fcd34d" : "bg-amber-300";
	} else {
		timerColor = asHex ? "#fca5a5" : "bg-red-300";
	}

	return timerColor;
};
