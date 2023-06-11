import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./OurFeaturedServices.css";
import "./style.css";
import wedding1 from "../../../../public/wedding1.png";
import wedding2 from "../../../../public/wedding2.png";
import wedding3 from "../../../../public/wedding3.png";
import wedding4 from "../../../../public/wedding4.png";
// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";

const OurFeaturedServices = () => {
  
  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <>
      <div className="py-10 px-[36px] ">
        <h3 className="text-4xl mb-2 text-[#4C696D] font-bold">
          Our Featured Services{" "}
        </h3>
        <h4 className="text-xl font-light text-[#0C0C0C]">
          Discover the range of services provided by FliqaIndia
        </h4>
      </div>
      <div className="mx-9">
        <Swiper
          freeMode={true}
          pagination={{
            clickable: true,
            type: "fraction",
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper "
        >
          <div>
            <SwiperSlide>
              <div className="bg-shadow shadow">
                <img className=" " src={wedding1} alt="" />
                <h4 className="text-[#000000] font-semibold text-[20px] ">
                  Pre Wedding Photoshoot
                </h4>
                <hr className="bg-black px-5 min-h-1" />
                <h5 className="text-[##4C696D] font-semibold text-[16px] mb-2">
                  Starting at 25,000 (One Day)
                </h5>
                <button className="h-[28px] w-[202px] rounded-[20px] bg-[#4E99A4] text-white text-[16px] font-semibold">
                  Know more
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-shadow shadow">
                <img className="" src={wedding2} alt="" />
                <h4 className="text-[#000000] font-semibold text-[20px] ">
                  Pre Wedding Photoshoot
                </h4>
                <hr
                  className="bg-black px-5 min-h-1"
                />
                <h5 className="text-[##4C696D] font-semibold text-[16px] mb-2">
                  Starting at 25,000 (One Day)
                </h5>
                <button className="h-[28px] w-[202px] rounded-[20px] bg-[#4E99A4] text-white text-[16px] font-semibold">
                  Know more
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-shadow shadow">
                <img className="" src={wedding3} alt="" />
                <h4 className="text-[#000000] font-semibold text-[20px] ">
                  Pre Wedding Photoshoot
                </h4>
                <hr
                  className="bg-black px-5 min-h-1"
                />
                <h5 className="text-[##4C696D] font-semibold text-[16px] mb-2">
                  Starting at 25,000 (One Day)
                </h5>
                <button className="h-[28px] w-[202px] rounded-[20px] bg-[#4E99A4] text-white text-[16px] font-semibold">
                  Know more
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-shadow shadow">
                <img className="" src={wedding4} alt="" />
                <h4 className="text-[#000000] font-semibold text-[20px] ">
                  Pre Wedding Photoshoot
                </h4>
                <hr
                  className="bg-black px-5 min-h-1"
                />
                <h5 className="text-[##4C696D] font-semibold text-[16px] mb-2">
                  Starting at 25,000 (One Day)
                </h5>
                <button className="h-[28px] w-[202px] rounded-[20px] bg-[#4E99A4] text-white text-[16px] font-semibold">
                  Know more
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-shadow shadow">
                <img className="" src={wedding1} alt="" />
                <h4 className="text-[#000000] font-semibold text-[20px] ">
                  Pre Wedding Photoshoot
                </h4>
                <hr
                  className="bg-black px-5 min-h-1"
                />
                <h5 className="text-[##4C696D] font-semibold text-[16px] mb-2">
                  Starting at 25,000 (One Day)
                </h5>
                <button className="h-[28px] w-[202px] rounded-[20px] bg-[#4E99A4] text-white text-[16px] font-semibold">
                  Know more
                </button>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <p className="append-buttons">
          <button
            onClick={() => prepend2()}
            className="prepend-2-slides"
          ></button>
          <button onClick={() => prepend()} className="prepend-slide"></button>
          <button onClick={() => append()} className="append-slide"></button>
          <button
            onClick={() => append2()}
            className="append-2-slides"
          ></button>
        </p>
      </div>
    </>
  );
};

export default OurFeaturedServices;
