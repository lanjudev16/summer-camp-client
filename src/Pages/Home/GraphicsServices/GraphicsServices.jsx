import React from "react";
import background from "../../../../public/writing.png";
import popular1 from "../../../../public/popular1.png";
import popular2 from "../../../../public/popular2.png";
import popular3 from "../../../../public/popular3.png";
import popular4 from "../../../../public/popular4.png";
import { FaSearch, FaServer } from "react-icons/fa";
import "./GraphicsServices.css";
const GraphicsServices = () => {
  return (
    <div className="lg:mx-[36px]">
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="pt-[73px] "
      >
        <div className="grid lg:grid-cols-3 p-5">
          <div className="col-span-1">
            <h1 className="text-[#FFFFFF] font-bold text-[30px] px-[36px] uppercase">
              <span className="text-[#FFFFFF] font-normal ">Discover</span>
              <br /> Graphic Design Ideas <br />
              and services{" "}
            </h1>
            <h2 className="text-[25px] font-normal text-white px-[36px]">
              From branding to marketing
            </h2>
            <div className="text-center mb-[53px]  mx-[36px] relative mt-9">
              <span className="absolute top-[50%] translate-y-[-50%] left-[2%] text-black ">
                <FaSearch></FaSearch>
              </span>
              <input
                className=" text-[#000000] border-[#000000] border-[1px]   text-start focus:outline-none w-[100%] h-[51px] rounded-3xl text-[12px] pl-6"
                type="text"
                name=""
                placeholder="what kind of design you are looking for?"
                id=""
              />
              <button className="bg-[#000000] text-[#FFF] absolute right-0 top-0 text-[20px] font-normal w-[120px] h-[51px] rounded-3xl">
                Search
              </button>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-1 col-span-2 gap-5">
            <div className="relative">
              <span className="absolute top-[50px] left-[50%] translate-x-[-50%] rounded   w-[68px] h-[22px] bg-slate-300 shadow-md"></span>
              <span className="absolute top-[-73px]  left-[50%] translate-x-[-50%]   w-[1px] h-[125px] bg-slate-300"></span>
              <img
                className="  w-[100%]  image1 lg:mt-[45px] "
                src={popular1}
                alt=""
              />
            </div>
            <div className="relative">
              <span className="absolute top-[5px] left-[50%] translate-x-[-50%] rounded   w-[68px] h-[22px] bg-slate-300 shadow-md"></span>
              <span className="absolute top-[-73px]  left-[50%] translate-x-[-50%]   w-[1px] h-[95px] bg-slate-300"></span>
              <img className="  w-[100%]  image1  " src={popular2} alt="" />
            </div>
            <div className="relative">
              <span className="absolute top-[35px] left-[50%] translate-x-[-50%] rounded   w-[68px] h-[22px] bg-slate-300 shadow-md"></span>
              <span className="absolute top-[-73px]  left-[50%] translate-x-[-50%]   w-[1px] h-[120px] bg-slate-300"></span>
              <img
                className="  w-[100%]  image1 lg:mt-[30px] "
                src={popular3}
                alt=""
              />
            </div>
            <div className="relative">
              <span className="absolute top-[15px] left-[50%] translate-x-[-50%] rounded   w-[68px] h-[22px] bg-slate-300 shadow-md"></span>
              <span className="absolute top-[-73px]  left-[50%] translate-x-[-50%]   w-[1px] h-[95px] bg-slate-300"></span>
              <img
                className="  w-[100%]  image1  lg:mt-[10px]"
                src={popular4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[43px] mx-[36px]">
        <h1 className="text-center text-[36px] font-normal">
          <span className="text-black font-normal text-[40px]">Popular:</span>{" "}
          Website Design Logo Design Brochure Label Design
        </h1>
        <hr className="my-[40px] bg-[#ADA3A3]  h-[2px] " />
      </div>
    </div>
  );
};

export default GraphicsServices;
