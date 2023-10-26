import { getMangaRes } from "@/utils/api";
import Image from "next/image";
import React from "react";

const Page = async ({ params: { id } }) => {
  const { data } = await getMangaRes(`manga/${id}`);

  return (
    <>
      <div className="pt-4 px-4 text-secondary">
        <h3 className="text-2xl font-semibold">
          {data.title} / {data.title_english}
        </h3>
        <div className="pt-4 px-4 text-secondary gap-2 flex overflow-x-auto">
          <div className="w-44 border border-secondary rounded flex flex-col justify-center items-center p-2">
            <h3 className="font-semibold bg-accent rounded-lg p-2">Score</h3>
            <p className="text-2xl font-bold">{data.score}</p>
            <p className="text-sm">{data.scored_by} users</p>
          </div>
          <div className="w-44 border border-secondary rounded flex flex-col justify-center items-center p-2 gap-2">
            <h3 className="font-semibold bg-accent rounded-lg p-2 text-lg">
              Ranked
            </h3>
            <p className="text-lg font-bold">#{data.rank}</p>
          </div>
          <div className="w-44 border border-secondary rounded flex flex-col justify-center items-center p-2 gap-2">
            <h3 className="font-semibold bg-accent rounded-lg p-2 text-lg">
              Popularity
            </h3>
            <p className="text-lg font-bold">#{data.popularity}</p>
          </div>
          <div className="w-44 border border-secondary rounded flex flex-col justify-center items-center p-2 gap-2">
            <h3 className="font-semibold bg-accent rounded-lg p-2 text-lg">
              Members
            </h3>
            <p className="text-lg font-bold">{data.members}</p>
          </div>
          <div className="w-auto border border-secondary rounded flex flex-col justify-center items-center p-2 gap-2">
            <h3 className="font-semibold bg-accent rounded-lg p-2 text-lg">
              Total Chapters
            </h3>
            <p className="text-lg font-bold">{data.chapters}</p>
          </div>
          <div className="w-auto border border-secondary rounded flex flex-col justify-center items-center p-2 gap-2">
            <h3 className="font-semibold bg-accent rounded-lg p-2 text-lg">
              Themes
            </h3>
            {data.themes.map((theme) => (
              <p key={theme.name} className="text-lg font-bold">
                - {theme.name}
              </p>
            ))}
          </div>
          <div className="w-auto border border-secondary rounded flex flex-col justify-center items-center p-2 gap-2">
            <h3 className="font-semibold bg-accent rounded-lg p-2 text-lg">
              Authors
            </h3>
            {data.authors.map((author) => (
              <p key={author.name} className="text-lg font-bold">
                {author.name}
              </p>
            ))}
          </div>
        </div>

        <div className="flex pt-4 px-4 gap-4 flex-wrap sm:flex-nowrap text-secondary">
          <Image
            src={data.images.webp.large_image_url}
            width={250}
            height={250}
            alt={data.images.jpg.large_image_url}
            className="gap-2 w-full rounded object-cover"
          />
          <p className="text-justify text-lg">{data.synopsis}</p>
        </div>
      </div>
    </>
  );
};

export default Page;
