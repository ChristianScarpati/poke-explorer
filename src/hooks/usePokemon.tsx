import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
	getIdFromUrl,
	getPokemonNames,
	pokemonAbilities,
	pokemonImgUrl,
	pokemonTypes,
} from "../components/utils";
import { GenericItemResult, PokemonResult } from "../components/utils/types/pokemon";
import {
	CALLFETCHLIMIT,
	IMG_ALT_KEY,
	IMG_URL_KEY,
	LINK_PATH_KEY,
	NAME_KEY,
	POKE_ABILITIES,
} from "../constants/common";

const mapListResults = async (fetchedResults: PokemonResult[]): Promise<GenericItemResult[]> => {
	const getPokemonResultPromise = fetchedResults.map(async (item) => {
		try {
			const pokemonId = getIdFromUrl(item.url);
			const abilitiesPromise = pokemonAbilities(pokemonId);
			const typesPromise = pokemonTypes(pokemonId);

			const [abilities, types] = await Promise.all([abilitiesPromise, typesPromise]);

			return {
				...item,
				[NAME_KEY]: `${item.name.slice(0, 1).toUpperCase() + item.name.slice(1)}`,
				[LINK_PATH_KEY]: `/pokemon/${encodeURIComponent(item.name)}`,
				[IMG_ALT_KEY]: `${item.name} artwork`,
				[IMG_URL_KEY]: pokemonImgUrl(pokemonId),
				[POKE_ABILITIES]: abilities,
				type: types,
				id: String(item.id),
			};
		} catch (error) {
			console.error("Error while processing Pokémon:", error);
			throw error;
		}
	});

	return Promise.all(getPokemonResultPromise);
};

const fetchPokemons = async (offset: number) => {
	try {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=${CALLFETCHLIMIT}&offset=${offset}`
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();

		data.results = await mapListResults(data.results as PokemonResult[]);
		return data;
	} catch (error) {
		console.error("error: ", error);
	}
};

export function useGetPokemonSuggestions(searchPokemonInputQuery: string) {
	return useQuery(
		["pokemonNames", searchPokemonInputQuery],
		() => getPokemonNames(searchPokemonInputQuery),
		{
			enabled: searchPokemonInputQuery.length > 0,
		}
	);
}

export const useFetchPokemonWithInfinityScroll = () => {
	return useInfiniteQuery(["pokemonList"], ({ pageParam = 0 }) => fetchPokemons(pageParam), {
		getNextPageParam: (lastPage) => {
			if (lastPage.next) {
				const url = new URL(lastPage.next!);
				return url.searchParams.get("offset");
			}
			return undefined;
		},
	});
};
