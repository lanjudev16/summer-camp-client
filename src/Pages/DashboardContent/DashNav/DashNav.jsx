import React from "react";
import { FaBell, FaSearch } from "react-icons/fa";

const DashNav = () => {
  return (
    <div className="navbar bg-[#2E3248] px-6">
      <div className="navbar-start">
        <form className="flex items-center gap-2 justify-center">
          <span className="lg:ml-0 ml-24">
            <FaSearch className="text-[#A2A6C1]"></FaSearch>
          </span>
          <input
            type="search"
            name=""
            className="lg:visible hidden bg-transparent outline-none text-[#A2A6C1] text-lg"
            placeholder="search"
            id=""
          />
        </form>
      </div>
      <div className="navbar-end">
        <div className="indicator">
          <span className="indicator-item badge badge-[#A2A6C1] bg-[#EA5455]">
            9+
          </span>
          <span><FaBell className="text-[#A2A6C1] text-2xl"></FaBell></span>
        </div>
        <div className="avatar online">
          <div className="w-24 h-[24]  rounded-full">
            <img src="https://i.ibb.co/pbw8pDN/P3-OLGJ1-copy-1-removebg-preview.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNav;
