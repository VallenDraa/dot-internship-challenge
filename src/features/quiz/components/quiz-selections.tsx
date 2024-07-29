import React from "react";
import { QuizCategorySelection } from "./quiz-category-selection";
import { type Category } from "../types/quiz-type";

export const QuizSelections = () => {
	const [selected, setSelected] = React.useState<Category | null>(null);

	return (
		<div>
			<QuizCategorySelection selected={selected} onChange={setSelected} />
		</div>
	);
};
