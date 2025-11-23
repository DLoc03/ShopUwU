import { PATHS } from "@/constants/path";
import { useCommonNavigate } from "@/contexts/HandleNavigate";
import { Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import IconButton from "./IconButton";

function SearchBar({ onSearch, className }) {
  const navigate = useCommonNavigate();
  const [keyword, setKeyword] = useState("");
  const inputRef = useRef();
  const [placeholder, setPlaceholder] = useState("Tìm kiếm pokemon,...");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!keyword) {
      inputRef.current.focus();
      setPlaceholder("Vui lòng nhập từ khoá");
    } else {
      navigate(`${PATHS.PRODUCT}?tim-kiem=${keyword}`);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`${className} flex items-center px-4 py-2`}
    >
      <input
        placeholder={placeholder}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="w-full px-3 py-2 text-gray-500 outline-0"
        ref={inputRef}
      />
      <IconButton onClick={handleSubmit}>
        <Search />
      </IconButton>
    </form>
  );
}

export default SearchBar;
