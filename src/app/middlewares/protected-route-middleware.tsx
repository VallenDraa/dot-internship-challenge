import { useAccessToken } from "@/features/authentication/query/get-access-token";
import { useLoggedInUser } from "@/features/authentication/query/get-logged-in-user-query";
import { getRefreshToken } from "@/features/authentication/utils/refresh-token";
import { Navigate, useLocation } from "react-router-dom";

export type ProtectedRouteMiddlewareProps = {
	children: React.ReactNode;
};

export const ProtectedRouteMiddleware = (
	props: ProtectedRouteMiddlewareProps,
) => {
	const location = useLocation();
	const refreshToken = getRefreshToken();
	const { data: accessToken, isLoading: isAccessTokenLoading } =
		useAccessToken();
	const { data: user, isLoading: isUserLoading } = useLoggedInUser(
		accessToken ?? "",
		{ queryConfig: { enabled: Boolean(accessToken) } },
	);

	if (
		!refreshToken ||
		(!accessToken && !isAccessTokenLoading && !isUserLoading && !user)
	) {
		return (
			<Navigate
				to={`/auth/login?redirectTo=${encodeURIComponent(location.pathname)}`}
				replace
			/>
		);
	}

	return props.children;
};
