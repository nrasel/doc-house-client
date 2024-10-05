import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Ellipse from "../../../assets/Ellipse.png";
import awlad from "../../../assets/awlad.png";
import SectionTitle from "../SectionTitle/SectionTitle";

const PatientSays = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    gap: 2,
  };
  return (
    <>
      <SectionTitle
        heading="What Our Patients Says"
        subHeading="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      />
      <div className="w-[70%] m-auto my-10">
        <Slider {...settings}>
          <div className=" rounded-md ml-4 p-5">
            <div className="flex gap-3 items-center ">
              <div>
                <img src={awlad} alt="" />
              </div>
              <div>
                <h3 className="text-xl"> Awlad Hossain </h3>
                <p className="text-sm">Product Designer</p>
              </div>
            </div>
            <p className="text-sm">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknow printer tool a galley of type and
              scrambled it to make type specimen book has survived not only five
              centurines.
            </p>
          </div>
          <div className=" rounded-md p-5">
            <div className="flex gap-3 items-center">
              <div>
                <img src={Ellipse} alt="" />
              </div>
              <div>
                <h3 className="text-xl"> Awlad Hossain </h3>
                <p className="text-sm">Product Designer</p>
              </div>
            </div>
            <p className="text-sm">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknow printer tool a galley of type and
              scrambled it to make type specimen book has survived not only five
              centurines.
            </p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default PatientSays;
