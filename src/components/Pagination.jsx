import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const ScrollPage = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleNextPage = () => {
    if (page < lastPage) {
      setPage(page + 1);
      ScrollPage();
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      ScrollPage();
    }
  };
  return (
    <div className="flex items-center justify-center gap-4 text-secondary p-4 text-xl">
      <button
        className="text-secondary hover:text-primary transition-all"
        onClick={handlePrevPage}
      >
        Prev
      </button>
      <p className="text-secondary hover:text-primary transition-all">
        {page} of {lastPage}
      </p>
      <button
        className="text-secondary hover:text-primary transition-all"
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
