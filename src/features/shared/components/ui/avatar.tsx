import { cn } from "../../utils/cn";

export type AvatarProps = {
	src: string;
	alt: string;
	classNames?: {
		wrapper?: string;
		background?: string;
		image?: string;
	};
};

export const Avatar = (props: AvatarProps) => {
	const { src, alt, classNames } = props;

	return (
		<div
			className={cn(
				"relative size-10 overflow-hidden rounded-full border-2 border-black",
				classNames?.wrapper,
			)}
		>
			<div
				className={cn("absolute inset-0 bg-white", classNames?.background)}
			/>

			<img
				src={src}
				alt={alt}
				className={cn("relative z-10", classNames?.image)}
			/>
		</div>
	);
};
