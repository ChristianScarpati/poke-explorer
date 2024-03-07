export type PokemonResultPage = {
    name: string;
    url: string;
    imgUrl: string;
    linkPath: string;
    imgAlt: string;
};

export interface GenericItemResult {
    [key: string | symbol]: string;
}
export interface PokemonResult {
    id: number;
    name: string;
    url: string;
    imgUrl: string;
    linkPath: string;
    imgAlt: string;
    Abilities: { name: string }[]
    type: {
        name: string[]
    };
}

export interface PokemonPage {
    count: number;
    next?: string;
    previous?: string;
    results: PokemonResultPage[]
}

export type PokemonType = {
    slot: number;
    name: string;
    type: { name: string | string[] }[] | { name: string[] };
};

export type PokemonInfo = {
    name: string;
    id: number;
    height: number;
    weight: number;
    types: PokemonType[];
    abilities: { name: string }[] | { name: string };
    imgUrl: string;
    imgAlt: string;
};
