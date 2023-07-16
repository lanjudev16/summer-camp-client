import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import { Fade } from "react-awesome-reveal";
const CreativePlatForm = () => {
  const handleType = ( number) => {
    // access word count number
    console.log(number)
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  return (
    <div>
      <h2 className="lg:text-[64px] text-[30px] text-center font-bold mt-[22px]">
        India's Leading Creative            
        <span style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          <Typewriter
            words={['Platform', 'Media']}
            loop={5000}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </span>
      </h2>
      <p className="lg:text-[32px] text-xl lg:mt-0 mt-5 font-light text-[#4C696D] text-center mb-[32px]">
        Experience hassles free bookings.Trusted by 2500+ customer
      </p>
      <div className="text-center  mb-[53px] lg:w-[900px] mx-9 lg:mx-auto relative">
        <input
          className=" text-[#000000] border-[#000000] border-[1px]   text-center focus:outline-none w-[100%] h-[51px] rounded-3xl lg:text-[24px]"
          type="text"
          name=""
          placeholder="Search service,blog and many more"
          id=""
        />
        <button className="bg-[#000000] text-[#FFF] absolute right-0 top-0 lg:text-[24px] text-base font-normal lg:w-[227px] w-[120px] h-[51px] rounded-3xl">
          Search
        </button>
      </div>
      <div className="grid lg:grid-cols-4 mx-[36px]  my-[36px]">
        <Fade>
          <div className="flex lg:flex-row  items-center flex-col gap-5 my-3 ">
            <img src="review.png" alt="" />
            <div>
              <h3 className="font-bold text-xl">Verified Reviews</h3>
              <h4 className="font-light text-base text-black">
                For verified reviewers
              </h4>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="flex lg:flex-row  items-center flex-col gap-5 my-3 ">
            <img src="TopArticle.png" alt="" />
            <div>
              <h3 className="font-bold text-xl">Top Articles</h3>
              <h4 className="font-light text-base text-black">
                Helps you decide
              </h4>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="flex lg:flex-row  items-center flex-col gap-5 my-3 ">
          <img src="WriteShareWithContent.png" alt="" />
          <div className="text-center">
            <h3 className="font-bold text-xl">Write Share Win Contest</h3>
            <h4 className="font-light text-base text-black">
              Earn cash for reviews
            </h4>
          </div>
          </div>
        </Fade>
        <Fade>
          <div className="flex lg:flex-row  items-center flex-col gap-5 my-3 ">
          <img src="Mouth.png" alt="" />
          <div className="text-center">
            <h3 className="font-bold text-xl">MouthShut for Brands</h3>
            <h4 className="font-light text-base text-black">Request a Demo</h4>
          </div>
          </div>
        </Fade>
      </div>
    </div>
  );
  }
export default CreativePlatForm;
