import { env } from "@/config/env";
import { MainLoadingFallback } from "@/app/routes/fallbacks/loading-page";
import { type QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import * as React from "react";

export type ProvidersProps = Readonly<{
	queryClient: QueryClient;
	children: React.ReactNode;
}>;

export const Providers = (props: ProvidersProps) => (
	<React.Suspense fallback={<MainLoadingFallback />}>
		<QueryClientProvider client={props.queryClient}>
			{env.dev && <ReactQueryDevtools />}
			{props.children}
		</QueryClientProvider>
	</React.Suspense>
);
