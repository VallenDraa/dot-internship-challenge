import React from "react";
import { loginApi } from "../api/login-api";
import { loginValidator } from "../validators/login-validator";
import { toast } from "sonner";
import { getErrorMessage } from "@/features/shared/utils/get-error-message";
import { setAccessToken, setRefreshToken } from "../utils/tokens";

export const useHandleLogin = () => {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");

	const handleLogin = React.useCallback(
		async (username: string, password: string) => {
			try {
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

				setUsername("");
				setPassword("");

				toast.success("Logged in successfully");
			} catch (error) {
				toast.error(getErrorMessage(error));
			}
		},
		[],
	);

	return { handleLogin, setUsername, setPassword, username, password };
};
