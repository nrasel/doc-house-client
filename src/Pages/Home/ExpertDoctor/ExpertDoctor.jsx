import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React, { useEffect, useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import expertdoct1 from "../../../assets/expertdoct1.png";
import SectionTitle from "../SectionTitle/SectionTitle";

const ExpertDoctor = () => {
  const [review, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <>
      <SectionTitle
        heading="Our Expert Doctors"
        subHeading="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      />
      <div className="my-16">
        <div className="card card-compact bg-base-100 w-96 border border-[#F7A582] shadow-xl">
          <figure>
            <img className="mt-7" src={expertdoct1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Karyen Anderson</h2>
            <p>BTP - Senior Physiotherapist</p>
          </div>
          <div className="m-3">
            <Rating style={{ maxWidth: 120 }} value={review.rating} readonly />
          </div>
          <div className="divider"></div>
          <div className="m-3">
            <p className="flex">
              <span>
                <IoLocationOutline className="text-xl mr-2" />
              </span>
              <span className="text-sm">Dhanmondi, Dhaka, Bangladesh</span>
            </p>
            <p className="flex my-2">
              <span>
                <MdDateRange className="text-xl mr-2" />
              </span>
              <span className="text-sm">Available On Mon, 22 December</span>
            </p>
            <p className="flex">
              <span>
                <AiOutlineDollar className="text-xl mr-2" />
              </span>
              <span className="text-sm">$15</span>
            </p>
          </div>
          <div className="card-actions justify-end mt-3">
            <button className="btn w-[90%] m-auto mb-3 text-white bg-[#F7A582]">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertDoctor;
