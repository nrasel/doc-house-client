import React from "react";
import bannerImg from "../../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="flex  my-8">
      <div>
        <h1 className="text-6xl text-white">
          Your Best Medical <br /> Help Center
        </h1>
        <p className="text-xl mt-3 text-white pr-10">
          The Doctor's Portal website serves as a central hub for medical
          professionals and patients to manage healthcare services efficiently.
          It is designed with user-friendly navigation, ensuring that both
          doctors and patients can easily access the tools and information they
          need.
        </p>
      </div>
      <div className="rounded-sm w-[90%] ">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
