import React, { createContext } from "react";
import { useFetchPokemonWithInfinityScroll } from "../hooks/usePokemon";
import { InfiniteData } from "@tanstack/react-query";
import { PokemonPage } from "../components/utils";

type PokemonDataContext = {
	data: ReturnType<typeof useFetchPokemonWithInfinityScroll>["data"] | InfiniteData<PokemonPage>;
	isLoading: ReturnType<typeof useFetchPokemonWithInfinityScroll>["isLoading"];
	error: ReturnType<typeof useFetchPokemonWithInfinityScroll>["error"];
};

export const PokemonContext = createContext<PokemonDataContext>(
	{} as ReturnType<typeof useFetchPokemonWithInfinityScroll>
);

type ProviderProps = {
	children: React.ReactNode;
};

export default function PokemonContextProvider({ children }: ProviderProps) {
	const { data, isLoading, error } = useFetchPokemonWithInfinityScroll();

	return (
		<PokemonContext.Provider value={{ data, isLoading, error }}>
			{children}
		</PokemonContext.Provider>
	);
}
