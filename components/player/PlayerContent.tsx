"use client";
import React, { useEffect, useCallback } from "react";
import { Slider as PlayerSlider } from "@/components/ui/slider";
import { useAudio } from "react-use";
import IconButton from "../elements/IconButton";
import { FiPlay, FiPause } from "react-icons/fi";
import { GoMute, GoUnmute } from "react-icons/go";
import usePlayerState from "@/hooks/usePlayerState";

const PlayerContent = () => {
  const { activeSong, prevPlayerQueue, nextPlayerQueue, playPrev, playNext } =
    usePlayerState();

  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src ?? "", // 오디오 경로
    autoPlay: true, // 자동 재생 여부
  });

  const duration = ref?.current?.duration ?? 0;

  const isLoading = activeSong?.src && state.buffered?.length === 0;

  if (isLoading) return;

  const handleNextBtn = useCallback(() => {
    if (nextPlayerQueue.length === 0) {
      // 큐에 남은 노래가 없으면?
      controls.pause();
      return;
    }
    playNext(); // 마지막 노래가 아니면? nextPlayerQueue에서 곡을 추출함.
  }, [nextPlayerQueue]);

  const handlePrevBtn = useCallback(() => {
    if (prevPlayerQueue.length === 0) {
      // 큐에 남은 노래가 없으면?
      controls.pause();
      return;
    }
    playPrev(); // 큐에 남은 노래가 있으면? prevPlayerQueue에서 곡을 추출함.
  }, [prevPlayerQueue]);

  useEffect(() => {
    const audioRef = ref?.current;
    // 현재 실행중인 음악이 종료되었으면 조건에 따라 다음 노래를 자동 실행한다.
    audioRef?.addEventListener("ended", handleNextBtn);
    return () => {
      // end이벤트 remove
      audioRef?.removeEventListener("ended", handleNextBtn);
    };
  }, [nextPlayerQueue, prevPlayerQueue, playPrev, playNext]);

  return (
    <div className="h-full w-full relative">
      <div className="absolute top-[-16px] w-full">
        <PlayerSlider
          className="w-full"
          defaultValue={[0]}
          value={[state.time]}
          max={duration}
          onValueChange={(value) => {
            controls.seek(value[0]);
          }}
        />
        <section className="flex flex-row gap-4">
          {audio}
          {/* Pause 실행/정지 */}
          <IconButton icon={<FiPlay />} onClickButton={controls.play} />
          <IconButton icon={<FiPause />} onClickButton={controls.pause} />
          {/* Mute 음소거 */}
          <IconButton icon={<GoMute />} onClickButton={controls.mute} />
          {/* Un-mute 음소거 해제 */}
          <IconButton icon={<GoUnmute />} onClickButton={controls.unmute} />
          {/* Seek */}
        </section>
      </div>
    </div>
  );
};

export default PlayerContent;
