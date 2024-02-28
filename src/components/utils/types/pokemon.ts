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
    name: string;
    url: string;
    imgUrl: string;
    linkPath: string;
    imgAlt: string;
}

export interface PokemonPage {
    count: number;
    next?: string;
    previous?: string;
    results: PokemonResultPage[]
}
