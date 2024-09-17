import { ITopSong } from "@/types";
import Image from "next/image";
import React from "react";
import { RxTriangleDown, RxTriangleUp, RxDotFilled } from "react-icons/rx";

interface ISongCardProps {
  song: ITopSong;
}

const SongCard: React.FC<ISongCardProps> = ({ song }) => {
  return (
    <article className="flex flex-row items-center gap-4 w-[400px] h-[48px]">
      {/* 이미지 */}
      <div className="w-[48px] h-[48px] relative">
        <Image
          src={song.imageSrc}
          alt="썸네일"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="flex flex-row items-center gap-4">
        {/* Song Lank or Icon */}
        {song.rank === song.prevRank ? (
          <RxDotFilled color="#3ca63f" size={16} />
        ) : song.rank > song.prevRank ? (
          <RxTriangleUp color="#3ca63f" />
        ) : (
          <RxTriangleDown color="#f00" />
        )}
        <div>{song.rank}</div>
      </div>
    </article>
  );
};

export default SongCard;
