import { type QuizProgress } from "../types/quiz-type";

export const QUIZ_SESSION_KEY = "quiz-session";

export const getQuizSessionProgress = () => {
	const progressJson = localStorage.getItem(QUIZ_SESSION_KEY);
	if (!progressJson) {
		return null;
	}

	const base64DecodedProgress = window.atob(progressJson);
	const progress = JSON.parse(base64DecodedProgress) as QuizProgress;

	return progress;
};

export const saveQuizSessionProgress = (progress: QuizProgress) => {
	const progressJson = JSON.stringify(progress);

	const base64EncodedProgress = window.btoa(progressJson);

	localStorage.setItem(QUIZ_SESSION_KEY, base64EncodedProgress);
};

export const clearQuizSessionProgress = () => {
	localStorage.removeItem(QUIZ_SESSION_KEY);
};
