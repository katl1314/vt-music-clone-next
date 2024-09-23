import { ISong } from "@/types";
import { create } from "zustand";

// 상태값
interface IPlayerState {
  isVisiblePlayer: boolean;
  activeSong?: ISong | null; // 현재 재생중인 노래
  prevPlayerQueue: ISong[]; // 이전에 재생한 노래 리스트
  nextPlayerQueue: ISong[]; // 다음에 재생할 노래 리스트
}

// 상태 변경하는 액션
interface IPlayerAction {
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => void;
  addSongLIst: (songs: ISong[]) => void;
  playNext: () => void;
  playPrev: () => void;
}

const usePlayerState = create<IPlayerState & IPlayerAction>((set) => ({
  isVisiblePlayer: false,
  activeSong: null,
  prevPlayerQueue: [],
  nextPlayerQueue: [],

  setIsVisiblePlayer: (isVisiblePlayer) => set({ isVisiblePlayer }),
  addSongLIst: (songs) =>
    set((prev) => {
      // 이전 상태값을 가져와서 다음 상태값을 갱신한다.
      const prevSong = prev.activeSong; // 현재 실행중인 노래
      const cloneSongList = [...songs]; // 기존 songs를 복사한다.
      const currentSong = cloneSongList.splice(0, 1)?.[0]; // 첫번째 요소를 가져온다. 그리고 배열내 해당 요소는 삭제
      return {
        activeSong: currentSong,
        prevPlayerQueue: prevSong
          ? [prevSong, ...prev.prevPlayerQueue]
          : prev.prevPlayerQueue,
        nextPlayerQueue: [...cloneSongList],
        isVisiblePlayer: true,
      };
    }),
  playNext: () =>
    set((prev) => {
      const { activeSong, prevPlayerQueue, nextPlayerQueue } = prev;
      const currentSong = activeSong;
      const nextSong = nextPlayerQueue.splice(0, 1)?.[0];
      return {
        activeSong: nextSong, // 다음에 실행할 노래를 가져온다음에 activeSong에 추가
        prevPlayerQueue: [
          // 현재 실행했던 노래는 이전 노래 리스트에 추가함.
          ...(currentSong ? [currentSong] : []),
          ...prevPlayerQueue,
        ],
        nextPlayerQueue: [...nextPlayerQueue],
      };
    }),
  playPrev: () =>
    set((prev) => {
      // prevPlayerQueue의 첫번째 노래가 현재 실행하는 노래
      const { activeSong, prevPlayerQueue, nextPlayerQueue } = prev;

      const currentSong = activeSong;
      const prevSong = prevPlayerQueue.splice(0, 1)?.[0];
      return {
        activeSong: prevSong,
        nextPlayerQueue: [
          ...(currentSong ? [currentSong] : []),
          ...nextPlayerQueue,
        ],
        prevPlayerQueue: [...prevPlayerQueue],
      };
    }),
}));

export default usePlayerState;
