import { iconMap } from "@/constants/categoryIcon";
import { PATHS } from "@/constants/path";
import { useCommonNavigate } from "@/contexts/HandleNavigate";
import React from "react";

function CategorySectionCard({ category }) {
  const Icon = iconMap[category.id];
  const navigate = useCommonNavigate();
  return (
    <div
      className="hover:bg-primary active:bg-primary flex min-w-fit transform cursor-pointer items-center gap-x-3 rounded-lg px-4 py-3 text-gray-700 shadow-sm duration-200 hover:scale-105 hover:text-white hover:shadow-lg"
      onClick={() => navigate(`${PATHS.PRODUCT}?danh-muc=${category.slug}`)}
    >
      <Icon />
      <h1 className="line-clamp-1 text-sm font-medium">{category.name}</h1>
    </div>
  );
}

export default CategorySectionCard;
