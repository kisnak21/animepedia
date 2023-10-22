import Link from "next/link";
import React from "react";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div
      className="flex justify-between items-center
      p-4"
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      <Link
        href={linkHref}
        className="md:text-xl text-sm underline hover:text-blue-600 hover:transition-all cursor-pointer"
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default Header;
