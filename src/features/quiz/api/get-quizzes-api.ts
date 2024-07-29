import { questionsApi } from "@/lib/axios";
import {
	type QuizDifficulty,
	type QuizType,
	type Quiz,
} from "../types/quiz-type";

export type GetQuizzesApiOptions = {
	amount?: number;
	category?: number;
	difficulty?: QuizDifficulty;
	type?: QuizType;
};

export const getQuizzesApi = async ({
	amount = 10,
	category,
	type,
	difficulty,
}: GetQuizzesApiOptions) => {
	const { data } = await questionsApi.get<{
		responseCode: number;
		results: Quiz[];
	}>("", { params: { amount, category, type, difficulty } });

	return data.results;
};
