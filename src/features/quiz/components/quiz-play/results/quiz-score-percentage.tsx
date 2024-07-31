import { getTimerColor } from "@/features/quiz/utils/get-color";
import { Transition } from "@headlessui/react";
import React from "react";

export type QuizScorePercentageProps = {
	totalAnswered: number;
	totalQuestions: number;
	correctAnswers: number;
	correctPercentage: number;
};

export const QuizScorePercentage = (props: QuizScorePercentageProps) => {
	const { totalAnswered, totalQuestions, correctAnswers, correctPercentage } =
		props;

	const percentage = correctPercentage * 100;
	const [transitionPercentage, setTransitionPercentage] = React.useState(0);

	React.useEffect(() => {
		const interval = setInterval(() => {
			setTransitionPercentage(prev =>
				prev >= percentage ? percentage : prev + 1.42,
			);
		}, 10);

		return () => {
			clearInterval(interval);
		};
	}, [transitionPercentage, percentage]);

	return (
		<Transition
			as="div"
			appear
			show
			className="relative size-56 rounded-full border-2 border-black"
		>
			<div
				className="size-full rounded-full transition-colors"
				style={{
					background: `conic-gradient(${getTimerColor(transitionPercentage / 100, true)} ${transitionPercentage}%, #e5e5e5 ${transitionPercentage}%)`,
				}}
			/>

			<div className="absolute inset-3 z-10 flex flex-col items-center justify-center rounded-full border border-black bg-white">
				<p className="text-3xl font-bold">{`${transitionPercentage.toFixed(2)} %`}</p>
				<p className="font-medium">{`Correct: ${correctAnswers} / ${totalQuestions}`}</p>
				<p className="text-sm text-neutral-700">{`${totalAnswered} Answered`}</p>
			</div>
		</Transition>
	);
};
