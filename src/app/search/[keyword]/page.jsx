import AnimeList from "@/components/AnimeList";
import Header from "@/components/Header";
import { getAnimeRes } from "@/utils/api";
import React from "react";

const SearchPage = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);

  const searchAnime = await getAnimeRes("anime", `q=${decodeKeyword}`);
  return (
    <>
      <section>
        <Header title={`Search Results for "${decodeKeyword}"`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default SearchPage;
