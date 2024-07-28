import React from "react";
import { loginApi } from "../api/login-api";
import { loginValidator } from "../validators/login-validator";
import { toast } from "sonner";
import { getErrorMessage } from "@/features/shared/utils/get-error-message";
import { setAccessToken, setRefreshToken } from "../utils/tokens";

export const useHandleLogin = () => {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");

	const [isSubmitting, setIsSubmitting] = React.useState(false);

	const resetForm = React.useCallback(() => {
		setUsername("");
		setPassword("");
	}, []);

	const handleLogin = React.useCallback(
		async (username: string, password: string) => {
			try {
				setIsSubmitting(true);

				const parsedInputs = await loginValidator.parseAsync({
					username,
					password,
				});

				const loginResponse = await loginApi(
					parsedInputs.username,
					parsedInputs.password,
				);

				setAccessToken(loginResponse.token);
				setRefreshToken(loginResponse.refreshToken);

				resetForm();

				toast.success("Logged in successfully");
			} catch (error) {
				toast.error(getErrorMessage(error));
			} finally {
				setIsSubmitting(false);
			}
		},
		[resetForm],
	);

	return {
		handleLogin,
		setUsername,
		setPassword,
		username,
		password,
		isSubmitting,
		resetForm,
	};
};
