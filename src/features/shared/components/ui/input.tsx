import {
	Description,
	Field,
	Input as HeadlessInput,
	Label,
	type InputProps as HeadlessInputProps,
} from "@headlessui/react";
import { cn } from "../../utils/cn";

export type InputProps = {
	label?: string;
	description?: string;
	classNames?: {
		field?: string;
		label?: string;
		description?: string;
		input: string;
	};
} & HeadlessInputProps;

export const Input = (props: InputProps) => {
	const {
		required,
		classNames,
		disabled = false,
		label,
		description,
		...rest
	} = props;

	return (
		<Field className={cn(classNames?.field)} disabled={disabled}>
			{label && (
				<Label
					className={cn(
						"d-flex items-start gap-1 text-sm font-medium text-black",
						classNames?.label,
					)}
				>
					{required && <span className="font-extrabold text-red-600">*</span>}
					{label}
				</Label>
			)}
			<HeadlessInput
				{...rest}
				required={required}
				className={cn(
					"w-full rounded-none border-b-2 border-neutral-700 bg-transparent py-1 outline-none transition-colors",
					"focus:outline-none data-[focus]:border-black",
					classNames?.input,
				)}
			/>

			{description && (
				<Description
					className={cn("text-sm text-neutral-700", classNames?.description)}
				>
					{description}
				</Description>
			)}
		</Field>
	);
};
