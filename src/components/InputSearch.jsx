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

    if (!keyword || keyword.trim() == "") return;

    if (e.key === "Enter" || e.type === "click") {
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Search Anime & Manga"
        className="p-2 rounded-lg w-full placeholder:text-sm"
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
