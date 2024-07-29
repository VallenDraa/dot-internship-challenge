import React from "react";
import { Combobox } from "@/features/shared/components/ui/combobox";
import { type QuizType } from "../../types/quiz-type";
import { CheckIcon } from "@heroicons/react/20/solid";

export type QuizTypeSelectionProps = {
	disabled?: boolean;
	selected: QuizType | null;
	onChange: (category: QuizType | null) => void;
};

export const QuizTypeSelection = (props: QuizTypeSelectionProps) => {
	const { disabled, selected, onChange } = props;
	const types: QuizType[] = ["boolean", "multiple"];

	const [query, setQuery] = React.useState("");
	const filteredTypes = types.filter(type =>
		type.includes(query.toLowerCase()),
	);

	return (
		<Combobox
			value={selected}
			disabled={disabled}
			onChange={(value: QuizType) => {
				onChange((value as string) === "" ? null : value);
			}}
			onClose={() => {
				setQuery("");
			}}
		>
			<Combobox.Input
				label="Type"
				onChange={event => {
					setQuery(event.target.value);
				}}
			/>

			<Combobox.Options className="capitalize">
				<Combobox.Option value="">
					<CheckIcon className="invisible size-4 fill-black group-data-[selected]:visible" />
					<div className="text-sm/6 capitalize">Any</div>
				</Combobox.Option>
				{filteredTypes.map(type => (
					<Combobox.Option key={type} value={type}>
						<CheckIcon className="invisible size-4 fill-black group-data-[selected]:visible" />
						<div className="text-sm/6 capitalize">{type}</div>
					</Combobox.Option>
				))}
			</Combobox.Options>
		</Combobox>
	);
};
