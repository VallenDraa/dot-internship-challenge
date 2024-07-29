import type React from "react";

export type QuestionPreviewListProps = {
	children: React.ReactNode;
};

export const QuestionPreviewList = (props: QuestionPreviewListProps) => (
	<ul className="flex max-w-full snap-x snap-mandatory gap-6 overflow-x-auto py-2">
		{props.children}
	</ul>
);
