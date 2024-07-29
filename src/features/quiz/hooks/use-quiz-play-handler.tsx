import React from "react";
import { type GetQuizzesApiOptions } from "../api/get-quizzes-api";
import { useQuizzes } from "../query/get-quizzes-api-query";
import { type Quiz } from "../types/quiz-type";

export const useQuizPlayHandler = (options: GetQuizzesApiOptions) => {
	const { data: quizzess, isLoading } = useQuizzes(options);

	const [activeQuiz, setActiveQuiz] = React.useState(0);
	const activeQuizAnswers = React.useMemo(() => {
		if (!quizzess) {
			return [];
		}

		const currentQuiz = quizzess[activeQuiz] as Quiz | undefined;

		if (!currentQuiz) {
			return [];
		}

		const { correct_answer, incorrect_answers } = currentQuiz;

		return [correct_answer, ...incorrect_answers].sort(
			() => Math.random() - 0.5,
		);
	}, [quizzess, activeQuiz]);

	const [userAnswers, setUserAnswers] = React.useState<string[]>([]);
	const [userHasAnswered, setUserHasAnswered] = React.useState(false);

	const [isSessionFinished, setIsSessionFinished] = React.useState(false);
	const handleUserAnswerQuiz = React.useCallback(
		(answer: string) => {
			if (!quizzess) {
				return;
			}

			setUserHasAnswered(true);

			setUserAnswers(prev => [...prev, answer]);

			if (activeQuiz < quizzess.length - 1) {
				setActiveQuiz(prev => prev + 1);
			} else {
				setIsSessionFinished(true);
			}

			setUserHasAnswered(false);
		},
		[activeQuiz, quizzess],
	);

	const handleTimesUp = React.useCallback(() => {
		setIsSessionFinished(true);
	}, []);

	return {
		isSessionFinished,
		activeQuiz,
		activeQuizAnswers,
		quizzess,
		userAnswers,
		isLoading,
		userHasAnswered,
		handleUserAnswerQuiz,
		handleTimesUp,
	};
};
