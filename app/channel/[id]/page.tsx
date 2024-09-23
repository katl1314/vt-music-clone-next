import React from "react";
import {} from "next";
import { getChannelById } from "@/lib/dummyData";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongCardExpand from "@/components/SongCardExpand";
import ChannelHead from "./components/ChannelHead";
import { permanentRedirect } from "next/navigation";

interface IChannelProps {
  params: {
    id: string;
  };
}

// 서버 컴포넌트는 서버에서 렌더링을 하기 때문에 클라이언트에서 확인 불가
// 서버내 터미널에서 확인 필요
const page: React.FC<IChannelProps> = async ({ params }) => {
  const { id: channelId } = params;
  const channel = await getChannelById(parseInt(channelId));

  if (!channel) {
    // 채널이 존재하지 않으면
    permanentRedirect("/");
  }

  const { subscribers, name, songList, playlistArray } = channel;

  return (
    <section>
      <div className="mt-12"></div>
      {/* 채널 정보 */}
      <ChannelHead subscribers={subscribers} name={name} />
      <div className="mt-12"></div>
      {/* 노래 */}
      <div className="text-[34px] font-bold leading-[34px]">노래</div>
      <section className="flex flex-col gap-2 mt-4">
        {songList.map((song, index) => {
          return <SongCardExpand song={song} key={index} />;
        })}
      </section>
      <div className="mt-12"></div>
      {/* 앨범 */}
      <PlayListCarousel playListArray={playlistArray} title="앨범" />
      <div className="mt-12"></div>
    </section>
  );
};

export default page;
