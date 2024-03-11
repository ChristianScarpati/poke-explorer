import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "@testing-library/jest-dom";

const queryClient = new QueryClient();

test("renders load home page by default", () => {
	render(
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	);
	expect(screen.getByText(/loading/i)).toBeInTheDocument();
});
