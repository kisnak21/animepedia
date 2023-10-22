import AnimeList from "@/components/AnimeList";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );
  const topAnime = await response.json();

  return (
    <>
      <section>
        <Header title="Most Popular" linkHref="/popular" linkTitle="See more" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Home;
