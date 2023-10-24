"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = searchRef.current.value;

    if (!keyword) return;

    if (e.key === "Enter" || e.type === "click") {
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Search Anime"
        className="p-2 rounded-lg w-full"
        ref={searchRef}
        onKeyUp={handleSearch}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <BsSearch size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
