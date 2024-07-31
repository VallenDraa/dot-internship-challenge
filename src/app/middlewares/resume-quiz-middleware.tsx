import React from "react";
import { getQuizSessionProgress } from "@/features/quiz/utils/save-quiz-session-progress";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

export type ResumeQuizMiddlewareProps = {
	children: React.ReactNode;
};

export const ResumeQuizMiddleware = (props: ResumeQuizMiddlewareProps) => {
	const location = useLocation();
	const quizSessionProgress = getQuizSessionProgress();
	const isNotifiedRef = React.useRef(false);

	React.useEffect(() => {
		if (quizSessionProgress && !isNotifiedRef.current) {
			toast.info("Loading saved quiz session progress!");
			isNotifiedRef.current = true;
		}
	}, [quizSessionProgress]);

	if (quizSessionProgress && location.pathname !== "/play") {
		return <Navigate to="/play" replace />;
	}

	return props.children;
};
