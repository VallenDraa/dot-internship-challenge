import type React from "react";

export type AuthLayoutProps = Readonly<{
	children: React.ReactNode;
	title: string;
	subtitle: string;
}>;

export const AuthLayout = (props: AuthLayoutProps) => (
	<main className="flex h-screen flex-col items-center justify-center">
		<div className="shadow-brutal-lg max-w-lg rounded border-2 border-black bg-white p-10">
			<div className="mb-8 space-y-2 text-center">
				<h1 className="text-lg font-bold">{props.title}</h1>
				<p className="text-sm">{props.subtitle}</p>
			</div>

			{props.children}
		</div>
	</main>
);
