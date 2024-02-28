import styles from "./PokemonSearchResults.module.scss";

export type PropsPokemonSearchResults = {
	showSearchResults: boolean;
	searchResults: object[] | string[];
};

function PokemonSearchResults({ searchResults, showSearchResults }: PropsPokemonSearchResults) {
	return (
		<ul className={showSearchResults ? styles.container : styles.none}>
			{(searchResults as string[]).map((result) => (
				<li key={result}>
					<a href={`/pokemon/${encodeURIComponent(result)}`}>{result}</a>
				</li>
			))}
		</ul>
	);
}

export default PokemonSearchResults;
