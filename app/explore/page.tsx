import PagePadding from "@/components/PagePadding";
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
    <PagePadding>
      <div className="mt-4"></div>
      <Category />
      <div className="mt-4"></div>
      <PlayListCarousel
        playListArray={[...playListArray]}
        title="새 앨범 및 싱글"
      />
      <div className="mt-4"></div>
      <SongListCarousel songListTop10={[...songListTop10]} title="인기곡" />
    </PagePadding>
  );
};

export default page;
