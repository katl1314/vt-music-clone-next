"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../../../components/ui/button";
import { RxTriangleDown } from "react-icons/rx";

enum Condition {
  RECENTACTIVED = "recentActived",
  RECENTSAVED = "recentSaved",
  RECENTPLAYED = "recentPlayed",
}

const Dropdown = () => {
  const [condition, setCondition] = useState<Condition>(
    Condition.RECENTACTIVED
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex flex-row gap-4 rounded-full">
          {condition === Condition.RECENTACTIVED ? (
            <div>최근 활동</div>
          ) : condition === Condition.RECENTSAVED ? (
            <div>최근에 저장됨</div>
          ) : (
            <div>최근 재생한 음악</div>
          )}
          <RxTriangleDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px] bg-neutral-800" align="end">
        <DropdownMenuLabel>정렬 기준</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-neutral-700" />
        <DropdownMenuRadioGroup
          value={condition}
          onValueChange={(value) => {
            setCondition(value as Condition);
          }}
        >
          <DropdownMenuRadioItem value={Condition.RECENTACTIVED}>
            최근 활동
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={Condition.RECENTSAVED}>
            최근에 저장됨
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={Condition.RECENTPLAYED}>
            최근 재생한 음악
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
