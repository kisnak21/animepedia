import Link from "next/link";
import React from "react";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div
      className="flex justify-between items-center
      p-4"
    >
      <h1 className="text-2xl font-bold text-secondary">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-sm underline hover:text-primary hover:transition-all cursor-pointer text-secondary"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
