import React from "react";
import background from "../../../../public/background.png";
import FliqaIndiaWedding from "../../../../public/FliqaIndiaWedding.png";
import FliqaIndiaWedding3 from "../../../../public/FliqaIndiaWedding3.png";
import FliqaIndiawedding2 from "../../../../public/FliqaIndiawedding2.png";
import WeddingTrailer from "../../../../public/WeddingTrailer.png";
import WeddingTrailer2 from "../../../../public/WeddingTrailer2.png";
const OurBlog = () => {
  return (
    <div
      className="px-[36px] pb-10"
      style={{ background: `url(${background})` }}
    >
      <div className="py-10  ">
        <h3 className="text-4xl mb-2 text-[#4C696D] font-bold">Our Blogs</h3>
        <h4 className="text-xl font-light text-[#0C0C0C]">
          Check out our Latest Blog
        </h4>
      </div>
      <div className="grid lg:grid-cols-3">
        <div className="grid lg:grid-cols-2 col-span-2">
          <div className="relative">
            <span className="absolute top-0 left-[1%] right-[30%] rounded-[5px] bottom-[4%] bg-gray-950 opacity-70 flex items-center">
              <h1 className="text-[24px] font-normal text-white px-5">
                <span className="text-[20px] font-bold">
                  Featured on: Sep 15, 2021
                </span>{" "}
                <br /> Wedding <br />
                Photography <br /> at Goa
              </h1>
            </span>
            <img className="min-h-[100%]" src={FliqaIndiaWedding} alt="" />
          </div>
          <div className="relative">
            <span className="absolute top-0 left-[1%] right-[30%] rounded-[5px] bottom-[4%] bg-gray-950 opacity-70 flex items-center">
              <h1 className="text-[24px] font-normal text-white px-5">
                <span className="text-[20px] font-bold">
                  Featured on: Sep 15, 2021
                </span>{" "}
                <br /> Photography <br />
                Expectations <br /> vs. Reality
              </h1>
            </span>
            <img className="min-h-[100%]" src={WeddingTrailer} alt="" />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[#354547] text-[20px] mb-[11px]">
            <h1>Trending Now</h1>
            <h1>View all</h1>
          </div>
          <div className="grid lg:grid-cols-4">
            <div className="col-span-1">
              <img  src={FliqaIndiawedding2} alt="" />
            </div>
            <div className="col-span-3">
              <h2 className="text-[13px] text-[#354547]">
                <span className="text-[13px] font-bold text-[#354547]">
                  Photography: Expectations vs. Reality
                </span>{" "}
                Most of the time without any hands-on experience in photography,
                professional and advanced photography actually
              </h2>
            </div>
          </div>
          <hr className="bg-[#4C696D] h-[2px] my-[10px]" />
          <div className="grid lg:grid-cols-4">
            <div className="col-span-1">
              <img  src={WeddingTrailer2} alt="" />
            </div>
            <div className="col-span-3">
              <h2 className="text-[13px] text-[#354547]">
                <span className="text-[13px] font-bold text-[#354547]">
                  Creative Industries are on the verge of depletion due to
                  COVID-19
                </span>{" "}
                In a period where many industries remain highly unclear, others
                want to grasp how COVID-19 impact
              </h2>
            </div>
          </div>
          <hr className="bg-[#4C696D] h-[2px] my-[10px]" />
          <div className="grid lg:grid-cols-4">
            <div className="col-span-1">
              <img src={FliqaIndiaWedding3} alt="" />
            </div>
            <div className="col-span-3">
              <h2 className="text-[13px] text-[#354547]">
                <span className="text-[13px] font-bold text-[#354547]">
                  Wedding Photography at Goa
                </span>{" "}
                Wedding Photography in Goa If not, every couple when they make their list of Pre-wedding shoot 
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
