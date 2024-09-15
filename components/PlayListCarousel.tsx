"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { IPlayList } from "@/types";

interface IPlayListCarouselProps {
  title: string;
  subtitle?: string;
  thumnail?: React.ReactNode;
  playListArray?: IPlayList[]; // types폴더에 정의
}

// React.FC<genericType>을 지정하면 함수내 인자에 자동완성 기능 제공
const PlayListCarousel: React.FC<IPlayListCarouselProps> = ({
  title,
  playListArray,
  subtitle,
  thumnail,
}) => {
  return (
    <div>
      {thumnail}
      {title} - {subtitle}
      {/* <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/3">...</CarouselItem>
          <CarouselItem className="basis-1/3">...</CarouselItem>
          <CarouselItem className="basis-1/3">...</CarouselItem>
        </CarouselContent>
      </Carousel> */}
    </div>
  );
};

export default PlayListCarousel;
