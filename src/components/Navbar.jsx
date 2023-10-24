import Link from "next/link";
import React from "react";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-primary">
      <div className="flex md:flex-row flex-col gap-2 justify-between p-4 md:items-center">
        <Link href="/" className="text-2xl font-bold text-secondary">
          ANIMEPEDIA
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
