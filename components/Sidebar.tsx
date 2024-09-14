"use client";
import React from "react";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";
const Sidebar = ({ children }: React.PropsWithChildren) => {
  return (
    // 네비게이션바와 메인영역을 flex-row로
    <div className="flex flex-row h-full">
      {/* 
        네비게이션 바
        기본적으로 Sidebar는 PC일때만 표시한다.
        모바일에서는 shadcn/drawer를 사용하여 표시함.
      */}
      <nav className="w-[240px] border-r-[1px] border-neutral-600 hidden lg:block">
        <div className="p-[24px]">
          <Logo isDrawer={false} onClickClose={() => {}} />
        </div>
        <div className="">
          <Navigator />
        </div>
      </nav>
      {/* 메인 콘텐츠 */}
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Sidebar;
