import React from "react";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/Header";
import { getAnimeRes } from "@/utils/api";

const Page = async () => {
  const topAnime = await getAnimeRes("top/anime", "limit=10");

  return (
    <div className="gap-4">
      <section>
        <Header
          title="Most Popular Anime"
          linkHref="/anime/popular"
          linkTitle="See more"
        />
        <AnimeList api={topAnime} />
      </section>
    </div>
  );
};

export default Page;
