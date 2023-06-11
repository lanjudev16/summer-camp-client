import React, { useState } from "react";
import { set } from "react-hook-form";
import gallery1_1 from "../../../../public/gallery1_1.png";
import gallery1_2 from "../../../../public/gallery1_2.png";
import gallery1_3 from "../../../../public/gallery1_3.png";
import gallery2_1 from "../../../../public/gallery2_1.png";
import gallery2_2 from "../../../../public/gallery2_2.png";
import gallery2_3 from "../../../../public/gallery2_3.png";
import { FaArrowCircleRight } from "react-icons/fa";
const RealWedding = () => {
  const [image, setImage] = useState(gallery1_1);
  const [image2, setImage2] = useState(gallery1_2);
  const [image3, setImage3] = useState(gallery1_3);
  return (
    <div className="">
      <div className="py-5 lg:px-[36px] ">
        <h3 className="text-4xl mb-2 text-[#4C696D] font-bold">Real Wedding</h3>
        <h4 className="text-xl font-light text-[#0C0C0C]">
          List your wedding and browse portfolio
        </h4>
      </div>
      <div className="lg:mx-[72px]   grid lg:grid-cols-3 gap-5">
        <div className="card bg-[#DDF8F3]  shadow gallery-shadow p-2 lg:my-5">
          <img src={image} alt="" />
          <div className="grid grid-cols-3 gap-1 ">
            <img
              className="w-[100%]"
              src={gallery2_1}
              onClick={() => setImage(gallery1_1)}
              alt=""
            />
            <img
              className="w-[100%]"
              src={gallery2_2}
              onClick={() => setImage(gallery1_2)}
              alt=""
            />
            <img
              className="w-[100%]"
              src={gallery2_3}
              onClick={() => setImage(gallery1_3)}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-[#4C696D] font-light text-base mt-3 mb-5">
              {" "}
              <span className="font-bold text-xl text-black">
                {" "}
                Danielle & Ronnie{" "}
              </span>{" "}
              <br /> 38 photos Kittery,Polland
            </h2>
          </div>
        </div>
        <div className="card bg-[#FBDADA] shadow gallery-shadow p-2 lg:my-5">
          <img src={image2} alt="" />
          <div className="grid grid-cols-3 gap-1 ">
            <img
              className="w-[100%]"
              src={gallery2_1}
              onClick={() => setImage2(gallery1_1)}
              alt=""
            />
            <img
              className="w-[100%]"
              src={gallery2_2}
              onClick={() => setImage2(gallery1_2)}
              alt=""
            />
            <img
              className="w-[100%]"
              src={gallery2_3}
              onClick={() => setImage2(gallery1_3)}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-[#4C696D] font-light text-base mt-3 mb-5">
              {" "}
              <span className="font-bold text-xl text-black">
                {" "}
                Danielle & Ronnie{" "}
              </span>{" "}
              <br /> 38 photos Kittery,Polland
            </h2>
          </div>
        </div>
        <div className="card bg-[#FFF9D9] shadow gallery-shadow p-2 lg:my-5">
          <img src={image3} alt="" />
          <div className="grid grid-cols-3 gap-1 ">
            <img
              className="w-[100%]"
              src={gallery2_1}
              onClick={() => setImage3(gallery1_1)}
              alt=""
            />
            <img
              className="w-[100%]"
              src={gallery2_2}
              onClick={() => setImage3(gallery1_2)}
              alt=""
            />
            <img
              className="w-[100%]"
              src={gallery2_3}
              onClick={() => setImage3(gallery1_3)}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-[#4C696D] font-light text-base mt-3 mb-5">
              {" "}
              <span className="font-bold text-xl text-black">
                {" "}
                Danielle & Ronnie{" "}
              </span>{" "}
              <br /> 38 photos Kittery,Polland
            </h2>
          </div>
        </div>
      </div>
      <div className="flex gallery-shadow cursor-pointer rounded bg-[#DDF8F3] shadow gallery-shadow px-5 py-2 items-center gap-5 w-[75%] lg:w-[25%] justify-between mx-auto mt-5">
        <button className="bg-transparent text-black lg:text-2xl font-normal" >
          View more wedding
        </button>
          <FaArrowCircleRight className="bg-transparent text-black text-2xl font-normal"></FaArrowCircleRight>
      </div>
      <hr className="bg-[#ADA3A3] h-[2px] my-[45px] mx-[36px]" />
    </div>
  );
};

export default RealWedding;
