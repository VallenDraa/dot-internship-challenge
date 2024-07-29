import { type QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { ProtectedRoute } from "./protected-route";
import { quizSelectionsPageLoader } from "./quiz/quiz-selections-page";
import { quizPlayPageLoader } from "./quiz/quiz-play-page";

export const createRouter = (
	queryClient: QueryClient,
): ReturnType<typeof createBrowserRouter> =>
	createBrowserRouter([
		{
			path: "",
			element: (
				<ProtectedRoute>
					<Outlet />
				</ProtectedRoute>
			),
			children: [
				{
					path: "/",
					loader: quizSelectionsPageLoader(queryClient),
					async lazy() {
						const { QuizSelectionsPage } = await import(
							"./quiz/quiz-selections-page"
						);
						return { Component: QuizSelectionsPage };
					},
				},
				{
					path: "/play",
					loader: quizPlayPageLoader(queryClient),
					async lazy() {
						const { QuizPlayPage } = await import("./quiz/quiz-play-page");
						return { Component: QuizPlayPage };
					},
				},
			],
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
