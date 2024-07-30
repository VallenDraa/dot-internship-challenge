/* eslint-disable react-refresh/only-export-components */
import {
	Button as HeadlessButton,
	type ButtonProps as HeadlessButtonProps,
} from "@headlessui/react";
import { cn } from "@/features/shared/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
	"rounded border-2 flex items-center justify-center gap-2 text-black text-center border-black shadow-brutal-sm transition hover:shadow-brutal-base active:shadow-inner disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none hover:disabled:shadow-none active:disabled:shadow-none",
	{
		variants: {
			size: {
				small: ["text-sm", "p-1"],
				medium: ["text-base", "p-2"],
				large: ["text-lg", "p-3"],
			},
			variant: {
				primary: "bg-emerald-300",
				info: "bg-sky-300",
				warning: "bg-amber-300",
				danger: "bg-red-400",
				link: "bg-transparent text-black p-0 hover:underline underline-offset-2 shadow-none border-none hover:shadow-none active:shadow-none disabled:hover:no-underline",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "medium",
		},
	},
);

export type ButtonProps = HeadlessButtonProps &
	VariantProps<typeof buttonVariants>;

export const Button = (props: ButtonProps) => {
	const { className, children, variant, size, ...rest } = props;

	return (
		<HeadlessButton
			{...rest}
			className={cn(
				buttonVariants({
					className,
					variant,
					size,
				}),
			)}
		>
			{children}
		</HeadlessButton>
	);
};
