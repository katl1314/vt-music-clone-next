"use client";
import Image from "next/image";
import UserIcon from "./UserIcon";
import PagePadding from "./PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import useUIState from "@/hooks/useUIState";

// shadcn/ui의 drawer를 그대로 가져옴.
// Drawer => direction 열림 방형
// DrawerTrigger => 드로우가 열리는 트리거 설정
const HeaderDrawer = ({ children }: React.PropsWithChildren) => {
  const [open, setOpen] = useState(false); // 각각 상태값, 상태갱신 함수를 open, onOpenChange에 할당

  return (
    <Drawer direction="left" open={open} onOpenChange={setOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="h-full w-[240px]">
        {/* 로고 */}
        <div className="py-3">
          <div className="px-3">
            <Logo
              isDrawer={open}
              onClickClose={() => {
                // 팝업이 닫혔을때 open상태를 변경 => false로 변경하여 드로우를 숨긴다.
                setOpen(false);
              }}
            />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

// next.js에서 외부 이미지를 가져와야할 때 next.config.js에서 수정해야함.
const Header = ({ children }: React.PropsWithChildren) => {
  const [isScroll, setScroll] = useState(false); // 스크롤 여부 상태
  const { headerImageSrc } = useUIState(); // 이미지 기본값 세팅 완료
  const headerRef = useRef<HTMLElement>(null); // header dom참조를 위한 useRef사용

  useEffect(() => {
    // 이벤트 감지
    const handleScroll = () => {
      const scrollValue = headerRef.current?.scrollTop ?? 0;
      // scrollValue가 0이 아니면 스크롤 중
      setScroll(scrollValue != 0);
    };

    headerRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      // clean-up함수 이벤트 초기화
      headerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [isScroll]);

  return (
    <header ref={headerRef} className="relative overflow-y-auto w-full h-full">
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          {/* next.js 컴포넌트 Image의 fill을 사용할 경우 부모 요소는 relative이어야함. */}
          <Image
            src={headerImageSrc}
            alt="헤더 이미지"
            className="object-cover"
            fill
          />
        </div>
        <div className="absolute h-[400px] top-0 bg-black opacity-40 w-full"></div>
        <div className="absolute h-[400px] top-0 bg-gradient-to-t from-black w-full"></div>
      </section>
      {/* 자식요소가 sticky이고 부모 요소가 relative이면 적용된다. */}
      <section
        className={cn(
          "sticky top-0 z-10 transition ease-in-out duration-500",
          isScroll ? "bg-black" : "bg-transparent"
        )}
      >
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between items-center">
            <article className="h-[42px] min-w-[480px] hidden lg:flex flex-row items-center bg-[rgba(0,0,0,0.14)] rounded-2xl px-4 gap-4 border border-ne">
              <div>
                <FiSearch size={24} />
              </div>
              <input
                type="text"
                className="h-full w-full bg-transparent"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
              />
            </article>
            <HeaderDrawer>
              {/* min-width가 760이상이면 Logo를 숨긴다. */}
              <article className="lg:hidden">
                <Logo isDrawer={false} onClickClose={() => {}} />
              </article>
            </HeaderDrawer>
            <article className="flex flex-row items-center gap-6">
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="relative">{children}</section>
    </header>
  );
};

export default Header;
