import React from "react";
import { type GetQuizzesApiOptions } from "@/features/quiz/api/get-quizzes-api";
import { useQuizzes } from "@/features/quiz/query/get-quizzes-api-query";
import { Button } from "@/features/shared/components/ui/button";
import { Transition } from "@headlessui/react";
import { QuizTimer } from "./quiz-timer";
import { QuizSessionResult } from "./quiz-session-result";
import { type Quiz } from "@/features/quiz/types/quiz-type";

export type QuizPlayProps = GetQuizzesApiOptions;

export const QuizPlaySkeleton = () => <div>is loading quiz...</div>;

export const QuizPlay = (props: QuizPlayProps) => {
	const { amount, category, difficulty, type } = props;

	const { data: quizzess, isLoading } = useQuizzes({
		amount,
		category,
		difficulty,
		type,
	});

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

	const [isSessionFinished, setIsSessionFinished] = React.useState(false);
	const handleUserAnswerQuiz = React.useCallback(
		(answer: string) => {
			if (!quizzess) {
				return;
			}

			setUserAnswers(prev => [...prev, answer]);

			if (activeQuiz < quizzess.length - 1) {
				setActiveQuiz(prev => prev + 1);
			} else {
				setIsSessionFinished(true);
			}
		},
		[activeQuiz, quizzess],
	);

	const handleTimesUp = React.useCallback(() => {
		setIsSessionFinished(true);
	}, []);

	return (
		<>
			<Transition show={isSessionFinished}>
				<div className="h-min max-w-xl rounded border-2 border-black bg-white p-10 shadow-brutal-lg">
					<QuizSessionResult
						quizzes={quizzess ?? []}
						userAnswers={userAnswers}
					/>
				</div>
			</Transition>

			<Transition show={!isSessionFinished}>
				{!quizzess && isLoading && <QuizPlaySkeleton />}
				{!isLoading && quizzess?.[activeQuiz] && (
					<div className="flex h-min max-w-xl flex-col items-center gap-4 rounded border-2 border-black bg-white p-10 shadow-brutal-lg">
						<QuizTimer
							currentQuizIdx={activeQuiz}
							difficulty={quizzess[activeQuiz].difficulty}
							onTimesUp={handleTimesUp}
						/>

						<span
							className="inline-block rounded-full border-2 border-black bg-amber-300 px-2 py-1 text-sm text-black"
							dangerouslySetInnerHTML={{
								__html: quizzess[activeQuiz].category,
							}}
						/>

						<h1
							className="mb-4 text-center text-xl font-bold"
							dangerouslySetInnerHTML={{
								__html: quizzess[activeQuiz].question,
							}}
						/>

						<div className="grid grid-cols-1 gap-4 self-stretch md:grid-cols-2">
							{activeQuizAnswers.map((answer, index) => (
								<Button
									size="large"
									onClick={() => {
										handleUserAnswerQuiz(answer);
									}}
									key={index}
									dangerouslySetInnerHTML={{ __html: answer }}
								/>
							))}
						</div>
					</div>
				)}
			</Transition>
		</>
	);
};
