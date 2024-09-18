import { getPlaylistById } from "@/lib/dummyData";
import React from "react";
import { redirect, notFound } from "next/navigation";
// import {
//   usePathname,
//   useRouter,
//   useParams,
//   useSearchParams,
// } from "next/navigation";

interface IPlayListProps {
  searchParams: {
    list: string;
  };
}

const page: React.FC<IPlayListProps> = async ({ searchParams }) => {
  // 서버 사이드 컴포넌트의 props는 params와 searchParams가 있음.
  const id = parseInt(searchParams.list); // querystring으로 전달한 값을 가져오고.
  const playlist = await getPlaylistById(id); // 플레이리스트 조회합니다.

  // 경로를 변경가능한 기능이 포함된 useRouter는 클라이언트 컴포넌트에서만 사용.
  // 서버 컴포넌트시 useRouter를 사용하지 않고 redirect를 사용함.
  if (playlist === undefined || playlist === null) {
    redirect("/"); // 사용자를 홈으로 리다이렉션할 수 있다. (서버컴포넌트용)
    // 반대로 리스트가 없으면 notFound함수도 가능
    // notFound(); // 404 페이지가 표시됩니다.
  }
  console.log(searchParams, playlist);
  return <div>PlayList :: {searchParams.list}</div>;
};

export default page;
