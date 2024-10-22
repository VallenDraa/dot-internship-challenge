import { useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { RouterProvider } from "react-router-dom";

import { Providers } from "./providers";
import { createRouter } from "./routes";
import { queryClient } from "@/lib/react-query";
import { Toaster } from "@/features/shared/components/ui/toaster";

const AppRouter = () => {
	const queryClient = useQueryClient();

	const router = React.useMemo(() => createRouter(queryClient), [queryClient]);

	return <RouterProvider router={router} />;
};

export function App() {
	return (
		<Providers queryClient={queryClient}>
			<div className="min-h-screen bg-amber-300">
				<div className="mx-auto max-w-screen-lg px-4 font-mono">
					<Toaster />
					<AppRouter />
				</div>
			</div>
		</Providers>
	);
}
