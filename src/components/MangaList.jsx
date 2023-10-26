import Image from "next/image";
import Link from "next/link";
import React from "react";

const MangaList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 sm:grid-cols-3 gap-4 px-4">
      {api.data?.map((manga) => {
        return (
          <Link
            href={`/manga/${manga.mal_id}`}
            className="cursor-pointer hover:text-primary text-secondary transition-all"
            key={manga.mal_id}
          >
            <Image
              src={manga.images?.webp.large_image_url}
              width={350}
              height={350}
              alt={manga.images?.jpg.large_image_url}
              className="w-full max-h-64 object-cover"
            />
            <h3 className="font-bold md:text-xl text-md p-4">{manga.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default MangaList;
