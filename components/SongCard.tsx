"use client";
import { ITopSong } from "@/types";
import Image from "next/image";
import React from "react";
import {
  FiPlayCircle,
  FiThumbsUp,
  FiThumbsDown,
  FiMoreVertical,
} from "react-icons/fi";
import { RxTriangleDown, RxTriangleUp, RxDotFilled } from "react-icons/rx";
import IconButton from "./elements/IconButton";
import usePlayerState from "@/hooks/usePlayerState";

interface ISongCardProps {
  song: ITopSong;
}

const SongCard: React.FC<ISongCardProps> = ({ song }) => {
  const { rank, prevRank, name, imageSrc } = song;

  const handlePlay = () => {};

  return (
    <article className="flex flex-row items-center gap-4 w-full h-[48px] relative group cursor-pointer">
      {/* 이미지 */}
      <div className="w-[48px] h-[48px] relative">
        <Image
          src={imageSrc}
          alt="썸네일"
          fill={true}
          className="object-cover"
        />
        <section className="absolute w-[48px] h-[48px] hidden flex-row items-center justify-center cursor-pointer group-hover:flex bg-black">
          <IconButton
            icon={<FiPlayCircle size="40" color="#aaaaaa" />}
            onClickButton={handlePlay}
          />
        </section>
      </div>
      <div className="flex flex-row items-center gap-4">
        {/* Song Lank or Icon */}
        {rank === prevRank ? (
          <RxDotFilled color="#3ca63f" size={16} />
        ) : rank > prevRank ? (
          <RxTriangleUp color="#3ca63f" />
        ) : (
          <RxTriangleDown color="#f00" />
        )}
        <div>{rank + 1}</div>
      </div>
      <div>
        <div>{name}</div>
      </div>
      <section className="hidden absolute right-0 flex-row items-center justify-end h-[48px] w-full group-hover:flex rounded-full">
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
};

export default SongCard;
