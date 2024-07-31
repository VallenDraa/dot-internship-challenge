import type React from "react";

export type ResultQuestionPreviewListProps = {
	children: React.ReactNode;
};

export const ResultQuestionPreviewList = (
	props: ResultQuestionPreviewListProps,
) => (
	<ul className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto py-2 pr-2">
		{props.children}
	</ul>
);
