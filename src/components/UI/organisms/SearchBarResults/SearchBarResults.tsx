import { SearchBarProps } from "../../molecules/Searchbar/SearchBar";
import { SearchBar } from "../../molecules/Searchbar";
import { useRef, useState } from "react";
import useOnClickOutside from "../../../../hooks/useClickOutside";
import { PokemonSearchResults } from "../../atoms/PokemonSearchResults";
import { PropsPokemonSearchResults } from "../../atoms/PokemonSearchResults/PokemonSearchResults";

type SearchBarResultsProps = Omit<
	SearchBarProps & PropsPokemonSearchResults,
	"setShowSearchResults" | "showSearchResults"
>;

function SearchBarResults({ searchText, onChange, searchResults }: SearchBarResultsProps) {
	const [showSearchResults, setShowSearchResults] = useState<boolean>(true);
	const resultsContainer = useRef<HTMLDivElement>(null);
	useOnClickOutside(resultsContainer, () => setShowSearchResults(false));

	return (
		<div>
			<SearchBar
				searchText={searchText}
				onChange={onChange}
				setShowSearchResults={setShowSearchResults}
			/>
			<PokemonSearchResults
				searchResults={searchResults}
				showSearchResults={showSearchResults}
			/>
		</div>
	);
}

export default SearchBarResults;
