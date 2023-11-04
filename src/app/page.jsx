import React from "react";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/Header";
import { getAnimeRes, getNestedRes, getRandomAnime } from "@/utils/api";

const Page = async () => {
  const topAnime = await getAnimeRes("top/anime", "limit=10");
  let recommendAnime = await getNestedRes("recommendations/anime", "entry");
  recommendAnime = getRandomAnime(recommendAnime, 5);

  // const generateNumberMin = () => {
  //   let firstNum = Math.floor(Math.random() * recommendAnime.length - 5);
  //   let secondNum = firstNum + 5;
  //   const ArrRandomNumb = [];
  //   ArrRandomNumb.push(firstNum);
  //   ArrRandomNumb.push(secondNum);
  //   return ArrRandomNumb;
  // };
  // const randomArr = generateNumberMin();
  // recommendAnime = { data: recommendAnime.slice(randomArr[0], randomArr[1]) };

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
      <section>
        <Header title="Daily Recommendations" />
        <AnimeList api={recommendAnime} />
      </section>
    </div>
  );
};

export default Page;
