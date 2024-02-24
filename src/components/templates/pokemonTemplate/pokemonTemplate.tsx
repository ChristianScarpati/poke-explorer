/* eslint-disable react/function-component-definition */
import { useState } from "react";
import Flex from "../../UI/atoms/Flex/Flex";
import { useGetPokemonSuggestions } from "../../../hooks/usePokemon";
import { useDebounce } from "../../../hooks";
import { SearchBar } from "../../UI/molecules";

type Props = {
	children: React.ReactNode;
};

const PokemonTemplate: React.FC<Props> = ({ children }): JSX.Element => {
	const [searchPokemonInput, setSearchPokemonInput] = useState("");

	const debounceSearchInputValue = useDebounce(searchPokemonInput, 3000);

	const { data: dataPokemon } = useGetPokemonSuggestions(debounceSearchInputValue);

	const handleSearchPokemon = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchPokemonInput(e.target.value);
	};

	return (
		<Flex direction='column' align='center' fullHeight>
			<h1>Home Page</h1>
			<Flex>
				<section>
					<SearchBar
						searchText={searchPokemonInput}
						onChange={handleSearchPokemon}
						searchResults={dataPokemon ?? []}
					/>
				</section>
			</Flex>
			<main>{children}</main>
		</Flex>
	);
};

export default PokemonTemplate;
