import React from "react";
import { cn } from "@/features/shared/utils/cn";

export type CardProps = {
	children: React.ReactNode;
	className?: string;
	as?: React.ElementType;
};

export const Card = (props: CardProps) => {
	const { className, children, as = "div" } = props;

	return React.createElement(
		as,
		{
			className: cn(
				"max-w-xl rounded border-2 border-black bg-white p-10 shadow-brutal-lg",
				className,
			),
		},
		children,
	);
};
