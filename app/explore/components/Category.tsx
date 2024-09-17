import React from "react";
import { FiMusic, FiBarChart, FiSmile } from "react-icons/fi";

interface ICategoryMenu {
  icon: React.ReactNode;
  label: string;
}

const CategoryMenu: React.FC<ICategoryMenu> = ({ icon, label }) => {
  return (
    <div className="w-full h-[56px] py-4 px-[24px] flex flex-row items-center gap-4 bg-neutral-700 text-[20px] cursor-pointer rounded-sm hover:bg-neutral-800 transition-colors duration-100">
      {icon}
      {label}
    </div>
  );
};

const Category = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <CategoryMenu icon={<FiMusic color="#AAAAAA" />} label="최신음악" />
      <CategoryMenu icon={<FiBarChart color="#AAAAAA" />} label="차트" />
      <CategoryMenu icon={<FiSmile color="#AAAAAA" />} label="분위기 및 장르" />
    </div>
  );
};

export default Category;
