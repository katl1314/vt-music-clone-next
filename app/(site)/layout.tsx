import React from "react";

// layout의 children은 page.tsx의 컴포넌트
const layout = ({ children }: Readonly<React.PropsWithChildren>) => {
  return <div>{children}</div>;
};

export default layout;
