import AnimeList from "@/components/AnimeList";
import Header from "@/components/Header";
import React from "react";

const SearchPage = async ({ params }) => {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();
  return (
    <>
      <section>
        <Header title={`Search Results for "${keyword}"`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default SearchPage;
