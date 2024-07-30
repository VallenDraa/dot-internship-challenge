import { LoadingSpinner } from "../../../features/shared/components/ui/loading-spinner";

export const MainLoadingFallback = () => {
	return (
		<div className="flex h-screen flex-col items-center justify-center bg-black">
			<LoadingSpinner />
			<p>Requesting Triquest...</p>
		</div>
	);
};
