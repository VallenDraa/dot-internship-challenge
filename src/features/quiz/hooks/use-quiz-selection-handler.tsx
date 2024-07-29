import React from "react";
import {
	type QuizDifficulty,
	type Category,
	type QuizType,
} from "@/features/quiz/types/quiz-type";
import { createSearchParams, useNavigate } from "react-router-dom";

export const useQuizSelectionHandler = () => {
	const [category, setCategory] = React.useState<Category | null>(null);
	const [difficulty, setDifficulty] = React.useState<QuizDifficulty | null>(
		null,
	);
	const [type, setType] = React.useState<QuizType | null>(null);
	const [amount, setAmount] = React.useReducer(
		(state: number, value: number) => {
			if (value < 1 || value > 30) {
				return state;
			}

			return value;
		},
		1,
	);

	const navigate = useNavigate();
	const startQuizSession = React.useCallback(() => {
		const params: Record<string, string> = {
			amount: amount.toString(),
		};

		if (category) {
			params.category = category.id.toString();
		}

		if (difficulty) {
			params.difficulty = difficulty as string;
		}

		if (type) {
			params.type = type;
		}

		navigate({
			pathname: "/play",
			search: createSearchParams(params).toString(),
		});
	}, [amount, category, difficulty, navigate, type]);

	return {
		category,
		setCategory,
		difficulty,
		setDifficulty,
		type,
		setType,
		amount,
		setAmount,
		startQuizSession,
	};
};
