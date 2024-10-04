import React from "react";

const ServiceDetails = ({
  serviceImg,
  cravityTitle,
  serviceDesc,
  cravityBtn,
}) => {
  return (
    <div>
      <img className="w-[40%] rounded" src={serviceImg} alt="" />
      <h1 className="text-3xl mt-3">{cravityTitle}</h1>
      <p className="text-xl my-3">{serviceDesc}</p>
      <button className="btn btn-outline">{cravityBtn}</button>
    </div>
  );
};

export default ServiceDetails;
