import CategorySection from "@/components/ui/CategorySection";
import HeroSection from "@/components/ui/HeroSection";
import React from "react";

function Home() {
  return (
    <div className="space-y-4">
      <HeroSection />
      <div className="mt-12">
        <CategorySection />
      </div>
    </div>
  );
}

export default Home;
