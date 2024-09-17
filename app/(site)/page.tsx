import Category from "./components/Category";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray, getPlaylistById } from "@/lib/dummyData";
import UserIcon from "@/components/UserIcon";

export default async function Home() {
  // error.tsx실행 테스트
  // throw new Error("my error");

  const cloneDummyPlayList1 = [...dummyPlaylistArray];
  const cloneDummyPlayList2 = [await getPlaylistById(1)];
  const cloneDummyPlayList3 = [await getPlaylistById(2)];
  const cloneDummyPlayList4 = [await getPlaylistById(3)];
  return (
    <>
      <div className="min-h-[600px]">
        <div className="mt-9">
          {/* 페이지 에서만 사용하므로 공통 컴포넌트로 만들지 않는다. */}
          <Category />
          <div className="mt-12"></div>
          {/* TODO Carousel */}
          <PlayListCarousel
            playListArray={[...cloneDummyPlayList1]}
            thumbnail={
              <div className="w-[56px] h-[56px]">
                <UserIcon size="lg" />
              </div>
            }
            title="다시 듣기"
            subtitle="도도"
          />
          <div className="mt-20"></div>
          <PlayListCarousel
            playListArray={[...cloneDummyPlayList2]}
            title="케이시 - Full Bloom"
            subtitle="새로운 앨범"
          />
          <div className="mt-20"></div>
          <PlayListCarousel
            playListArray={[...cloneDummyPlayList3]}
            title="커뮤니티 제공"
          />
          <div className="mt-20"></div>
          <PlayListCarousel
            playListArray={[...cloneDummyPlayList4]}
            title="커버 및 리믹스"
          />
        </div>
      </div>
    </>
  );
}
