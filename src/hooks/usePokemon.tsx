import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getIdFromUrl, getPokemonNames, pokemonImgUrl } from "../components/utils";
import { GenericItemResult, PokemonResult } from "../components/utils/types/pokemon";
import { CALLFETCHLIMIT, IMG_ALT_KEY, IMG_URL_KEY, LINK_PATH_KEY } from "../constants/common";

const mapListResults = (fetchedResults: PokemonResult[]): GenericItemResult[] => {
	return fetchedResults.map((item) => {
		return {
			...item,
			name: `${item.name.slice(0, 1).toUpperCase() + item.name.slice(1)}`,
			[LINK_PATH_KEY]: `/pokemon/${encodeURIComponent(item.name)}`,
			[IMG_ALT_KEY]: `${item.name} artwork`,
			[IMG_URL_KEY]: pokemonImgUrl(getIdFromUrl(item.url)),
		};
	});
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

		data.results = mapListResults(data.results as PokemonResult[]);
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
