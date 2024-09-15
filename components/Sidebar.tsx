"use client";
import React from "react";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";
const Sidebar = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex flex-row h-full">
      {/* 내비게이션 바 */}
      <nav className="w-[240px] border-r-[1px] border-neutral-600 hidden lg:block">
        {/* 로고 */}
        <div className="p-[24px]">
          <Logo isDrawer={false} onClickClose={() => {}} />
        </div>
        {/* 내비게이션 */}
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
