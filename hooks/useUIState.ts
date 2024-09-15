import { create } from "zustand";

// 스토어에 저장할 상태
interface IUIState {
  homeCategory: string;
  headerImageSrc: string;
}

// 스토어 상태값 갱신 함수들...
interface IUIAction {
  changeHomeCategory: (category: IUIState["homeCategory"]) => void;
  changeHeaderImageSrc: (imageSrc: IUIState["headerImageSrc"]) => void;
}

const initImageSrc =
  "https://images.unsplash.com/photo-1707833558984-3293e794031c";

// create를 사용하여 store를 생성한다.
// create의 인터페이스로 지정하면 해당 인터페이스의 속성들을 스토어에 저장
const useUIState = create<IUIState & IUIAction>((set) => ({
  homeCategory: "",
  headerImageSrc: initImageSrc,
  // set(callback) => 콜백함수(인자는 현재 상태값)을 통해 새로운 상태값 반환
  // callback = (state) => IUIState
  // set(updateObject) => 객체를 직접 전달
  changeHomeCategory: (category: string) => set({ homeCategory: category }),
  changeHeaderImageSrc: (imgSrc: string) =>
    set({
      headerImageSrc: imgSrc || initImageSrc,
    }),
}));

export default useUIState;
