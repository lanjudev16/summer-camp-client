import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#F0FFF0] py-[100px] ">
      <div className="w-[1140px] lg:mx-auto grid lg:grid-cols-2 items-center">
        <div>
          <h3 className="text-red-300">Are you ready to Learn?</h3>
          <h2 className="font-bold text-[48px]">Learn With fun <br /> on <span className="text-[#21B573]">any schedule</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Varius blandit facilisis quam netus.</p>
          <button className="hover:text-white py-3 px-10 bg-[#21B573] text-white rounded-full text-base font-medium uppercase mt-5">Get Start</button>
        </div>
        <div>
          <img src="Banner/banner.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
