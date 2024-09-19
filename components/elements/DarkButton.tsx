"use client";
import { cn } from "@/lib/utils";
import { IButton } from "@/types";
import React, { FC } from "react";

interface IElement extends IButton {
  className?: string;
}
const DarkButton: FC<IElement> = ({
  label,
  icon,
  onClickButton,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex flex-row gap-2 rounded-2xl border-1 bg-neutral-800 text-white items-center justify-center min-w-[80px] h-[36px] p-2 cursor-pointer hover:bg-neutral-700 border-neutral-700",
        className
      )}
      {...props}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default DarkButton;
