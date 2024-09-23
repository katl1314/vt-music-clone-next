"use client";

import DarkButton from "@/components/elements/DarkButton";
import WhiteButton from "@/components/elements/WhiteButton";
import React from "react";
import { FiShuffle, FiMusic } from "react-icons/fi";

interface IChannelProps {
  subscribers: number; // 구독자수
  name: string; // 채널명
}

const ChannelHead: React.FC<IChannelProps> = ({ name, subscribers }) => {
  return (
    <section>
      <div className="text-[28px] font-bold">
        {/* 채널명 */}
        {name}
      </div>
      <div className="mt-4"></div>
      <div className="flex flex-row gap-4 flex-wrap">
        <div className="flex flex-row gap-4 order-2">
          <WhiteButton
            icon={<FiShuffle size={16} />}
            label="셔플"
            className="order-2 px-4"
          />
          {/* 뮤직 스테이션 */}
          <WhiteButton
            icon={<FiMusic size={16} />}
            label="뮤직 스테이션"
            className="order-3 px-4"
          />
        </div>
        <DarkButton
          label={`구독중 ${subscribers / 10000}만`}
          className="w-[230px] px-4 order-1 md:order-3"
        />
      </div>
    </section>
  );
};

export default ChannelHead;
