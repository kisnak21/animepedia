import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-red-500">
      <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-white">
          ANIMEPEDIA
        </Link>
        <input placeholder="Search Anime" />
      </div>
    </header>
  );
};

export default Navbar;
