import PagePadding from "@/components/PagePadding";
import Category from "./components/Category";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray } from "@/lib/dummyData";
import UserIcon from "@/components/UserIcon";

export default async function Home() {
  // error.tsx실행 테스트
  // throw new Error("my error");

  const cloneDummyPlayList = [...dummyPlaylistArray];
  return (
    <PagePadding>
      <div className="min-h-[600px] h-[1200px]">
        <div className="mt-9">
          {/* 페이지 에서만 사용하므로 공통 컴포넌트로 만들지 않는다. */}
          <Category />
          <div className="mt-12"></div>
          {/* TODO Carousel */}
          <PlayListCarousel
            playListArray={[...cloneDummyPlayList]}
            thumnail={
              <div className="w-[56px] h-[56px]">
                <UserIcon />
              </div>
            }
            title="다시 듣기"
            subtitle="도도"
          />
        </div>
      </div>
    </PagePadding>
  );
}
