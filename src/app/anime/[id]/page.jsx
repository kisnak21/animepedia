import TrailerAnime from "@/components/TrailerAnime";
import { getAnimeRes } from "@/utils/api";
import Image from "next/image";
import React from "react";

const Page = async ({ params: { id } }) => {
  const { data } = await getAnimeRes(`anime/${id}`);

  return (
    <>
      <div className="pt-4 px-4 text-secondary">
        <h3 className="text-2xl font-semibold">
          {data.title} - {data.year}
        </h3>
        <div className="pt-4 px-4 text-secondary gap-2 flex overflow-x-auto">
          <div className="w-36 border border-secondary rounded flex flex-col justify-center items-center p-2">
            <h3 className="font-semibold bg-[#2E51A2] rounded-lg p-2">Score</h3>
            <p className="text-2xl font-bold">{data.score}</p>
            <p className="text-sm">{data.scored_by} users</p>
          </div>
          <div className="w-36 border border-secondary rounded flex flex-row justify-center items-center p-2 gap-2">
            <h3 className=" text-lg">Ranked</h3>
            <p className="text-xl font-bold">#{data.rank}</p>
          </div>
          <div className="w-36 border border-secondary rounded flex flex-row justify-center items-center p-2 gap-2">
            <h3 className=" text-lg">Popularity</h3>
            <p className="text-xl font-bold">#{data.popularity}</p>
          </div>
          <div className="border border-secondary rounded flex flex-row justify-center items-center p-2 gap-2">
            <h3 className=" text-lg">Members</h3>
            <p className="text-xl font-bold">{data.members}</p>
          </div>
          <div className="border border-secondary rounded flex flex-row justify-between items-center p-2 gap-2 text-primary">
            <p className="capitalize ">
              {data.season} {data.year}
            </p>
            |<p>{data.type}</p>|<p>{data.studios[0].name}</p>
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
      <div>
        <TrailerAnime youtubeId={data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
