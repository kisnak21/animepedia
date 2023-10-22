import Link from "next/link";
import React from "react";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-red-500">
      <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-white">
          ANIMEPEDIA
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
