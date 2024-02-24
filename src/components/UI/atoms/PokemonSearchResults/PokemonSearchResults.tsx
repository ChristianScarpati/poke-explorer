import styles from "./PokemonSearchResults.module.scss";

type PropsPokemonSearchResults = {
	showSearchResults: boolean;
	showResults: object[] | string[];
};

function PokemonSearchResults({ showResults, showSearchResults }: PropsPokemonSearchResults) {

	return (
		<ul className={showSearchResults ? styles.container : styles.none}>
			{(showResults as string[]).map((result) => (
				<li key={result}>
					<a href={`/pokemon/${encodeURIComponent(result)}`}>{result}</a>
				</li>
			))}
		</ul>
	);
}

export default PokemonSearchResults;
