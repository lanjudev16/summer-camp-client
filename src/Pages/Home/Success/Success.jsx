import React from "react";
import background from "../../../../public/Success/background.png";
import image1 from "../../../../public/Success/image1.png";
import image2 from "../../../../public/Success/image2.png";
import image3 from "../../../../public/Success/image3.png";
import image4 from "../../../../public/Success/image4.png";
import image5 from "../../../../public/Success/image5.png";
const Success = () => {
  return (
    <div className="bg-[#ACCBC7] my-[29px] mx-[36px]">
      <h2 className="pt-[26px] pb-[6px] text-center text-3xl font-bold text-[#4C696D]">
        Our Success
      </h2>
      <h3 className="text-center text-[20px] text-[#000000] font-normal pb-[29px]">
        Journey of our success.
      </h3>
      <div className="grid lg:grid-cols-5 mx-[36px] pb-[70px] gap-5 items-center">
        <div className="flex items-center flex-col">
          <div className="bg-white h-[180px] w-[180px] rounded-[50%] flex items-center justify-center">
            <img className="max-h-[100%]" src={image1} alt="" />
          </div>
          <h4 className="text-center mt-[11px] text-[#000000] font-bold text-[13px]">
            Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup
            India.
          </h4>
        </div>
        <div className="flex items-center">
          <div className="flex items-center flex-col">
            <div className="bg-white h-[180px] w-[180px] rounded-[50%] flex items-center justify-center">
              <img src={image2} alt="" />
            </div>
            <h4 className="text-center mt-[11px] text-[#000000] font-bold text-[13px]">
              Back in 2019, FliqaIndia recognize as a startup with DPIT in
              Startup India.
            </h4>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <div className="bg-white h-[180px] w-[180px] rounded-[50%] flex items-center justify-center">
            <img className="max-h-[100%]" src={image3} alt="" />
          </div>
          <h4 className="text-center mt-[11px] text-[#000000] font-bold text-[13px]">
            Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup
            India.
          </h4>
        </div>
        <div className="flex items-center flex-col">
          <div className="bg-white h-[180px] w-[180px] rounded-[50%] flex items-center justify-center">
            <img className="max-h-[100%]" src={image4} alt="" />
          </div>
          <h4 className="text-center mt-[11px] text-[#000000] font-bold text-[13px]">
            Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup
            India.
          </h4>
        </div>
        <div className="flex items-center flex-col">
          <div className="bg-white h-[180px] w-[180px] rounded-[50%] flex items-center justify-center">
            <img className="max-h-[100%]" src={image5} alt="" />
          </div>
          <h4 className="text-center mt-[11px] text-[#000000] font-bold text-[13px]">
            Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup
            India.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Success;
