import {
	Combobox as HeadlessCombobox,
	ComboboxButton as HeadlessComboboxButton,
	ComboboxInput as HeadlessComboboxInput,
	ComboboxOption as HeadlessComboboxOption,
	ComboboxOptions as HeadlessComboboxOptions,
	type ComboboxProps,
	type ComboboxButtonProps,
	type ComboboxInputProps as HeadlessComboboxInputProps,
	type ComboboxOptionProps,
	type ComboboxOptionsProps,
	Label,
} from "@headlessui/react";

import { cn } from "../../utils/cn";
import { type ElementType } from "react";
import { inputVariants } from "./input";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { buttonVariants } from "./button";

export const Combobox = <TValue, TMultiple extends boolean | undefined>(
	props: ComboboxProps<TValue, TMultiple, ElementType>,
) => {
	const { children, as, ...rest } = props;

	return (
		<HeadlessCombobox {...rest} as={as}>
			{children}
		</HeadlessCombobox>
	);
};

export type ComboboxInputProps = {
	label?: string;
	classNames?: { label?: string; input?: string };
} & HeadlessComboboxInputProps;
const ComboboxInput = (props: ComboboxInputProps) => {
	const { classNames, label, ...rest } = props;

	return (
		<div className="relative">
			<Label
				className={cn(
					"d-flex items-start gap-1 text-sm font-medium text-neutral-700",
					classNames?.label,
				)}
			>
				{label}
			</Label>

			<HeadlessComboboxInput
				{...rest}
				className={cn(inputVariants(), classNames?.input)}
			/>

			<ComboboxButton>
				<ChevronDownIcon className="size-10 fill-neutral-700 transition group-data-[open]:rotate-180 group-data-[hover]:fill-black" />
			</ComboboxButton>
		</div>
	);
};

const ComboboxButton = (props: ComboboxButtonProps) => {
	const { children, className } = props;

	return (
		<HeadlessComboboxButton
			className={cn(
				buttonVariants({ size: "small", variant: "primary" }),
				"group absolute bottom-2 right-0.5 flex size-7 items-center justify-center",
				className,
			)}
		>
			{children}
		</HeadlessComboboxButton>
	);
};

const ComboboxOptions = (props: ComboboxOptionsProps) => {
	const { children, className, ...rest } = props;

	return (
		<HeadlessComboboxOptions
			anchor="bottom"
			transition
			{...rest}
			className={cn(
				"w-[var(--input-width)] rounded border-2 border-black bg-white shadow-brutal-base [--anchor-gap:4px] empty:invisible",
				"divide-y-2 divide-black transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
				className,
			)}
		>
			{children}
		</HeadlessComboboxOptions>
	);
};

const ComboboxOption = (props: ComboboxOptionProps) => {
	const { className, children, ...rest } = props;

	return (
		<HeadlessComboboxOption
			{...rest}
			className={cn(
				"group flex cursor-pointer select-none items-center gap-2 p-2 font-semibold text-black transition data-[focus]:bg-neutral-200",
				className,
			)}
		>
			{children}
		</HeadlessComboboxOption>
	);
};

Combobox.Button = ComboboxButton;
Combobox.Input = ComboboxInput;
Combobox.Options = ComboboxOptions;
Combobox.Option = ComboboxOption;

export {
	type ComboboxProps,
	type ComboboxButtonProps,
	type ComboboxOptionProps,
	type ComboboxOptionsProps,
};
