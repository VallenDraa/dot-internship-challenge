import { Card, type CardProps } from "./card";
import { Transition } from "@headlessui/react";

export type TransitionedCardProps = CardProps;

export const TransitionedCard = (props: TransitionedCardProps) => {
	const { children, ...rest } = props;
	return (
		<Transition
			as="div"
			show
			appear
			enter="transition duration-300 ease-in-out"
			enterFrom="opacity-0 scale-95 translate-y-5"
			enterTo="opacity-100 scale-100 translate-y-0"
			leave="transition duration-300 ease-in-out"
			leaveFrom="opacity-100 scale-100 translate-y-0"
			leaveTo="opacity-0 scale-95 translate-y-5"
		>
			<Card {...rest}>{children}</Card>
		</Transition>
	);
};
