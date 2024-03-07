import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useIsPokemonActive = (pokemonName: string): boolean => {
	const location = useLocation();
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const pokemonUrl = `/pokemon/${encodeURIComponent(pokemonName)}`;
		setIsActive(location.pathname === pokemonUrl);
	}, [location.pathname, pokemonName]);

	return isActive;
};

export default useIsPokemonActive;
