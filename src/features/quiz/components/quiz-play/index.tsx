import { type GetQuizzesApiOptions } from "@/features/quiz/api/get-quizzes-api";
import { QuizSessionResult } from "./results/quiz-session-result";
import { useQuizPlayHandler } from "@/features/quiz/hooks/use-quiz-play-handler";
import { QuizQuestion } from "./play-session/quiz-question";

export type QuizPlayProps = GetQuizzesApiOptions;

export const QuizPlaySkeleton = () => <div>is loading quiz...</div>;

export const QuizPlay = (props: QuizPlayProps) => {
	const {
		activeQuiz,
		activeQuizIdx,
		activeQuizAnswers,
		isFetching,
		isSessionFinished,
		quizzes,
		userAnswers,
		handleTimesUp,
		handleUserAnswerQuiz,
	} = useQuizPlayHandler(props);

	return (
		<>
			{isSessionFinished && (
				<QuizSessionResult quizzes={quizzes ?? []} userAnswers={userAnswers} />
			)}

			{!isSessionFinished && (
				<>
					{(!quizzes || isFetching) && <QuizPlaySkeleton />}

					<div className="flex flex-col items-center gap-4">
						<span className="text-lg font-bold">{`Question ${activeQuizIdx + 1} / ${quizzes?.length}`}</span>

						{!isFetching && activeQuiz && (
							<QuizQuestion
								activeQuiz={activeQuiz}
								activeQuizAnswers={activeQuizAnswers}
								activeQuizIdx={activeQuizIdx}
								handleTimesUp={handleTimesUp}
								handleUserAnswerQuiz={handleUserAnswerQuiz}
							/>
						)}
					</div>
				</>
			)}
		</>
	);
};
