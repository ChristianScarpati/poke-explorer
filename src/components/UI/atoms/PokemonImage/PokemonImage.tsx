import { useIsMobile, useIsPokemonActive } from "../../../../hooks";
import styles from "./PokemonImage.module.scss";

import cn from "classnames";

type PokemonProps = JSX.IntrinsicElements["img"] & {
	url: string;
	imgAlt: string;
};

function PokemonImage({ url, imgAlt, ...rest }: PokemonProps) {
	const isMobile = useIsMobile({ maxWidth: 768 });
	const pokemonName = imgAlt?.split(" ")[0] || "";

	const hasPokemonSingleCard = useIsPokemonActive(pokemonName);

	const classes = cn(styles["pokemon-image-container"], {
		[styles["pokemon-image-container--single-card"]]: hasPokemonSingleCard,
	});

	return (
		<div className={classes}>
			<img
				src={url}
				alt={imgAlt}
				width={!isMobile ? 150 : 80}
				height={!isMobile ? 150 : 80}
				{...rest}
			/>
		</div>
	);
}

export default PokemonImage;
