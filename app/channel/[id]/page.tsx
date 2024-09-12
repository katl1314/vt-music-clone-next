import React from "react";
import {} from "next";

// 서버 컴포넌트는 서버에서 렌더링을 하기 때문에 클라이언트에서 확인 불가
// 서버내 터미널에서 확인 필요
const page = (props: { params: object; searchParams: object }) => {
  console.log(props); // 1
  return <div>channel/[id]</div>;
};

export default page;
