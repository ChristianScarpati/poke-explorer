import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getPokemonNames } from "../components/utils";
import { GenericItemResult } from "../components/utils/types/pokemon";
import { CALLFETCHLIMIT } from "../constants/common";

type Result = {
	name: string;
	url: string;
};

const mapListResults = (fetchedResults: Result[]): GenericItemResult[] => {
	return fetchedResults.map((item) => ({
		...item,
		name: `${item.name.slice(0, 1).toUpperCase() + item.name.slice(1)}`,
	}));
};

const fetchPokemon = async (offset: number) => {
	try {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=${CALLFETCHLIMIT}&offset=${offset}`
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();

		data.results = mapListResults(data.results as Result[]);
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
	return useInfiniteQuery(["pokemonList"], ({ pageParam = 0 }) => fetchPokemon(pageParam), {
		getNextPageParam: (lastPage) => {
			if (lastPage.next) {
				const url = new URL(lastPage.next!);
				return url.searchParams.get("offset");
			}
			return undefined;
		},
	});
};
