import { LoginForm } from "@/features/authentication/components/ui/login-form";
import { FormLayout } from "@/features/shared/components/layouts/form-layout";
import { useSearchParams } from "react-router-dom";

export const LoginPage = () => {
	const [searchParams] = useSearchParams();

	return (
		<FormLayout
			title="👋 Hey, Please login to continue!"
			subtitle="challenge yourself into a game of Triquest now!"
		>
			<LoginForm redirectTo={searchParams.get("redirectTo") ?? undefined} />
		</FormLayout>
	);
};
