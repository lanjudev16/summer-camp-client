import React from "react";
import backgroundImage from "../../../../public/PhotoGraphic.png";
import backgroundImage1 from "../../../../public/PhotoGraphicLeft.png";
const PhotoGraphy = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="rounded lg:mx-[36px] py-[113px]"
    >
      <div className="grid lg:grid-cols-2 items-center ">
        <div className="text-left lg:pl-[60px]">
          <h3 className="font-normal lg:text-[40px] text-white text-center text-[36px]">
            ULTIMATE <br /> COURSE IN <br />{" "}
            <span className="lg:text-[65px] font-semibold">PHOTOGRAPHY</span>
          </h3>
        </div>
        <div className="lg:w-full">
          <img className="lg:w-full lg:ml-[-50px] w-[250px] mx-auto mt-5" src={backgroundImage1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PhotoGraphy;
