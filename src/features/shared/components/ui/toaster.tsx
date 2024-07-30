import { Toaster as SonnerToaster } from "sonner";

export const Toaster = () => (
	<SonnerToaster
		toastOptions={{
			closeButton: true,
			classNames: {
				closeButton:
					"!border-black border-2 !text-black !bg-red-400 font-bold !text-xl",
				toast:
					"rounded border-2 !border-black !text-black shadow-brutal-base font-mono",
				warning: "!bg-amber-300",
				error: "!bg-red-400",
				success: "!bg-emerald-300",
				info: "!bg-sky-300",
			},
		}}
		closeButton
		richColors
		position="bottom-center"
	/>
);
