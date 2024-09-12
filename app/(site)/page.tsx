import { sleep } from "@/lib/utils";
import Image from "next/image";

export default async function Home() {
  await sleep(2000); // 2초 뒤에 컴포넌트를 실행한다.

  // error.tsx실행 테스트
  // throw new Error("my error");

  return <div>Home</div>;
}
