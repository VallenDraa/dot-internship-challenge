import type React from "react";
import { HeadingSubheading } from "../ui/heading-subheading";

export type FormLayoutProps = Readonly<{
	children: React.ReactNode;
	title: string;
	subtitle: string;
}>;

export const FormLayout = (props: FormLayoutProps) => (
	<main className="flex h-screen flex-col items-center justify-center">
		<div className="max-w-xl rounded border-2 border-black bg-white p-10 shadow-brutal-lg">
			<div className="mb-8 space-y-2 text-center">
				<HeadingSubheading heading={props.title} subHeading={props.subtitle} />
			</div>

			{props.children}
		</div>
	</main>
);
