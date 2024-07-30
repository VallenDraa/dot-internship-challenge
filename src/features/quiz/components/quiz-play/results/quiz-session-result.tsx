import React from "react";
import { useNavigate } from "react-router-dom";
import { QuizScorePercentage } from "./quiz-score-percentage";
import { type Quiz } from "@/features/quiz/types/quiz-type";
import { Button } from "@/features/shared/components/ui/button";
import { ResultQuestionPreviewList } from "./result-question-preview-list";
import { ResultQuestionPreview } from "./result-question-preview";
import { HeadingSubheading } from "@/features/shared/components/ui/heading-subheading";
import { TransitionedCard } from "@/features/shared/components/ui/transitioned-card";
import { clearQuizSessionProgress } from "@/features/quiz/utils/save-quiz-session-progress";

export type QuizSessionResultProps = {
	userAnswers: string[];
	quizzes: Quiz[];
};

export const QuizSessionResult = (props: QuizSessionResultProps) => {
	const { quizzes, userAnswers } = props;

	const navigate = useNavigate();

	const correctAnswers = React.useMemo(
		() =>
			quizzes.reduce((acc, quiz, idx) => {
				const userAnswer = userAnswers[idx];
				const isCorrect = quiz.correct_answer === userAnswer;

				return isCorrect ? acc + 1 : acc;
			}, 0),
		[quizzes, userAnswers],
	);
	const correctPercentage = correctAnswers / quizzes.length;

	const quizResultMessage = React.useMemo(() => {
		if (correctPercentage > 0.6) {
			return "Hey, turns out you did good after all!";
		}

		if (correctPercentage > 0.4 && correctPercentage < 0.6) {
			return "Yeah, you're all right!";
		}

		return "Yikes, it could've been better!";
	}, [correctPercentage]);

	const endQuizSession = () => {
		clearQuizSessionProgress();
		navigate("/");
	};

	return (
		<TransitionedCard className="flex h-min flex-col items-center gap-8">
			<div className="text-center">
				<HeadingSubheading
					heading="🏆️ Quiz Results"
					headingType="h2"
					subHeading={quizResultMessage}
				/>
			</div>

			<QuizScorePercentage
				correctAnswers={correctAnswers}
				correctPercentage={correctPercentage}
				totalQuestions={quizzes.length}
			/>

			<div className="w-full">
				<h2 className="font-bold">Your Answers: </h2>
				<ResultQuestionPreviewList>
					{quizzes.map((quiz, idx) => (
						<ResultQuestionPreview
							key={idx}
							quiz={quiz}
							userAnswer={userAnswers[idx]}
						/>
					))}
				</ResultQuestionPreviewList>
			</div>

			<Button variant="danger" className="w-full" onClick={endQuizSession}>
				Back to selection
			</Button>
		</TransitionedCard>
	);
};
