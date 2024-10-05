import React from "react";
import { CiLocationOn, CiStopwatch } from "react-icons/ci";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import cravityDen from "../../assets/CosmeticDentisty.jpg";
import cavityImg from "../../assets/cravity.png";
import oralDen from "../../assets/oral.jpg";
import serviceImg from "../../assets/service.png";
import ServiceDetails from "../Home/ServiceDetails/ServiceDetails";
import ServiceInfo from "../Home/ServiceInfo/ServiceInfo";

const Service = () => {
  return (
    <>
      <div className="flex justify-start items-center my-20">
        <div className="w-[40%]">
          <img src={serviceImg} alt="" />
        </div>
        <div className="w-[70%]">
          <Tabs>
            <TabList>
              <Tab>Cavity Protection</Tab>
              <Tab>Cosmetic Dentisty</Tab>
              <Tab>Oral Surgery</Tab>
            </TabList>

            <TabPanel>
              <ServiceDetails
                serviceImg={cavityImg}
                cravityTitle="Electro Gastrology Therepy"
                serviceDesc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error 
               Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                cravityBtn="More Details"
              />
            </TabPanel>
            <TabPanel>
              <ServiceDetails
                serviceImg={cravityDen}
                cravityTitle="Gum Contouring"
                serviceDesc="Cosmetic dentistry offers solutions for people who are unhappy with their smile, giving them the ability to achieve a radiant and aesthetically pleasing appearance. Whether through minor enhancements or comprehensive smile makeovers, these treatments aim to create natural, attractive, and confident smiles."
                cravityBtn="More Details"
              />
            </TabPanel>
            <TabPanel>
              <ServiceDetails
                serviceImg={oralDen}
                cravityTitle="Wisdom Teeth Removal"
                serviceDesc="Cosmetic dentistry offers solutions for people who are unhappy with their smile, giving them the ability to achieve a radiant and aesthetically pleasing appearance. Whether through minor enhancements or comprehensive smile makeovers, these treatments aim to create natural, attractive, and confident smiles."
                cravityBtn="More Details"
              />
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <div className="flex gap-8 text-white justify-center items-center my-10">
        <div className="bg-[#07332F] rounded-lg">
          <ServiceInfo
            icon={<CiStopwatch />}
            title="Opening Hours"
            desc="Open 9.00 am to 5.oopm Everyday"
          />
        </div>
        <div className="bg-[#F7A582] rounded-lg">
          <ServiceInfo
            icon={<CiLocationOn />}
            title="Opening Hours"
            desc="Open 9.00 am to 5.oopm Everyday"
          />
        </div>
        <div className="bg-[#07332F] rounded-lg">
          <ServiceInfo
            icon={<MdOutlinePhoneCallback />}
            title="Opening Hours"
            desc="Open 9.00 am to 5.oopm Everyday"
          />
        </div>
      </div>
    </>
  );
};

export default Service;
