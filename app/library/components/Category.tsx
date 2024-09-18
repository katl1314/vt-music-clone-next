"use client"; //zustand hook을 사용함.
import React from "react";
import { useRouter } from "next/navigation";
import { libraryCategoryList } from "@/lib/dummyData";
import { cn } from "@/lib/utils";
import Dropdown from "@/app/library/components/Dropdown";

const Category = () => {
  // 카테고리 클릭 이벤트

  const { push } = useRouter(); // url 변경을 위한 함수 미리 정의

  const onClickCategory = (text: string) => {
    //TODO justand를 사용하여 작업할 것.
  };

  return (
    <div className="w-full h-[48px] flex flex-row items-center justify-between gap-4 flex-wrap">
      <ul className="max-w-full overflow-x-auto flex flex-row gap-4">
        {libraryCategoryList.map((text) => {
          return (
            <li
              key={text}
              className="h-[38px] min-w-fit px-3 flex items-center justify-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.25)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer"
              onClick={() => onClickCategory(text)}
            >
              {text}
            </li>
          );
        })}
      </ul>
      <div>
        <Dropdown />
      </div>
    </div>
  );
};

export default Category;
