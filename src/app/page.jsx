import AnimeList from "@/components/AnimeList";
import Link from "next/link";
import React from "react";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );
  const anime = await response.json();

  return (
    <div>
      <div
        className="flex justify-between items-center
      p-4"
      >
        <h1 className="text-2xl font-bold">Most Popular</h1>
        <Link
          href="/popular"
          className="md:text-xl text-sm underline hover:text-blue-600 hover:transition-all cursor-pointer"
        >
          See more
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 sm:grid-cols-3 gap-4 px-4">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList
                id={data.mal_id}
                title={data.title}
                images={data.images.webp.large_image_url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
