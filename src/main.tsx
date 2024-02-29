import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "./utils";
import { PokemonContextProvider } from "./context/index.ts";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools position='bottom-left' initialIsOpen={false} />
			<ErrorBoundary>
				<PokemonContextProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</PokemonContextProvider>
			</ErrorBoundary>
		</QueryClientProvider>
	</React.StrictMode>
);
