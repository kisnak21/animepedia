/* eslint-disable @next/next/no-async-client-component */
"use client";

import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import Pagination from "@/components/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnimeRes } from "@/utils/api";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const popularAnime = await getAnimeRes("top/anime", `page=${page}`);
    setTopAnime(popularAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <Banner title={`Popular Anime #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.items.total}
        setPage={setPage}
      />
    </div>
  );
};

export default Page;
