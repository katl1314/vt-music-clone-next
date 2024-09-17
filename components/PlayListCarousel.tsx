"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { IPlayList } from "@/types";
import PlayListCard from "./PlayListCard";

interface IPlayListCarouselProps {
  title: string;
  subtitle?: string;
  thumbnail?: React.ReactNode;
  playListArray?: IPlayList[]; // types폴더에 정의
}

// React.FC<genericType>을 지정하면 함수내 인자에 자동완성 기능 제공
const PlayListCarousel: React.FC<IPlayListCarouselProps> = ({
  title,
  playListArray,
  subtitle,
  thumbnail: thumnail,
}) => {
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
          {playListArray?.map((playList, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
            >
              <PlayListCard playList={playList} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PlayListCarousel;
