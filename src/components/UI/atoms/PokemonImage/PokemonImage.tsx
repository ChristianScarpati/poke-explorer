import useIsMobile from "../../../../hooks/useIsMobile";
import styles from "./PokemonImage.module.scss";

type PokemonProps = JSX.IntrinsicElements["img"] & {
	url: string;
	imgAlt: string;
	linkPath?: string; // for router dom
};

function PokemonImage({ url, imgAlt, linkPath, ...rest }: PokemonProps) {
	//! TODO: install react-router-dom and use Link instead of div
	const isMobile = useIsMobile();

	return (
		<div className={styles["pokemon-image-container"]}>
			<img
				src={url}
				alt={imgAlt}
				{...rest}
				width={!isMobile ? 150 : 80}
				height={!isMobile ? 150 : 80}
			/>
		</div>
	);
}

export default PokemonImage;
