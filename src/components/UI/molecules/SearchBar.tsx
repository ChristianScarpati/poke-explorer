import { useRef, useState } from "react";
import { useOnClickOutside } from "../../../hooks";
import Flex from "../atoms/Flex/Flex";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import styles from "./SearchBar.module.scss";
import { PokemonSearchResults } from "../atoms/PokemonSearchResults";

type SearchBarProps = {
	searchText: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	searchResults: string[];
};

function SearchBar({ searchText, onChange, searchResults }: SearchBarProps) {
	const [showSearchResults, setShowSearchResults] = useState<boolean>(true);
	const resultsContainer = useRef<HTMLDivElement>(null);
	useOnClickOutside(resultsContainer, () => setShowSearchResults(false));

	return (
		<Flex
			direction='column'
			align='center'
			ref={resultsContainer}
			onClick={() => setShowSearchResults(true)}
			onKeyDown={() => setShowSearchResults(true)}
			tabIndex={0}
			className={styles.SearchBarContainer}
		>
			<div>
				<Input
					id='search'
					type='text'
					value={searchText}
					onChange={onChange}
					placeholder='Search for a pokemon'
				/>
				<img
					src='/public/images/svgs/searchIcon.svg'
					alt='Search icon'
					width={24}
					height={24}
				/>
				<Button style={{ alignSelf: "end" }} color='primary'>
					Search
				</Button>
			</div>
			<PokemonSearchResults
				showResults={searchResults}
				showSearchResults={showSearchResults}
			/>
		</Flex>
	);
}

export default SearchBar;
