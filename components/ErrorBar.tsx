"use client";

import React from "react";
import { GridLoader } from "react-spinners";

const ErrorBar = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <GridLoader color="red" />
      <h2>Oop!</h2>
      <div>잠시 후 다시 확인해주세요...</div>
    </div>
  );
};

export default ErrorBar;
