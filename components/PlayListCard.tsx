"use client";

import { IPlayList } from "@/types";
import React from "react";
import Image from "next/image";
import { getRandomElementFromArray } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface IPlayListCard {
  playList: IPlayList;
}

const PlayListCard: React.FC<IPlayListCard> = ({ playList }) => {
  // 객체 구조 분해 할당
  const { id, owner, playlistName, songList } = playList;
  const { push } = useRouter();
  // 카드 클릭 이벤트
  const onClickCard = (id: number) => {
    push(`/playlist?list=${id}`);
  };

  const imageSrc = getRandomElementFromArray(songList).imageSrc;
  return (
    // 카드의 높이는 240px
    <article
      className="min-h-[240px] h-[240px] cursor-pointer"
      onClick={() => onClickCard(id)}
    >
      {/* thumbnail의 position relative, 높이 136px */}
      <section className="relative h-[136px]">
        {/* fill: 부모 요소의 크기만큼 채우는 기능 (부모 요소에 position이 설정되어야함.) */}
        <Image src={imageSrc} alt="thumbnail" fill />
      </section>
      <section className="mt-2">
        <div>{playlistName}</div>
        <div className="text-neutral-500">{`${owner} - 트랙 ${songList.length}`}</div>
      </section>
    </article>
  );
};

export default PlayListCard;
