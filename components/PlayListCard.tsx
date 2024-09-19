"use client";

import { IPlayList } from "@/types";
import React from "react";
import Image from "next/image";
import { getRandomElementFromArray } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { MdMoreVert } from "react-icons/md";
import { FiPlay } from "react-icons/fi";
import IconButton from "./elements/IconButton";

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

  // Play기능
  const onClickPlay = () => {
    // TODO 재생 기능 추가
  };

  const imageSrc = getRandomElementFromArray(songList).imageSrc;
  return (
    // 카드의 높이는 240px
    <article
      className="h-[240px] cursor-pointer group"
      onClick={() => onClickCard(id)}
    >
      {/* thumbnail의 position relative, 높이 136px */}
      <section className="relative h-[136px]">
        {/* fill: 부모 요소의 크기만큼 채우는 기능 (부모 요소에 position이 설정되어야함.) */}
        {/* Image렌더링 1 */}
        <Image
          src={imageSrc}
          alt="thumbnail"
          fill
          className="object-cover rounded-lg"
        />
        {/* div 렌더링 2 */}
        <div className="hidden relative group-hover:block bg-gradient-to-b from-[rgb(0,0,0,0.7)] top-0 w-full h-full">
          <div className="top-2 right-4 absolute">
            <IconButton icon={<MdMoreVert size={20} />} />
          </div>
          <div className="absolute bottom-2 right-4 flex items-center justify-center transform-gpu transition-transform hover:scale-110 bg-[rgb(0,0,0,0.7)] rounded-full pl-[1.5px] hover:bg-[rgba(0,0,0,0.9)]">
            <IconButton
              icon={<FiPlay size={20} color="red" />}
              onClickButton={onClickPlay}
            />
          </div>
        </div>
      </section>
      <section className="mt-2">
        <div>{playlistName}</div>
        <div className="text-neutral-500">{`${owner} - 트랙 ${songList.length}`}</div>
      </section>
    </article>
  );
};

export default PlayListCard;
