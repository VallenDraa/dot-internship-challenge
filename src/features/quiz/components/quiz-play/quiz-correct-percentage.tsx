import { cn } from "@/features/shared/utils/cn";
import { Transition } from "@headlessui/react";

export type QuizCorrectPercentageProps = {
	totalQuestions: number;
	correctAnswers: number;
	correctPercentage: number;
	animate?: boolean;
};
export const QuizCorrectPercentage = (props: QuizCorrectPercentageProps) => {
	const {
		animate = true,
		totalQuestions,
		correctAnswers,
		correctPercentage,
	} = props;

	return (
		<Transition
			as="div"
			show={animate}
			className="relative size-56 rounded-full border-2 border-black"
		>
			<div
				className={cn("size-full rounded-full", {
					"bg-emerald-300": correctPercentage >= 0.6,
					"bg-amber-300": correctPercentage > 0.4 && correctPercentage < 0.6,
					"bg-red-300": correctPercentage <= 0.4,
				})}
			/>

			<div className="absolute inset-3 z-10 flex flex-col items-center justify-center rounded-full bg-white">
				<p className="text-3xl font-bold">{`${(correctPercentage * 100).toFixed(2)} %`}</p>
				<p className="font-medium">{`Answers: ${correctAnswers} / ${totalQuestions}`}</p>
			</div>
		</Transition>
	);
};
