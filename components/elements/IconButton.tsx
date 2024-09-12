import React from "react";

const IconButton = ({
  icon,
  onClickIcon,
}: {
  icon: React.ReactNode;
  onClickIcon: () => void;
}) => {
  return (
    <div>
      <div
        className="flex justify-center items-center w-[36px] h-[36px] hover:bg-[rgba(144,144,144,0.45)] rounded-full cursor-pointer"
        onClick={onClickIcon}
      >
        {/* 햄버거 아이콘의 경우 react-icons에서 사용한다. */}
        {icon}
      </div>
    </div>
  );
};

export default IconButton;
