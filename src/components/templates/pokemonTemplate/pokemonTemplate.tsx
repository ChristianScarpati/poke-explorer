import { useState } from "react";

import Flex from "../../UI/atoms/Flex/Flex";
import { useGetPokemonSuggestions } from "../../../hooks/usePokemon";
import { useDebounce } from "../../../hooks";
import { PokemonCard } from "../../UI/organisms/PokemonCard";
import SearchBarResults from "../../UI/organisms/SearchBarResults/SearchBarResults";
import { Container, Title } from "../../UI/atoms";

function PokemonTemplate(): JSX.Element {
	const [searchPokemonInput, setSearchPokemonInput] = useState("");

	const debounceSearchInputValue = useDebounce(searchPokemonInput, 3000);
	const { data: dataPokemon } = useGetPokemonSuggestions(debounceSearchInputValue);

	return (
		<>
			<Flex justify='center' style={{ marginBottom: "2rem" }}>
				<section>
					<SearchBarResults
						searchText={searchPokemonInput}
						onChange={(e) => setSearchPokemonInput(e.target.value)}
						searchResults={dataPokemon ?? []}
					/>
				</section>
			</Flex>
			<Title h1 style={{ marginTop: "5rem" }} relative>
				Home Page
			</Title>

			<Container>
				<PokemonCard />
			</Container>
		</>
	);
}

export default PokemonTemplate;
