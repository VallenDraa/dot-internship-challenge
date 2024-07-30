import type React from "react";
import { HeadingSubheading } from "../ui/heading-subheading";
import { TransitionedCard } from "../ui/transitioned-card";

export type FormLayoutProps = Readonly<{
	children: React.ReactNode;
	title: string;
	subtitle: string;
}>;

export const FormLayout = (props: FormLayoutProps) => (
	<main className="flex h-screen flex-col items-center justify-center">
		<TransitionedCard>
			<div className="mb-8 space-y-2 text-center">
				<HeadingSubheading heading={props.title} subHeading={props.subtitle} />
			</div>

			{props.children}
		</TransitionedCard>
	</main>
);
