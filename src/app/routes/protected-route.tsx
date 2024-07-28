import { useAccessToken } from "@/features/authentication/query/get-access-token";
import { useLoggedInUser } from "@/features/authentication/query/get-logged-in-user-query";
import { Navigate, useLocation } from "react-router-dom";

export type ProtectedRouteProps = {
	children: React.ReactNode;
};

export const ProtectedRoute = (props: ProtectedRouteProps) => {
	const { data: accessToken, isLoading: isAccessTokenLoading } =
		useAccessToken();
	const { data: user, isLoading: isUserLoading } = useLoggedInUser(
		accessToken ?? "",
		{ queryConfig: { enabled: Boolean(accessToken) } },
	);
	const location = useLocation();

	if (!accessToken && !isAccessTokenLoading && !isUserLoading && !user) {
		return (
			<Navigate
				to={`/auth/login?redirectTo=${encodeURIComponent(location.pathname)}`}
				replace
			/>
		);
	}

	return props.children;
};
