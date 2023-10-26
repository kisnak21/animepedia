import React from "react";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/Header";
import { getAnimeRes, getMangaRes } from "@/utils/api";
import MangaList from "@/components/MangaList";

const Page = async () => {
  const topManga = await getMangaRes("top/manga", "limit=10");

  return (
    <div className="gap-4">
      <section>
        <Header
          title="Most Popular Manga"
          linkHref="/manga/popular"
          linkTitle="See more"
        />
        <MangaList api={topManga} />
      </section>
    </div>
  );
};

export default Page;
