export type QuizType = "boolean" | "multiple";
export type QuizDifficulty = "easy" | "medium" | "hard";
export type Quiz = {
	type: QuizType;
	difficulty: QuizDifficulty;
	category: string;
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
};
export type QuizWithoutCorrectAnswer = Omit<
	Quiz,
	"correct_answer" | "incorrect_answers"
> & {
	answers: string[];
};

export type QuizProgress = {
	quizzes: Quiz[];
	currentIndex: number;
	userAnswers: string[];
};

export type Category = {
	id: number;
	name: string;
};
