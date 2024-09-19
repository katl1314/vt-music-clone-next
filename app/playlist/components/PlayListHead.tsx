"use client";

import IconButton from "@/components/elements/IconButton";
import { IPlayList } from "@/types";
import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import Image from "next/image";
import { getRandomElementFromArray } from "@/lib/utils";
interface IPlayListHeadProp {
  playlist: IPlayList;
}

const PlayListHead: React.FC<IPlayListHeadProp> = ({ playlist }) => {
  const { owner, playlistName, songList } = playlist;

  const imageSrc = getRandomElementFromArray(songList)?.imageSrc;

  return (
    <section className="flex flex-col items-center justify-center gap-[50px] lg:flex-row">
      <div className="relative w-[240px] h-[240px]">
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
            icon={<FiMoreVertical size={14} />}
            onClickIcon={() => {}}
          />
        </ul>
      </article>
    </section>
  );
};

export default PlayListHead;
