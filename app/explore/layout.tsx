import React from "react";
import Header from "@/components/Header";
import PagePadding from "@/components/PagePadding";
// layout의 children은 page.tsx의 컴포넌트
const layout = ({ children }: Readonly<React.PropsWithChildren>) => {
  return (
    <div className="w-full h-full">
      <Header>
        <PagePadding>{children}</PagePadding>
      </Header>
    </div>
  );
};

export default layout;
