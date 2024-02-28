import { useState } from "react";

import Flex from "../../UI/atoms/Flex/Flex";
import { useGetPokemonSuggestions } from "../../../hooks/usePokemon";
import { useDebounce } from "../../../hooks";
import { PokemonCard } from "../../UI/organisms/PokemonCard";
import SearchBarResults from "../../UI/organisms/SearchBarResults/SearchBarResults";

function PokemonTemplate(): JSX.Element {
	const [searchPokemonInput, setSearchPokemonInput] = useState("");

	const debounceSearchInputValue = useDebounce(searchPokemonInput, 3000);
	const { data: dataPokemon } = useGetPokemonSuggestions(debounceSearchInputValue);

	return (
		<div
			// style={{
			// 	position: "relative",
			// }}
		>
			<Flex justify='center' style={{ marginBottom: "2rem" }}>
				<section>
					<SearchBarResults
						searchText={searchPokemonInput}
						onChange={(e) => setSearchPokemonInput(e.target.value)}
						searchResults={dataPokemon ?? []}
					/>
				</section>
			</Flex>
			<h1>Home Page</h1>

			<PokemonCard />
		</div>
	);
}

export default PokemonTemplate;
