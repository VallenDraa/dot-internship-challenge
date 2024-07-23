import { useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { RouterProvider } from "react-router-dom";

import { Providers } from "./providers";
import { createRouter } from "./routes";
import { queryClient } from "@/lib/react-query";

const AppRouter = () => {
	const queryClient = useQueryClient();

	const router = React.useMemo(() => createRouter(queryClient), [queryClient]);

	return <RouterProvider router={router} />;
};

function App() {
	return (
		<Providers queryClient={queryClient}>
			<AppRouter />
		</Providers>
	);
}

export default App;
