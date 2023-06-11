import React from "react";
import background from "../../../../public/background.png";
import award from "../../../../public/award.png";
import image1 from "../../../../public/FeedBack/image1.png";
import image2 from "../../../../public/FeedBack/image2.png";
import image3 from "../../../../public/FeedBack/image3.png";
import image4 from "../../../../public/FeedBack/image4.png";
import image5 from "../../../../public/FeedBack/image5.png";
import image6 from "../../../../public/FeedBack/image6.png";
import './CoupleChoice.css'
const CoupleChoice = () => {
  return (
    <div
      className="lg:p-[65px] p-5 mx-[36px]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="grid lg:grid-cols-2 gap-5 items-center ">
        <img className="" src={award} alt="" />
        <div className="grid lg:grid-cols-2 gap-5 ">
          <div className="bg-white shadow flex  items-center justify-between">
            <div className="">
              <img className="min-w-[100%] " src={image1} alt="" />
            </div>
            <h1 className="text-[#000000] font-normal text-[20px] pr-[20px]">4.9/5</h1>
          </div>
          <div className="bg-white shadow flex  items-center justify-between">
            <div className="">
              <img className="min-w-[100%] " src={image2} alt="" />
            </div>
            <h1 className="text-[#000000] font-normal text-[20px] pr-[20px]">4.9/5</h1>
          </div>
          <div className="bg-white shadow flex  items-center justify-between">
            <div className="">
              <img className="min-w-[100%] " src={image3} alt="" />
            </div>
            <h1 className="text-[#000000] font-normal text-[20px] pr-[20px]">4.9/5</h1>
          </div>
          <div className="bg-white shadow flex  items-center justify-between">
            <div className="">
              <img className="min-w-[100%] " src={image4} alt="" />
            </div>
            <h1 className="text-[#000000] font-normal text-[20px] pr-[20px]">4.9/5</h1>
          </div>
          <div className="bg-white shadow flex  items-center justify-between">
            <div className="">
              <img className="min-w-[100%] " src={image5} alt="" />
            </div>
            <h1 className="text-[#000000] font-normal text-[20px] pr-[20px]">4.9/5</h1>
          </div>
          <div className="bg-white shadow flex  items-center justify-between">
            <div className="">
              <img className="min-w-[100%] " src={image6} alt="" />
            </div>
            <h1 className="text-[#000000] font-normal text-[20px] pr-[20px]">4.9/5</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoupleChoice;
