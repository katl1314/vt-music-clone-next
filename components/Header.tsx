"use client";
import Image from "next/image";
import UserIcon from "./UserIcon";
import PageSession from "./PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// shadcn/ui의 drawer를 그대로 가져옴.
// Drawer => direction 열림 방형
// DrawerTrigger => 드로우가 열리는 트리거 설정
const HeaderDrawer = ({ children }: React.PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  // Drawer의 onOpenChange를 setOpen과 연결.
  // open속성을 상태값과 연결한다.
  return (
    <Drawer direction="left" open={open} onOpenChange={setOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="h-full w-[240px] border-[1px]">
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
        </div>
        {/* 재생목록 + 네비게이션 */}
        <div className="">
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

// next.js에서 외부 이미지를 가져와야할 때 next.config.js에서 수정해야함.
const Header = ({ children }: React.PropsWithChildren) => {
  const [isScroll, setScroll] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

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
            src="https://images.unsplash.com/photo-1707833558984-3293e794031c"
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
          "sticky top-[0px] z-10 transition ease-in-out duration-500",
          isScroll ? "bg-black" : "bg-transparent"
        )}
      >
        <PageSession>
          <div className="h-[64px] flex flex-row justify-between items-center">
            <article
              className={cn(
                "lg:flex flex-row items-center h-[42px] min-w-[480px] bg-[rgba(0,0,0,0.14)] rounded-2xl px-4 gap-4 hidden",
                isScroll ? "border-[1px]" : "border-0"
              )}
            >
              <div>
                <FiSearch size={24} />
              </div>
              <input
                type="text"
                className="h-full w-full bg-transparent px-[10px]"
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
        </PageSession>
      </section>
      <section className="absolute">{children}</section>
    </header>
  );
};

export default Header;
