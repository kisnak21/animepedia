/* eslint-disable @next/next/no-async-client-component */
"use client";

import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import Pagination from "@/components/Pagination";
import AnimeList from "@/components/AnimeList";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );
    const data = await response.json();
    setTopAnime(data);
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
