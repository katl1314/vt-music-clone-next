"use client";
import usePlayerState from "@/hooks/usePlayerState";
import React from "react";

// 플레이어는 무조건 하단에 고정된 상태로 표시함.
const PlayerWrapper = () => {
  const { isVisiblePlayer } = usePlayerState();

  // isVisiblePlayer가 false이면 보여지면 안된다.
  if (!isVisiblePlayer) {
    return null;
  }

  return (
    <div className="fixed bottom-0 w-full h-[72px] bg-neutral-900">
      playerWrapper
    </div>
  );
};

export default PlayerWrapper;
