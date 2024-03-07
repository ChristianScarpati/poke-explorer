import { useNavigate } from "react-router-dom";
import styles from "./PokemonSearchResults.module.scss";
import { Caption } from "..";

export type PropsPokemonSearchResults = {
	showSearchResults: boolean;
	searchResults: string[];
};

function PokemonSearchResults({ searchResults, showSearchResults }: PropsPokemonSearchResults) {
	const navigate = useNavigate();
	return (
		<ul className={showSearchResults ? styles.container : styles.none}>
			{searchResults.map((result) => {
				return (
					<li key={result}>
						<div onClick={() => navigate(`/pokemon/${encodeURIComponent(result)}`)}>
							<Caption>{result}</Caption>
						</div>
					</li>
				);
			})}
		</ul>
	);
}

export default PokemonSearchResults;
