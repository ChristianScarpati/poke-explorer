import "../styles/global.scss";
import { useFetchPokemonWithInfinityScroll } from "./hooks/usePokemon";
import { useFetchNextPage } from "./hooks";
import { HomePage } from "./pages/HomePage";

function App() {
	const {
		data: pokemonList,
		hasNextPage,
		fetchNextPage,
		isSuccess,
		isLoading,
	} = useFetchPokemonWithInfinityScroll();

	useFetchNextPage(hasNextPage, fetchNextPage);

	if (!isSuccess && isLoading) {
		return <div>Loading...</div>;
	}

	return <div>{isSuccess && <HomePage pokemonList={pokemonList} />}</div>;
}

export default App;
