import React from "react";
import { Combobox } from "@/features/shared/components/ui/combobox";
import { useQuizCategories } from "../query/get-quiz-categories-query";
import { type Category } from "../types/quiz-type";
import { CheckIcon } from "@heroicons/react/20/solid";
import { cn } from "@/features/shared/utils/cn";
import { Transition } from "@headlessui/react";

export const QuizCategorySelectionSkeleton = () => (
	<div className="h-14 animate-pulse rounded bg-black/5" />
);

export type QuizCategorySelectionProps = {
	selected: Category | null;
	onChange: (category: Category | null) => void;
};

export const QuizCategorySelection = (props: QuizCategorySelectionProps) => {
	const { selected, onChange } = props;
	const { data: categories, isLoading } = useQuizCategories();

	const [query, setQuery] = React.useState("");
	const filteredCategories = categories?.filter(category =>
		category.name.toLowerCase().includes(query.toLowerCase()),
	);

	return (
		<>
			{isLoading && <QuizCategorySelectionSkeleton />}

			<Transition show={!isLoading}>
				<div
					className={cn(
						"data-[closed]:opacity-0",
						"data-[enter]:data-[closed]:opacity-0 data-[enter]:duration-200",
						"data-[leave]:data-[closed]:opacity-100 data-[leave]:duration-200",
					)}
				>
					<Combobox
						value={selected}
						onChange={(value: Category | null) => {
							onChange(value);
						}}
						onClose={() => {
							setQuery("");
						}}
					>
						<Combobox.Input
							label="Category"
							onChange={event => {
								setQuery(event.target.value);
							}}
						/>

						<Combobox.Options>
							{filteredCategories?.map(category => (
								<Combobox.Option key={category.id} value={category.name}>
									<CheckIcon className="invisible size-4 fill-black group-data-[selected]:visible" />
									<div className="text-sm/6">{category.name}</div>
								</Combobox.Option>
							))}
						</Combobox.Options>
					</Combobox>
				</div>
			</Transition>
		</>
	);
};
