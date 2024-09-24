"use client";

import { ISong } from "@/types";
import Image from "next/image";
import React from "react";
import {
  FiPlayCircle,
  FiThumbsUp,
  FiThumbsDown,
  FiMoreVertical,
} from "react-icons/fi";
import IconButton from "./elements/IconButton";
import { useRouter } from "next/navigation";

interface ISongCardProps {
  song: ISong;
}

const SongCardExpand: React.FC<ISongCardProps> = ({ song }) => {
  const { name, imageSrc, channel, channelId } = song;
  const { push } = useRouter();
  const onClickChannel = () => {
    push(`/channel/${channelId}`);
  };

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
      {/* basis-1/3 부모 너비의 1/3만큼 차지 */}
      <div className="flex gap-4 justify-between basis-1/3">
        {/* truncate : 말줄임표 */}
        <div className="w-[150px] truncate">{name}</div>
        <div
          className="text-neutral-500 hover:underline cursor-pointer"
          onClick={onClickChannel}
        >
          {channel}
        </div>
      </div>
      {/* 너비를 1/2에서 고정값으로 하여 반응형시 대비한다. */}
      <section className="hidden absolute right-0 flex-row items-center justify-end h-[48px] bg-[rgba(0,0,0,0.7)] w-[120px] group-hover:flex rounded-full">
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
};

export default SongCardExpand;
