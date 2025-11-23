import POKEMONS from "@/constants/pokemon";
import React from "react";
import Button from "../common/Button";
import { ShoppingCart } from "lucide-react";
import { useCommonNavigate } from "@/contexts/HandleNavigate";
import { PATHS } from "@/constants/path";
import SearchBar from "../common/SearchBar";

function HeroSection() {
  const navigate = useCommonNavigate();
  return (
    <div className="bg-primary relative flex h-80 w-full items-end rounded-b-4xl md:h-100 lg:h-130 lg:items-center">
      <div className="flex flex-1 flex-col gap-y-3 px-4 py-20 text-white md:px-20 md:py-20 lg:py-0">
        <h1 className="font-slay text-xl font-bold text-shadow-2xs md:text-4xl lg:text-6xl">
          Thế giới Pokémon bằng len tại Chedi Shop
        </h1>
        <p className="text-md hidden font-light lg:inline-block">
          Chedi Shop chuyên nhận đan len Pokémon theo yêu cầu, từng sản phẩm đều
          được làm thủ công tỉ mỉ, mềm mịn và lên form chuẩn như mẫu. Bạn chỉ
          cần gửi hình nhân vật yêu thích, chúng mình sẽ đan lại bằng len siêu
          xinh, an toàn và bền đẹp. Phù hợp để trang trí, sưu tầm hoặc làm quà
          tặng độc đáo cho bạn bè và người thân.
        </p>
        <Button
          label={"Đặt hàng ngay"}
          className={
            "hover:text-primary w-fit rounded-full border-2 border-white px-6 py-2 text-sm hover:bg-white md:mt-3"
          }
          onClick={() => navigate(PATHS.PRODUCT)}
        >
          <ShoppingCart />
        </Button>
      </div>
      <div className="relative h-full flex-1 overflow-hidden">
        <img
          src={POKEMONS["pikachu"]}
          alt="pikachu"
          className="absolute -top-40 left-0 h-160 object-contain md:-top-20 lg:top-0"
        />
      </div>
      <SearchBar
        className={
          "absolute -bottom-6 left-1/2 w-[80%] max-w-5xl -translate-x-1/2 rounded-full bg-white shadow-sm md:w-[70%]"
        }
      />
    </div>
  );
}

export default HeroSection;
