import { LoadingSpinner } from "../../../features/shared/components/ui/loading-spinner";

export const MainLoadingFallback = () => (
	<div className="fixed inset-0 flex flex-col items-center justify-center bg-black/20 backdrop-blur">
		<LoadingSpinner />
		<p className="mt-10 text-sm text-neutral-700">Requesting Triquest...</p>
	</div>
);
