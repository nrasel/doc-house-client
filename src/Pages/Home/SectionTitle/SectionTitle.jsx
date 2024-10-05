import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mt-10">
      <h2 className="text-5xl">{heading}</h2>
      <p className="text-sm w-[50%] mt-3 m-auto">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
