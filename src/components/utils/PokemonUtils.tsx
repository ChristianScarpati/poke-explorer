import { useQuery } from "@tanstack/react-query";
import { POKEMON_IMAGES_URL } from "../../constants/common";
import { PokemonInfo, PokemonResult, PokemonType } from ".";

export const getPokemonNames = async (query: string) => {
	try {
		const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000");
		const data = await res.json();

		const queryToLowerCase = query.toLowerCase();
		const matchedPokemon = data.results
			.filter(({ name }: { name: string }) => name.includes(queryToLowerCase))
			.map(({ name }: { name: string }) => name);

		return matchedPokemon;
	} catch (error) {
		console.error("error: ", error);
	}
};

export const pokemonImgUrl = (name: string) => {
	return `${POKEMON_IMAGES_URL}/${name}.svg`;
};

export const getIdFromUrl = (url: string) => {
	const urlParts = url.split("/");
	const returnId = urlParts[urlParts.length - 2];

	return returnId;
};

export const pokemonAbilities = async (pokemonId: string) => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
	const data = await res.json();

	const abilities = data.abilities.map(
		(ability: { ability: { name: string } }) => ability.ability.name
	);

	return abilities;
};

export const pokemonTypes = async (pokemonId: string) => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
	const data = await res.json();

	const types = data.types.map((type: { type: { name: string } }) => type.type.name);

	return types;
};

export const normalizeAbilities = (abilities: PokemonResult["Abilities"]): string[] => {
	return abilities.map((ability) => (typeof ability === "string" ? ability : ability.name));
};

export const getFirstTypeName = (types: PokemonType["type"]): string => {
	if (Array.isArray(types)) {
		return types.join(", ");
	} else if (Array.isArray(types?.name)) {
		return types.name[0];
	} else {
		return types?.name ?? "";
	}
};

export async function getPokemonInfoByName(pokemonName: string): Promise<PokemonInfo | null> {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
	const pokemonData = await response.json();

	const pokemonInfo: PokemonInfo = {
		name: pokemonData.name,
		id: pokemonData.id,
		height: pokemonData.height,
		weight: pokemonData.weight,
		types: pokemonData.types.map(
			(pokemonType: { type: { name: string | string[] } }) => pokemonType.type.name
		),
		abilities: pokemonData.abilities.map((ability: { ability: { name: string } }) => ({
			name: ability.ability.name,
		})),
		imgUrl:
			pokemonData.sprites.other["official-artwork"].front_default ||
			pokemonData.sprites.other["dream_world"].front_default ||
			"",
		imgAlt: `${pokemonData.name} artwork`,
	};

	return pokemonInfo;
}

export function usePokemonInfo(pokemonName: string) {
	return useQuery<PokemonInfo | null>(
		["pokemonInfo", pokemonName],
		() => getPokemonInfoByName(pokemonName),
		{
			enabled: !!pokemonName,
		}
	);
}
