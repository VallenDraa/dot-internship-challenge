import React from "react";
import { cn } from "@/features/shared/utils/cn";

export type HeadingSubheadingProps = {
	heading: React.ReactNode;
	subHeading: React.ReactNode;
	headingType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	subHeadingType?: React.ElementType;
	classNames?: {
		wrapper?: string;
		heading?: string;
		subHeading?: string;
	};
};

export const HeadingSubheading = (props: HeadingSubheadingProps) => {
	const {
		heading,
		subHeading,
		classNames,
		headingType = "h1",
		subHeadingType = "p",
	} = props;

	return (
		<div className={cn("text-center", classNames?.wrapper)}>
			{React.createElement(
				headingType,
				{ className: cn("mb-2 text-2xl font-bold", classNames?.heading) },
				heading,
			)}
			{React.createElement(
				subHeadingType,
				{ className: cn("text-neutral-700", classNames?.heading) },
				subHeading,
			)}
		</div>
	);
};
