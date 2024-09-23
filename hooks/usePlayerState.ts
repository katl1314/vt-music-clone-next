import { create } from "zustand";

// 상태값
interface IPlayerState {
  isVisiblePlayer: boolean;
}

// 상태 변경하는 액션
interface IPlayerAction {
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => void;
}

const usePlayerState = create<IPlayerState & IPlayerAction>((set) => ({
  isVisiblePlayer: true,
  setIsVisiblePlayer: (isVisiblePlayer) => set({ isVisiblePlayer }),
}));

export default usePlayerState;
