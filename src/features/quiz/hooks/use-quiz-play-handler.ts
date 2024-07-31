import React from "react";
import { type GetQuizzesApiOptions } from "../api/get-quizzes-api";
import { useQuizzes } from "../query/get-quizzes-api-query";
import {
	clearQuizSessionProgress,
	getQuizSessionProgress,
	saveQuizSessionProgress,
} from "../utils/save-quiz-session-progress";
import { toast } from "sonner";
import { useLocation, useNavigate } from "react-router-dom";

export const useQuizPlayHandler = (options: GetQuizzesApiOptions) => {
	const savedProgress = React.useRef(getQuizSessionProgress());

	const { data: quizzes, isFetching } = useQuizzes(options);

	const [activeQuizIdx, setActiveQuizIdx] = React.useState(
		savedProgress.current?.currentIndex ?? 0,
	);
	const activeQuiz = quizzes?.[activeQuizIdx];
	const activeQuizAnswers = React.useMemo(() => {
		if (!quizzes) {
			return [];
		}

		if (!activeQuiz) {
			return [];
		}

		const { correct_answer, incorrect_answers } = activeQuiz;

		return [correct_answer, ...incorrect_answers].sort(
			() => Math.random() - 0.5,
		);
	}, [quizzes, activeQuiz]);

	const [userAnswers, setUserAnswers] = React.useState<string[]>(
		savedProgress.current?.userAnswers ?? [],
	);
	const [userHasAnswered, setUserHasAnswered] = React.useState(false);

	const [isSessionFinished, setIsSessionFinished] = React.useState(false);
	const handleUserAnswerQuiz = React.useCallback(
		(answer: string) => {
			if (!quizzes) {
				return;
			}

			setUserHasAnswered(true);

			setUserAnswers(prev => [...prev, answer]);

			if (activeQuizIdx < quizzes.length - 1) {
				setActiveQuizIdx(prev => prev + 1);
			} else {
				setIsSessionFinished(true);
			}

			setUserHasAnswered(false);
		},
		[activeQuizIdx, quizzes],
	);

	const handleTimesUp = React.useCallback(() => {
		setIsSessionFinished(true);
		clearQuizSessionProgress();
	}, []);

	// Handle saving progress on the start
	// of each question
	React.useEffect(() => {
		if (quizzes) {
			saveQuizSessionProgress({
				currentIndex: activeQuizIdx,
				quizzes,
				userAnswers,
			});
		}
	}, [activeQuizIdx, quizzes, userAnswers]);

	// Handle clearing progress when
	// all of the questions have been answered
	React.useEffect(() => {
		if (isSessionFinished) {
			clearQuizSessionProgress();
		}
	}, [isSessionFinished]);

	// Handle when quizzes that are
	// fetched from openTDB is empty
	const navigate = useNavigate();
	const location = useLocation();
	React.useEffect(() => {
		if (quizzes?.length === 0 && location.pathname === "/play") {
			clearQuizSessionProgress();
			toast.info("It seems that no quizzes are found, with your selections!");
			navigate("/");
		}
	}, [quizzes?.length, navigate, location.pathname]);

	return {
		isSessionFinished,
		activeQuiz,
		activeQuizIdx,
		activeQuizAnswers,
		quizzes,
		userAnswers,
		isFetching,
		userHasAnswered,
		handleTimesUp,
		handleUserAnswerQuiz,
	};
};
