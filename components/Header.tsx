import Image from "next/image";
import UserIcon from "./UserIcon";
import PageSession from "./PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
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
            <article className="flex flex-row items-center h-[42px] min-w-[480px] bg-[rgba(0,0,0,0.14)] rounded-2xl px-4 gap-4">
              <div>
                <FiSearch size={24} />
              </div>
              <input
                type="text"
                className="h-full w-full bg-transparent px-[10px]"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
              />
            </article>
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
