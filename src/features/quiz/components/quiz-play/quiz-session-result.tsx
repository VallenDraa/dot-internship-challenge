import React from "react";
import { Link } from "react-router-dom";
import { QuizCorrectPercentage } from "./quiz-correct-percentage";
import { type Quiz } from "@/features/quiz/types/quiz-type";
import { buttonVariants } from "@/features/shared/components/ui/button";
import { cn } from "@/features/shared/utils/cn";
import { QuestionPreviewList } from "./question-preview-list";
import { QuestionPreview } from "./question-preview";
import { HeadingSubheading } from "@/features/shared/components/ui/heading-subheading";

export type QuizSessionResultProps = {
	userAnswers: string[];
	quizzes: Quiz[];
};

export const QuizSessionResult = (props: QuizSessionResultProps) => {
	const { quizzes, userAnswers } = props;

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

	return (
		<div className="flex flex-col items-center gap-8">
			<div className="text-center">
				<HeadingSubheading
					heading="🏆️ Quiz Results"
					headingType="h2"
					subHeading={quizResultMessage}
				/>
			</div>

			<QuizCorrectPercentage
				correctAnswers={correctAnswers}
				correctPercentage={correctPercentage}
				totalQuestions={quizzes.length}
			/>

			<div className="w-full">
				<h2 className="font-bold">Your Answers: </h2>
				<QuestionPreviewList>
					{quizzes.map((quiz, idx) => (
						<QuestionPreview
							key={idx}
							quiz={quiz}
							userAnswer={userAnswers[idx]}
						/>
					))}
				</QuestionPreviewList>
			</div>

			<Link
				to="/"
				className={cn("block w-full", buttonVariants({ variant: "danger" }))}
			>
				Back to selection
			</Link>
		</div>
	);
};
