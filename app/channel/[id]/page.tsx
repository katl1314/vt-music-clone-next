import React from "react";
import {} from "next";

// 서버 컴포넌트는 서버에서 렌더링을 하기 때문에 클라이언트에서 확인 불가
// 서버내 터미널에서 확인 필요
const page = (props: { params: { id: number }; searchParams: object }) => {
  // channel/2 => { params : { id : 2 }, searchParams: {} }
  // params는 next/navigation의 useParams와 비슷한 기능으로 동적 세그먼트를 얻을 수 있다.
  console.log(props); // 1
  return <div>channel/{props.params.id}</div>;
};

export default page;
