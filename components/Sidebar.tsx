import React from "react";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";
const Sidebar = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex flex-row h-full">
      {/* 네비게이션 바 */}
      <nav className="w-[240px] border-r-[1px] border-neutral-600">
        <div className="p-[24px]">
          <Logo />
        </div>
        <div className="">
          <Navigator />
        </div>
      </nav>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Sidebar;
