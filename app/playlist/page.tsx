import React from "react";

// searchParams는 url에 searchParam(query string)가 있을때 값을 key, value로 가져올 수 있다.
// ex) /playlist?list=10 => searchParams { list : 10 }
const page = (props: { searchParams: { list: number } }) => {
  console.log(props.searchParams.list);
  return <div>PlayList :: {props.searchParams.list}</div>;
};

export default page;
