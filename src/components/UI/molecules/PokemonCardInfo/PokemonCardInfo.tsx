import { useEffect, useState } from "react";
import { Caption } from "../../atoms/Caption";
import { PokemonImage } from "../../atoms/PokemonImage";
import style from "./PokemonCardInfo.module.scss";
import { useNavigate } from "react-router-dom";
import Flex from "../../atoms/Flex/Flex";
import useIsPokemonActive from "../../../../hooks/usePokemonActive";
import { Container } from "../../atoms/Container";
import { PokemonType, getFirstTypeName, normalizeAbilities } from "../../../utils";
import { Title } from "../../atoms";

type PokemonCardInfoProps = {
	name: string;
	id: string | number;
	url?: string;
	imgUrl: string;
	linkPath?: string;
	imgAlt: string;
	weight?: number;
	height?: number;
	abilities?: { name: string }[] | { name: string };
	types?: PokemonType["type"];
	children?: React.ReactNode;
};

function PokemonCardInfo({
	name,
	imgUrl,
	linkPath,
	imgAlt,
	weight,
	height,
	abilities,
	types,
}: PokemonCardInfoProps) {
	const navigate = useNavigate();

	const hasPokemonSingleCard = useIsPokemonActive(name);
	const [isPokemonCardSelected, setIsPokemonCardSelected] =
		useState<boolean>(hasPokemonSingleCard);

	useEffect(() => {
		setIsPokemonCardSelected(hasPokemonSingleCard);
	}, [hasPokemonSingleCard]);

	const pokemonAbilities = Array.isArray(abilities)
		? normalizeAbilities(abilities).join(", ")
		: abilities?.name || "";

	const pokemonTypes = Array.isArray(types)
		? types.join(", ")
		: getFirstTypeName(types as PokemonType["type"]);

	return (
		<Flex
			className={style.pokemonCardInfo}
			style={{
				justifyContent: "normal",
				margin: isPokemonCardSelected ? "0 auto" : "initial",
			}}
		>
			{!isPokemonCardSelected ? (
				<>
					<Container gap={0.3}>
						<PokemonImage url={imgUrl} imgAlt={imgAlt} />
						<Caption>name : {name}</Caption>
						{abilities && <Caption>Abilities: {pokemonAbilities}</Caption>}
						{types && <Caption>Types: {pokemonTypes}</Caption>}
					</Container>
					<Title
						h2
						onClick={() => navigate(linkPath || "/")}
						style={{ backgroundColor: "chocolate" }}
						hovered
					>
						see more !
					</Title>
				</>
			) : (
				<>
					<Title
						hovered
						onClick={() => navigate("/")}
						style={{ zIndex: 11, backgroundColor: "chocolate" }}
					>
						Back
					</Title>
					<Container>
						<PokemonImage url={imgUrl} imgAlt={imgAlt} />
						<Caption>name: {name}</Caption>
						<Caption>Weight: {weight} Kg</Caption>
						<Caption>Height: {height} m</Caption>
						{abilities && <Caption>Abilities: {pokemonAbilities}</Caption>}
						{types && <Caption>Types: {pokemonTypes}</Caption>}
					</Container>
				</>
			)}
		</Flex>
	);
}

export default PokemonCardInfo;
