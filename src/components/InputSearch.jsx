"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = () => {
    const keyword = searchRef.current.value;
    router.push(`/search/${keyword}`);
  };

  const handlePress = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Search Anime"
        className="p-2 rounded-lg w-full"
        ref={searchRef}
        onKeyUp={handlePress}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <BsSearch size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
