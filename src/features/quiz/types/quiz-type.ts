export type QuizType = "boolean" | "multiple";
export type QuizDifficulty = "easy" | "medium" | "hard";
export type Quiz = {
	type: QuizType;
	difficulty: QuizDifficulty;
	category: string;
	question: string;
	correct_answer: string;
	inccorect_answers: string[];
};
export type QuizWithoutCorrectAnswer = Omit<
	Quiz,
	"correct_answer" | "inccorect_answers"
> & {
	answers: string[];
};

export type QuizProgress = {
	currentQuestionId: number;
	questionsIds: number[];
	answers: { questionId: number; chosenAnswer: string };
};

export type Category = {
	id: number;
	name: string;
};
