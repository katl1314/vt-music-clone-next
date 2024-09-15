"use client";
import { IPlayList } from "@/types";
import React from "react";
import { IoMdPlayCircle } from "react-icons/io";

interface IPlayListProps {
  playList: IPlayList;
}

const PlayListNav = ({ playList }: IPlayListProps) => {
  const { id, owner, playlistName, songList } = playList;

  function onClickPlay() {
    // TODO Play Music
  }

  // group을 통해 감싸고, group에 마우스 호버 시 Icon이 표시하는 기능
  return (
    <li className="mx-3 px-4 h-[56px] flex flex-row justify-between items-center hover:bg-neutral-700 rounded-lg group">
      <div>
        <div className="text-[14px]">{playlistName}</div>
        <div className="text-[12px] text-neutral-500">{owner}</div>
      </div>
      <div>
        <div
          onClick={onClickPlay}
          className="hidden group-hover:block cursor-pointer"
        >
          <IoMdPlayCircle size={30} />
        </div>
      </div>
    </li>
  );
};

export default PlayListNav;
