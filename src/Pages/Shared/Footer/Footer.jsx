import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pb-[20px]  pt-[46px] bg-[#131514] overflow-hidden">
      <div className=" grid lg:grid-cols-2 ">
        <div className=" text-center lg:text-left lg:pl-[71px]">
          <h2 className="custom-font-style text-white italic font-normal text-[26px]">
            Never miss a thing.
          </h2>
          <div className=" flex items-center  relative ">
            <input
              className=" text-[#939393] border-[#000000] border-[1px]   text-start focus:outline-none w-[100%] lg:w-[50%] h-[51px] rounded-3xl pl-6 italic text-[21px] my-[15px]"
              type="text"
              name=""
              placeholder="Email Address"
              id=""
            />
            <button className="bg-[#E0E0E0] text-[#4B4B4B] absolute right-0 lg:right-[50%] top-[15px] text-[20px] font-normal w-[120px] h-[49px] rounded-3xl  italic ">
              Search
            </button>
          </div>
          <div>
            <h3 className="text-white text-[24px] italic">Be in touch</h3>
            <div className="flex gap-5 text-white text-[20px] lg:justify-start justify-center lg:text-left">
              <FaFacebook></FaFacebook>
              <FaPhone></FaPhone>
              <FaLinkedin></FaLinkedin>
              <FaYoutube></FaYoutube>
              <FaTwitter></FaTwitter>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 justify-center lg:justify-start">
          <div className="font-normal text-[26px]">
            <h2 className="text-[26px] font-normal text-white">
              Never miss a thing.
            </h2>
            <div className="grid lg:grid-cols-2 ">
              <div>
                <ul className="text-[16px] font-normal text-white lg:text-left text-center">
                  <li>
                    <a className="inline-block" href="">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="inline-block" href="">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a className="inline-block" href="">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-[16px] font-normal text-white lg:text-left text-center">
                  <li>
                    <a className="inline-block" href="">
                      Tutorial
                    </a>
                  </li>
                  <li>
                    <a className="inline-block" href="">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a className="inline-block" href="">
                      Film
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative">
            <h2 className="text-[26px]  font-normal text-white lg:text-left text-center">
              Never miss a thing.
            </h2>
            <ul className="text-[16px] font-normal text-white lg:text-left text-center">
              <li>
                <a className="inline-block" href="">
                  Contact us
                </a>
              </li>
              <li>
                <a className="inline-block" href="">
                  Feedback
                </a>
              </li>
              <li>
                <a className="inline-block" href="">
                  Terms and conditions
                </a>
              </li>
              <li>
                <a className="inline-block" href="">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="inline-block" href="">
                  Data Deletion Protocol
                </a>
              </li>
            </ul>
            <div className="absolute  lg:top-[-460px] right-[-91px]  h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] rounded-[50%] bg-white top-circle"></div>
          </div>
        </div>
      </div>
      <div className="pt-[60px] relative">
        <h2 className="text-[13px] font-light text-white text-center">
          2019-2021, FliqaIndia Pvt Ltd. -ALL RIGHT RESERVED POWERED <br /> BY
          FLIQAINDIA PVT. LTD. <br /> VERSION 5.1.5
        </h2>
        <div className="absolute bottom-[20px] left-0  rounded-[50%] bg-white bottom-circle lg:top-[20px]  h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] "></div>
      </div>
    </div>
  );
};

export default Footer;
