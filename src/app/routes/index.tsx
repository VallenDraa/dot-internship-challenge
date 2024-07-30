import { type QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { quizSelectionsPageLoader } from "./quiz/quiz-selections-page";
import { quizPlayPageLoader } from "./quiz/quiz-play-page";

export const createRouter = (
	queryClient: QueryClient,
): ReturnType<typeof createBrowserRouter> =>
	createBrowserRouter([
		{
			path: "",
			async lazy() {
				const { ProtectedRouteMiddleware } = await import(
					"../middlewares/protected-route-middleware"
				);
				const { ResumeQuizMiddleware } = await import(
					"../middlewares/resume-quiz-middleware"
				);
				const { ErrorPage } = await import("./fallbacks/error-page");

				return {
					errorElement: <ErrorPage />,
					element: (
						<ProtectedRouteMiddleware>
							<ResumeQuizMiddleware>
								<Outlet />
							</ResumeQuizMiddleware>
						</ProtectedRouteMiddleware>
					),
				};
			},
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
				const { NotFoundPage } = await import("./fallbacks/not-found-page");
				return { Component: NotFoundPage };
			},
		},
	]);
