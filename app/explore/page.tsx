import React from "react";
import Category from "./components/Category";
import { getAllPlaylist, getSongListTop10 } from "@/lib/dummyData";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongListCarousel from "@/components/SongListCarousel";

const page = async () => {
  // Promise.all을 사용하여 순회 가능한 Promsie가 모두 resolve되었으면 실행한다.
  const [playListArray, songListTop10] = await Promise.all([
    getAllPlaylist(),
    getSongListTop10(),
  ]);

  return (
    <>
      <div className="mt-4"></div>
      {/* 카테고리 메뉴 */}
      <Category />
      <div className="mt-20"></div>
      {/* Playlist 캐러셀 */}
      <PlayListCarousel playListArray={playListArray} title="새 앨범 및 싱글" />
      <div className="mt-20"></div>
      {/* 인기곡 캐러셀 */}
      <SongListCarousel songListTop10={songListTop10} title="인기곡" />
      <div className="mt-20"></div>
      <div className="mt-20"></div>
      <div className="mt-20"></div>
    </>
  );
};

export default page;
