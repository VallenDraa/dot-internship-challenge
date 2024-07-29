import { type QuizProgress } from "../types/quiz-type";

export const QUIZ_SESSION_KEY = "quiz-session";
export const getQuizSessionProgress = () => {
	const progressJson = localStorage.getItem(QUIZ_SESSION_KEY);
	if (!progressJson) {
		return null;
	}

	return JSON.parse(progressJson) as QuizProgress;
};

export const saveQuizSessionProgress = (progress: QuizProgress) => {
	const progressJson = JSON.stringify(progress);

	localStorage.setItem(QUIZ_SESSION_KEY, progressJson);
};

export const clearQuizSessionProgress = () => {
	localStorage.removeItem(QUIZ_SESSION_KEY);
};
