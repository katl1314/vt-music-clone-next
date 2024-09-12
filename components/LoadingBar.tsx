"use client";

import React from "react";
import { BarLoader } from "react-spinners";

const LoadingBar = () => {
  return (
    <div className="w-full h-full flex justify-center">
      {/* BarLoader가 useState를 통해 상태값을 관리하기 때문에 */}
      <BarLoader color="red" cssOverride={{ width: "100%" }} />
    </div>
  );
};

export default LoadingBar;
