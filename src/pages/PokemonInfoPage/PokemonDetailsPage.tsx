import { useEffect, useState } from "react";
import { PokemonCardInfo } from "../../components/UI/molecules/PokemonCardInfo";
import { PokemonCardDetailTemplate } from "../../components/templates/PokemonCardDetailTemplate";
import { PokemonInfo, getPokemonInfoByName } from "../../components/utils";

interface PokemonDetailsPageProps {
	pokemonName: string;
}

function PokemonDetailsPage({ pokemonName }: PokemonDetailsPageProps) {
	const [selectedPokemon, setSelectedPokemon] = useState<PokemonInfo>();

	useEffect(() => {
		const fetchPokemonInfoCard = async () => {
			const getPokemonInfoCard = await getPokemonInfoByName(pokemonName);
			if (getPokemonInfoCard !== null) {
				setSelectedPokemon(getPokemonInfoCard);
			}
		};
		fetchPokemonInfoCard();
	}, [pokemonName]);

	return (
		<PokemonCardDetailTemplate>
			{selectedPokemon && (
				<PokemonCardInfo
					id={selectedPokemon.id}
					name={selectedPokemon.name}
					imgUrl={selectedPokemon.imgUrl}
					imgAlt={selectedPokemon.imgAlt}
					weight={selectedPokemon.weight}
					height={selectedPokemon.height}
					abilities={selectedPokemon.abilities}
					types={selectedPokemon.types}
				/>
			)}
		</PokemonCardDetailTemplate>
	);
}

export default PokemonDetailsPage;
