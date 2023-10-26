/* eslint-disable @next/next/no-async-client-component */
"use client";

import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import Pagination from "@/components/Pagination";
import { getMangaRes } from "@/utils/api";
import MangaList from "@/components/MangaList";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topManga, setTopManga] = useState([]);

  const fetchData = async () => {
    const popularManga = await getMangaRes("top/manga", `page=${page}`);
    setTopManga(popularManga);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <Banner title={`Popular Manga #${page}`} />
      <MangaList api={topManga} />
      <Pagination
        page={page}
        lastPage={topManga.pagination?.items.total}
        setPage={setPage}
      />
    </div>
  );
};

export default Page;
