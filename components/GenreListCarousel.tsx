import { getChunkArray } from "@/lib/utils";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface IGenreList {
  genres: string[];
  title: string;
}

const GenreListCarousel: React.FC<IGenreList> = ({ genres, title }) => {
  // 청크
  const chunkGenresList: string[][] = getChunkArray(genres, 4);
  return (
    <div className="w-full">
      <Carousel>
        <div className="flex flex-row justify-between items-end my-2">
          <article className="flex flex-row gap-3">
            <div className="flex flex-col justify-center">
              <div className="text-[34px] font-bold leading-[34px]">
                {title}
              </div>
            </div>
          </article>
          <div className="relative left-[-45px]">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious className="right-2" /> {/* 이전 */}
              <CarouselNext className="left-2" /> {/* 다음 */}
            </div>
          </div>
        </div>
        <CarouselContent>
          {chunkGenresList.map((genres, index) => {
            return (
              <CarouselItem
                key={index}
                className="basis-[100%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <GenreColumn genres={genres} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

const GenreCard: React.FC<{ genre: string }> = ({ genre }) => {
  return (
    <div className="h-[48px] flex items-center mt-4 px-4 w-full">{genre}</div>
  );
};

const GenreColumn: React.FC<Pick<IGenreList, "genres">> = ({ genres }) => {
  return genres.map((genre, index) => {
    return <GenreCard genre={genre} key={index} />;
  });
};

export default GenreListCarousel;
