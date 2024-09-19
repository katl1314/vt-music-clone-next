"use client";

import React, { useEffect } from "react";
import useUIState from "@/hooks/useUIState";

interface IHeaderBgChanger {
  imageSrc: string;
}

const HeaderBgChanger: React.FC<IHeaderBgChanger> = ({ imageSrc }) => {
  // changeHeaderImageSrc 함수를 store에서 가져와야함.
  const { changeHeaderImageSrc } = useUIState();

  // 의존성 배열에 imageSrc를 추가하여 imageSrc가 이전과 다를때만 콜백함수를 실행함.
  useEffect(() => {
    changeHeaderImageSrc(imageSrc);
  }, [imageSrc]);
  return <></>;
};

export default HeaderBgChanger;
