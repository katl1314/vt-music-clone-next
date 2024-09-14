"use client";

import React from "react";
// next.js에서는 이미지 컴포넌트를 제공
import Image from "next/image";
import { useRouter } from "next/navigation";
import IconButton from "./IconButton";
import { RxHamburgerMenu } from "react-icons/rx";

const Logo = () => {
  // Next.js에서 이벤트 처리, 리액트 훅 처리는 서버 컴포넌트가 아닌 클라이언트 컴포넌트여야한다.
  const onClickLogo = () => {
    // home으로 이동 => useRouter를 이용 (appRouter시 next/navigation의 useRouter를 사용한다.)
    const { push } = useRouter();
    push("/"); // Home으로 이동
  };

  const onClickIcon = () => {};
  return (
    <section className="flex flex-row items-center gap-3">
      <IconButton
        icon={<RxHamburgerMenu size="24" />}
        onClickIcon={onClickIcon}
      />
      <div className="cursor-pointer" onClick={onClickLogo}>
        {/* 유튜브 뮤직 로고의 경우 next/image컴포넌트 사용 */}
        <Image src={"/main-logo.svg"} width={100} height={30} alt="logo" />
      </div>
    </section>
  );
};

export default Logo;
