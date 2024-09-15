// import { sleep } from "@/lib/utils";
// import Image from "next/image";
import Category from "./components/Category";

export default async function Home() {
  // error.tsx실행 테스트
  // throw new Error("my error");
  return (
    <div className="min-h-[600px] h-[1200px]">
      <div className="mt-9">
        {/* 페이지 에서만 사용하므로 공통 컴포넌트로 만들지 않는다. */}
        <Category />
      </div>
    </div>
  );
}
