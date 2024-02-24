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
