import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

function SliderComponent({ items, renderItem, itemWidth = 200, className }) {
  const slideRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const buttonStyle =
    "min-h-[80px] rounded-md top-1/2 -translate-y-1/2 z-10 cursor-pointer active:bg-black/30 absolute bg-black text-white hover:bg-black/30";

  const handleClick = (direction) => {
    if (!slideRef.current) return;
    const amount = direction === "next" ? 200 : -200;
    slideRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = slideRef.current;
    if (!el) return;

    const checkPosition = () => {
      setIsAtStart(el.scrollLeft === 0);
      setIsAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    };

    el.addEventListener("scroll", checkPosition);
    checkPosition();

    return () => el.removeEventListener("scroll", checkPosition);
  }, []);

  return (
    <div className={`${className} relative w-full`}>
      {/* Button Next/Prev */}
      {!isAtStart && (
        <button
          className={`${buttonStyle} left-0`}
          onClick={() => handleClick("prev")}
        >
          <ChevronLeft />
        </button>
      )}
      {!isAtEnd && (
        <button
          className={`${buttonStyle} right-0`}
          onClick={() => handleClick("next")}
        >
          <ChevronRight />
        </button>
      )}
      {/* Slider */}
      <div className={`w-full ${!isAtStart && "pl-10"} ${!isAtEnd && "pr-10"}`}>
        <div
          ref={slideRef}
          className={`no-scrollbar flex shrink-0 items-start justify-center gap-4 overflow-x-auto scroll-smooth px-2 py-4`}
        >
          {items.map((item, index) => (
            <div key={index} style={{ width: itemWidth }} className="shrink-0">
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SliderComponent;
