import { env } from "@/config/env";
import { type QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type * as React from "react";

export type ProvidersProps = Readonly<{
	queryClient: QueryClient;
	children: React.ReactNode;
}>;

export const Providers = (props: ProvidersProps) => (
	<QueryClientProvider client={props.queryClient}>
		{env.dev && <ReactQueryDevtools />}
		{props.children}
	</QueryClientProvider>
);
