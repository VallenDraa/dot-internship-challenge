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

export type ApiFnReturnType<
	FnType extends (...args: unknown[]) => Promise<unknown>,
> = Awaited<ReturnType<FnType>>;

export type QueryConfig<T extends (...args: unknown[]) => unknown> = Omit<
	ReturnType<T>,
	"queryKey" | "queryFn"
>;

export type MutationConfig<
	MutationFnType extends (...args: unknown[]) => Promise<unknown>,
> = UseMutationOptions<
	ApiFnReturnType<MutationFnType>,
	Error,
	Parameters<MutationFnType>[0]
>;
