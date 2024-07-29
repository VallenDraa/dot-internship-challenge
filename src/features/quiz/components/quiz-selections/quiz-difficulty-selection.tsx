import React from "react";
import { Combobox } from "@/features/shared/components/ui/combobox";
import { type QuizDifficulty } from "@/features/quiz/types/quiz-type";
import { CheckIcon } from "@heroicons/react/20/solid";

export type QuizDifficultySelectionProps = {
	selected: QuizDifficulty | null;
	onChange: (category: QuizDifficulty | null) => void;
};

export const QuizDifficultySelection = (
	props: QuizDifficultySelectionProps,
) => {
	const { selected, onChange } = props;
	const difficulties: QuizDifficulty[] = ["easy", "medium", "hard"];

	const [query, setQuery] = React.useState("");
	const filteredDifficulties = difficulties.filter(difficulty =>
		difficulty.includes(query.toLowerCase()),
	);

	return (
		<Combobox
			value={selected}
			onChange={(value: QuizDifficulty) => {
				onChange((value as string) === "" ? null : value);
			}}
			onClose={() => {
				setQuery("");
			}}
		>
			<Combobox.Input
				label="Difficulty"
				onChange={event => {
					setQuery(event.target.value);
				}}
			/>

			<Combobox.Options className="capitalize">
				<Combobox.Option value="">
					<CheckIcon className="invisible size-4 fill-black group-data-[selected]:visible" />
					<div className="text-sm/6 capitalize">Any</div>
				</Combobox.Option>
				{filteredDifficulties.map(difficulty => (
					<Combobox.Option key={difficulty} value={difficulty}>
						<CheckIcon className="invisible size-4 fill-black group-data-[selected]:visible" />
						<div className="text-sm/6 capitalize">{difficulty}</div>
					</Combobox.Option>
				))}
			</Combobox.Options>
		</Combobox>
	);
};
