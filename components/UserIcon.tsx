import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const UserIcon = ({ size = "sm" }: { size?: string }) => {
  return (
    <Avatar
      className={cn("w-[26px] h-[26opx]", size === "lg" && "w-[56px] h-[56px]")}
    >
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserIcon;
