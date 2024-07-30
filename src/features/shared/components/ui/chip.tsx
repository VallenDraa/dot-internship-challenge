/* eslint-disable react-refresh/only-export-components */
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/features/shared/utils/cn";

export const buttonVariants = cva(
	"inline-block rounded-full border-2 border-black bg-white px-4 py-1 shadow-brutal-sm text-xs text-black",
	{
		variants: {
			text: {
				bold: "font-bold",
				normal: "font-normal",
			},
			variant: {
				primary: "bg-emerald-300",
				info: "bg-sky-300",
				warning: "bg-amber-300",
				danger: "bg-red-400",
			},
		},
		defaultVariants: {
			variant: "primary",
			text: "bold",
		},
	},
);

export type ChipProps = React.ComponentPropsWithoutRef<"span"> &
	VariantProps<typeof buttonVariants>;

export const Chip = (props: ChipProps) => {
	const { children, variant, className, ...rest } = props;

	return (
		<span {...rest} className={cn(buttonVariants({ className, variant }))}>
			{children}
		</span>
	);
};
