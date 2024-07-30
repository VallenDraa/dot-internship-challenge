import { FormLayout } from "@/features/shared/components/layouts/form-layout";
import { buttonVariants } from "@/features/shared/components/ui/button";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export const NotFoundPage = () => (
	<FormLayout
		title="😵‍💫 404 Not Found"
		subtitle="Oops, Looks like the page you're trying to access is not missing!"
	>
		<Link to="/" className={buttonVariants()}>
			<ArrowLeftIcon className="size-5" />
			Return to quiz selection
		</Link>
	</FormLayout>
);
