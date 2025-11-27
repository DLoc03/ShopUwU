import React from "react";

import { categories } from "@/datas/categories.json";
import CategorySectionCard from "./CategorySectionCard";
import SliderComponent from "../common/SliderComponent";

function CategorySection() {
  return (
    <div className="mx-auto mt-16 max-w-7xl px-4 lg:px-0">
      {/* Header */}
      <h1 className="text-primary space-y-3 text-center text-3xl font-bold md:text-4xl">
        Danh mục
      </h1>
      <SliderComponent
        items={categories}
        itemWidth={"fit-content"}
        renderItem={(category) => (
          <CategorySectionCard key={category.id} category={category} />
        )}
      />
    </div>
  );
}

export default CategorySection;
