import React from "react";

const ServiceInfo = ({ title, desc, icon }) => {
  return (
    <div style={{ borderRadius: "100px" }} className=" p-7">
      <div>{icon}</div>
      <div>
        <h4 className="text-xl ">{title}</h4>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceInfo;
