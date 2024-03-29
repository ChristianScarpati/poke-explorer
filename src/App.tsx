import "../styles/global.scss";
import { useFetchPokemonWithInfinityScroll } from "./hooks/usePokemon";
import { useFetchNextPage } from "./hooks";
import { HomePage } from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { PokemonDetailsPage } from "./pages/PokemonInfoPage";

function App() {
	const {
		hasNextPage = true,
		fetchNextPage,
		isSuccess,
		isLoading,
	} = useFetchPokemonWithInfinityScroll();

	useFetchNextPage(hasNextPage, fetchNextPage);

	if (!isSuccess && isLoading) return <div>Loading...</div>;
	return (
		<>
			<Routes location={location}>
				<Route path='/' element={<HomePage />} />
				<Route path='/pokemon/:id' element={<PokemonDetailsPage />} />
				<Route
					path='*'
					element={
						<>
							<h1>Not Found</h1>
							<div
								style={{
									marginTop: "20rem",
								}}
							>
								<span>click here to return to the</span>
								<h1 style={{ fontSize: "4em", color: "red" }}>
									<div
									// onClick={() => navigate("/")}
									>
										home page
									</div>
								</h1>
							</div>
						</>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
