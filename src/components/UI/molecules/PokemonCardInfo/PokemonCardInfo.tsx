import { Caption } from "../../atoms/Caption";
import { PokemonImage } from "../../atoms/PokemonImage";
import style from "./PokemonCardInfo.module.scss";

type PokemonCardInfoProps = {
	name: string;
	url?: string;
	imgUrl: string;
	linkPath: string;
	imgAlt: string;
	children?: React.ReactNode;
};

function PokemonCardInfo({ name, imgUrl, linkPath, imgAlt }: PokemonCardInfoProps) {
	return (
		<div className={style.pokemonCardInfo}>
			<Caption>{name}</Caption>
			<PokemonImage url={imgUrl} imgAlt={imgAlt} linkPath={linkPath} />
		</div>
	);
}

export default PokemonCardInfo;
