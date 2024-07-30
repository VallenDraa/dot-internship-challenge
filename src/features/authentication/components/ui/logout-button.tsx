import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/20/solid";
import { Button } from "@/features/shared/components/ui/button";
import { clearRefreshToken } from "@/features/authentication/utils/refresh-token";

export const LogoutButton = () => {
	const navigate = useNavigate();
	const logout = React.useCallback(() => {
		clearRefreshToken();
		navigate("/auth/login");
	}, [navigate]);

	return (
		<Button onClick={logout} variant="danger" size="small">
			<ArrowLeftStartOnRectangleIcon className="size-4" />
			Logout
		</Button>
	);
};
