import React from "react";
import {
  usePathname,
  useRouter,
  useParams,
  useSearchParams,
} from "next/navigation";

// searchParams는 url에 searchParam(query string)가 있을때 값을 key, value로 가져올 수 있다.
// ex) /playlist?list=10 => searchParams { list : 10 }
const page = (props: { searchParams: { list: number } }) => {
  return <div>PlayList :: {props.searchParams.list}</div>;
};

export default page;

/**
 * next/navigation 훅 제공
 * useRouter : 클라이언트 컴포넌트용으로 URL을 프로그래밍적으로 동적 변경 가능 => BOM History API
 * usePathname : 클라이언트 컴포넌트용으로 URL 경로명을 반환합니다.
 * useSearchParams : 클라이언트 컴포넌트용으로 쿼리스트링 반환
 * useParams : 클라이언트 컴포넌트용으로 URL 동적 세그먼트 반환합니다. (동적 경로)
 *
 * 즉 위 4개의 훅은 next.js13이후에 사용할 수 있으나, 클라이언트 컴포넌트에서만 사용가능 'use client'반드시 사용해야함.
 * 하지만 서버 컴포넌트로 사용할 때 함수 인자에 가져올 수 있음. 동적 세그먼트 및 searchParams....
 */
