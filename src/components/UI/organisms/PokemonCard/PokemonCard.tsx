import styles from "./PokemonCard.module.scss";
import { usePokemonContext } from "../../../../context/usePokemonProvider";
import { PokemonResult } from "../../../utils/types/pokemon";
import { PokemonCardInfo } from "../../molecules/PokemonCardInfo";

function PokemonCard() {
	const { data, error } = usePokemonContext();

	if (error) return <div>Error: {String(error)}</div>;
	if (!data) return <div>Loading...</div>;

	const getAllPokemons: PokemonResult[] = data.pages.flatMap((page) => page.results);

	return (
		<div className={styles["pokemon-container-card"]}>
			{getAllPokemons.map((pokemon: PokemonResult) => {
				return (
					<PokemonCardInfo
						key={pokemon.name}
						id={pokemon.name}
						name={pokemon.name}
						url={pokemon.url}
						imgUrl={pokemon.imgUrl}
						linkPath={pokemon.linkPath}
						imgAlt={pokemon.imgAlt}
						abilities={pokemon.Abilities}
						types={pokemon.type}
					>
						{pokemon.name}
					</PokemonCardInfo>
				);
			})}
		</div>
	);
}

export default PokemonCard;
