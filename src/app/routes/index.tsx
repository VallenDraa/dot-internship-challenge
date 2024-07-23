import { type QueryClient } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";

export const createRouter = (
	queryClient: QueryClient,
): ReturnType<typeof createBrowserRouter> =>
	createBrowserRouter([
		{
			path: "/",
			async lazy() {
				const { QuizLandingPage } = await import("./quiz/quiz-landing-page");
				return { Component: QuizLandingPage };
			},
		},
		{
			path: "/play",
			async lazy() {
				const { QuizPlayPage } = await import("./quiz/quiz-play-page");
				return { Component: QuizPlayPage };
			},
		},
		{
			path: "/auth/register",
			async lazy() {
				const { RegisterPage } = await import("./auth/register-page");
				return { Component: RegisterPage };
			},
		},
		{
			path: "/auth/login",
			async lazy() {
				const { LoginPage } = await import("./auth/login-page");
				return { Component: LoginPage };
			},
		},

		{
			path: "*",
			async lazy() {
				const { NotFoundPage } = await import("./not-found-page");
				return { Component: NotFoundPage };
			},
		},
	]);
