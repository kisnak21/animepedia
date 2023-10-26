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
        <nav>
          <ul className="flex space-x-4 text-secondary text-lg">
            <li className="hover:text-dark transition-all">
              <Link href="/">Anime</Link>
            </li>
            <li className="hover:text-dark transition-all">
              <Link href="/manga">Manga</Link>
            </li>
            <li className="hover:text-dark transition-all">
              <Link href="/upcoming">Upcoming</Link>
            </li>
            <li className="hover:text-dark transition-all">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
