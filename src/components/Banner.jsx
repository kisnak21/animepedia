import React from "react";

const Banner = ({ title }) => {
  return (
    <div>
      <div className="p-6">
        <h4 className="text-3xl font-bold text-secondary text-center hover:text-primary transition-all">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default Banner;
