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
import logo from '../../../../public/E-school.png'
const Footer = () => {
  return (
    <div className="pb-[20px]  pt-[46px] bg-[#282531] overflow-hidden">
      <div className=" grid lg:grid-cols-2 ">
        <div className=" text-center lg:text-left lg:pl-[71px]">
          <img src={logo} className="w-[200px] h-[60px]" alt="" />
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
            
          </div>
        </div>
      </div>
      <hr className="bg-[#443f54]  w-full mt-5" />
      <div className="pt-[60px] relative">
        <h2 className="text-[13px] font-light text-white text-center">
          2019-2021, FliqaIndia Pvt Ltd. -ALL RIGHT RESERVED POWERED <br /> BY
          FLIQAINDIA PVT. LTD. <br /> VERSION 5.1.5
        </h2>
        
      </div>
    </div>
  );
};

export default Footer;
