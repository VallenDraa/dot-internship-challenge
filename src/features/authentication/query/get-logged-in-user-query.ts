import { queryOptions, useQuery } from "@tanstack/react-query";

import { getLoggedInUserApi } from "../api/get-logged-in-user-api";
import { type QueryConfig } from "@/lib/react-query";

export const LOGGED_IN_USER_QUERY = "logged-in-user";

export const loggedInUserOptions = () =>
	queryOptions({
		queryKey: [LOGGED_IN_USER_QUERY],
		queryFn: getLoggedInUserApi,
	});

export type LoggedInUserOptions = {
	queryConfig?: QueryConfig<typeof loggedInUserOptions>;
};

export const useLoggedInUser = ({ queryConfig }: LoggedInUserOptions = {}) =>
	useQuery({
		...loggedInUserOptions(),
		...queryConfig,
	});
