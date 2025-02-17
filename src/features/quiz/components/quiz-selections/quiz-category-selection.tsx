import React from "react";
import { Combobox } from "@/features/shared/components/ui/combobox";
import { useQuizCategories } from "@/features/quiz/query/get-quiz-categories-query";
import { CheckIcon } from "@heroicons/react/20/solid";
import { cn } from "@/features/shared/utils/cn";
import { Transition } from "@headlessui/react";

export const QuizCategorySelectionSkeleton = () => (
	<div className="h-14 animate-pulse rounded bg-black/5" />
);

export type QuizCategorySelectionProps = {
	disabled?: boolean;
	selected: string | null;
	onChange: (categoryId: string | null) => void;
};

export const QuizCategorySelection = (props: QuizCategorySelectionProps) => {
	const { disabled, selected, onChange } = props;
	const { data: categories, isLoading } = useQuizCategories();

	const [query, setQuery] = React.useState("");
	const filteredCategories = categories?.filter(category =>
		category.name.toLowerCase().includes(query.toLowerCase()),
	);

	return (
		<>
			{(isLoading || !categories) && <QuizCategorySelectionSkeleton />}

			<Transition appear show={!isLoading}>
				<div
					className={cn(
						"data-[closed]:opacity-0",
						"data-[enter]:data-[closed]:opacity-0 data-[enter]:duration-200",
						"data-[leave]:data-[closed]:opacity-100 data-[leave]:duration-200",
					)}
				>
					<Combobox
						disabled={disabled}
						value={selected}
						onChange={(value: string) => {
							onChange(value || null);
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

						<Combobox.Options className="capitalize [--anchor-max-height:12rem]">
							<Combobox.Option value="">
								<CheckIcon className="invisible size-4 fill-black group-data-[selected]:visible" />
								<div className="text-sm/6 capitalize">Any</div>
							</Combobox.Option>
							{filteredCategories?.map(category => (
								<Combobox.Option
									key={category.id}
									value={category.id.toString()}
								>
									<CheckIcon className="invisible size-4 fill-black group-data-[selected]:visible" />
									<div className="text-sm/6 capitalize">{`${category.id} - ${category.name}`}</div>
								</Combobox.Option>
							))}
						</Combobox.Options>
					</Combobox>
				</div>
			</Transition>
		</>
	);
};
