"use client"; //zustand hook을 사용함.
import React from "react";
import useUIState from "@/hooks/useUIState";
import { homeCategoryList } from "@/lib/dummyData";
import { cn } from "@/lib/utils";

// { label: string, src: label}
type homeCategoryListType = (typeof homeCategoryList)[0];

const Category = () => {
  // 스토어에 저장된 값을 가져오자.
  const { homeCategory, changeHomeCategory, changeHeaderImageSrc } =
    useUIState();

  // 카테고리 클릭 이벤트
  const onClickCategory = (label: string, src: string) => {
    //만약 homeCategory와 label이 같을경우
    if (homeCategory === label) {
      // 선택한걸 해제합니다~
      changeHomeCategory("");
      changeHeaderImageSrc("");
    } else {
      // 아니다 다를 경우
      changeHomeCategory(label);
      changeHeaderImageSrc(src);
    }
  };

  return (
    <ul className="max-w-full overflow-x-auto flex flex-row gap-4">
      {homeCategoryList.map(({ label, src }: homeCategoryListType) => {
        return (
          <li
            key={label}
            className={cn(
              "h-[38px] min-w-fit px-3 flex items-center justify-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.25)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer",
              homeCategory === label
                ? "bg-[rgba(255,255,255,1)] text-black hover:bg-[rgba(255,255,255,1)]"
                : ""
            )}
            onClick={() => onClickCategory(label, src)}
          >
            {label}
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
