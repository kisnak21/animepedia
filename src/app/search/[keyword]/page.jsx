import AnimeList from "@/components/AnimeList";
import Header from "@/components/Header";
import MangaList from "@/components/MangaList";
import { getAnimeRes, getMangaRes } from "@/utils/api";
import React from "react";

const SearchPage = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);

  const searchAnime = await getAnimeRes("anime", `q=${decodeKeyword}`);
  const searchManga = await getMangaRes("manga", `q=${decodeKeyword}`);
  return (
    <>
      <section>
        <Header title={`Search Results for "${decodeKeyword}"`} />
        <AnimeList api={searchAnime} />
        <MangaList api={searchManga} />
      </section>
    </>
  );
};

export default SearchPage;
