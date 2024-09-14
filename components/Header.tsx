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

// shadcn/ui의 drawer를 그대로 가져옴.
// Drawer => direction 열림 방형
// DrawerTrigger => 드로우가 열리는 트리거 설정
const HeaderDrawer = ({ children }: React.PropsWithChildren) => {
  return (
    <Drawer direction="left">
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="h-full w-[240px] border-[1px]">
        {/* 로고 */}
        <div className="py-3">
          <div className="px-3">
            <Logo />
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
  return (
    <header className="relative overflow-y-auto w-full h-full">
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
      <section className="sticky">
        <PageSession>
          <div className="h-[64px] flex flex-row justify-between items-center">
            <article className="lg:flex flex-row items-center h-[42px] min-w-[480px] bg-[rgba(0,0,0,0.14)] rounded-2xl px-4 gap-4 hidden">
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
              <article className="md:hidden">
                <Logo />
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
