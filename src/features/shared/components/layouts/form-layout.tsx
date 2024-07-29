import type React from "react";

export type FormLayoutProps = Readonly<{
	children: React.ReactNode;
	title: string;
	subtitle: string;
}>;

export const FormLayout = (props: FormLayoutProps) => (
	<main className="flex h-screen flex-col items-center justify-center">
		<div className="max-w-xl rounded border-2 border-black bg-white p-10 shadow-brutal-lg">
			<div className="mb-8 space-y-2 text-center">
				<h1 className="text-xl font-bold">{props.title}</h1>
				<p>{props.subtitle}</p>
			</div>

			{props.children}
		</div>
	</main>
);
