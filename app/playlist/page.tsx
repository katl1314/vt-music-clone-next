import { getPlaylistById } from "@/lib/dummyData";
import React from "react";
import { permanentRedirect } from "next/navigation";
import { IPlayList } from "@/types";
import { getRandomElementFromArray } from "@/lib/utils";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import PlayListHead from "./components/PlayListHead";

interface IPlayListProps {
  searchParams: {
    list: string;
  };
}

const page: React.FC<IPlayListProps> = async ({ searchParams }) => {
  const id = parseInt(searchParams.list); // querystring으로 전달한 값을 가져오고.
  const playlist = (await getPlaylistById(id)) as IPlayList; // 플레이리스트 조회합니다.

  if (playlist === undefined || playlist === null) {
    permanentRedirect("/"); // 영구 리다이렉트 308
  }

  const imageSrc = getRandomElementFromArray(playlist.songList)?.imageSrc; // 배열 항목을 랜덤으로 가져온다.

  return (
    <div>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className="mt-12"></div>
      <PlayListHead playlist={playlist} />
    </div>
  );
};

export default page;
