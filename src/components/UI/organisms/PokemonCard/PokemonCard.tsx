import styles from "./PokemonCard.module.scss";
import { usePokemonContext } from "../../../../context/usePokemonProvider";
import { PokemonResult } from "../../../utils/types/pokemon";
import { PokemonCardInfo } from "../../molecules/PokemonCardInfo";

function PokemonCard() {
	const { data, error } = usePokemonContext();

	if (error) return <div>Error: {String(error)}</div>;

	const renderPokemonList = () => {
		const getAllPokemons: PokemonResult[] = data!.pages.reduce(
			(acc: (string | unknown)[], page: { results: unknown }) => acc.concat(page.results),
			[] as PokemonResult[]
		);

		return getAllPokemons.map((pokemon: PokemonResult) => {
			return (
				<PokemonCardInfo
					key={pokemon?.name}
					name={pokemon?.name}
					url={pokemon?.url}
					imgUrl={pokemon?.imgUrl}
					linkPath={pokemon.linkPath}
					imgAlt={pokemon.imgAlt}
				>
					{pokemon?.name}
				</PokemonCardInfo>
			);
		});
	};

	return <div className={styles["pokemon-container-card"]}>{renderPokemonList()}</div>;
}

export default PokemonCard;
