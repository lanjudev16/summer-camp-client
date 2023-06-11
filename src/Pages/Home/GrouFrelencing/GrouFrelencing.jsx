import React from "react";
import grouFrelancing from "../../../../public/grouFrelancing.png";
const GrouFrelencing = () => {
  return (
    <div
      div
      style={{
        backgroundImage: `url(${grouFrelancing})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="rounded mb-[36px] py-[55px] lg:py-[113px] "
    >
      <div className="grid lg:grid-cols-2 justify-center text-[20px] text-center  lg:justify-between">
        <div className="lg:pl-[71px]">
          <h2 className="lg:text-[36px] font-bold text-white">
            Grow your freelancing <br /> career with Fliqa Associate
          </h2>
          <h3 className="font-normal lg:text-[20px] text-white">
            Register yourself <br />
            Verification & Quality Check <br />
            Verified Associate at FliqaIndia
          </h3>
        </div>
        <div className="flex justify-center lg:justify-end lg:pr-[120px] mt-[10px] items-center "> 
        <button  className=" w-[217px] h-[34px] bg-white text-[#00485E] font-normal text-2xl] rounded-md">join now</button>
        </div>
      </div>
    </div>
  );
};

export default GrouFrelencing;
