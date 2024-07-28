import { AuthLayout } from "@/features/authentication/components/layouts/auth-layout";
import { LoginForm } from "@/features/authentication/components/ui/login-form";

export const LoginPage = () => (
	<AuthLayout
		title="👋 Hi There, please login to continue!"
		subtitle="challenge yourself into a game of Triquest now!"
	>
		<LoginForm />
	</AuthLayout>
);
