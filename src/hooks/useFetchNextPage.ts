import { FetchNextPageOptions, InfiniteQueryObserverResult } from "@tanstack/react-query";
import { useEffect } from "react";
import { PokemonPage } from "../components/utils/types/pokemon";

const useFetchNextPage = (
  hasNextPage: boolean | undefined,
  callBack: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<PokemonPage, unknown>>
) => {
  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e: Event) => {
      // eslint-disable-next-line max-len
      const { scrollHeight, scrollTop, clientHeight } = (e.target as Document).scrollingElement as HTMLElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true;
        if (hasNextPage) await callBack();
        fetching = false;
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [callBack, hasNextPage]);
};

export default useFetchNextPage;
