import React from "react";
import background from "../../../../public/background.png";
import person1 from "../../../../public/person1.png";
import person2 from "../../../../public/person2.png";
import person3 from "../../../../public/person3.png";
import person4 from "../../../../public/person4.png";
import person5 from "../../../../public/person5.png";
import verified from "../../../../public/verified.png";
import Star from "../../../../public/Star3.png";
import "./FIndTrustedAssociate.css";
import { FaAlignRight, FaAngleRight, FaStar } from "react-icons/fa";
const FindTrustedAssociate = () => {
  return (
    <div
      className="py-10 px-[36px]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-4xl mb-2 text-[#4C696D] font-bold">
            Find Trusted Associate
          </h3>
          <h4 className="text-xl font-light text-[#0C0C0C]">
            Find the best Fliqa Associate for your special day.
          </h4>
        </div>
        <div className="flex items-center">
        <h3 className="font-normal text-2xl text-[#4C696D]">
          See more
        </h3>
        <span className="flex gap-0 p-0 m-0 font-normal text-2xl text-[#4C696D]">
            <FaAngleRight></FaAngleRight> <FaAngleRight></FaAngleRight>
          </span>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 gap-6 mt-[56px]">
        <div>
          <img className="w-[100%]" src={person1} alt="" />
          <div className="flex justify-between items-center bg-[#2C2C2C] custom-rounded">
            <div className="ml-[17px] text-white text-[20px] font-light py-1">
              <h5>Name:</h5>
              <h6>Location</h6>
            </div>
            <img className="w-[98px] h-[42px]" src={verified} alt="" />
          </div>
        </div>
        <div>
          <img className="w-[100%]" src={person2} alt="" />
          <div className="flex justify-between items-center bg-[#2C2C2C] custom-rounded">
            <div className="ml-[17px] text-white text-[20px] font-light py-1">
              <h5>Name:</h5>
              <h6>Location</h6>
            </div>
            <img className="w-[98px] h-[42px]" src={verified} alt="" />
          </div>
        </div>
        <div >
          <img className="w-[100%]" src={person3} alt="" />
          <div className="flex justify-between items-start  bg-[#2C2C2C] custom-rounded">
            <div className="ml-[17px] text-white text-[20px] font-light py-1">
              <h5>Name:</h5>
              <h6>Location</h6>
            </div>
            <div className="flex items-center pr-4">
                <h3 className="text-white">5</h3>
                <FaStar className="text-white"></FaStar>
            </div>
          </div>
        </div>
        <div className="bg-[#2C2C2C]">
          <img className="w-[100%]" src={person4} alt="" />
          <div className="flex justify-between items-center bg-[#2C2C2C] custom-rounded">
            <div className="ml-[17px] text-white text-[20px] font-light py-1">
              <h5>Name:</h5>
              <h6>Location</h6>
            </div>
            <img className="w-[98px] h-[42px]" src={verified} alt="" />
          </div>
        </div>
        <div >
          <img className="w-[100%]" src={person5} alt="" />
          <div className="flex justify-between items-start  bg-[#2C2C2C] custom-rounded">
            <div className="ml-[17px] text-white text-[20px] font-light py-1">
              <h5>Name:</h5>
              <h6>Location</h6>
            </div>
            <div className="flex items-center pr-4">
                <h3 className="text-white">5</h3>
                <FaStar className="text-white"></FaStar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTrustedAssociate;
