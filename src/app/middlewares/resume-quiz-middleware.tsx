import type React from "react";
import { getQuizSessionProgress } from "@/features/quiz/utils/save-quiz-session-progress";
import { Navigate, useLocation } from "react-router-dom";

export type ResumeQuizMiddlewareProps = {
	children: React.ReactNode;
};

export const ResumeQuizMiddleware = (props: ResumeQuizMiddlewareProps) => {
	const location = useLocation();
	const quizSessionProgress = getQuizSessionProgress();

	if (quizSessionProgress && location.pathname !== "/play") {
		return <Navigate to="/play" replace />;
	}

	return props.children;
};
