import { AuthLayout } from "@/features/authentication/components/layouts/auth-layout";
import { LoginForm } from "@/features/authentication/components/ui/login-form";
import { useSearchParams } from "react-router-dom";

export const LoginPage = () => {
	const [searchParams] = useSearchParams();

	return (
		<AuthLayout
			title="👋 Hi There, please login to continue!"
			subtitle="challenge yourself into a game of Triquest now!"
		>
			<LoginForm redirectTo={searchParams.get("redirectTo") ?? undefined} />
		</AuthLayout>
	);
};
