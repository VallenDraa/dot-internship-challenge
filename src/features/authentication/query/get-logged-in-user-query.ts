import { queryOptions, useQuery } from "@tanstack/react-query";

import { getLoggedInUserApi } from "../api/get-logged-in-user-api";
import { type QueryConfig } from "@/lib/react-query";

export const LOGGED_IN_USER_QUERY = "logged-in-user";

export const loggedInUserOptions = (bearerToken: string) =>
	queryOptions({
		queryKey: [LOGGED_IN_USER_QUERY],
		queryFn: async () => getLoggedInUserApi(bearerToken),
	});

export type LoggedInUserOptions = {
	queryConfig?: QueryConfig<typeof loggedInUserOptions>;
};

export const useLoggedInUser = (
	bearerToken: string,
	{ queryConfig }: LoggedInUserOptions = {},
) =>
	useQuery({
		...loggedInUserOptions(bearerToken),
		...queryConfig,
	});
