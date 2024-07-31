import "./loading-spinner.css";

export const LoadingSpinner = () => {
	<div className="relative grid size-24 content-center">
		{new Array(6).fill(0).map((_item, index) => (
			<div
				key={index}
				className="absolute inset-x-0 top-0 border-2 border-black"
				style={{
					animation: `morph-to-circle-${index + 1} 3.5s cubic-bezier(1, 0.07, 0.38, 1.29) infinite;`,
				}}
			/>
		))}
	</div>;
};
