import React from "react";
import { InfiniteData } from "@tanstack/react-query";
import { PokemonTemplate } from "../../components/templates/pokemonTemplate";
import { PokemonPage } from "../../components/utils/types/pokemon";

type Props = {
	pokemonList: InfiniteData<PokemonPage>;
};

function HomePage({ pokemonList }: Props): JSX.Element {
	return (
		<PokemonTemplate>
			<h2>Pokemon List</h2>
			<ul>
				{pokemonList.pages.map((page, i) => {
					return (
						<React.Fragment key={i}>
							{page.results.map((pokemon) => {
								return <li key={pokemon.name}>{pokemon.name}</li>;
							})}
						</React.Fragment>
					);
				})}
			</ul>
		</PokemonTemplate>
	);
}

export default HomePage;
