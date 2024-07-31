import { FormLayout } from "@/features/shared/components/layouts/form-layout";
import { Button } from "@/features/shared/components/ui/button";
import { getErrorMessage } from "@/features/shared/utils/get-error-message";
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
	const error = useRouteError();
	const errorMessage = getErrorMessage(error);

	return (
		<FormLayout
			title="😵‍💫 An Error Happened"
			subtitle="Oops, some error had happened. Please refresh the page to try again!"
		>
			<pre className="mb-4 text-wrap rounded border-2 border-black p-2">{`Error Message: ${errorMessage}`}</pre>
			<Button
				className="w-full"
				onClick={() => {
					window.location.assign(window.location.origin);
				}}
			>
				<ArrowPathIcon className="size-5" />
				Refresh Page
			</Button>
		</FormLayout>
	);
};
