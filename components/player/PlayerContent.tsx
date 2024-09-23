import React from "react";
import { Slider as PlayerSlider } from "@/components/ui/slider";
const PlayerContent = () => {
  return (
    <div className="h-full w-full relative">
      <div className="absolute top-[-16px] w-full">
        <PlayerSlider defaultValue={[1]} max={100} step={1} />
      </div>
    </div>
  );
};

export default PlayerContent;
