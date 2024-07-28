/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	type UseMutationOptions,
	type DefaultOptions,
	QueryClient,
} from "@tanstack/react-query";

export const queryConfig = {
	queries: {
		refetchOnWindowFocus: false,
		retry: false,
	},
} satisfies DefaultOptions;

export const queryClient = new QueryClient({
	defaultOptions: queryConfig,
});

export type ApiFnReturnType<FnType extends (...args: any[]) => Promise<any>> =
	Awaited<ReturnType<FnType>>;

export type QueryConfig<T extends (...args: any[]) => any> = Omit<
	ReturnType<T>,
	"queryKey" | "queryFn"
>;

export type MutationConfig<
	MutationFnType extends (...args: any[]) => Promise<any>,
> = UseMutationOptions<
	ApiFnReturnType<MutationFnType>,
	Error,
	Parameters<MutationFnType>[0]
>;
