import { Input } from "@/features/shared/components/ui/input";
import { useHandleLogin } from "../../hooks/use-handle-login";
import { Button } from "@/features/shared/components/ui/button";

export const LoginForm = () => {
	const {
		isSubmitting,
		username,
		setUsername,
		password,
		setPassword,
		handleLogin,
	} = useHandleLogin();

	return (
		<form
			className="flex flex-col gap-4"
			onSubmit={async e => {
				e.preventDefault();
				await handleLogin(username, password);
			}}
		>
			<Input
				required
				disabled={isSubmitting}
				type="text"
				label="Username:"
				value={username}
				onChange={e => {
					setUsername(e.target.value);
				}}
			/>
			<Input
				required
				disabled={isSubmitting}
				type="password"
				label="Password:"
				value={password}
				onChange={e => {
					setPassword(e.target.value);
				}}
			/>

			<Button type="submit" variant="primary" disabled={isSubmitting}>
				Login
			</Button>
		</form>
	);
};
