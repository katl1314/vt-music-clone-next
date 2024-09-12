"use client";
import { usePathname, useSearchParams } from "next/navigation";
import React, { ReactNode, useMemo } from "react";
import { GoHome } from "react-icons/go";
import { FiCompass, FiPlus, FiMusic } from "react-icons/fi";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navigator = () => {
  const pathname = usePathname(); // 현재 경로의 pathname을 가져온다.
  const routes = useMemo(() => {
    return [
      { icon: <GoHome size={20} />, label: "홈", isActive: false, href: "/" },
      {
        icon: <FiCompass size={20} />,
        label: "둘러보기",
        isActive: pathname === "/explor",
        href: "/explor",
      },
      {
        icon: <FiMusic size={20} />,
        label: "보관함",
        isActive: pathname === "/library",
        href: "/library",
      },
    ];
  }, [pathname]); // pathname이 변경될때 usememo콜백 실행
  return (
    <div>
      <section className="flex flex-col gap-2 p-4 ">
        {/* 동일한 컴포넌트로 반복하는 겨우 key를 사용해야함. */}
        {/* tailwind css은 tailwind-merge를 사용하여 클래스를 병합할 수 있다. */}
        {routes.map(
          ({
            icon,
            href,
            label,
            isActive,
          }: {
            icon: React.JSX.Element;
            label: string;
            isActive: boolean;
            href: string;
          }) => {
            return (
              <Link href={href} key={label}>
                <div
                  className={cn(
                    "flex flex-row items-center gap-4 text-[16px] hover:bg-[rgba(144,144,144,0.45)] rounded-lg p-2",
                    isActive && "bg-neutral-80"
                  )}
                >
                  {icon}
                  <div>{label}</div>
                </div>
              </Link>
            );
          }
        )}
      </section>
      <section className="p-6">
        {/* 구분자 */}
        <div className="w-full h-[1px] bg-neutral-700"></div>
      </section>
      <section className="p-6">
        <div className="flex flex-row items-center bg-neutral-700 p-2 rounded-3xl font-[200] justify-center gap-2">
          {/* 재생목록 */}
          <FiPlus size={24} />
          <span>새 재생목록</span>
        </div>
      </section>
    </div>
  );
};

export default Navigator;

// 클라이언트 렌더링에서 사용할 수 있는 next.js 훅
// 1. useRouter
// 2. useParams
// 3. usePathnames,
// 4. useSearchParams
