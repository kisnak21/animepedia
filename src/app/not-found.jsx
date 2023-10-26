"use client";
import Link from "next/link";
import React from "react";

const NotfoundPage = () => {
  return (
    <>
      <div className="w-4/5 mx-auto mt-20 flex flex-col justify-center items-center space-y-4">
        <h1 className="text-4xl font-semibold text-primary">
          404 - Page Not Found
        </h1>
        <h4 className="py-10 text-lg text-red-500 font-semibold capitalize">
          The Nothingness and Emptiness is here...
        </h4>

        <div className="space-x-4 text-secondary">
          <Link
            className="underline text-blue-600 hover:text-red-500 duration-300 "
            href="/"
          >
            Homepage
          </Link>
          <Link
            className="underline text-blue-600 hover:text-red-500 duration-300"
            href="/anime/popular"
          >
            Popular Anime
          </Link>
          <Link
            className="underline text-blue-600 hover:text-red-500 duration-300"
            href="https://github.com/kisnak21"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotfoundPage;
