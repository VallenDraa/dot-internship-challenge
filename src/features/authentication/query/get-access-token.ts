import { queryOptions, useQuery } from "@tanstack/react-query";

import { type QueryConfig } from "@/lib/react-query";
import { refreshAccessTokenApi } from "../api/refresh-access-token-api";

export const ACCESS_TOKEN_QUERY = "access-token";

// Refetch token every 58 minutes
const staleTime = 1000 * 60 * 58;
export const accessTokenOptions = () =>
	queryOptions({
		staleTime,
		refetchIntervalInBackground: true,
		refetchInterval: staleTime,
		queryKey: [ACCESS_TOKEN_QUERY],
		queryFn: refreshAccessTokenApi,
	});

export type AccessTokenOptions = {
	queryConfig?: QueryConfig<typeof accessTokenOptions>;
};

export const useAccessToken = ({ queryConfig }: AccessTokenOptions = {}) =>
	useQuery({
		...accessTokenOptions(),
		...queryConfig,
	});
