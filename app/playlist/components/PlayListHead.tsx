"use client";

import IconButton from "@/components/elements/IconButton";
import { IPlayList } from "@/types";
import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import Image from "next/image";
import { getRandomElementFromArray } from "@/lib/utils";
import WhiteButton from "@/components/elements/WhiteButton";
import DarkButton from "@/components/elements/DarkButton";

interface IPlayListHeadProp {
  playlist: IPlayList;
}

const PlayListHead: React.FC<IPlayListHeadProp> = ({ playlist }) => {
  const { owner, playlistName, songList } = playlist;

  const imageSrc = getRandomElementFromArray(songList)?.imageSrc;

  // 모바일의 경우 flex-col, PC의 경우 flex-row로 설정함.
  return (
    <section className="flex items-center gap-[50px] flex-row">
      <div className="relative w-[160px] h-[160px] lg:w-[240px] lg:h-[240px]">
        <Image src={imageSrc} alt="songImage" fill />
      </div>
      <article className="flex flex-col justify-center">
        {/* 제목 */}
        <div className="text-[28px] font-bold">{playlistName}</div>
        {/* 앨범 및 정보 */}
        <div className="text-neutral-400 mt-4 text-[14px]">
          <div>{`앨범 · ${owner} · 2019`}</div>
          <div>{`${songList.length}곡 · 15분`}</div>
        </div>
        <ul>
          <IconButton
            icon={<FiMoreVertical size={24} />}
            onClickButton={() => {}}
          />
        </ul>
      </article>
    </section>
  );
};

export default PlayListHead;
