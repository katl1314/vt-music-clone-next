"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { ITopSong } from "@/types";
import { getChunkArray } from "@/lib/utils";
import SongCard from "./SongCard";

interface ISongListCarouselProps {
  title: string;
  subtitle?: string;
  thumbnail?: React.ReactNode;
  songListTop10: ITopSong[]; // types폴더에 정의
}

const SongColumn: React.FC<{ songList: ITopSong[] }> = ({ songList }) => {
  return (
    <div className="flex flex-col gap-4">
      {songList.map((song, index) => {
        return <SongCard key={index} song={song} />;
      })}
    </div>
  );
};

// React.FC<genericType>을 지정하면 함수내 인자에 자동완성 기능 제공
const SongListCarousel: React.FC<ISongListCarouselProps> = ({
  title,
  songListTop10,
  subtitle,
  thumbnail: thumnail,
}) => {
  // 10개의 TopSong List를 4개로 쪼개자.
  const chunkTop10SongList = getChunkArray(songListTop10, 4); // 무조건 이차원 배열
  return (
    <div className="w-full">
      <Carousel>
        <div className="flex flex-row justify-between items-end my-2">
          <article className="flex flex-row gap-3">
            {thumnail}
            <div className="flex flex-col justify-center">
              <div>
                {subtitle && <div className="text-neutral-500">{subtitle}</div>}
              </div>
              <div className="text-[34px] font-bold leading-[34px]">
                {title}
              </div>
            </div>
          </article>
          <div className="relative left-[-45px]">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious className="right-2" />
              <CarouselNext className="left-2" />
            </div>
          </div>
        </div>

        <CarouselContent className="mt-4">
          {chunkTop10SongList.map((songlist, index) => (
            <CarouselItem
              key={index}
              // 반응형에 따라 playList를 보여줄 수 있도록 flex-basis속성 사용
              className="basis-[100%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <SongColumn songList={songlist} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SongListCarousel;
